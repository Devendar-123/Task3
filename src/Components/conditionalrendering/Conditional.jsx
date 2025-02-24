import React from 'react'
import "./conditional.css"
import Conditional2 from './Conditional2';



function Conditional() {
    let loggedIn = true;
  return (
    <div className='main'>  
        <header>
            <ul className="unorder">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                {
                    loggedIn?(<button id='one'>Logout</button>):(<button id='one'>Login</button>)
                }
            </ul>
        </header>
        <Conditional2/>
    </div>
  )
}

export default Conditional