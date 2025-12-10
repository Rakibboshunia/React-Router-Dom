import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const naavigate = useNavigate()

  return (
    <div>
      <h2>404 | Page not found</h2>
      <br />
      <button onClick={()=>naavigate('/')}>Go to Homepage</button>
    </div>
  )
}

export default NotFound
