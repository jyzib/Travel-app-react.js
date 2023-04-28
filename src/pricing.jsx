import React from 'react'
import { useOutletContext } from 'react-router-dom'
const pricing = () => {
    const {data} = useOutletContext()
    console.log(data)
  return (
    <div>
     <h1>{data.price}</h1>
     {/* pricing section */}
    </div>
  )
}

export default pricing
