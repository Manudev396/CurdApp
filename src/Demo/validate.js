import React from "react";
const Validation = (props) =>{
    const letter = props.ilen
    const len = letter.length
   return(
    <div>
       {
        len > 5 ?
        <p>Too Long!</p> : <p>Too short!</p>
       }
    </div>
   );
}

export default Validation;