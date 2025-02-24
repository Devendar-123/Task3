import React, { useEffect, useState } from 'react'
import "./Fetchdata.css"
const userDetais = "https://jsonplaceholder.typicode.com/posts"
function Fetchdata() {
    
        const [user, setUser] = useState([])

        const userHandler = async()=>{
            const response = await fetch(userDetais)
            const newData = await response.json()
            setUser(newData)

        }
        userHandler()
        
        useEffect(()=>{
            console.log(userHandler);
            
        },[])
        console.log(user);
        
    
  return (
    <div>
        <table>
            <caption><h1>Fetching data:</h1></caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
            {user.map((item)=>{
           return(
            <tr>
                <td>{ item.title}</td>
                <td>{ item.body}</td>
                
            </tr>
           )
        })}
            </tbody>
        </table>
       
    </div>
  )
}

export default Fetchdata
