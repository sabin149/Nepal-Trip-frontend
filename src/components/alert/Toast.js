import React from 'react'

const Toast = ({ msg, handleShow, bgColor }) => {
    return (

        <div className={`toast show position-fixed text-light ${bgColor}`} role="alert" aria-live="assertive" aria-atomic="true" style={{
            top: "5px", right: "5px", minWidth:"200px",maxWidth:"200px", zIndex: 50
        }}>
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="me-auto text-light">{msg.title}</strong>
                <button type="button" className="btn-close text-light" onClick={handleShow} data-bs-dismiss="toast" aria-label="Close" style={{ outline: "none" }}></button>
            </div>
            <div className="toast-body">
                {msg.body}
            </div>
        </div>

    )
}

export default Toast
