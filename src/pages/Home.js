import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <h1>Nepal Trip</h1>

<Link to="/login" className='btn btn-success '>Login</Link>
    
    </div>
  )
}

export default Home