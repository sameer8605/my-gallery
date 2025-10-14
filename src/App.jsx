
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddPhotos from './component/add-photos'
import Gallery from './component/Gallery'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/add-photos' element = {<AddPhotos />}/>
         <Route path='/' element = {<Gallery />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
