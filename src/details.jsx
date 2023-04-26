import React from 'react'
import { useOutletContext } from 'react-router-dom'
const details = () => {
    const {data} = useOutletContext()
  return (
    <div>
      {data.description}
    </div>
  )
}

export default details
