//import React from "react";
import React from 'react';
import PropDemo from "./classProp";


class Statemanage extends React.Component
{   
    state={
        texts:"",
        list:[],
        showlist:false,
        bname:"Show Hidden Names",
        addname: false
    }

    statevalue = ()=>{
        var m =localStorage.getItem("list")
        if(m)
        {
            if(m.length === 0)
            {
                this.setState({
                    list:[{id:"",name:"",edit:null}]
                })
            }
            else{
            var x = JSON.parse(localStorage.getItem("list"))
            this.setState({
                list:x
            })
        }
        }
        else{
            localStorage.setItem('list','')
        }
    }
    displayText = (event) =>{
        const word = event.target.value;
        this.setState({
            texts: word
        })
    }

    deleteBlock=(index)=>{
        const letter = this.state.texts.split('')
        letter.splice(index,1)
        const letter1=letter.join('')
        this.setState({
            texts:letter1
        })

    }

    showList = ()=>{
        const status= this.state.showlist
        this.setState({
            showlist:!status
        })
        if(status === true)
        {
            this.setState({
                bname:"Show Hidden Names"
            })
        }
        else
        {
            this.setState({
                bname:"Hide"
            })
        }
    }

    showEdit=(id)=>{
       
        const key= this.state.list.findIndex(c=>{
            return c.id === id
        })
        const editShow = this.state.list[key]
        const editbtn = editShow.edit
        const newList = [...this.state.list]
        newList[key].edit = !editbtn
        console.log(newList)
         this.setState({
            list:newList
         })
    }
    
    showRemove=(id)=>{
        const key= this.state.list.findIndex(c=>{
            return c.id === id
        })
        const item = [...this.state.list]
        item.splice(key,1)
        console.log(item)
        alert("Successfully Removed!")
        this.setState({
            list:item
        })
        localStorage.setItem("list",JSON.stringify(item))
    }


    inputChanger= (event,id)=>{
        const newname = event.target.value
        const i= this.state.list.findIndex(c=>{
            return c.id === id
        })
        
        const newlist=[...this.state.list]
        newlist[i].name=newname
        
        this.setState({
            list:newlist,
        })
        //newlist[i].edit=false
        localStorage.setItem("list",JSON.stringify(newlist))
    }

    addName=()=>{
        const addbtn = this.setState.addname
        this.setState({
            addname:!addbtn
        })

    }

    listAdd = ()=>{
        const newName = document.getElementById('add').value
        console.log(newName)
        if(newName.length>=1)
        {
        const Oldlist=[...this.state.list]
        Oldlist.push({id:Math.random(),name:newName,edit:false})
        alert("Name Added!")
        this.setState({
            list:Oldlist,
            addname:false
        })
        document.getElementById('add').value=""
        localStorage.setItem("list",JSON.stringify(Oldlist))
    }
    else
    {
        alert("Name Field is Empty!")
    }
    }

    componentDidMount()
    {
        this.statevalue()
    }

    inputbox = (id)=>{
        const index = this.state.list.findIndex(x=>{
             return x.id === id
        })
        const oldlist=[...this.state.list]
       
        const value=oldlist[index].edit
        oldlist[index].edit=!value
        console.log(oldlist)
        this.setState({list:oldlist})
        alert("Saved Successfully")
        localStorage.setItem("list",JSON.stringify(oldlist))
    }

    render()
    {
        const contentBlock = this.state.texts.split('').map((ch,index)=>{
            return <PropDemo word={ch} key={index} clicked={()=> this.deleteBlock(index)} />
        })

        return(
            <div >
                {/* <button onClick={this.statevalue}>cl</button> */}
                <h1 style={{textAlign:"center",color:"Blue"}}>CURD Application using Class Component</h1>
                <h3>{this.state.texts}</h3>
                <input onChange={(event)=> this.displayText(event)} value={this.state.texts}></input>
                <h2>Length of the Word is: {this.state.texts.length}</h2>

                <div>
                    <PropDemo inputData={this.state.texts}/>
                    {contentBlock}
                </div>

                <button style={{cursor:"pointer"}} onClick={this.showList}>{this.state.bname}</button>

                <br/><br/><br/>
                
                {
                    this.state.showlist ? <div style={{background:"red",fontSize:"20px",padding:"30px"}}>
                        <button style={{cursor:"pointer"}} onClick={this.addName}>Add Name</button>
                        {this.state.addname ? <div><input id="add"></input> <button style={{cursor:"pointer"}} onClick={this.listAdd}>Add</button></div> :null }


                    {
                        this.state.list.map((name)=>{
                            return (
                            <h3>{name.name}
                            <div>
                                {!name.name ? null: <button style={{cursor:"pointer"}} onClick={()=>this.showEdit(name.id)}>Edit</button> }
                           &nbsp;&nbsp;&nbsp;
                           {!name.name ? null: <button style={{cursor:"pointer"}} onClick={()=>this.showRemove(name.id)}>Remove</button>}
                            </div>
                                 {
                                name.edit ? <div>
                                 <input onChange={(event) => this.inputChanger(event,name.id)} value={name.name}></input></div> : null
                                 } 
                                 {
                                    name.edit ? <button style={{cursor:"pointer"}} onClick={()=>this.inputbox(name.id)}>Save</button> : null
                                 }
                                 <hr></hr>
                                 </h3>
                            );
                        })
                    }



                </div> :
                <h4>Hided</h4>

                }
            </div>
        );
    }

}

export default Statemanage;
