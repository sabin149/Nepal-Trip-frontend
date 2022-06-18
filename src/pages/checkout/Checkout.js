import React, { useState } from 'react'
import "./checkout.css"
const Checkout = () => {
  const [userrequests, setUserRequests] = useState({
    requests: [],
    response: [],
  });

  const [ownRequest, setOwnRequest] = useState("");
  const [allRequests, setAllRequests] = useState([]);

  const [tcChecked, setTcChecked] = useState(false);


  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  }
  const [userData, setUserData] = useState(initialState);
  const { firstName, lastName, email, phone, address } = userData;

  const handleInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }


  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { requests } = userrequests;

    // console.log(`${value} is ${checked}`);
    // console.log("*******************")
    // Case 1 : The user checks the box
    if (checked) {
      setUserRequests({
        requests: [...requests, value],
        response: [...requests, value],
      });
    }


    // Case 2  : The user unchecks the box
    else {
      setUserRequests({
        requests: requests.filter((e) => e !== value),
        response: requests.filter((e) => e !== value),
      });
    }
  };

  const handlePayAtHotel = (e) => {
    e.preventDefault();
    setAllRequests([...userrequests.requests, ownRequest])
  }
  return (
    //     <div className="position-relative" style={{ minHeight: 'calc(90vh - 70px)' }}>
    //     <h2 className="position-absolute text-secondary"
    //         style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    //      Checkout page 
    //     </h2>

    // </div>
    <>

      <div className="container pd-top-md detailpage">
        <div className='row'>
          <div className="col-lg-8 detailform">
            <form className='ui form'>
              <div className='card-box'>
                <h3>User Details</h3>
                {/* First Name and Last Name form field */}
                <div className='fields'>
                  <div className='fname'>
                    <input className="form-control fnameform" type="text" placeholder="First Name" value={firstName} onChange={handleInput} />
                  </div>
                  <div className='lname'>
                    <input className="form-control fnameform" type="text" placeholder="Last Name" value={lastName} onChange={handleInput} />
                  </div>
                </div>
                {/* Email Address field */}
                <div className='fields'>
                  <div className='emailad'>
                    <input className="form-control fnameform" type="text" placeholder="Email address" aria-label="default input example" value={email} onChange={handleInput} />

                  </div>
                </div>
                {/* Contact number and Address field */}
                <div className='fields'>
                  {/* Contact number*/}
                  <div className='contactdet'>
                    <input className="form-control fnameform" type="text" placeholder="Mobile Number" value={phone} onChange={handleInput} />
                  </div>
                  {/* Address */}
                  <div className='addresloc'>
                    <input className="form-control fnameform" type="text" placeholder="Address" value={address} onChange={handleInput} />
                  </div>
                </div>
              </div>
              <div className='card-box'>
                <h5> Special Requests </h5>
                <p>Special requests are subject to availability and can't be guaranteed. Early check in and transfer may required an addition payment. Please contact the hotel to confirm.</p>
                <div className=''>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="requests" id="inlineCheckbox1" value="Early Check In" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Early Check-In</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="requests" onChange={handleChange} value="Late Check-In" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Late Check-In</label>
                      </div>

                    </div>
                  </div>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="requests" onChange={handleChange} value="Large Bed" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Large Bed</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="requests" onChange={handleChange} value="Twin Bed" />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">Twin Bed</label>
                      </div>

                    </div>
                  </div>
                  <div className='equal width fields'>
                    <div className=' field bb pb-1 mr-2'>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="requests" onChange={handleChange} value="Smoking Room" />
                        <label className="form-check-label" htmlFor="inlineCheckbox5">Smoking Room</label>
                      </div>

                    </div>
                    <div className='field bb pb-1 '>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="requests" onChange={handleChange} value="Non Smoking Room" />
                        <label className="form-check-label" htmlFor="inlineCheckbox6">Non Smoking Room</label>
                      </div>
                    </div>
                  </div>
                  <div className='fields request'>
                    <div className='requestform'>
                      <input className="form-control fnameform" type="text" name="requests" value={ownRequest} onChange={(e) => { setOwnRequest(e.target.value) }} placeholder="Add Your Own Request" aria-label="default input example">
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
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="termsaccept" value={tcChecked} onChange={(e)=>setTcChecked(true)}/ >
                  <label className="form-check-label f-15" htmlFor="termsaccept">By selecting to complete this booking I acknowledge that I have read and accepted the Terms and Condition</label>
                </div>
              </div>
              <div className='align-right'>
                <button className='btn btn-primary me-2' onClick={handlePayAtHotel}>Pay At Hotel <i className="fa-solid fa-angle-right text-light"></i></button>
                <button className='btn btn-primary'>Pay Now <i className="fa-solid fa-angle-right text-light"></i></button>

              </div>
            </form>
          </div>
          <div className="col-lg-4 detailroom">
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout