import {  useState } from "react";
import "./usestate2.css"
const Clock =()=>{
    const [time,setTime] = useState(0)
        setInterval(()=>{
            setTime(new Date().toLocaleString())
        },1000);
    return (
        
        <div className="clock"><h1>Digital Clock</h1>{time}</div>
    );
}
export default Clock