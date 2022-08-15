import React from "react";

const Renderchar = (props) =>{
    return (
        <div onClick={props.clicked} style={{display:"inline-block",padding:"16px",
                    textAlign:"center",margin:"16px",border:"1px solid black",cursor:"pointer"}}>{props.chars}</div>
       
    );
}

export default Renderchar;