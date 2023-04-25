import Navbar from "./navbar"
import { BrowserRouter , Routes, Route,Link } from 'react-router-dom'
import './App.css'
import About from './about'
import Home from './home'
function App() {
 
  return (
    <>

  <BrowserRouter>
  <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='*' element={'ERROR 404'} />
     </Routes>
  </BrowserRouter>
  
    </> 
  )
}

export default App
