import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './about'
import Home from './home'
import Van from "./van"
import Vandetails from "./Vandetails"
import Navbar from './navbar'
import Dashboard from './host/dashboard'
import Review from './host/review'
import Host from './host/host'
import Income from './host/income'
import Vans from './host/vans'
import Onevan from './host/onevan'
import Pricing from './pricing'
import Details from './details'
import OnevanImage from './host/onevanImage'
function App() {

  // console.log('ji')
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/van' element={<Van />} />
            <Route path='/van/:id' element={<Vandetails />} />
            <Route path='admin' element={<Host />} >
              <Route index element={< Dashboard />} />  
              <Route path='income' element={< Income />} />
              <Route path='vans' element={< Vans />} />
              <Route path='vans/:id' element={<Onevan/>} >
               <Route index element={<Details/>} />
               <Route path='pricing' element={<Pricing/>} />
               <Route path='image' element={<OnevanImage/>} />
              </Route>
              <Route path='review' element={<Review />} />
            </Route>
            <Route path='*' element={'ERROR 404'} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
