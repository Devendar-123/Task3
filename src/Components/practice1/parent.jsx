import Child from "./child";
const Parent = ()=>{
    const details = [
        {name:"Devendar",age:20,id:1,email:"devendar@gmail.com"},
        {name:"Polireddy",age:16,id:2,email:"polireddy@gmail.com"},
        {name:"Katari",age:23,id:3,email:"katari@gmail.com"},
        {name:"Pradeep",age:20,id:4,email:"pradeep@gmail.com"},
        {name:"Ajay",age:20,id:5,email:"ajay@gmail.com"},
    ]
    return(
        <div>
             <h1 className="h1">Practice with id</h1>
            <Child details ={details}/>
        </div>
    );
}
export default Parent