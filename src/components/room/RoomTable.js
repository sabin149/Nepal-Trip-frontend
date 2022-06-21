import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RoomTable = ({ hotel }) => {
  const navigate = useNavigate()
  const [selectedRoom, setSelectedRoom] = useState()

  const searchInfo = {
    date: [{
      startDate: "06/18/2022",
      endDate: "06/18/2022"
    }],
    options: {
      adult: 1,
      children: 0,
      room: 1,
    },
    search:"Pokhara",
  }

  // console.log(hotel);


  return (
    <>
      <div className="row pricetable">
        <div className="col-lg-8 pricehotel">
          <table className="table table-bordered">
            <thead >
              <tr>
                <th scope="col"> <span className=""> Room Type</span> </th>
                <th scope="col">Options</th>
                <th scope="col">Price Per Night </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                hotel && hotel?.rooms?.map((room) =>
                  <tr key={room._id} >
                    <td className="" rowSpan="1">
                      <h3 className="color-dark-blue bold pointer"> {room.room_type}</h3>
                      <div className="image-holder bg-light-gray height160">
                        <img className="room-image" src={room?.room_images[0]?.url} alt="roomimage"></img>
                      </div>
                      <div>
                        <ul className="mg-top-sm ">
                          <li>
                            <i className="fa-solid fa-hot-tub-person"></i>

                            <span className="amen">Hot Tub</span></li>
                          <li>
                            <i className="fa-solid fa-wifi"></i>

                            <span className="amen">Free Wi-Fi</span></li>
                          <li>
                            <i className="fa-solid fa-smoking"></i>

                            <span className="amen">Smoking Area</span></li>
                          <li>
                            <i className="fa-solid fa-bowl-rice"></i>

                            <span className="amen">Free Breakfast</span></li>
                          <li>
                            <i className="fa-solid fa-car"></i>
                            <span className="amen">Transport</span></li>
                        </ul>
                      </div>
                    </td>
                    <td className="">
                      <h4 className="bold">FREE Breakfast</h4>
                      <h5 className="mg-top-0">Non-refundable</h5>
                      <div>
                        <ul className="checklist">
                          <li>
                            <i className="fa-solid fa-check"></i>
                            <span className="listoffer">Breakfast</span>
                          </li>
                        </ul>
                        <ul className="checklist">
                          <li>
                            <i className="fa-solid fa-check"></i>

                            <span className="listoffer">10% discount on food <br></br> and beverage</span>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="">
                      <div className="align-right">
                        <div></div>
                        <br></br>
                        <div> <span className="color-green bold">{room.room_price} NPR</span></div>
                      </div>
                    </td>
                    <td className="">
                      {
                        !selectedRoom ? <button className="ui fluid primary button width150 mt-2" onClick={() => {
                          setSelectedRoom(room)
                        }}>
                          Select Room
                        </button> :
                          <button className={`ui fluid button width150 mt-2 ${selectedRoom._id === room._id ? "success " : "primary"} }`} onClick={() => {
                            setSelectedRoom(null)
                          }}>
                            {selectedRoom._id === room._id ? "Selected Room" : "Select Room"}
                          </button>
                      }
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 yourselection">
          <div className="colored-box">
            <h4 className="selection">
              Your Selection
            </h4>
            <hr></hr>
            {!selectedRoom ? <div className="empty-selection red">
              <span>No Room Selected</span>
            </div> :
              <div>
                <p className="h5">{selectedRoom.room_type}</p>
                <h6> 1 room(s), 1 night(s):</h6>
                <h6 className="text-success">{selectedRoom.room_price} NPR</h6>
                <p >Non-refundable</p>
                <button className="ui fluid primary button " style={{
                  fontSize: '16px',
                  width: "160px",
                  height: "40px",
                  margin: "0 auto"
                }} onClick={() => {
                  navigate("/checkout", {
                    state: {
                      hotel,
                      room: selectedRoom,
                      searchInfo
                    }
                  })
                }}>
                  Reserve Now
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RoomTable