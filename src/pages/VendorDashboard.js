import React from 'react'
import { Link } from 'react-router-dom'

const VendorDashboard = () => {
  return (
    <div className='container'>
      <h2>VendorDashBoard</h2>
      <Link to="/hotel" className='btn btn-warning me-2'>Add Hotel</Link>
      <Link to="/room" className='btn btn-warning'>Add Room</Link>

    </div>
  )
}

export default VendorDashboard