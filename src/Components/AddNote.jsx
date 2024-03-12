import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../slices/slice';
import '../index.css'

function SingleNote() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDiscription, setInputDiscription] = useState('');
    const dispatch = useDispatch();
    
    const addNotesHandler = (e) => {
        e.preventDefault();
        if(inputTitle !== "" || inputDiscription !== ""){
            dispatch(addNote({ title: inputTitle, discription: inputDiscription }));
        }else{
            alert("Please filled the title and Discription first")
        }
        setInputDiscription("");
        setInputTitle("")

        
    }
   

    return (
        <form onSubmit={addNotesHandler} style={{  maxWidth:"50vw" , border: "2px solid black ", borderRadius: "10px", padding: "20px " , margin :"auto",
          background :"#5DE856"  , boxShadow :"10px 10px "}}>
            
            <div style={{display :"flex",flexWrap:"wrap" , justifyContent :"center"}}>
            <input placeholder='Enter your Title....' type="text" value={inputTitle} style={{minWidth :"40vw", height :"10vh" , borderRadius :"20px" , border :"none" ,background: "#A2EA35", padding:"4px" ,fontSize:"1.2rem",  border :"1px solid black"}} onChange={(e) => { setInputTitle(e.target.value) }} /><br/>

            </div>

            <div style={{display :"flex",flexWrap:"wrap" , marginTop:"2vh" , justifyContent :"center"}}>

            <textarea style={{maxWidth :"40vw", minWidth:"40vw", height :"10vh" , borderRadius :"20px" , border :"1px solid black" ,background: "#A2EA35", padding:"14px" ,fontSize:"1.2rem"}} placeholder='Enter the discription of your notes.....' type="text" value={inputDiscription} onChange={(e) => { setInputDiscription(e.target.value) }}></textarea>
            </div>

            <button  type="submit" style={{ background :"black" , color:"white", margin :"auto",borderRadius :"10px", border :"none"  ,display:"block", justifyContent :"center", height :"6vh", width :"20vw", marginTop :"4vh" , justifyContent :"center" ,fontSize:"1.2rem" ,}}>Add</button>
        </form>

    )
}

export default SingleNote
