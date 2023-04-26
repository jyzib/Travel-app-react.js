import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
const navbar = () => {
  return (
    <div>
   <div className="navbar">
   <NavLink to={'/'} > <h1 className="logo" >#VANLIFE</h1></NavLink> 
      <div className="rigth">
      <NavLink to={'/about'}
        style={({isActive}) => isActive? {color:"#e97630",fontWeight:"bold"}:null}
      
      > <p>About</p></NavLink> 
       <NavLink to={'/van'}  style={({isActive}) => isActive? {color:"#e97630",fontWeight:"bold"}:null} > <p>Vans</p></NavLink>
       <NavLink to={'/admin'}  style={({isActive}) => isActive? {color:"#e97630",fontWeight:"bold"}:null} > <p>Host</p></NavLink>

      </div>
   </div>
   <Outlet/>
   {/* <Footer/> */}

    </div>
  )
}

export default navbar
