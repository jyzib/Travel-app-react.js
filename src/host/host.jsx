import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const host = () => {
  return (<>
    <div className='host-body'>
     <NavLink  to={'.'}
     end 
      style={({isActive})=>isActive?{color:"red"}:null}
      className={'host'} >Dashboard</NavLink>
     <NavLink className={'host'} to={'income'}   style={({isActive})=>isActive?{color:"red"}:null}  >Income</NavLink>
     <NavLink className={'host'} to={'vans'}   style={({isActive})=>isActive?{color:"red"}:null}  >Vans</NavLink>
     <NavLink className={'host'} to={'review'}   style={({isActive})=>isActive?{color:"red"}:null}>review</NavLink>
    
    </div>
    <Outlet/>
    </>
  )
}

export default host
