import React from "react";
import { useState} from "react";
import Validation from "../Demo/validate";
import Renderchar from "./char";
//import Statemanage from "./classDemo";

const Propdemo = ()=>{
    // useEffect(()=>{
    //     setTimeout(()=>{x
    //         alert("Hello");
    //     },1000);
    // },[])

    const [show,hide] = useState({
        count: [
            {id:"fghjf",name:"Dev"},
            {id:"f244jf",name:"Karthi"},
            {id:"fgfyuf",name:"Rosan"}
        ],
        texts:''
    })

    // const deleteName = (index) =>{
    //     const deletelist = [...show.crush]
    //     deletelist.splice(index,1)
    //     hide({
    //         crush: deletelist
    //     })
    // }

    // const changeName = (event , id) =>{
    //     const crushIndex = show.crush.findIndex(c => {
    //         return c.id === id
    //     } )

    //     const crush = {...show.crush[crushIndex]}

    //     crush.name = event.target.value

    //     const crushnames = [...show.crush]
    //     crushnames[crushIndex] = crush
         
    //    hide ({
    //     crush : crushnames
    //    }) 

    // }

    const showLength = (event)=>{
        const textLength = event.target.value
         
        hide({
            texts:textLength
        })
    }

    const charList = show.texts.split('').map((ch,index)=>{
        return <Renderchar chars={ch} key={index} clicked={()=>deleteHandler(index)}/>
    })

    const deleteHandler = (index)=>{

        const duplicate=show.texts.split('')
        duplicate.splice(index,1)
        const newtext =duplicate.join('')
        hide({
            texts:newtext
        })

    }

        return(
            <div>
                {/* <div>
                        {
                            show.crush.map( (names,index) =>{
                                return (
                                    <div>
                                        <h3 style={{cursor:"pointer"}} onClick={() => deleteName(index)} key={names.id} >{names.name}</h3>
                                        <input onChange={(event)=> changeName(event,names.id)}></input>
                                    </div>
                                )
                            } )
                        }
                </div> */}
                <h2>Type Here to check Lenght !</h2>
                <input type="text" onChange={showLength} value={show.texts}></input>
                <p>{show.texts}</p>
                <Validation ilen={show.texts} />
                <Renderchar renderChar = {show.texts} />
                {charList}
                
            </div>
        );
}
export default Propdemo ;