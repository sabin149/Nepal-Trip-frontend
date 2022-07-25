import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import No_image from "../../images/No_image.png"
import { imageShow, videoShow } from "../../utils/mediaShow"
import "../room/room.css"
import { updateHotelRoom } from '../../redux/actions/roomAction'
import { Chip, Paper, TextField } from '@material-ui/core'
import { Autocomplete } from '@mui/material'

const roomOptions = [
  { options: "Breakfast" },
  { options: "Lunch" },
  { options: "Dinner" },
  { options: "Snack" },
  { options: "Dessert" },
  { options: "Drink" },
  { options: "Coffee" },
  { options: "Tea" },
  { options: "Juice" },
  { options: "Water" },
  { options: "Milk" },
  { options: "Cake" },
  { options: "Non-refundable" },
];
const EditRoomDetails = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const location = useLocation()

  const { room } = location.state


  const initialState = {
    room_type: '', room_price: ''
  }
  const [roomData, setRoomData] = useState(initialState)
  const { room_type, room_price, room_facilities } = roomData

  const [room_options, setRoom_Options] = useState([])
  const [room_images, setRoom_Images] = useState([])
  const [roomFacilities, setRoomFacilities] = useState({
    facilities: [],
    response: [],
  });

  const handleChangeInput = e => {
    const { name, value } = e.target
    setRoomData({ ...roomData, [name]: value })
  }

  const handleChangeImages = e => {
    const files = [...e.target.files]
    let err = ""
    let newImages = []

    files.forEach(file => {
      if (!file) return err = "File does not exist."

      if (file.size > 1024 * 1024 * 5) {
        return err = "The image/video largest is 5mb."
      }

      return newImages.push(file)
    })

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } })
    setRoom_Images([...room_images, ...newImages])
  }
  const deleteImages = (index) => {
    const newArr = [...room_images]
    newArr.splice(index, 1)
    setRoom_Images(newArr)
  }
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { facilities } = roomFacilities;
    if (checked) {
      setRoomFacilities({
        facilities: [...facilities, value],
        response: [...facilities, value],
      });
    }
    else {
      setRoomFacilities({
        facilities: facilities.filter((e) => e !== value),
        response: facilities.filter((e) => e !== value),
      });
    }
  };

  useEffect(() => {
    setRoomData(room)
    setRoom_Images(room.room_images)
    setRoom_Options(room.room_options)
  }, [room])

  const handleSubmit = e => {
    e.preventDefault()
    if (room_images.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT, payload: { error: "Please add room images." }
      })

    const roomData = {
      room_type, room_price, room_options, room_facilities:roomFacilities

    }
    dispatch(updateHotelRoom({ roomData, room_images, roomDetails: room, navigate, token }))
  }

  return (
    <>
      <Link to="/viewHotel" className='btn btn-primary float-start'>Back</Link>
      <div className="container my-3">
        <div className="add_hotel_details" style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
        }}>

          <Paper elevation={3}>
            <form onSubmit={handleSubmit} style={{
              padding: "20px",
            }} >
              <p className='text-danger text-center h2'>Update hotel Room</p>
              <hr />
              <div className="show_images">
                {
                  room_images.length > 0 ?
                    room_images.map((img, index) => (
                      <div key={index} id="file_img">
                        {
                          img.url
                            ? <>
                              {
                                img.url.match(/video/i)
                                  ? videoShow(img.url)
                                  : imageShow(img.url)
                              }
                            </>
                            : <>
                              {
                                img.type.match(/video/i)
                                  ? videoShow(URL.createObjectURL(img),)
                                  : imageShow(URL.createObjectURL(img))
                              }
                            </>
                        }
                        <span onClick={() => deleteImages(index)}>&times;</span>
                      </div>
                    )

                    ) :


                    <img src={No_image} alt=".." style={{ "width": "5rem" }} />


                }
              </div>
              <div className="input_images">
                {
                  <>
                    <div className="file_upload">
                      <div className="d-flex">
                        <h6 className='btn btn-warning text-light me-2'>Upload Images</h6>
                      </div>
                      <input type="file" name="file" id="file"
                        multiple accept="image/*,video/*" onChange={handleChangeImages} />
                    </div>
                  </>
                }
              </div>
              <div className='room_label'>
                <label className="form-label">Room Type</label>
                <input type="text" className="form-control " id="exampleInputEmail1" name="room_type" value={room_type} onChange={handleChangeInput} />
              </div>
              <div className='room_label'>
                <label className="form-label">Room Price</label>
                <input type="text" className="form-control " id="exampleInputEmail1" name="room_price" value={room_price} onChange={handleChangeInput} />
              </div>
              <div className='room_options'>
                <label className="form-label">Room Options</label>
                <Autocomplete
                      multiple
                      id="tags-filled"
                      options={roomOptions.map((option) => option.options)}
                      freeSolo
                      onChange={(event, newValue) => {
                           setRoom_Options(newValue)
                        }}
                        value={room_options}
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

              <div className="room_facilities">
                <label className="form-label">Room Facilities</label>
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
                <button type="submit" className='btn btn-warning w-75 mb-4 text-light mt-4'>Update</button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default EditRoomDetails