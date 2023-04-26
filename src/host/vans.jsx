import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import '../server'
const vans = () => {
  const [data,setdata]=useState([])
  const [loading,setloading]=useState(true)
  useEffect(()=>{
  const fetchapi = async()=>{

try {
  const resopne = await fetch("/api/vans")
  const  fetchedData = await resopne.json()
  // console.log(fetchedData.vans)
  setdata(fetchedData.vans)
} catch (error) {
  console.log(error)
}finally{
  setloading(false)
}


  }
  fetchapi()


  },[])

    const x =  data.filter((e)=>{
      if(e.host==123){
      return e
    }
 
    })
    // setdata(x)
    // console.log(x)
  

console.log(x)
   

  // const x = 3
  return (
    <div>

      <h1 className='listed-vans' >Your listed vans</h1>
      {loading&&'loading.... '}

     {x.map((e)=>{
      const {name,id,price,imageUrl,type} = e
        return <> 
   <Link to={`${id}`} >
        <div className="sell-card">
          <div className="sell-image">
           <img className='sell-img' src={imageUrl} alt="" />
          </div>
          <div className="sell-text">
          <h1 key={e.id} >{e.name}</h1>
          <p>${price}/day</p>
          <button className='btn' style={type == 'simple' ? {backgroundColor:'green'}:{backgroundColor:"red"}} >{type}</button>
          </div>
        </div>
  
        </Link>
        </>
     })}
    




     
    </div>
  )
}

export default vans
