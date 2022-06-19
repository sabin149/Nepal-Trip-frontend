import React from 'react'

const EditBookingDetails = () => {
  return (
    <div>
            <div className='container'>
    <div className='row'>
      <div className='col-3'>
        
      </div>
      <div className='col-6 mt-5'>
        <h3> User Details</h3>
             <div className="hotel_label mt-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control hotel_input"
                      id="exampleInputEmail1"
                      name="hotel_name"
                    />
             </div>
             
             <div className="hotel_label">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control hotel_input"
                      id="exampleInputEmail1"
                      name="hotel_name"
                    />
             </div>

             <div className="hotel_label">
                    <label className="form-label">Email Address</label>
                    <input
                      type="text"
                      className="form-control hotel_input"
                      id="exampleInputEmail1"
                      name="hotel_name"
                    />
             </div>

             <div className="hotel_label">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control hotel_input"
                      id="exampleInputEmail1"
                      name="hotel_name"
                      
                    />
             </div>

             <div className="hotel_label">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control hotel_input"
                      id="exampleInputEmail1"
                      name="hotel_name"
                      
                    />
             </div>

             <div className='card-box mt-5'>
                <h5> Special Requests </h5>
                <p>Special requests are subject to availability and can't be guaranteed. Early check in and transfer may required an addition payment. Please contact the hotel to confirm.</p>
                <div className=''>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="requests" id="inlineCheckbox1" value="Early Check In"  />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Early Check-In</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="requests"  value="Late Check-In" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Late Check-In</label>
                      </div>

                    </div>
                  </div>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="requests"  value="Large Bed" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Large Bed</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="requests"  value="Twin Bed" />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">Twin Bed</label>
                      </div>

                    </div>
                  </div>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="requests"  value="Smoking Room" />
                        <label className="form-check-label" htmlFor="inlineCheckbox5">Smoking Room</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="requests"  value="Non Smoking Room" />
                        <label className="form-check-label" htmlFor="inlineCheckbox6">Non Smoking Room</label>
                      </div>
                    </div>
                  </div>
                  <div className='fields request'>
                    <div className='requestform'>
                      <input className="form-control fnameform" type="text" name="requests"  placeholder="Add Your Own Request" aria-label="default input example">
                      </input>
                    </div>
                  </div>
                </div>
              </div>

                  <div className='align-right'>
                <button className='btn btn-primary'>Save </button>

              </div>
      </div>
      <div className='col-3'>
          
      </div>
    </div>

</div>
    </div>
    
  )
}



export default EditBookingDetails