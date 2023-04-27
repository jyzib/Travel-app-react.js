import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./server"
import { data } from 'autoprefixer'
import { useSearchParams } from 'react-router-dom'
import { dataapi } from './api' 

const Van = () => {
  const [van, setvan] = useState([])
  const [searchprams, setsearchprams] = useSearchParams()
  const typefilter = searchprams.get('type')
  console.log(typefilter)
  useEffect(() => {
    const loadsvsn = async()=>{
      const data = await dataapi()
      console.log(data)
      setvan(data)
    }
   loadsvsn()

  }, [])

  const filtervn = typefilter ? van.filter((e) => {
    if (typefilter === e.type) {
      return e
    }
  }) : van

  console.log(filtervn)
  return (

    <>

      <h1 className='explore' >Explore our van option</h1>
      <div className="btns">
        {typefilter ? <button onClick={()=>setsearchprams({})} className='togel-btn ' >all</button> : null  }
     
          <button  onClick={()=>setsearchprams({type:'simple'})}  className={`togel-btn ${typefilter === "simple" ? `bt-color`:null}`} >simple</button> 
          <button onClick={()=>setsearchprams({type:'rugged'})}  className={`togel-btn ${typefilter === "rugged" ? `bt-color`:null}`} >rugged</button>
        <button  onClick={()=>setsearchprams({type:'luxury'})} className={`togel-btn ${typefilter=='luxury'? 'bt-color':null}`} >Luxury</button>
      </div>
      <div className='cards-box' >

        {filtervn.map((e) => {
          const { name, id, price, imageUrl, type } = e
          return (<div key={id} className="cards">
            <Link to={`${id}`} state={{search :searchprams.toString() ,type:typefilter}} >
              <div className="image-box"><img src={imageUrl} alt="" /></div>
              <h1 className='title' >{name}</h1>
              <p>${price}/day</p>
              <button className='btn' style={type == 'simple' ? { backgroundColor: "#0e4b48" } : { backgroundColor: "#c15f42" }} >{type}</button>
            </Link>
          </div>
 


          )
        })}
      </div>
    </>
  )
}

export default Van
