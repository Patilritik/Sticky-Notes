import { createSlice ,nanoid} from "@reduxjs/toolkit";
const noteListitems = localStorage.getItem('notes') !== null ? JSON.parse(localStorage.getItem('notes')) : []

export const NoteSlice = createSlice({
    
    
    name: "note",
    initialState : {
        notes : noteListitems
       
    },
    reducers: {
        //add note to old notes
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                title: action.payload.title,
                discription: action.payload.discription,
                
            }

            state.notes.push(note)
            //adding old notes from local storage
            localStorage.setItem("notes", JSON.stringify(state.notes.map((item) => item)));
        
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload )

            // filter notes so that removed notes will remove from localstorage
            localStorage.setItem("notes", JSON.stringify(state.notes.map((item) => item)));
        },
    }
})
export const { addNote, removeNote } = NoteSlice.actions
export default NoteSlice.reducer