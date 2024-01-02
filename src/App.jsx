import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'
import NoteView from './components/NoteView'

function App() {

  return (
    <>
     <Navbar/> 
      <Routes>
       <Route path="/" index element={<Home/>}/>
       <Route path="/addnote"  element={<AddNote/>}/>
       <Route path="/edit-note/:id"  element={<EditNote/>}/>
       <Route path="/view-note/:id"  element={<NoteView/>}/>
     </Routes>
    </>
  )
}

export default App
