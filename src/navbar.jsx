import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
   <div className="navbar">
   <Link to={'/'} > <h1 className="logo" >#VAINLIFE</h1></Link> 
      <div className="rigth">
      <Link to={'/about'} > <p>About</p></Link> 
       <Link to={'/van'} > <p>Vans</p></Link>

      </div>
   </div>
    </div>
  )
}

export default navbar
