import "./bookingDetails.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBookings } from "../../redux/actions/bookingAction";
const BookingDetails = () => {
  const dispatch=useDispatch()
  const token=localStorage.getItem("token")
  const userID=localStorage.getItem("userID")
  useEffect(()=>{
    dispatch(getBookings({token}))
  },[dispatch, token])
  const booking=useSelector(state=>state.booking.bookings)
  // console.log(booking,"booking");
const bookingUserID=booking&& booking.map(booking=>booking.user._id)
// console.log(bookingUserID,"bookingUserID");
// console.log(userID,"userID");
const userBooking= booking.filter(booking=>booking.user._id===userID)
  console.log(userBooking,"userBooking");
  return (
    <div className="main_content">
      <div className="container pd-top-md">
        <div>
          <h2>Booking Date: Wed Jun 15 00:00:00 GMT 2022</h2>
          <hr></hr>
          <div className="row">
            <div className="col-sm-4 BookingImage">
              <img src="https://assets.xceltrip.com/gallery-1583997472633-34394.jpg" alt="room_image"/>
            </div>
            <div className="col-sm abouthotel">
              <div className="pd-all-sm ">
                <div>
                  <h4>Hotel Da Yatra Courtyard</h4>
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
                      <span> 9840108690 </span>
                    </Link>
                  </div>
                  <div className="caption">
                    <Link to="" className="block-in-mobile">
                      <i className="fa-solid fa-envelope"></i>
                      <span> sp554540@gmail.com </span>
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
                      {" "}
                      1 No.of Room(s)
                    </h3>
                  </td>
                  <td className="" rowSpan="2">
                    <h3 className="color-black bold pointer">
                      {" "}
                      1 No.of Night(s)
                    </h3>
                  </td>
                  <td className="" rowSpan="3">
                    <h3 className="color-lack bold pointer">
                      {" "}
                      15th Jun, 2022 12::0:0 check-in
                    </h3>
                  </td>
                  <td className="" rowSpan="4">
                    <h3 className="color-black bold pointer">
                      {" "}
                      16th Jun, 2022 12::0:0 check-out
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
                Your payment will be handled by Hotel: Orchid hotel
              </h3>
              <hr/>
              <br/>
              Total amount to be paid is:<br></br>
              3120.31 NPR
              <hr></hr>
            </div>
            <div className="col-sm-9 abouthotel">
              <div className="pd-all-sm "></div>
            </div>
          </div>
          <div className="row pricetable">
            <div className="col-lg-8 pricehotel">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      {" "}
                      <span className=""> Guest</span>{" "}
                    </th>
                    <th scope="col">Room Type</th>
                    <th scope="col">Room Size </th>
                    <th scope="col"> Bed Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="" rowSpan="1">
                      <h3 className="color-black bold pointer">
                        {" "}
                       SP Channel
                      </h3>
                    </td>
                    <td className="" rowSpan="2">
                      <h3 className="color-black bold pointer">
                        
                        Deluxe Room
                      </h3>
                    </td>
                    <td className="" rowSpan="3">
                      <h3 className="color-lack bold pointer">
               
                       240 sq.ft
                      </h3>
                    </td>
                    <td className="" rowSpan="4">
                      <h3 className="color-black bold pointer">
                    
                       King Bed
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row pricetable">
            <div className="col-lg-8 pricehotel">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      {" "}
                      <span className=""> Room No</span>{" "}
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
                        {" "}
                       1
                      </h3>
                    </td>
                    <td className="" rowSpan="2">
                      <h3 className="color-black bold pointer">
                        {" "}
                        2
                      </h3>
                    </td>
                    <td className="" rowSpan="3">
                      <h3 className="color-lack bold pointer">
                        {" "}
                       0
                      </h3>
                    </td>
                    <td className="" rowSpan="4">
                      <h3 className="color-black bold pointer">
                        {" "}
                       Breakfast
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="my-4"></div>
          <div className="segment">
            <h3 className="bold">Hotel Policies</h3>
            <hr></hr>
            <div className="allpolicy">
              <h3 className="policy">Check in and Check out Policy</h3>{" "}
              <br></br>
              Check in time: 12::0<br></br>
              Check out time: 12::0
              <br></br>
              Goverment issued photo ID(for ex: valid passport, valid driving
              license) required for Check-in.
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
                  We do not support modifications to hotel bookings on website
                  or App. You’ll have to cancel (cancellation charges may apply
                  as mention in above cancelation policy) your existing booking
                  and make a new one.
                </li>
                <li>
                  The hotel might not refund for late check-in and early
                  check-out.
                </li>
                <li>Stay extensions will required a new reservation.</li>
                <li>
                  Individual aged 18 and above are required to present a valid
                  Photo ID ( passport, driver’s license, government-issued photo
                  ID etc) at the time of check-in.
                </li>
                <li>
                  Along with the Government issued ID proof, you will also have
                  to carry the itinerary on your phone or Tab or a printout will
                  do.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingDetails;