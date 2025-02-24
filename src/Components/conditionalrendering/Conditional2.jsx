import React from 'react'
import "./conditional2.css"

function Conditional2() {
    let isAdmin = false;
    const handleSubmit =()=>{
        
        alert("Admin Logged In!")
    }

    // const showDefault = (event)=>{
    //     event.preventDefault();
    // }
  return (
    isAdmin?(alert("Admin logged in successfully")):(<form >
        <label ><b>Name: </b></label>
        <input type="text" placeholder='Username?' required/><br /><br />
        <label ><b>Email: </b></label>
        <input type="email" placeholder='Email?' required/><br /><br />
        <label ><b>Phone: </b></label>
        <input type="text" placeholder='Phone Number?' required/><br /><br />
        <button onClick={handleSubmit} >Submit</button>
        
    </form>)
  )
}

export default Conditional2
