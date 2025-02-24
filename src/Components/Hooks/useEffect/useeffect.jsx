import React, { useEffect, useState } from 'react'

function Example() {
    // useEffect(()=>{
    //     // first--> side-effect function
    //     return()=>{
    //         // second-->cleanup function
    //     }
    // })//comma seperated dep list
    const [count, setCount] = useState(0);
    const [total,setTotal] = useState(1);
    // variation 1--> runs on every render
    // useEffect(()=>{
    //     alert("I will run on each render")
    // })

    // variation 2--> runs on only first render

    useEffect(()=>{
        alert("I will run on only first render")
    },[])

    // variation 3--> 
    // useEffect(()=>{
    //     alert("I will run every time when count is updated!")
    // },[count])

    // variation 4--> multiple dependencies

    // useEffect(()=>{
    //     alert("I will run every time when count/total is updated")
    // },[count,total])

    // variation 5 --> add a clean up function

    // useEffect(()=>{
    //     alert("Count is updated")

    //     return()=>{
    //         alert("Count is unmounted from UI")
    //     }
    // },[count])
    function handleClick(){
        setCount(count+1);
    }

    let handleClickTotal = ()=>{
        setTotal(total+1);
    }
  return (

    <div>
      <button onClick={handleClick}>Click Me for count</button> <br/>
      Count is: {count} <br />
      <button onClick={handleClickTotal}>Click Me for total</button> <br/>
      Total is: {total}
    </div>

  )
}

export default Example
