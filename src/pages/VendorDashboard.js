import React from 'react'
import { Link } from 'react-router-dom'

const VendorDashboard = () => {
  return (
    <div className='container'>
      <h2>VendorDashBoard</h2>
      <Link to="/hotel" className='btn btn-warning '>Add hotel</Link>

    </div>
  )
}

export default VendorDashboard