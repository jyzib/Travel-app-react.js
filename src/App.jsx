import Navbar from "./navbar"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import About from './about'
import Home from './home'
import Van from "./van"
import Vandetails from "./Vandetails"
function App() {

  // console.log('ji')
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/van' element={<Van />} />
          <Route path='/van/:id' element={<Vandetails />} />
          <Route path='*' element={'ERROR 404'} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
