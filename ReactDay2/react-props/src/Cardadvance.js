import React from "react";
import celebrityList from "./Celebrities";

// here we are creating a component which uses props as argument
function Cardadvance(props){
    return <div>
        <h1>{props.name}</h1>
        <img src = {props.source}/>
        <p>{props.email}</p>
    </div>

    // return <div>{ celebrityList.map((val)=>{return <p>{val.name}</p>}) }</div>;
}

export default Cardadvance;