
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddPhotos from './component/add-photos'
import Gallery from './component/Gallery'
import Navbar from './component/NavBar'
import Biodata from './component/Biodata'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/add-photos' element = {<AddPhotos />}/>
         <Route path='/' element = {<Gallery />}/>
         <Route path = '/biodata' element = {<Biodata />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
