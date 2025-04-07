import React from 'react'
import service from "../appwrite/config.js"
import { Link } from 'react-router-dom'

 export default function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/posts/${$id}`} >
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='w-full h-40 object-cover rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

