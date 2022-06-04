import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import No_image from "../../images/No_image.png"
import { imageShow, videoShow } from "../../utils/mediaShow"
import "./room.css"
import { createHotelRoom } from '../../redux/actions/roomAction'

const CreateRoom = ({ hotel }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userID')

  const hotel1 = hotel.hotels.filter(hotel => hotel.user === userID)

  const initialState = {
    room_type: '', room_price: '', room_options: '', room_facilities: ''
  }
  const [roomData, setRoomData] = useState(initialState)
  const { room_type, room_price, room_options, room_facilities } = roomData

  const [room_images, setRoom_Images] = useState([])

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

  const handleSubmit = e => {
    e.preventDefault()
    if (room_images.length === 0)
      return dispatch({
        type: GLOBALTYPES.ALERT, payload: { error: "Please add room images." }
      })

    const newRoom = {
      room_type, room_price, room_options, room_facilities, user: userID

    }
    dispatch(createHotelRoom({ hotel: hotel1, newRoom, room_images, token }))
    navigate("/")
  }

  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <h2 className='text-danger text-center mt-3'>Add hotel Room</h2>
        <div className="d-flex justify-content-center mx-0 mb-1">
          <div className="col-6 add_hotel" >
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
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="room_type" value={room_type} onChange={handleChangeInput} />
            </div>
            <div className='room_label'>
              <label className="form-label">Room Price</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="room_price" value={room_price} onChange={handleChangeInput} />
            </div>

            <div className='room_label'>
              <label className="form-label">Room Options</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="room_options" value={room_options} onChange={handleChangeInput} />
            </div>

            <div className='room_label'>
              <label className="form-label">Room Facilities</label>
              <input type="text" className="form-control hotel_input" id="exampleInputEmail1" name="room_facilities" value={room_facilities} onChange={handleChangeInput} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className='btn btn-warning w-25 mb-4 mt-4'>Save</button>
        </div>


      </form>
    </div>
  )
}

export default CreateRoom