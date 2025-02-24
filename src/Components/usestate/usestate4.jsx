import React, { useState } from 'react'

const Usestate4 = () => {
    // const array = useState(0);
    // const counter = array[0]
    // const setCounter = array[1]

    const [counter,setCounter] = useState(0)  //array destructuring---above three steps in one step
    const [name,setName] = useState("")
    const increaseCounter=()=>{
        setCounter(counter+1)
    }
    const decreaseCounter=()=>{
        setCounter(counter-1)
    }
    const resetCounter=()=>{
        setCounter(0)
    }
  return (
    <div>
        <input type="text" onChange={e=>setName(e.target.value)} />
        <h1>{name} has clicked {counter} times</h1>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Usestate4


// const Usestate4 = ()=>{
//     const [details,setDetails] =useState({counter:0, name:""})
//     const increaseCounter = ()=>{
//         // setDetails({counter: details.counter +1})
//         setDetails((prev)=>({
//             ...prev,
//             counter:prev.counter + 1
//         }))
        
//     }
//     console.log(details)
//     const decreaseCounter = ()=>{
//         // setDetails({counter: details.counter -1})
//         setDetails((prev)=>({
//             ...prev,
//             counter:prev.counter - 1
//         }))
//     }
//     const resetCounter = ()=>{
//         // setDetails({counter: 0})
//         setDetails((prev)=>({
//             ...prev,
//             counter:0
//         }))
//     }

//     const setName = ()=>{
//         setDetails((prev)=>({
//             ...prev,
//             name:""
//         }))
//     }
        
//     return(
//         <div>
//             <input type="text" onChange={e=>setName(e.target.value)} />
//             <h1>{details.name} has clicked {details.counter} times</h1>
//             <button onClick={increaseCounter}>Increase</button>
//             <button onClick={decreaseCounter}>Decrease</button>
//             <button onClick={resetCounter}>Reset</button>
//         </div>
//     );
// }
// export default Usestate4