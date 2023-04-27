import React from 'react'
import { useOutletContext } from 'react-router-dom'
const details = () => {
    const {data} = useOutletContext()
  return (
    <div>
      <b>Name :</b>{data.name}
       <br></br>
       <b>Catagory:</b> {data.type}
       <br />
        <b>Description:</b>
      {data.description}
    </div>
  )
}

export default details
