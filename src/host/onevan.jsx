import React from 'react'
import { useParams ,NavLink,Outlet} from 'react-router-dom'
import { useState,useEffect } from 'react'
import '../server'

const onevan = () => {
  const prans = useParams().id

  const [data,setdata]=useState([])
  const [loading,setloading]=useState(false)
  useEffect(()=>{
  const fetchapi = async()=>{
  const resopne = await fetch(`/api/vans/${prans}`)
  const  fetchedData = await resopne.json()
  // console.log(fetchedData.vans)
  setdata(fetchedData.vans)
  setloading(true)
  }
  fetchapi()


  },[prans])
   console.log(data.id)
   
  return (
    <div>
  
     <div className="one-van">
     <NavLink to={'..'} 
   relative='path'
   >go back</NavLink>


     {loading? <>  <div className="one-image">
         
         <div className="one-img"> <img src={data.imageUrl} alt="" /></div>
        
         <div className="one-text">
           {data.type&& <button className='btn' style={data.type=='simple'?{backgroundColor:"green"}:{backgroundColor:"red"}} >{data.type}</button>}
          
           <h1 className='one-title' >{data.name}</h1>
         </div>
          
          
       </div>
       <div className="dep-body">
         <NavLink end to={'.'} style={({isActive})=>isActive?{color:"green"}:{color:null}} >Details</NavLink>
         <NavLink style={({isActive})=>isActive?{color:"green"}:{color:null}} to={'pricing'} >pricing</NavLink>
         <Outlet context={{data}} />
       </div>
     
     </>:    <div className="loading">
      <div className="loading-circle"></div>
    </div> }
      

     </div>

     
    </div>
  )
}

export default onevan
