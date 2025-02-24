
const Grandchild = (props)=>{
    return(
        <div className="grandchild">
           
            <div className="child">
                <p><b>Name</b> : {props.name}</p>
                <p><b>Age</b> : {props.age}</p>
                <p><b>Email</b> : {props.email}</p>
            </div>
            
        </div>
    );
}
export default Grandchild