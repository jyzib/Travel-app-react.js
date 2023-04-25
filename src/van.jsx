import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "./server"
import { data } from 'autoprefixer'
const Van = () => {
    const [van, setvan] = useState([])
    const [loading, setloading] = useState(true)
    // const [filter, setsetfilter] = useState([])
    const [data, setdata] = useState([])
    useEffect(() => {


      const fetchapi = async () => {

        try {
            const responce = await fetch('/api/vans')
            const data = await responce.json()
            setvan(data.vans)
            setdata(data.vans)
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
      
        
      }
      fetchapi()
      console.log(van)
  
    },[])

    const filterbtn = ['All',...new Set(data.map((e)=>{
        return e.type
   }))] 

const handelfilter=(e)=>{
   console.log(e)
    if(e=="All"){
        setvan(data)
    }else{
      const fill = data.filter((m)=>{
        if(e==m.type){
            return m
        }
      })
      setvan(fill)
    }
   

} 
if(loading){
    return "loading....."
}
   
 
  return (
    
    <> 
       
    <h1 className='explore' >Explore our van option</h1>
    <div className="btns">
    {filterbtn.map((e)=>{
           return <button onClick={()=>handelfilter(e)} key={e} className='togel-btn' >{e}</button>
    })}

</div>
    <div className='cards-box' >
       
     {van.map((e)=>{
        const {name,id, price,imageUrl,type} = e
        return ( <div  key={id} className="cards">
           <Link to={`/van/${id}`} >
            <div className="image-box"><img src={imageUrl} alt="" /></div>
              <h1 className='title' >{name}</h1>
              <p>${price}/day</p>
              <button className='btn' style={type == 'simple'? {backgroundColor:"#0e4b48"}: {backgroundColor:"#c15f42"} } >{type}</button>
              </Link>

        </div>
      

       
        )
     })}
    </div>
    </>
  )
}

export default Van
