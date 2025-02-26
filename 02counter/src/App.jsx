import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if(counter <20){
    //counter = counter + 1
    setcounter(counter + 1)
    }
    

  }

  const removeValue = () => {
    if(counter > 0){
    //counter = counter + 1
    setcounter(counter - 1)
    }
    

  }
  
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button 
     onClick={addValue}
     >Add value</button>
     <br />
     <button 
     onClick={removeValue}
     >remove value</button>
    </>
  )
}

export default App
