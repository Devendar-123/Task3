import React, { useState } from "react";
// const Color = ()=>{
//     const [color,setColor]= useState("yellow")
//     return(
//         <div>
//             <h1>Color is:{color}</h1>
//             <button onClick={()=>setColor("black")}>Click Me</button>
//         </div>
//     );
// }
// export default Color

// car

// const Car = ()=>{
//     const [brand]=useState("Ford");
//     const [model]=useState("Mustang");
//     const [year]=useState("1964");
//     const [color]=useState("red");
//     return(
//         <div>
//             <h1>My{brand}</h1>
//             <p>It is a {color}{model} from {year}</p>
//         </div>
//     );
// }
// export default Car

const Car =()=>{
    const [car,setCar]= useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"yellow"
    })

    const updateColor = ()=>{
        setCar(previousState =>{
            return{...previousState,color:"blue"}
        })
    }
    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
            <button onClick={updateColor}>Click Me</button>
        </div>
    );
}
export default Car