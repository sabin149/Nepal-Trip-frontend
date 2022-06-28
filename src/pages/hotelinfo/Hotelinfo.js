import React, { useEffect, useState } from "react";
import "./hotelinfo.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../redux/actions/hotelAction";
import Carousel from "../../components/Carousel";
import RoomTable from "../../components/room/RoomTable";
import Rating from '@mui/material/Rating'
import { createReview, deleteReview, getHotelReviews } from "../../redux/actions/reviewAction";
import { getUsers } from "../../redux/actions/userAction"
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import moment from "moment";

const Hotelinfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userID')

  const [value, setValue] = React.useState(0);
  const [review, setReview] = React.useState("");

  const hotel = useSelector(state => state?.hotel?.hotels);
  const users = useSelector(state => state?.user?.users);
  const { reviews } = useSelector(state => state?.review);

  useEffect(() => {
    dispatch(getHotel({ id }))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(getHotelReviews({ hotel }))
  }, [dispatch, hotel])

  const [readMore, setReadMore] = useState(false)

  const oneUser = users && users.filter(user => user._id === userID)[0]

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

    if (token && userID) {
      const newReview = {
        review,
        hotel_rating: value,
        user: oneUser,
        createdAt: new Date().toISOString(),
      }
      dispatch(createReview({ hotel, newReview, user: oneUser, token }))
      dispatch(getHotelReviews({ hotel }))
      setReview("");
      setValue(0);
    }
  }

  const handleDeleteReview = ({hotelReview}) => {
    
    dispatch(deleteReview({ review:hotelReview, token:token }))

  }
   


  return (
    <div className="main_content">
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
            {hotel?.address === "ktm" ? "Kathmandu, Nepal" : hotel?.address + ",Nepal"}
            <Link to="" className="block-in-mobile">
              <i className="fa-solid fa-location-dot"></i>

              <span> view in map </span>
            </Link>
          </p>
          <div>
            <div className="row">
              <div className="col-lg-8">
                <Carousel images={hotel?.hotel_images} />
              </div>

              <div className="col abouthotel">
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
          <RoomTable hotel={hotel} />


          <div className="segment">
            <h3 className="bold">
              Hotel Amenities
            </h3>
            <hr></hr>
            <div className="row row-cols-4">
              <div className="col"><li>
                <i className="fa-solid fa-hot-tub-person">
                </i>

                <span className="amen">24hrs Hot Shower</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-wifi"></i>

                <span className="amen">24hrs Free Wi-Fi</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-smoking">

                </i>
                <span className="amen">Smoking Area Available</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-car"></i>

                <span className="amen">Transportation Facility</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-money-bill-simple">
                </i>

                <span className="amen">ATM/cash machine on site</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-broom"></i>

                <span className="amen">Daily housekeeping</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-shirt"></i>

                <span className="amen">Restaurant</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-elevator"></i>
                <span className="amen">Elevator</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-mug-hot"></i>
                <span className="amen">Coffee shop</span></li></div>
              <div className="col"><li>
                <i className="fa-solid fa-wheelchair"></i>
                <span className="amen">Facilities for disabled guests</span></li></div>
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
                />
              </div>
            </div>
              <form className="form-block">
                <div className="row reviewtype">
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea className="form-input" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Type Your Review Here"></textarea>
                    </div>
                  </div>
                  <div className="float-end mt-2 pt-1">
                    <button type="button" onClick={handlePostReview} className="btn btn-primary btn-sm">Post Review</button>
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
                  reviews && reviews?.map((review) => <div className="be-comment" key={review._id}>
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
                    { token&& userID===review?.user?._id?<>
                      <span className="be-comment-name editsec">
                        Edit
                      </span>
                      <span className="be-comment-name" onClick={()=>{
                        handleDeleteReview({hotelReview:review})
                      }}>
                        Remove
                      </span></>:
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