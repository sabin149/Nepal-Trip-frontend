import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateBooking } from "../../redux/actions/bookingAction"
const EditBookingDetails = ({ booking,token }) => {
  const dispatch = useDispatch()
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  }
  const [userData, setUserData] = useState(initialState);
  const { firstName, lastName, email, phone, address } = userData;
  const [userrequests, setUserRequests] = useState({
    requests: [],
    response: [],
  });
  const [ownRequest, setOwnRequest] = useState("");
  const handleInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { requests } = userrequests;
    if (checked) {
      setUserRequests({
        requests: [...requests, value],
        response: [...requests, value],
      });
    }
    else {
      setUserRequests({
        requests: requests.filter((e) => e !== value),
        response: requests.filter((e) => e !== value),
      });
    }
  };
  const allRequest=booking.request
  const lastRequest=allRequest[allRequest.length-1]?allRequest[allRequest.length-1]:"Need a large room with wifi"
  useEffect(() => {
    const {name, email, phone, address } = booking
    setUserData({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      email,
      phone,
      address
    })
    setOwnRequest(lastRequest)
  }, [booking, lastRequest])
  const newBooking={
    id:booking._id,
    name: userData.firstName + " " + userData.lastName,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    request: ownRequest ? [...userrequests.requests, ownRequest] : userrequests.requests,
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBooking({booking:newBooking,token}))
    window.location.reload()
  }
  return (<>
    <div className='row'>
      <div className='col-lg-12'>
        <p className='h4'> User Details</p>
        <div className='card-box'>
        <div className="hotel_label mt-2">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control hotel_input"
            id="exampleInputEmail1"
            name="firstName" value={firstName} onChange={handleInput}
          />
        </div>
        <div className="hotel_label">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control hotel_input"
            id="exampleInputEmail1"
            name="lastName" value={lastName} onChange={handleInput}
          />
        </div>
        <div className="hotel_label">
          <label className="form-label">Email Address</label>
          <input
            type="text"
            className="form-control hotel_input"
            id="exampleInputEmail1"
            name="email" value={email} onChange={handleInput}
          />
        </div>
        <div className="hotel_label">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control hotel_input"
            id="exampleInputEmail1"
            name="phone" value={phone} onChange={handleInput}
          />
        </div>
        <div className="hotel_label">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control hotel_input"
            id="exampleInputEmail1"
            name="address" value={address} onChange={handleInput}
          />
        </div>
        </div>
        <div className='card-box mt-2'>
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
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="requests" value="Late Check-In" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">Late Check-In</label>
                </div>
              </div>
            </div>
            <div className='equal width fields'>
              <div className=' field bb pb-1 mr-2'>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="requests" value="Large Bed" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">Large Bed</label>
                </div>
              </div>
              <div className='field bb pb-1 '>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="requests" value="Twin Bed" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="inlineCheckbox4">Twin Bed</label>
                </div>
              </div>
            </div>
            <div className='equal width fields'>
              <div className=' field bb pb-1 mr-2'>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="requests" value="Smoking Room" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="inlineCheckbox5">Smoking Room</label>
                </div>
              </div>
              <div className='field bb pb-1 '>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="requests" value="Non Smoking Room" onChange={handleChange} />
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
        <div className='align-center'>
          <button className='btn btn-primary w-100' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  </>
  )
}
export default EditBookingDetails