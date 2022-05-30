import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="position-relative" style={{ minHeight: 'calc(100vh - 70px)' }}>
            <h2 className="position-absolute text-secondary"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                404 | Not Found.
              
            </h2>
            <Link to="/" className="position-absolute"
                style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>Go to Homepage</Link>

        </div>
    )
}

export default NotFound
