import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNote, removeNote } from '../slices/slice'

function AllNotes() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes)

  


  return (

    <>
      <ul style={{display:"flex" , flexWrap :"wrap",listStyle: "none", borderRadius: "10px", marginTop: "10px" , justifyContent :"space-evenly"}}>
        {notes.map((note) => (
          <li key={note.id} style={{ border: "2px solid black",color:"black", borderRadius: "10px", marginTop: "10px",  width :"fit-content", padding :"2vw" , background :"#EED624", boxShadow :"8px 8px ", marginTop :"2vh" }}>
            
            <button style={{position:"relative" ,float :"right" , marginTop :"-5vh" , marginRight :"-2vw ", borderRadius :"50%" , border :"1px solid black" ,  background :"red" , color:"white" , height :"2rem" , width:"2rem" , fontWeight :"900"}} onClick={()=> dispatch(removeNote(note.id))}> 
              X</button>
            <div style={{textAlign :"center",fontWeight :"900 "}}>
               <span  >
                Title : 
                </span>
                 {note.title}
            </div>
            <div >
            <span  style={{fontWeight :"900"}}>Discription : </span> {note.discription}
            </div>
            
          </li>
        ))}
      </ul>

    </>
  )
}

export default AllNotes
