import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import uploadImage from "../../images/No_image.png";
import { imageShow, videoShow } from "../../utils/mediaShow";
import { createHotel } from "../../redux/actions/hotelAction";
import "./hotel.css";
import { Chip, Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";


const hotelPolicies=[
{
  policies:"Check in time: 14::0",
},
{
  policies:"Check out time: 12::0",
},
{
  policies:"Visa Card",
},
{
  policies:"Master Card",
},
{
  policies:"E-sewa",
},
{policies:"Cash on arrival"},
{policies:"Union Pay"},
{policies:"Fone pay"},
{policies:"Khalti"},
{policies:"There will also be 5.00 USD Nepal Trip cancellation fee."},
{policies:"The hotel might not refund for late check-in and early check-out."},
{policies:"Stay extensions will required a new reservation."},
{policies:"Individual aged 18 and above are required to present a valid Photo ID ( passport, driver’s license, government-issued photo ID etc) at the time of check-in."},
{policies:"Note all hotel reserve the rights to admission."},
{policies:"All international travelers must present a valid passport at the time of check in at the hotel."},
{policies:"Any increase in the price due to taxes will be borne by you and payable at the hotel."},
{policies:"Unless specified otherwise, rates are quoted in US dollars."},
{policies:"Availability of accommodation in the same property for extra guests is not guaranteed."},
{policies:"Special requests are subject to availability and cannot be guaranteed. "},
]

const Hotel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const initialState = {
    hotel_name: "",
    rating: "",
    address: "",
    phone: "",
    hotel_email: "",
    pan_no: "",
    price: "",
    hotel_info: "",
  };
  const [hotelData, setHotelData] = useState(initialState);
  const {
    hotel_name,
    rating,
    address,
    phone,
    hotel_email,
    pan_no,
    price,
    hotel_info,
  } = hotelData;

  const [hotel_policies, setHotelPolicies] = useState([]);

  const [hotel_images, setHotel_Images] = useState([]);
  const [hotelFacilities, setHotelFacilities] = useState({
    facilities: [],
    response: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { facilities } = hotelFacilities;
    if (checked) {
      setHotelFacilities({
        facilities: [...facilities, value],
        response: [...facilities, value],
      });
    }
    else {
      setHotelFacilities({
        facilities: facilities.filter((e) => e !== value),
        response: facilities.filter((e) => e !== value),
      });
    }
  };

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
    const newArr = [...hotel_images];
    newArr.splice(index, 1);
    setHotel_Images(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hotel_images.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "Please add hotel images." },
      });
    dispatch(
      createHotel({
        hotel_name,
        rating,
        address,
        phone,
        hotel_email,
        pan_no,
        price,
        hotel_info,
        hotel_facilities: hotelFacilities.facilities,
        hotel_policies,
        hotel_images,
        navigate,
        token,
      })
    );
  };



  return (
    <div className="container my-3">
      <div className="add_hotel_details" style={{
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
      }}
      >
        <Paper elevation={3}>
          <form onSubmit={handleSubmit} style={{
            padding: "20px",
          }}>
            <p className="text-danger text-center h2" >Add Hotel</p>
            <hr />
            <div>
              <div className="show_images">
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
              <div className="input_images">
                {
                  <>
                    <div className="file_upload">
                      <div className="d-flex">
                        <h6 className="btn btn-warning text-light me-2">
                          Upload Images
                        </h6>
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
              <div className="hotel_label">
                <label className="form-label">Hotel Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="hotel_name"
                  value={hotel_name}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Hotel Rating</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="rating"
                  value={rating}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Hotel Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="hotel_email"
                  value={hotel_email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="address"
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control "
                  id="exampleInputEmail1"
                  name="phone"
                  value={phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">PAN.No</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="pan_no"
                  value={pan_no}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="price"
                  value={price}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_label">
                <label className="form-label">Hotel Info</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="hotel_info"
                  value={hotel_info}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="hotel_policies">
                <label className="form-label">Hotel Policies</label>
                <Autocomplete
                      multiple
                      id="tags-filled"
                      options={hotelPolicies.map((policy) => policy.policies)}
                      freeSolo
                      onChange={(event, newValue) => {
                        setHotelPolicies(newValue)
                        }}
                        value={hotel_policies}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip variant="outlined" label={option} {...getTagProps({ index })}
                          />
                        ))
                      }

                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          size='small'
                        />
                      )}
                    />
              </div>
              <div className="hotel_facilities">
                <label className="form-label">Hotel Facilities</label>
                <div className="row"> <Paper elevation={3}>
                  <div className="col-md-6 float-lg-start p-2">
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="laundary"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Laundary Service
                      </label>
                    </div>

                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="freewifi"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Free Wifi Service
                      </label>
                    </div>

                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="restaurant"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Restaurant
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="tours"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Tours
                      </label>
                    </div>

                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="capservice"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Cab Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="parking"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Parking
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="bar"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Bar
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="pool"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Pool
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="gym"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Gym
                      </label>
                    </div>

                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="airporttransfer"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Airport Transfer
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="breakfast"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Breakfast
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="lunch"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Lunch
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="dinner"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Dinner
                      </label>
                    </div>


                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="childbed"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Child Bed
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="24hrroomservice"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        24 Hour Room Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="pets"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Pets Allowed
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="airconditioning"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Air Conditioning
                      </label>
                    </div>

                  </div>
                  <div className="col-md-6 float-lg-end p-2">
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="bank"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Bank
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="atm"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        ATM
                      </label>
                    </div>

                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="ticketservice"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Ticket Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="medical"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Medical Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="coffee"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Coffee Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="security"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Security Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="taxiservice"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Taxi Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="luggage"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Luggage Storage
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="elevator"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Elevator
                      </label>
                    </div>
                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="wheelchair"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Wheelchair Access
                      </label>
                    </div>


                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="smoking"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Smoking Area
                      </label>
                    </div>



                    <div className="form-check form-check-inline flex-fill">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="facilities"
                        value="housekeeping"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1">
                        Housekeeping
                      </label>
                    </div>


                  </div></Paper>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning w-25 mt-3">
                  Save
                </button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
};
export default Hotel;
