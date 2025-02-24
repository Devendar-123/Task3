import React, { useState } from 'react'

const Usestate = () => {
    const [color,setColor] = useState("red")
    
    const changeColor = ()=>{
        setColor("Blue") 
    }
  return (
    <div>
        <h1>My favourite color is {color}!</h1>
        <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default Usestate
