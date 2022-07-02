import React, { useState } from "react";
import "../../pages/hotelinfo/hotelinfo.css"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "../Carousel";
import RoomTable from "./RoomTable";

const ViewHotelDetails = ({ hotelDetails }) => {

    const navigate = useNavigate()
    const { hotel } = useSelector(state => state)

    const [readMore, setReadMore] = useState(false)
    const userID = localStorage.getItem('userID')
    const role = localStorage.getItem('role')

    const oneHotel = role === "vendor" ? hotel.hotels.filter(hotel => hotel.user._id === userID)[0] : role === "admin" ? hotelDetails : null

    return (
        <>
            <div className="main_content">
                <div className="second-nav d-flex">
                    <div className="Item">
                        <a href="#overview">
                            <span>Overview </span>
                        </a>
                    </div>
                    <div className="Item">
                        <a href="#roominfo">
                            <span>Room Info & price</span>
                        </a>
                    </div>
                    <div className="Item">
                        <a href="#hotelamenities">
                            <span> Hotel Amenities</span>
                        </a>
                    </div>
                    <div className="Item">
                        <a href="#hotelpolicies">
                            <span>Hotel Policies</span>
                        </a>
                    </div>
                </div>
                <span> </span>
                <div className="container pd-top-md">
                    {
                        oneHotel &&

                        <div>

                           {role==="vendor" && <span> <h2 className="text-capitalize">{oneHotel.hotel_name}</h2>
                                <button className="btn btn-primary btn-sm float-end" onClick={() => {
                                    navigate(`/editHotelDetails/${oneHotel._id}`, { state: { hotelData: oneHotel } })
                                }}>Edit Hotel</button></span>}

                            <p className="locationhotel text-capitalize">
                                {oneHotel.hotel_address}
                                <Link to="" className="block-in-mobile">
                                    <i className="fa-solid fa-location-dot"></i>

                                    <span> view in map </span>
                                </Link>
                            </p>
                            <div className="row">
                                {/* Carousel Row */}
                                <div className="col-lg-8">
                                    <Carousel images={oneHotel.hotel_images} />
                                </div>

                                <div className="col abouthotel">
                                    <div className="bg-light-gray pd-all-sm mh-100 box-shadow">
                                        <div>
                                            <h4 className="color-dark-blue bold">
                                                About {oneHotel.hotel_name}
                                            </h4>
                                            <div className="caption">
                                                <span>
                                                    {
                                                        oneHotel.hotel_info.length < 200
                                                            ? oneHotel.hotel_info
                                                            : readMore ? oneHotel.hotel_info + ' ' : oneHotel.hotel_info.slice(0, 200) + '.....'
                                                    }
                                                </span>
                                            </div>
                                            <span className="blue pointer">
                                                <span className="readMore" onClick={() => setReadMore(!readMore)}>
                                                    {readMore ? 'Read Less' : <span>
                                                        Read More <i className="fa-solid fa-angle-right"></i>
                                                    </span>}
                                                </span>

                                            </span>

                                            <hr></hr>
                                        </div>
                                        <h4 className="color-dark-blue bold">
                                            <span>Amenities & Facilities</span>
                                        </h4>
                                        <div className="ameneties-list">
                    {
                      oneHotel?.hotel_facilities?.map((facility, index) => {
                        return <span key={index}>
                          {(facility === "freewifi") && (
                            <i className=" fa-solid fa-wifi" />
                          )}
                          {facility === "tours" && (
                            <i className=" fa-solid fa-camera" />
                          )}
                          {facility === "bar" && (
                            <i className=" fa-solid fa-cocktail" />
                          )}
                          {facility === "restaurant" && (
                            <i className=" fa-solid fa-utensils" />
                          )}
                          {facility === "pool" && (
                            <i className=" fa-solid fa-swimmer" />
                          )}
                          {facility === "gym" && (
                            <i className=" fa-solid fa-dumbbell" />
                          )}
                          {facility === "parking" && (
                            <i className=" fa-solid fa-car-park" />
                          )}
                          {facility === "airporttransfer" && (
                            <i className=" fa-solid fa-plane-departure" />
                          )}
                          {facility === "breakfast" && (
                            <i className="fa-solid fa-burger" />
                          )}
                          {facility === "lunch" && (
                            <i className=" fa-solid fa-plate-wheat" />
                          )}
                          {facility === "dinner" && (
                            <i className="fa-solid fa-utensils" />
                          )}
                          {facility === "capservice" && (
                            <i className=" fa-solid fa-headset" />
                          )}
                          {facility === "24hrroomservice" && (
                            <i className=" fa-solid fa-clock" />
                          )}
                          {facility === "childbed" && (
                            <i className=" fa-solid fa-child" />
                          )}
                          {facility === "laundary" && (
                            <i className=" fa-solid fa-laundry" />
                          )}
                          {facility === "ticketservice" && (
                            <i className=" fa-solid fa-ticket-alt" />
                          )}
                          {facility === "medical" && (
                            <i className=" fa-solid fa-hospital" />
                          )}
                          {facility === "coffee" && (
                            <i className=" fa-solid fa-coffee" />
                          )}
                          {facility === "security" && (
                            <i className=" fa-solid fa-shield-alt" />
                          )}
                          {facility === "taxiservice" && (
                            <i className=" fa-solid fa-taxi" />
                          )}
                          {facility === "luggage" && (
                            <i className=" fa-solid fa-suitcase" />
                          )}
                          {facility === "wheelchair" && (
                            <i className=" fa-solid fa-wheelchair" />
                          )}
                          {facility === "airconditioning" && (
                            <i className=" fa-solid fa-snowflake" />
                          )}
                          {facility === "smoking" && (
                            <i className=" fa-solid fa-smoking" />
                          )}
                          {facility === "pets" && (
                            <i className=" fa-solid fa-dog" />
                          )}                            
                          {facility === "atm" && (
                            <i className=" fa-solid fa-atm" />
                          )}
                          {facility === "bank" && (
                            <i className=" fa-solid fa-bank" />
                          )}
                          {facility === "housekeeping" && (
                            <i className=" fa-solid fa-bed" />
                          )}
                          {facility === "elevator" && (
                            <i className=" fa-solid fa-elevator" />
                          )}
                        </span>

                      })
                    }

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
                            {/* Room and Info */}
                            <h3 className="bold" id="roominfo">
                                <span>
                                    Room Info & price
                                </span>
                            </h3>
                            {/* Price Table of Room */}
                            <RoomTable hotel={oneHotel} role={role} />

                            <div className="my-4">
                            </div>
                            <div className="segment" id="hotelamenities">
                                <h3 className="bold">
                                    Hotel Amenities
                                </h3>
                                <hr></hr>
                                <div className="row row-cols-4">
              {
                oneHotel?.hotel_facilities?.map((facility, index) => {
                  return <div className="col" key={index}>
                    <li>
                      {(facility === "freewifi") && (
                        <>
                          <i className=" fa-solid fa-wifi" />
                          <span className="amen">Free Wifi</span>
                        </>
                      )}
                      {facility === "tours" && (
                        <>
                          <i className=" fa-solid fa-camera" />
                          <span className="amen">Tour</span>
                        </>
                      )}

                      {facility === "bar" && (
                        <>
                          <i className=" fa-solid fa-cocktail" />
                          <span className="amen">Bar</span>
                        </>
                      )}
                      {facility === "restaurant" && (
                        <>
                          <i className=" fa-solid fa-utensils" />
                          <span className="amen">Restaurant</span>
                        </>
                      )}
                      {facility === "pool" && (
                        <>
                          <i className=" fa-solid fa-swimmer" />
                          <span className="amen">Pool</span>
                        </>
                      )}
                      {facility === "gym" && (
                        <>
                          <i className=" fa-solid fa-dumbbell" />
                          <span className="amen">Gym</span>
                        </>
                      )}
                      {facility === "parking" && (
                        <>
                          <i className=" fa-solid fa-car-park" />
                          <span className="amen">Parking</span>
                        </>
                      )}
                      {facility === "airporttransfer" && (
                        <>
                          <i className=" fa-solid fa-plane-departure" />
                          <span className="amen">Airport Transfer</span>
                        </>
                      )}
                      {facility === "breakfast" && (
                        <>
                          <i className="fa-solid fa-burger" />
                          <span className="amen">Breakfast</span>
                        </>
                      )}
                      {facility === "lunch" && (
                        <>
                          <i className=" fa-solid fa-plate-wheat" />
                          <span className="amen">Lunch</span>
                        </>
                      )}
                      {facility === "dinner" && (
                        <>
                          <i className="fa-solid fa-utensils" />
                          <span className="amen">Dinner</span>
                        </>
                      )}
                      {facility === "capservice" && (
                        <>
                          <i className=" fa-solid fa-headset" />
                          <span className="amen">Cap Service</span>
                        </>
                      )}
                      {facility === "24hrroomservice" && (
                        <>
                          <i className=" fa-solid fa-clock" />
                          <span className="amen">24hr Room Service</span>
                        </>
                      )}
                      {facility === "childbed" && (
                        <>
                          <i className=" fa-solid fa-child" />
                          <span className="amen">Child Bed</span>
                        </>
                      )}
                      {facility === "laundary" && (
                        <>
                          <i className=" fa-solid fa-laundry" />
                          <span className="amen">Laundary</span>
                        </>
                      )}
                      {facility === "medical" && (
                        <>
                          <i className=" fa-solid fa-medkit" />
                          <span className="amen">Medical Services</span>
                        </>
                      )}

                      {facility === "ticketservice" && (
                        <>
                          <i className=" fa-solid fa-ticket-alt" />
                          <span className="amen">Ticket Service</span>
                        </>
                      )}
                      {facility === "coffee" && (
                        <>
                          <i className=" fa-solid fa-coffee" />
                          <span className="amen">Coffee</span>
                        </>
                      )}
                      {facility === "parking" && (
                        <>
                          <i className=" fa-solid fa-car-park" />
                          <span className="amen">Parking</span>
                        </>
                      )}
                      {facility === "security" && (
                        <>
                          <i className=" fa-solid fa-shield-alt" />
                          <span className="amen">Security</span>
                        </>
                      )}
                      {facility === "elevator" && (
                        <>
                          <i className=" fa-solid fa-building" />
                          <span className="amen">Elevator</span>
                        </>
                      )}
                      {facility === "wheelchair" && (
                        <>
                          <i className=" fa-solid fa-wheelchair" />
                          <span className="amen">Wheelchair
                            Access</span>
                        </>
                      )}


                      {facility === "airconditioning" && (
                        <>
                          <i className=" fa-solid fa-snowflake" />
                          <span className="amen">Air Conditioning</span>
                        </>
                      )}
                        {/* atm */}
                        {facility === "atm" && (
                          <>
                            <i className=" fa-solid fa-atm" />
                            <span className="amen">ATM</span>
                          </>
                        )}
                        {/* bank */}
                        {facility === "bank" && (
                          <>
                            <i className=" fa-solid fa-bank" />
                            <span className="amen">Bank</span>
                          </>
                        )}

                        {/* house keeping */}
                        {facility === "housekeeping" && (
                          <>
                            <i className=" fa-solid fa-broom" />
                            <span className="amen">Housekeeping</span>
                          </>
                        )}
                    </li>
                  </div>

                })
              }
              
            </div>
                            </div>
                            <div className="segment" id="hotelpolicies">
                                <h3 className="bold">
                                    Hotel Policies
                                </h3>
                                <hr></hr>
                                <div className="allpolicy">
                                    <h3 className="policy">Check in and Check out Policy</h3> <br></br>
                                    Check in time: 12:00<br></br>
                                    Check out time: 12:00
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

                        </div>

                    }


                </div>
            </div>


        </>
    )
}

export default ViewHotelDetails