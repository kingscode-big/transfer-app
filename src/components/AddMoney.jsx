 
import { useState } from 'react'

export default function AddMoney() {
  const [action,setAction]=useState(0)

  const handleInput = ()=>{
    
    
   setAction(action + 1)
   
  }

  const handleDecrement =()=>{
    setAction(action -1)
  }
  return (
    <div>
    <h1>{action}</h1>

    <button onClick={handleInput}>increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
