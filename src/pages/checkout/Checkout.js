import React from 'react'
import "./checkout.css"
const Checkout = () => {
  return (
//     <div className="position-relative" style={{ minHeight: 'calc(90vh - 70px)' }}>
//     <h2 className="position-absolute text-secondary"
//         style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//      Checkout page 
//     </h2>
  
// </div>
<div className="container pd-top-md detailpage">
<div className='row'>
<div className="col-lg-8 detailform">
  <form className='ui form'>
    <div className='card-box'> 
    <h3>User Details</h3>\
    {/* First Name and Last Name form field */}
    <div className='fields'>
      <div className='fname'>
      <input class="form-control fnameform" type="text" placeholder="First Name"></input>
      </div>
      <div className='lname'>
      <input class="form-control fnameform" type="text" placeholder="Last Name"></input>
      </div>
    </div>
    {/* Email Address field */}
    <div className='fields'>
      <div className='emailad'>
      <input class="form-control fnameform" type="text" placeholder="Email address" aria-label="default input example">
</input>
      </div>
    </div>
    {/* Contact number and Address field */}
    <div className='fields'> 
      {/* Contact number*/}
      <div className='contactdet'>
      <input class="form-control fnameform" type="text" placeholder="Mobile Number"></input>
      </div>
      {/* Address */}
      <div className='addresloc'>
      <input class="form-control fnameform" type="text" placeholder="Address"></input>
      </div>
    </div>
    </div>
    <div className='card-box'>
      <h5> Special Requests </h5>
      <p>Special requests are subject to availability and can't be guaranteed. Early check in and transfer may required an addition payment. Please contact the hotel to confirm.</p>
        <div className=''>
              <div className='equal width fields'>
                <div className=' field bb pb-1 mr-2'>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Early Check-In</label>
</div>

                </div>
                <div className='field bb pb-1 '>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Late Check-In</label>
</div>

                </div>             
              </div>
              <div className='equal width fields'>
                <div className=' field bb pb-1 mr-2'>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Large Bed</label>
</div>

                </div>
                <div className='field bb pb-1 '>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Twin Bed</label>
</div>

                </div>             
              </div>
              <div className='equal width fields'>
                <div className=' field bb pb-1 mr-2'>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Smoking Room</label>
</div>

                </div>
                <div className='field bb pb-1 '>
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
  <label class="form-check-label" for="inlineCheckbox1">Non Smoking Room</label>
</div>

                </div>             
              </div>
              <div className='fields request'>
              <div className='requestform'>
      <input class="form-control fnameform" type="text" placeholder="Add Your Own Request" aria-label="default input example">
</input>
      </div>
              </div>
        </div>
    </div>
    <div className='field bb pb-1'>
        <div className='note-description'>   
<i>Note: Final price is subject to the latest exchange rate and may slightly vary.</i>         
        </div>
    </div>
    <div className='field bb p-1 check__select card-box'>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="termsaccept" value="option1"></input>
      <label class="form-check-label f-15" for="termsaccept">By selecting to complete this booking I acknowledge that I have read and accepted the Terms and Condition</label>
    </div>
    </div>
    <div className='align-right'>
    <button className='btn btn-primary mr-2'>Pay At Hotel <i class="fa-solid fa-angle-right"></i></button>
    <button className='btn btn-primary'>Pay Now <i class="fa-solid fa-angle-right"></i></button>

    </div>
  </form>
</div>
<div className="col-lg-4 detailroom">
  Hello
</div>
</div>
</div>
  )
}

export default Checkout