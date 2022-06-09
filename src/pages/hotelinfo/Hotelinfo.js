import React, { useState } from "react";
import "./hotelinfo.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
const Hotelinfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, searchInfo } = location.state;
  const { date, options } = searchInfo
  const [selectedRoom, setSelectedRoom] = useState()
  return (
    <div className="main_content">
      <div className="search_result">
        <div className="search_result nav">
          <div className="search_result navContainer">
            <div className="flex py-2">
              <div className="px-3">
                <p>
                  <span>Destination</span>
                </p>
                <h5 className="text-capitalize"> {hotel.hotel_name} </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Check In</span>
                </p>
                <h5>{moment(date.startDate).format("DD MMMM YYYY")} </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Check Out</span>
                </p>
                <h5>{moment(date.endDate).format("DD MMMM YYYY")}</h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Room(s)</span>
                </p>
                <h5> {options.room} </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Adult(s)</span>
                </p>
                <h5> {options.adult} </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Children(s)</span>
                </p>
                <h5> {options.children} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-nav d-flex">
        <div className="Item">
          <Link to="">
            <span>Overview </span>
          </Link>
        </div>
        <div className="Item">
          <Link to="">
            <span>Room Info & price</span>
          </Link>
        </div>
        <div className="Item">
          <Link to="">
            <span> Hotel Amenities</span>
          </Link>
        </div>
        <div className="Item">
          <Link to="">
            <span>Hotel Policies</span>
          </Link>
        </div>
      </div>
      <span> </span>
      <div className="container pd-top-md">
        <div>
          <h2 className="text-capitalize">{hotel.hotel_name}</h2>
          <p className="locationhotel text-capitalize">
            {hotel.address === "ktm" ? "Kathmandu, Nepal" : hotel.address + ",Nepal"}
            <Link to="" className="block-in-mobile">
              <i className="fa-solid fa-location-dot"></i>
              <span> view in map </span>
            </Link>
          </p>
          <div className="carousel">
            <div className="row">
              {/* Carousel Row */}
              <div className="col-lg-8 slider">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
              
                    {
                      hotel.hotel_images.map((image, index) => {
                        return (
                          <div key={index} className="carousel-item active">
                            <img src={image.url} className="d-block" alt="roomimage" style={{ height: "480px", width: "770px" }}></img>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 abouthotel">
                <div className="bg-light-gray pd-all-sm mh-100 box-shadow">
                  <div>
                    <h4 className="color-dark-blue bold">
                      About {hotel.hotel_name}
                    </h4>
                    <div className="caption">
                    {hotel.hotel_info}
                    </div>
                    <span className="blue pointer">
                      <span> Read More </span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                    <hr></hr>
                  </div>
                  <h4 className="color-dark-blue bold">
                    <span>Amenities & Facilities</span>
                  </h4>
                  <div className="ameneties-list">
                    <i className="fa-solid fa-hot-tub-person"></i>
                    <i className="fa-solid fa-wifi"></i>
                    <i className="fa-solid fa-smoking"></i>
                    <i className="fa-solid fa-bowl-rice"></i>
                    <i className="fa-solid fa-car"></i>
                    <i className="fa-solid fa-user-shield"></i>
                    <i className="fa-solid fa-swimmer"></i>
                  </div>
                  <hr></hr>
                  <div className="hotelmap">
                    <h4 className="color-dark-blue bold">
                      <span>Location</span>
                    </h4>
                    <Link to="">
                      <img className="maphotel" src="https://maps.google.com/maps/api/staticmap?markers=color:red|28,84&maptype=roadmap&zoom=12&size=500x160&key=AIzaSyDrMdzB3i4v3U62r4Xww5blaRIjg9dji14" alt="map" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Room and Info */}
          <h3 className="bold">
            <span>
              Room Info & price
            </span>
          </h3>
          {/* Price Table of Room */}
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
                {/* Deluxe Room */}
                <tbody>
                  {
                    hotel.rooms.map((room) =>
                      <tr key={room._id} >
                        <td className="" rowSpan="1">
                          <h3 className="color-dark-blue bold pointer"> {room.room_type}</h3>
                          <div className="image-holder bg-light-gray height160">
                            <img className="room-image" src={room.room_images[0].url} alt="roomimage"></img>
                          </div>
                          <div>
                            <ul className="mg-top-sm ">
                              <li><i className="fa-solid fa-hot-tub-person"></i> <span className="amen">Hot Tub</span></li>
                              <li><i className="fa-solid fa-wifi"></i><span className="amen">Free Wi-Fi</span></li>
                              <li><i className="fa-solid fa-smoking"></i><span className="amen">Smoking Area</span></li>
                              <li><i className="fa-solid fa-bowl-rice"></i><span className="amen">Free Breakfast</span></li>
                              <li><i className="fa-solid fa-car"></i><span className="amen">Transport</span></li>
                            </ul>
                          </div>
                        </td>
                        <td className="">
                          <h4 className="bold">FREE Breakfast</h4>
                          <h5 className="mg-top-0">Non-refundable</h5>
                          <div>
                            <ul className="checklist">
                              <li>
                                <i className="fa-solid fa-check"></i><span className="listoffer">Breakfast</span>
                              </li>
                            </ul>
                            <ul className="checklist">
                              <li>
                                <i className="fa-solid fa-check"></i><span className="listoffer">10% discount on food <br></br> and beverage</span>
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
                              <button className="ui fluid success button width150 mt-2" onClick={() => {
                                setSelectedRoom(null)
                              }}>
                                Room Selected
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
                    <button  to="/"className="ui fluid primary button " style={{
                      fontSize: '16px',
                      width:"160px",
                      height:"40px",
                      margin:"0 auto"
                    }} onClick={()=>{
                      navigate("/checkout")
                    }}>
                      Reserve Now
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
          {/* "Room Selected" 
                Deluxe Room
                1 room(s), 1 night(s):1698 NPR
                Non-refundable*/ }
          <div className="my-4">
          </div>
          <div className="segment">
            <h3 className="bold">
              Hotel Amenities
            </h3>
            <hr></hr>
            <div className="row row-cols-4">
              <div className="col"><li><i className="fa-solid fa-hot-tub-person"></i> <span className="amen">24hrs Hot Shower</span></li></div>
              <div className="col"><li><i className="fa-solid fa-wifi"></i><span className="amen">24hrs Free Wi-Fi</span></li></div>
              <div className="col"><li><i className="fa-solid fa-smoking"></i><span className="amen">Smoking Area Available</span></li></div>
              <div className="col"><li><i className="fa-solid fa-car"></i><span className="amen">Transportation Facility</span></li></div>
              <div className="col"><li><i className="fa-solid fa-money-bill-simple"></i><span className="amen">ATM/cash machine on site</span></li></div>
              <div className="col"><li><i className="fa-solid fa-broom"></i><span className="amen">Daily housekeeping</span></li></div>
              <div className="col"><li><i className="fa-solid fa-shirt"></i><span className="amen">Laundry service</span></li></div>
              <div className="col"><li><i className="fa-solid fa-bowl-rice"></i><span className="amen">Continental breakfast</span></li></div>
              <div className="col"><li><i className="fa-solid fa-utensils"></i><span className="amen">Restaurant</span></li></div>
              <div className="col"><li><i className="fa-solid fa-elevator"></i><span className="amen">Elevator</span></li></div>
              <div className="col"><li><i className="fa-solid fa-mug-hot"></i><span className="amen">Coffee shop</span></li></div>
              <div className="col"><li><i className="fa-solid fa-wheelchair"></i><span className="amen">Facilities for disabled guests</span></li></div>
            </div>
          </div>
          <div className="segment">
            <h3 className="bold">
              Hotel Policies
            </h3>
            <hr></hr>
            <div className="allpolicy">
              <h3 className="policy">Check in and Check out Policy</h3> <br></br>
              Check in time: 12::0<br></br>
              Check out time: 12::0
              <br></br>
              Goverment issued photo ID(for ex: valid passport, valid driving license) required for Check-in.
              <h3 className="policy">Payment Method Accepted</h3> <br></br>
              E-sewa<br></br>
              Khalti
              <br></br>
              <h3 className="policy">Child Policy</h3> <br></br>
              Child age: 4 - 6 years<br></br>
              Infant age: 0 - 3 years
              <br></br>
              <h3 className="policy">More Policies</h3> <br></br>
              Pan Card accepted<br></br>
              Hotel fit for children
              <br></br>
              <h3 className="policy">You need to know</h3> <br></br>
              <ul className="bulleted">
                <li>
                  We do not support modifications to hotel bookings on website or App. You’ll have to cancel (cancellation charges may apply as mention in above cancelation policy) your existing booking and make a new one.
                </li>
                <li>
                  The hotel might not refund for late check-in and early check-out.
                </li>
                <li>
                  Stay extensions will required a new reservation.
                </li>
                <li>
                  Individual aged 18 and above are required to present a valid Photo ID ( passport, drivers license, government-issued photo ID etc) at the time of check-in.
                </li>
                <li>
                  Along with the Government issued ID proof, you will also have to carry the itinerary on your phone or Tab or a printout will do.
                </li>
              </ul>
            </div>

          </div>
          <div className="segment">
            <h3 className="bold">
              <span>Map</span>
            </h3>
          </div>
          <div className="segment">
          <h3 className="bold">
            <span>Review & Rating </span>
            <hr/>
          </h3>
          <div>
                <div class="content">
                  <p>Rating (select a star amount):</p>
                </div>
                <div class="wrapper">
                  <input name="ratingRadio" type="radio" id="st1" value="1" />
                  <label for="st1"></label>
                  <input name="ratingRadio" type="radio" id="st2" value="2" />
                  <label for="st2"></label>
                  <input name="ratingRadio" type="radio" id="st3" value="3" />
                  <label for="st3"></label>
                  <input name="ratingRadio" type="radio" id="st4" value="4" />
                  <label for="st4"></label>
                  <input name="ratingRadio" type="radio" id="st5" value="5" />
                  <label for="st5"></label>
                </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hotelinfo;