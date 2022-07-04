import "./bookingDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cancelBooking, getBookings } from "../../redux/actions/bookingAction";
import Carousel from "../../components/Carousel"
import { Dialog, DialogContent } from "@mui/material";
import EditBookingDetails from "../../components/booking/EditBookingDetails";
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import moment from "moment";

const BookingDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const userID = localStorage.getItem("userID")

  const [open, setOpen] = useState(false);
  const [editBookingOpen, setEditBookingOpen] = useState(false);
  const [scroll, setScroll] = useState('body');

  const [bedType, setBedType] = useState("Double Bed")
  const [roomSize, setRoomSize] = useState("250")


  function handleSetBedType({ roomType }) {
    if (roomType === "Deluxe Room") {
      setBedType("King Bed")
      setRoomSize("240")
    } else if (roomType === "Family Room") {
      setBedType("Double Bed")
      setRoomSize("250")
    } else if (roomType === "Superior Room") {
      setBedType("Triple Bed")
      setRoomSize("280")
    } else if (roomType === "Single Room") {
      setBedType("Single Bed")
      setRoomSize("200")
    } else {
      setBedType("Double Bed")
      setRoomSize("250")
    }

  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleRoomClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleEditBookingClickOpen = (scrollType) => () => {
    setEditBookingOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setEditBookingOpen(false);
  };

  useEffect(() => {
    dispatch(getBookings({ token }))
  }, [dispatch, token])

  const booking = useSelector(state => state.booking.bookings)
  const userBooking = booking.filter(booking => booking?.user?._id === userID)[0]

  const hotelDetails = userBooking && userBooking.hotel
  const roomDetails = userBooking && userBooking.room

     //get nights in number from startDate to endDate
     const nights = (moment(userBooking?.end_date).format('D')) - (moment(userBooking?.start_date).format('D'))-1

  const handleCancelBooking = () => {

    if (window.confirm("Are you sure you want to cancel this booking?")) {
      dispatch(cancelBooking({ token, id: userBooking._id }))
      navigate("/")
    }
  }

  useEffect(() => {
    handleSetBedType({ roomType: roomDetails?.room_type })
  }, [roomDetails])

  return (

    <>
      {
        userBooking ?
          <div className="main_content">
            <div className="container pd-top-md">
              <div className="edit-booking-details">
                <button className="btn btn-primary btn-sm float-lg-end me-2" onClick={handleCancelBooking}>Cancel Booking</button>
                <button className="btn btn-primary btn-sm float-lg-end me-2" onClick={handlePrint} >Print Booking Details</button>
                <button className="btn btn-primary btn-sm float-lg-end me-2" onClick={handleEditBookingClickOpen("body")}>Edit Booking Details</button>
                <div className="booking_dialog">

                  <Dialog sx={{

                    backgroundBlendMode: "darken",
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                    open={editBookingOpen}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                  >
                    <h3 className='mt-3' style={{
                      marginLeft: "23px",
                    }}>Edit Booking Details</h3>

                    <hr />
                    <DialogContent dividers={scroll === 'paper'} >
                      <EditBookingDetails booking={userBooking} token={token} />

                    </DialogContent>

                  </Dialog>
                </div>
              </div>
              <div ref={componentRef}>
                <h2>Booking Date: {moment(userBooking?.start_date).format("LLLL")}</h2>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-8 BookingImage">
                    <Carousel images={hotelDetails?.hotel_images} />
                  </div>
                  <div className="col-sm abouthotel">
                    <div className="pd-all-sm ">
                      <div>
                        <h4>Pokhara</h4>
                        <div className="caption">
                          Street No. 7, Gaurighat, Lakeside
                        </div>
                        <div className="caption">
                          <Link to="" className="block-in-mobile">
                            <i className="fa-solid fa-location-dot"></i>
                            <span> view in map </span>
                          </Link>
                        </div>
                        <div className="caption">
                          <Link to="" className="block-in-mobile">
                            <i className="fa-solid fa-phone"></i>
                            <span> {hotelDetails?.phone} </span>
                          </Link>
                        </div>
                        <div className="caption">
                          <Link to="" className="block-in-mobile">
                            <i className="fa-solid fa-envelope"></i>
                            <span> {hotelDetails?.hotel_email} </span>
                          </Link>
                        </div>
                      </div>
                      {/* <hr></hr> */}
                    </div>
                  </div>
                </div>
                {/* Room and Info */}
                {/* Price Table of Room */}
                <div className="row pricetable">
                  <table className="table table-bordered facilities">
                    {/* Deluxe Room */}
                    <tbody className="facilities">
                      <tr >
                        <td className="" rowSpan="1">
                          <h3 className="color-black bold pointer">
                            {userBooking?.rooms} No.of Room(s)
                          </h3>
                        </td>
                        <td className="" rowSpan="2">
                          <h3 className="color-black bold pointer">

                            {nights} No.of Night(s)
                          </h3>
                        </td>
                        <td className="" rowSpan="3">
                          <h3 className="color-lack bold pointer">

                            {moment(userBooking?.start_date).format("MMMM Do YYYY")} check-in
                          </h3>
                        </td>
                        <td className="" rowSpan="4">
                          <h3 className="color-black bold pointer">

                            {moment(userBooking?.end_date).format("MMMM Do YYYY")}  check-out
                          </h3>
                        </td>
                      </tr>
                    </tbody>
                    {/* family room */}
                  </table>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="policy">
                      Your payment will be handled by Hotel: {hotelDetails?.hotel_name}
                    </h3>
                    <hr />

                    <h3 className="policy">
                      Total amount to be paid is:
                      <br></br>
                      {userBooking?.total_amount} NPR
                      <hr></hr>
                    </h3>

                  </div>
                  <div className="col-sm-9 abouthotel">
                    <div className="pd-all-sm "></div>
                  </div>
                </div>
                <div className="row pricetable">
                  <div className="col-lg-12 pricehotel">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">

                            <span className=""> Guest</span>
                          </th>
                          <th scope="col">Room Type</th>
                          <th scope="col">Room Size </th>
                          <th scope="col"> Bed Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="imagebox" rowSpan="1">
                            <h3 className="color-black bold pointer">
                              {userBooking?.name}
                              <div>
                                <Dialog
                                  sx={{

                                    backgroundBlendMode: "darken",
                                    backgroundColor: "rgba(0,0,0,0.1)",
                                  }}
                                  open={open}
                                  onClose={handleClose}
                                  scroll={scroll}
                                  aria-labelledby="scroll-dialog-title"
                                  aria-describedby="scroll-dialog-description"
                                >
                                  <h3
                                    className="mt-3"
                                    style={{
                                      marginLeft: "190px",
                                    }}
                                  >
                                    Room Details
                                  </h3>

                                  <hr />
                                  <DialogContent dividers={scroll === "paper"}>
                                    <Carousel
                                      images={roomDetails?.room_images}
                                    />
                                  </DialogContent>
                                  <div className="amenities">
                                    <hr></hr>
                                    <div className="row row-cols-2">
                                      <div className="col">
                                        <li>
                                          <i className="fa-solid fa-hot-tub-person"></i>

                                          <span className="amen">
                                            24hrs Free Wi-Fi
                                          </span>
                                        </li>
                                      </div>
                                      <div className="col">
                                        <li>
                                          <i className="fa-solid fa-shirt"></i>

                                          <span className="amen">Restaurant</span>
                                        </li>
                                      </div>
                                      <div className="col">
                                        <li>
                                          <i className="fa-solid fa-smoking"></i>
                                          <span className="amen">
                                            Smoking Area Available
                                          </span>
                                        </li>
                                      </div>
                                      <div className="col">
                                        <li>
                                          <i className="fa-solid fa-car"></i>

                                          <span className="amen">
                                            Transportation Facility
                                          </span>
                                        </li>
                                      </div>
                                      <div className="col">
                                        <li>
                                          <i className="fa-solid fa-money-bill-simple"></i>
                                        </li>
                                      </div>
                                    </div>
                                  </div>
                                </Dialog>
                              </div>
                            </h3>
                          </td>
                          <td className="" rowSpan="2">
                            <h3
                              className="color-black bold pointer"
                              onClick={handleRoomClickOpen("body")}
                            >
                              {roomDetails?.room_type}
                            </h3>
                          </td>
                          <td className="" rowSpan="3">
                            <h3 className="color-lack bold pointer">

                              {roomSize} sq.ft
                            </h3>
                          </td>
                          <td className="" rowSpan="4">
                            <h3 className="color-black bold pointer">
                              {
                                bedType
                              }
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <div className="row pricetable">
                  <div className="col-lg-12 pricehotel">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className=""> Room No</span>
                          </th>
                          <th scope="col">No. of Adults</th>
                          <th scope="col">No. of Children</th>
                          <th scope="col"> Inclusions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="" rowSpan="1">
                            <h3 className="color-black bold pointer"> 1</h3>
                          </td>
                          <td className="" rowSpan="2">
                            <h3 className="color-black bold pointer"> 1</h3>
                          </td>
                          <td className="" rowSpan="3">
                            <h3 className="color-lack bold pointer"> 0</h3>
                          </td>
                          <td className="" rowSpan="4">
                            <h3 className="color-black bold pointer">
                              Breakfast
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
                <div className="row pricetable">
                  <div className="col-lg-12 pricehotel">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">

                            <span className=""> Room No</span>
                          </th>
                          <th scope="col">No. of Adults</th>
                          <th scope="col">No. of Children</th>
                          <th scope="col"> Inclusions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="" rowSpan="1">
                            <h3 className="color-black bold pointer">
                              {
                                //get random room number
                                Math.floor(Math.random() * (10 - 1 + 1)) + 1
                              }
                            </h3>
                          </td>
                          <td className="" rowSpan="2">
                            <h3 className="color-black bold pointer">

                              {userBooking?.adults}
                            </h3>
                          </td>
                          <td className="" rowSpan="3">
                            <h3 className="color-lack bold pointer">

                              {userBooking?.children}
                            </h3>
                          </td>
                          <td className="" rowSpan="4">
                            <h3 className="color-black bold pointer">

                              Breakfast
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-sm-6 ">
                    <h4>Total Price:</h4>
                  </div>
                  <div className="col-sm-9 abouthotel">
                    <div className="pd-all-sm ">
                      <div>
                        <h4>RS. {userBooking[0]?.total_amount}</h4>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="my-4"></div>
                <div className="segment">
                  <h3 className="">Hotel Policies:</h3>
                  <hr></hr>
                  <div className="allpolicy">
                    <h3 className="checkin">Check in and Check out Policy:</h3>
                    <br></br>
                    Check in time: 12::0<br></br>
                    Check out time: 12::0
                    <br></br>
                    Goverment issued photo ID(for ex: valid passport, valid
                    driving license) required for Check-in.
                    <h3 className="checkin">Payment Method Accepted:</h3> <br></br>
                    E-sewa<br></br>
                    Khalti
                    <br></br>
                    <h3 className="checkin">Child Policy:</h3> <br></br>
                    Child age: 4 - 6 years<br></br>
                    Infant age: 0 - 3 years
                    <br></br>
                    <h3 className="checkin">More Policies:</h3> <br></br>
                    Pan Card accepted<br></br>
                    Hotel fit for children
                    <br></br>
                    <h3 className="checkin">You need to know:</h3> <br></br>
                    <ul className="bulleted">
                      <li>
                        We do not support modifications to hotel bookings on
                        website or App. You’ll have to cancel (cancellation
                        charges may apply as mention in above cancelation policy)
                        your existing booking and make a new one.
                      </li>
                      <li>
                        The hotel might not refund for late check-in and early
                        check-out.
                      </li>
                      <li>Stay extensions will required a new reservation.</li>
                      <li>
                        Individual aged 18 and above are required to present a
                        valid Photo ID ( passport, driver’s license,
                        government-issued photo ID etc) at the time of check-in.
                      </li>
                      <li>
                        Along with the Government issued ID proof, you will also
                        have to carry the itinerary on your phone or Tab or a
                        printout will do.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <div className="position-relative" style={{ minHeight: 'calc(100vh - 70px)' }}>
            <h2 className="position-absolute text-secondary"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              No Booking Found
            </h2>
            <Link to="/" className="position-absolute"
              style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>Go to Homepage</Link>
          </div>
      }
    </>
  );
};
export default BookingDetails;