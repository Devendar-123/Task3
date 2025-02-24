import Grandchild from "./grandchild";


const Child = (props)=>{
    return(
        <div>
            {props.details.map((detail,id)=>(
                <Grandchild
                key={id}
                name={detail.name}
                age={detail.age}
                email={detail.email}
                />
            ))}
        
        </div>
    );
}
export default Child