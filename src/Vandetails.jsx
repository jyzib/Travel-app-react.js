import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './server'
import Footer from './footer'

const Vandetails = () => {
    const pramas = useParams()
    console.log(pramas.id) 
    const [data,setdata ] = useState(null)
    useEffect(()=>{
        const fitchdata = async()=>{
            const responce = await fetch(`/api/vans/${pramas.id}`)
            const onevan = await responce.json()
            setdata(onevan.vans)
         
        } 
        fitchdata()
    },[pramas.id])

  
    //  const filterdata = data.filter((e)=>{
    //     if(e.id==pramas.id){
    //    return e
          
    //     }
    //  })
  console.log(data)
  return (
    <div>
        {data ? 
        <div className="card-body">
            <div className="image-boxx"><img className='imagnes' src={data.imageUrl} alt="" /></div>
            <h1 className='title' >{data.name}</h1>
            <button  className='btn'  style={data.type == 'simple'? {backgroundColor:"#0e4b48"}: {backgroundColor:"#c15f42"} }  >{data.type}</button>
            <p>${data.price}/day</p>
            <p>{data.description}</p>

            <Footer/>
        </div>
       :'loading...'}
    
    </div>
  )
}

export default Vandetails
