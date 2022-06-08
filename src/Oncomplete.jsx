import React from "react";

const Oncomplete=(props)=>{
    return(<>    
    <li>{props.text}
    <div className="show">    
    <button onClick={()=>{props.onSelect(props.id)}}>delete</button>
    <button onClick={()=>{props.onUpdate(props.id)}}>update</button>
    {props.view}
    </div> 
    </li>
    </>)
}

export default Oncomplete;