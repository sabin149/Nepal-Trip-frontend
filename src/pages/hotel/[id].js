import React, { useState } from 'react'
// import "../../styles/hotel.css"
// import uploadImage from "../../images/Upload_Image.png"

const Hotel = () => {
  const initialState = {
    fullname: '', username: '', email: '', phone: '', password: '', password_confirmation: '', gender: 'Male'
  }
  const [userData, setUserData] = useState(initialState)
  const { hotel_name, address, phone, hotel_email, pan_number, price, hotel_info, hotel_facilities, hotel_policies, hotel_images } = userData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  //  const handleSubmit = e => {
  //    e.preventDefault()

  //  }
  //hotel_name,address,phone,hotel_email,pan_number,price,hotel_info,hotel_facilities,hotel_policies, hotel_images
  return (
    <div className="container ">
      <form>

        <div className="d-flex justify-content-center mx-0 mb-1">
          <div className="col-6">
            <h2 className='text-danger'>Add hotel</h2>
            <div className='hotel_label'>
              <label className="form-label">Hotel Name</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="hotel_name" value={hotel_name} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">Hotel Email</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="hotel_email" value={hotel_email} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">Address</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="address" value={address} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="phone" value={phone} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">PAN.No</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="pan_number" value={pan_number} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">Price</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="price" value={price} onChange={handleChangeInput} />
            </div>

            <div className='hotel_label'>
              <label className="form-label">Hotel Info</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="hotel_info" value={hotel_info} onChange={handleChangeInput} />
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Hotel