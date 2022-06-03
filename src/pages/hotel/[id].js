import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
// import "../../styles/hotel.css"
import uploadImage from "../../images/No_image.png";
import { imageShow, videoShow } from "../../utils/mediaShow";
import { createHotel } from "../../redux/actions/hotelAction";
import "./hotel.css";

const Hotel = () => {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const initialState = {
    hotel_name: "",
    address: "",
    phone: "",
    hotel_email: "",
    pan_no: "",
    price: "",
    hotel_info: "",
    hotel_facilities: "",
    hotel_policies: "",
  };
  const [hotelData, setHotelData] = useState(initialState);
  const {
    hotel_name,
    address,
    phone,
    hotel_email,
    pan_no,
    price,
    hotel_info,
    hotel_facilities,
    hotel_policies,
  } = hotelData;

  const [hotel_images, setHotel_Images] = useState([]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];

    files.forEach((file) => {
      if (!file) return (err = "File does not exist.");

      if (file.size > 1024 * 1024 * 5) {
        return (err = "The image/video largest is 5mb.");
      }

      return newImages.push(file);
    });

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });
    setHotel_Images([...hotel_images, ...newImages]);
  };
  const deleteImages = (index) => {
    const newArr = [...hotel_images]
    newArr.splice(index, 1)
    setHotel_Images(newArr)
  }

   const handleSubmit = e => {
     e.preventDefault()
     if(hotel_images.length === 0)
        return dispatch({ 
            type: GLOBALTYPES.ALERT, payload: {error: "Please add hotel images."}
        })
        dispatch(createHotel({ hotel_name, address, phone, hotel_email, pan_no, price, hotel_info,hotel_facilities, hotel_policies, hotel_images,auth,token }))
        navigate("/")
   }
 
  return (
    <div class="container ">
      <form onSubmit={handleSubmit}>
        <h2 class="text-danger text-center mt-3">Add hotel</h2>
        <div class="row">
          <div class="d-flex justify-content-around mx-0 mb-1">
            <div class="col-2">
              
            </div>
            <div class="col-6 add_hotel ">

            <div class="show_images">
              {hotel_images.length > 0 ? (
                hotel_images.map((img, index) => (
                  <div key={index} id="file_img">
                    {img.url ? (
                      <>
                        {img.url.match(/video/i)
                          ? videoShow(img.url)
                          : imageShow(img.url)}
                      </>
                    ) : (
                      <>
                        {img.type.match(/video/i)
                          ? videoShow(URL.createObjectURL(img))
                          : imageShow(URL.createObjectURL(img))}
                      </>
                    )}
                    <span onClick={() => deleteImages(index)}>&times;</span>
                  </div>
                ))
              ) : (
                <img src={uploadImage} alt=".." style={{ width: "5rem" }} />
              )}
            </div>
            <div class="input_images">
              {
                <>
                  <div class="file_upload">
                    <div class="d-flex">
                      <h6 class='btn btn-warning text-light me-2'>Upload Images</h6>
                    </div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleChangeImages}
                    />
                  </div>
                </>
              }
            
            </div>

              <div class="hotel_label">
                <label class="form-label">Hotel Name</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_name"
                  value={hotel_name}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="hotel_label">
                <label class="form-label">Hotel Email</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_email"
                  value={hotel_email}
                  onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="address"
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Phone Number</label>
                <input
                  type="text"
                  class="form-control hotel_input "
                  id="exampleInputEmail1"
                  name="phone"
                  value={phone}
                  onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">PAN.No</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="pan_no"
                  value={pan_no}
                  onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Price</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="price"
                  value={price}
                  onChange={handleChangeInput}
                />
              </div>

              <div class="hotel_label">
                <label class="form-label">Hotel Info</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_info"
                  value={hotel_info}
                  onChange={handleChangeInput}
                />
              </div>
              <div class="hotel_label">
                <label class="form-label">Hotel Facilities</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_facilities"
                  value={hotel_facilities}
                  onChange={handleChangeInput}
                />
              </div>

              {/* <div class="hotel_facilities row align-items-start">
              <div class="col">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="hotel_facilities" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Airport Transfer</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">24hr Checkin</label>
                </div>
              </div> */}
              {/* <div class="col">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Lockers</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Early Checkin</label>
                </div>
              </div>
              <div class="col">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Laundry Service</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_facilities} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Free WiFi</label>
                </div>
              </div> */}
              {/* </div> */}
              <div class="hotel_policies">
                <label class="form-label">Hotel Policies</label>
                <input
                  type="text"
                  class="form-control hotel_input"
                  id="exampleInputEmail1"
                  name="hotel_policies"
                  value={hotel_policies}
                  onChange={handleChangeInput}
                />
                {/* <div class="col-6">
                <div class="form-check form-check-inline flex-fill">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="hotel_policies" value={hotel_policies}  />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Child Policy</label>
                </div>
                <div class="form-check form-check-inline flex-fill">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_policies} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Check in and Check out policies</label>
                </div>
                <div class="form-check form-check-inline flex-fill">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_policies} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">Payment Method Accepted</label>
                </div>
                <div class="form-check form-check-inline flex-fill">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={hotel_policies} onChange={handleChangeInput} />
                  <label class="form-check-label" htmlFor="inlineCheckbox1">More Policies</label>
                </div>
              </div> */}
              </div>
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-warning w-25 mb-4 mt-4"
                >
                  Save
                </button>
              </div>
            </div>

          <div class="d-flex align-items-center justify-content-center">

        
          <div class="col-6">
            
            
          </div>
  </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Hotel;
