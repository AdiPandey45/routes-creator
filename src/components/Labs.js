import { Navigate, useNavigate } from "react-router-dom";

const Labs=()=>{
    const navigate=useNavigate();

    const clickHandler=()=>{
       navigate("/Support")
    }
    const backHandler=()=>{
   navigate(-1);
    }
    return(
        <div>
<div>This is Labs</div>

<button onClick={clickHandler}>Move To Support Page</button>
<button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Labs;