import React from 'react'

const SearchHeader = () => {
  return (
    <>
            <div className="sub-header d-flex flex-row mb-3 justify-content-center align-item-center" style={{ height: "80px" }}>
        <div className=" flex-px-3 app" style={{ marginLeft: '20px' }}>
          <span style={{ fontSize: '14px' }}>Destination</span>
          <h5 style={{ fontSize: '14px' }} className="text-capitalize">Pokhara, Nepal</h5>
        </div>
        <div className=" flex-px-3 app" >
          <span style={{ fontSize: '14px' }}>Check In</span>
          <h5 style={{ fontSize: '14px' }}>2022/02/03</h5>
        </div>
        <div className="flex-px-3 app">
          <span style={{ fontSize: '14px' }}>Check Out</span>
          <h5 style={{ fontSize: '14px' }}>2022/02/03</h5>
        </div>
        <div className="flex-px-3 app">
          <span style={{ fontSize: '14px' }}>Rooms</span>
          <h5 style={{ fontSize: '14px' }}>1</h5>
        </div>
        <div className="flex-px-3 app">
          <span style={{ fontSize: '14px' }}>Adults</span>
          <h5 style={{ fontSize: '14px' }}>2</h5>
        </div>
        <div className="flex-px-3 app">
          <span style={{ fontSize: '14px' }}>Children</span>
          <h5 style={{ fontSize: '14px' }}>1</h5>
        </div>
      </div>
    </>
  )
}

export default SearchHeader