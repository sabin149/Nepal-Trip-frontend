import React, { useEffect, useState } from "react";
import "./hotelinfo.css";
import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../redux/actions/hotelAction";
import Carousel from "../../components/Carousel";
import RoomTable from "../../components/room/RoomTable";
import Rating from '@mui/material/Rating'
import { createReview, deleteReview, updateReview } from "../../redux/actions/reviewAction";
import { getUsers } from "../../redux/actions/userAction"
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import moment from "moment";
import ShareModal from "../../components/ShareModal";
import { Paper } from "@mui/material";
import { Grid } from "@material-ui/core";
import SearchHeader from "../../components/Home/SearchHeader";
import GoogleMaps from "../../components/GoogleMaps";

const Hotelinfo = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const checkData = state?.searchInfoData ?
    state.searchInfoData : window.href = "/";

  const address = checkData.address
  let lat, lng;
  if (address === "Pokhara") {
    lat = 28.2152602;
    lng = 83.9623006;
  }
  if (address === "Kathmandu") {
    lat = 27.7113869;
    lng = 85.3151488;
  } if (address === "Dhulikhel") {
    lat = 27.6217981;
    lng = 85.5527428;
  } if (address === "Lumbini") {
    lat = 27.5052594;
    lng = 83.4065654;
  }


  const { id } = useParams();

  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userID')

  const [value, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [isShare, setIsShare] = useState(false)

  const [isEdit, setIsEdit] = React.useState(false);
  const [reviewData, setReviewData] = React.useState({});

  const { hotel } = useSelector(state => state?.hotel);
  const users = useSelector(state => state?.user?.users);

  const reviews = (hotel?.hotel_reviews)

  const newReviews = reviews?.slice()?.reverse();

  useEffect(() => {
    dispatch(getHotel({ id }))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const [readMore, setReadMore] = useState(false)

  const oneUser = users && users.filter(user => user._id === userID)[0]

  // check user has review or not
  const checkUserReview = newReviews && newReviews.filter(review => review.user._id === userID)[0]

  const handlePostReview = (e) => {
    e.preventDefault();
    if (!token || !userID) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "You must be logged in to post a review" }
      })
      return
    }
    if (!value) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "Please enter a rating" }
      })
      return
    }
    if (!review) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: "Please enter a review" }
      })
      return
    }
    if (!isEdit && checkUserReview) {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: "You have already wrote the review!!!" } })
      setReview("");
      setValue(0);
      return
    }
    if (!isEdit)
      if (token && userID) {
        const newReview = {
          review,
          hotel_rating: value,
          user: oneUser,
          createdAt: new Date().toISOString(),
        }
        dispatch(createReview({ hotel, newReview, user: oneUser, token }))
        setReview("");
        setValue(0);
      }
    if (isEdit) {
      const newReview = {
        review
        // hotel_rating: value,
        // user: oneUser,
        // createdAt: new Date().toISOString(),
      }
      dispatch(updateReview({ hotel, review: reviewData, newReview, user: oneUser, token }))
      setReview("");
      setValue(0);
    }
  }
  const handleDeleteReview = ({ hotelReview }) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      dispatch(deleteReview({ review: hotelReview, hotel, token: token }))
    }
  }
  const handleEditReview = ({ hotelReview }) => {
    setIsEdit(true)
    setReviewData(hotelReview)
    setReview(hotelReview.review)
    setValue(hotelReview.hotel_rating)
  }
  return (
    <div className="main_content">
      <SearchHeader searchInfoData={checkData} />
      <div className="second-nav d-flex">
        <div className="Item">
          <Link to="">
            <span>Overview </span>
          </Link>
        </div>
        <div className="Item">
          <a href="#roominfoandprice">
            <span>Room Info & price</span>
          </a>
        </div>
        <div className="Item">
          <a href="#hotelamenities">
            <span> Hotel Amenities</span>
          </a>       </div>
        <div className="Item">
          <a href="#hotelpolicies">
            <span>Hotel Policies</span>
          </a>       </div>
        <div className="Item">
          <button onClick={() => setIsShare(!isShare)} className="btn btn-outline-primary btn-sm " style={{
            marginBlock: "initial"
          }} id="shareBtn">
            Share
          </button>
          {
            isShare && <Paper>
              <Grid container spacing={3}>
                <Grid item xs={2} md={2} sm={2}>
                  <ShareModal url={"https://nepaltrip.herokuapp.com"} />
                </Grid>
              </Grid>
            </Paper>
          }
        </div>
      </div>
      <span> </span>
      <div className="container pd-top-md">
        <div>
          <h2 className="text-capitalize">{hotel.hotel_name}</h2>
          <p className="locationhotel text-capitalize">
            {hotel?.address === "ktm" ? "Kathmandu, Nepal" : hotel?.address + ",Nepal"}
            <a href="#map" className="block-in-mobile">
              <i className="fa-solid fa-location-dot"></i>

              <span> view in map </span>

            </a>
          </p>
          <div>
            <div className="row">
              <div className="col-lg-8">
                <Carousel images={hotel?.hotel_images} />
              </div>

              <div className="col abouthotel" id="info">
                <div className="bg-light-gray pd-all-sm mh-100 box-shadow">
                  <div>
                    <h4 className="color-dark-blue bold">
                      About {hotel?.hotel_name}
                    </h4>
                    <div className="caption">
                      <span>
                        {
                          hotel && hotel?.hotel_info?.length < 200
                            ? hotel?.hotel_info
                            : readMore ? hotel?.hotel_info + ' ' : hotel?.hotel_info?.slice(0, 200) + '.....'
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
                      hotel?.hotel_facilities?.map((facility, index) => {
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
                  <div className="hotelmap" >
                    <h4 className="color-dark-blue bold">
                      <span>Location</span>
                    </h4>
                   <div style={{
                      height: '100px !important',
                   }}>
                   <GoogleMaps lat={lat} lng={lng}/>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Room and Info */}
          <h3 className="bold" id="roominfoandprice">
            <span>
              Room Info & price
            </span>
          </h3>
          {/* Price Table of Room */}
          <RoomTable hotel={hotel} searchInfoData={checkData} />
          <div className="segment" id="hotelamenities">
            <h3 className="bold">
              Hotel Amenities
            </h3>
            <hr></hr>
            <div className="row row-cols-4">
              {
                hotel?.hotel_facilities?.map((facility, index) => {
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
            <h3 className="bold" >
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
          <div className="segment" id="map">
            <h3 className="bold p-0">
              <span>Map</span>
            </h3>
            <GoogleMaps lat={lat} lng={lng} size="big" />
          </div>
          <div className="segment">
            <h3 className="bold">
              <span>Review & Rating </span>
              <hr />
            </h3>
            {token && userID ? <><div>
              <div className="content">
                <p>Rating (select a star Amount):</p>
              </div>
              <div className="user_hotel_rating text-center">
                <Rating sx={{
                  fontSize: "2.5rem",
                  color: "orange !important",
                }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  id="rating"
                />
              </div>
            </div>
              <form className="form-block">
                <div className="row reviewtype">
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea className="form-input" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Type Your Review Here" id="review"></textarea>
                    </div>
                  </div>
                  <div className="float-end mt-2 pt-1">
                    <button type="button" onClick={handlePostReview} className="btn btn-primary btn-sm" id="postReviewBtn"> {isEdit ? "Update Review" : "Post Review"}</button>
                  </div>
                </div>
              </form></> :
              <h2>Please login  to give the review</h2>
            }
          </div>

          {/* review section */}
          <div className="segment">
            <h3 className="bold">
              <span>Reviews</span>
              <hr />
            </h3>
            <div className="container">
              <div className="be-comment-block">
                {/* list of reviews */}

                {
                  newReviews && newReviews?.map((review) => <div className="be-comment" key={review._id}>
                    <div className="be-img-comment">

                      <img src={review?.user?.avatar} alt="reviewimage" className="be-ava-comment" />

                    </div>
                    <div className="be-comment-content">


                      <span className="be-comment-name">
                        {review?.user?.fullname}
                      </span>
                      {/* rating */}

                      <br />
                      <span className="be-comment-time">
                        <i className="fa fa-clock-o"></i>
                        {/* Jun 23 , 2022 at 7:14am */}
                        {
                          moment(review.createdAt).format('MMM DD , YYYY h:mm a')
                        }
                      </span>

                      <p className="be-comment-text">
                        {review?.review}
                      </p>
                    </div>
                    <div className="replysec">
                      {token && userID === review?.user?._id ? <>
                        <span className="be-comment-name editsec" style={{ cursor: "pointer" }} onClick={() => handleEditReview({ hotelReview: review })} >
                          <i className="fa-solid fa-pen-to-square me-1"  /> Edit
                        </span>
                        <span className="be-comment-name" onClick={() => {
                          handleDeleteReview({ hotelReview: review })
                        }} style={{ cursor: "pointer" }} >
                          <i className="fa-solid fa-trash me-1 " id="deleteReviewBtn"/>  Remove
                        </span></> :
                        ""
                      }
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};
export default Hotelinfo;