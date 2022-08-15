import React from "react";

class PropDemo extends React.Component
{
    render()
    {
        return(
            
                  <div onClick={this.props.clicked} style={{display:"inline-block",padding:"16px",
                    textAlign:"center",margin:"16px",
                    border:"1px solid red",cursor:"pointer",background:"#6ef086"}}>{this.props.word}</div>   
        );
    }
}

export default PropDemo;