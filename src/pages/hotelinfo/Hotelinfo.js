import React, { useEffect, useState } from "react";
import "./hotelinfo.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../redux/actions/hotelAction";
import Carousel from "../../components/Carousel";
import RoomTable from "../../components/room/RoomTable";

const Hotelinfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(getHotel({ id }))
  }, [dispatch, id])

  const hotel = useSelector(state => state?.hotel?.hotels);
  const [readMore, setReadMore] = useState(false)


  const [replyInput, setReplyInput] = useState(false)

  // console.log(hotel);

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
            {hotel.address === "ktm" ? "Kathmandu, Nepal" : hotel.address + ",Nepal"}
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
                      About {hotel.hotel_name}
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
            <div>
              <div className="content">
                <p>Rating (select a star Amount):</p>
              </div>
              <div className="wrapper">
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
          {/* review section */}
          <div className="segment">
            <h3 className="bold">
              <span>Reviews</span>
              <hr />
            </h3>
            <div class="container">
              <div class="be-comment-block">
                {/* list of reviews */}
                <div class="be-comment">
                  <div class="be-img-comment">

                    <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" class="be-ava-comment"></img>

                  </div>
                  <div class="be-comment-content">

                    <span class="be-comment-name">
                      User Name
                    </span><br />
                    <span class="be-comment-time">
                      <i class="fa fa-clock-o"></i>
                      Jun 23 , 2022 at 7:14am
                    </span>

                    <p class="be-comment-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div className="replysec">
                    <span class="be-comment-name repsec">
                      Reply
                    </span>
                    {/* <span class="be-comment-name">
					Edit
					</span> */}
                  </div>
                </div>
                <div class="be-comment">
                  <div class="be-img-comment">

                    <img src="https://agewiki.org/uploads/27263/rabi-267x300.png" alt="" class="be-ava-comment"></img>

                  </div>
                  <div class="be-comment-content">

                    <span class="be-comment-name">
                      Ravi Lamechhane
                    </span><br />
                    <span class="be-comment-time">
                      <i class="fa fa-clock-o"></i>
                      Jun 21 , 2022 at 3:14am
                    </span>

                    <p class="be-comment-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div className="replysec">
                    <span class="be-comment-name repsec">
                      Reply
                    </span>
                    {/* <span class="be-comment-name">
					Edit
					</span> */}
                  </div>
                </div>
                <div class="be-comment">
                  <div class="be-img-comment">
                    <img src="https://pbs.twimg.com/profile_images/1246407813959577600/Jw2DmY38_400x400.jpg" alt="" class="be-ava-comment"></img>
                  </div>
                  <div class="be-comment-content">
                    <span class="be-comment-name">
                      Hari Bahadur
                    </span><br />
                    <span class="be-comment-time">
                      <i class="fa fa-clock-o"></i>
                      Jun 21 , 2022 at 3:14am
                    </span>
                    <p class="be-comment-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div className="replysec">
                    <span class="be-comment-name repsec">
                      Reply
                    </span>
                    {/* <span class="be-comment-name">
					Edit
					</span> */}
                  </div>
                </div>
                <div class="be-comment">
                  <div class="be-img-comment">
                    <img src="https://3.bp.blogspot.com/-uUE9Um9KnfA/VmomXEPuQ-I/AAAAAAAACKI/83VNZxN6bGA/s640/Rajesh-Hamal-Icon.png" alt="" class="be-ava-comment"></img>
                  </div>
                  <div class="be-comment-content">
                    <span class="be-comment-name">
                      Rajesh Hamal
                    </span><br />
                    <span class="be-comment-time">
                      <i class="fa fa-clock-o"></i>
                      Jun 21 , 2022 at 3:14am
                    </span>
                    <p class="be-comment-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. this is this

                    </p>
                  </div>
                  <div className="replysec">
                    <span class="be-comment-name repsec" onClick={() => { setReplyInput(true) }} >
                      Reply
                    </span>
                    {
                      replyInput ? <div className="replyinput">
                        <input type="text" placeholder="Write a reply" className="replyinput" />
                        <button className="replybtn" onClick={() => { setReplyInput(false) }}>Reply</button>
                      </div> : null
                    }
                    {/* <span class="be-comment-name">
					Edit
					</span> */}
                  </div>

                  {/* after replying */}

                  <div class="be-comment afterreply">
                    <div class="be-img-comment">

                      <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" class="be-ava-comment"></img>

                    </div>
                    <div class="be-comment-content">

                      <span class="be-comment-name">
                        User Name
                      </span><br />
                      <span class="be-comment-time">
                        <i class="fa fa-clock-o"></i>
                        Jun 23 , 2022 at 7:14am
                      </span>

                      <p class="be-comment-text">
                        Hello Rajesh Hamal sir big fan			</p>
                    </div>
                    <div className="replysec">
                      <span class="be-comment-name repsec">
                        Reply
                      </span>
                      <span class="be-comment-name editsec">
                        Edit
                      </span>
                      <span class="be-comment-name">
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
                <form class="form-block">
                  <div class="row reviewtype">
                    <div class="col-xs-12">
                      <div class="form-group">
                        <textarea class="form-input" required="" placeholder="Type Your Review Here"></textarea>
                      </div>
                    </div>
                    <div class="float-end mt-2 pt-1">
                      <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Hotelinfo;