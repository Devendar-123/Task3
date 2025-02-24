import React, { useState } from 'react'

function Conditional4() {
    const[theme,setTheme]=useState("light")
    function toggleTheme (){
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <div className={theme} id='myDiv'>
        <h1>Theme Changer</h1>
        <button onClick={toggleTheme}>Tap to change theme</button>
    </div>
  )
}

export default Conditional4
