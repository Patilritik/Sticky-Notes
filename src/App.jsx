
import './App.css'
import SingleNote from './Components/AddNote'
import AllNotes from './Components/AllNotes'

function App() {

  return (
      <>
      <h1 style={{textAlign :"center",color :"black" , borderRadius :"20px" , }}>Sticky Notes</h1>
        <SingleNote/>
        <AllNotes/>
      </>

  )
}

export default App


//Created goes to Chai or react 