import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
import { Databases } from "appwrite";
import { Storage } from "appwrite";
import { Query } from "appwrite";

export class Service {

    Client = new Client()
    databases;
    bucket;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );


        }catch(error){
            console.log("Appwrite service ::createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        }catch(error){
            console.log("Appwrite service ::updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        }catch(error){
            console.log("Appwrite service ::deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        }catch(error){
            console.log("Appwrite service ::getPost :: error", error);
        }
    }
    async getPosts(queries = [Query.equal('status', 'Active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                
            );
        }catch(error){
            console.log("Appwrite service ::getPosts :: error", error);
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        }catch (error) {
            console.log("Appwrite service ::uploadFile :: error", error);
            return false;
        }

    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        }catch (error) {
            console.log("Appwrite service ::deleteFile :: error", error);
            return false;
        }
    }

     getFilePreview(fileId) {
        try {
            return  this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        }catch (error) {
            console.log("Appwrite service ::getFile :: error", error);
        }
    }


     
}

const service = new Service();

export default service;