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

  const hotel = useSelector(state => state.hotel.hotels);
  // const {searchInfo} = useSelector(state => state.searchInfo);
  // const {options,date}=searchInfo
  const [readMore, setReadMore] = useState(false)

  return (
    
    <div className="main_content">
      {/* <div className="search_result">
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
      </div> */}
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
                   hotel&&   hotel?.hotel_info?.length < 200
                            ? hotel?.hotel_info
                            : readMore ?hotel?.hotel_info + ' ' : hotel?.hotel_info?.slice(0, 200) + '.....'
                    }
                </span>
                    </div>
                    <span className="blue pointer">
                      <span className="readMore" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Read Less' : <span>
                          Read More <i className="fa-solid fa-angle-right"></i>
                        </span> }
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
          <RoomTable hotel={hotel}/>
          
          <div className="my-4">
          </div>
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
        </div>
      </div>

    </div>
  );
};
export default Hotelinfo;