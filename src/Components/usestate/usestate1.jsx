import React, { useState } from 'react'
import "./usestate1.css"
const Usestate1 = () => {

    const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <p id="para">You have clicked {count} times</p>
        <button id="btn" onClick={()=>{setCount(count+1)}}>Click +</button>
        <button id="btn" onClick={()=>{setCount(count-1)}}>Click -</button>
        <button id="btn" onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Usestate1