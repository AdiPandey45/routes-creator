import { useNavigate } from "react-router-dom";

const About=()=>{

    const Navigate=useNavigate();

    const clickHandler=()=>{
        Navigate("/Labs")
    }
    return(<div>
<div>This is About me</div>
<button onClick={clickHandler}>
    Move To Labs Page
</button>
    </div>
        
    )
}

export default About;