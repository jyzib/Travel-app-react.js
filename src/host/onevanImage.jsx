import React from 'react'
import { useOutletContext } from 'react-router-dom'
const onevanImage = () => {
    const {data} = useOutletContext() 
    console.log(data.name)
  return (
    <div>
      <img width={'100px'} src={data.imageUrl} alt="" />
    </div>
  )
}

export default onevanImage
