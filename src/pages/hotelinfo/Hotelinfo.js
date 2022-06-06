import React from "react";
import './hotelinfo.css'
import { Link,useLocation } from 'react-router-dom'

const Hotelinfo = () => {
    const location=useLocation()

    const hotel=location.state.hotel
    console.log(hotel);
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
                <h5> Hotel Da Yatra </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Check In</span>
                </p>
                <h5> 01 June, 2022 </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Check Out</span>
                </p>
                <h5> 02 June, 2022</h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Room(s)</span>
                </p>
                <h5> 1 </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Adult(s)</span>
                </p>
                <h5> 1 </h5>
              </div>
              <div className="px-3">
                <p>
                  <span>Children(s)</span>
                </p>
                <h5> 0 </h5>
              </div>
              <button className="ml-4 primary-b">
                <span> Modify Search</span>
              </button>
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
          <h2>Hotel Da Yatra Courtyard</h2>
          <p className="locationhotel">
            Street no 15, Lakeside
            <Link to="" className="block-in-mobile">
              <i className="fa-solid fa-location-dot"></i>
              <span> view in map </span>
            </Link>
          </p>
          <div className="carousel">
            <div className="row">
              {/* Carousel Row */}
              <div className="col-lg-8 slider">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.xceltrip.com/gallery-1583997472633-34394.jpg" class="d-block w-100" alt="roomimage"></img>
    </div>
    <div class="carousel-item">
      <img src="https://assets.xceltrip.com/gallery-1583998379908-af66c.jpg" class="d-block w-100" alt="roomimage"></img>
    </div>
    <div class="carousel-item">
      <img src="https://assets.xceltrip.com/gallery-1583998204817-44478.jpg" class="d-block w-100" alt="roomimage"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              </div>

              <div className="col-lg-4 abouthotel">
                <div className="bg-light-gray pd-all-sm mh-100 box-shadow">
                  <div>
                    <h4 className="color-dark-blue bold">
                      About Hotel Da Yatra Courtyard
                    </h4>
                    <div className="caption">
                      We are a “Neoclassical Luxury Hotel” in the helm of the
                      tourist hub of Pokhara .69 Kms from lake Fewa. The hotel
                      offers an assortment of 46 rooms with satori evoking views
                      of the Himalayas and lake from lake-view rooms and the
                      terrace. Host meetings
                    </div>
                    <span className="blue pointer">
                      <span> Read More </span>
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                    <hr></hr>
                  </div>
                  <h4 className="color-dark-blue bold">
                    <span>Amenities & Facilities</span>
                  </h4>
                  <div className="ameneties-list">
                  <i class="fa-solid fa-hot-tub-person"></i>
                  <i class="fa-solid fa-wifi"></i>
                  <i class="fa-solid fa-smoking"></i>
                  <i class="fa-solid fa-bowl-rice"></i>
                  <i class="fa-solid fa-car"></i>
                  <i class="fa-solid fa-user-shield"></i>
                  <i class="fa-solid fa-swimmer"></i>
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
          <tr className="">
          <td className="" rowspan="1">
              <h3 className="color-dark-blue bold pointer"> Deluxe Room</h3>
              <div className="image-holder bg-light-gray height160">
              <img className="room-image " src="https://assets.xceltrip.com/gallery-1583997472650-d2233.jpg" alt="roomimage"></img>
              </div>
              <div >
                  <ul className="mg-top-sm ">
                        <li><i class="fa-solid fa-hot-tub-person"></i> <span className="amen">Hot Tub</span></li>
                        <li><i class="fa-solid fa-wifi"></i><span className="amen">Free Wi-Fi</span></li>
                        <li><i class="fa-solid fa-smoking"></i><span className="amen">Smoking Area</span></li>
                        <li><i class="fa-solid fa-bowl-rice"></i><span className="amen">Free Breakfast</span></li>
                        <li><i class="fa-solid fa-car"></i><span className="amen">Transport</span></li>
          
                  </ul>
              </div>
          </td>
          <td className="">
          <h4 class="bold">FREE Breakfast</h4>
          <h5 className="mg-top-0">Non-refundable</h5>
        <div>
          <ul className="checklist">
            <li> 
            <i class="fa-solid fa-check"></i><span className="listoffer">Breakfast</span>
            </li>
          </ul>
          <ul className="checklist">
            <li> 
            <i class="fa-solid fa-check"></i><span className="listoffer">10% discount on food <br></br> and beverage</span>
            </li>
          </ul>
        </div>
          </td>
          <td className="">
            <div className="align-right">
              <div></div>
              <br></br>
              <div> <span className="color-green bold">15980 NPR</span></div>
            </div>
          </td>
          <td className="">
          {/* <button className="btn btn-primary btn-block selectroom"> Select Room</button> */}
          <button className="ui fluid primary button width150">
              Select Room
          </button>
          </td>
          </tr>

          </tbody>
          {/* family room */}
          <tbody>
          <tr className="">
          <td className="" rowspan="1">
              <h3 className="color-dark-blue bold pointer"> Family Room</h3>
              <div className="image-holder bg-light-gray height160">
              <img className="room-image " src="https://assets.xceltrip.com/gallery-1583997472668-a3ff9.jpg" alt="roomimage"></img>
              </div>
              <div >
                  <ul className="mg-top-sm ">
                        <li><i class="fa-solid fa-hot-tub-person"></i> <span className="amen">Hot Tub</span></li>
                        <li><i class="fa-solid fa-wifi"></i><span className="amen">Free Wi-Fi</span></li>
                        <li><i class="fa-solid fa-smoking"></i><span className="amen">Smoking Area</span></li>
                        <li><i class="fa-solid fa-bowl-rice"></i><span className="amen">Free Breakfast</span></li>
                        <li><i class="fa-solid fa-car"></i><span className="amen">Transport</span></li>
          
                  </ul>
              </div>
          </td>
          <td className="">
          <h4 class="bold">FREE Breakfast</h4>
          <h5 className="mg-top-0">Non-refundable</h5>
        <div>
          <ul className="checklist">
            <li> 
            <i class="fa-solid fa-check"></i><span className="listoffer">Breakfast</span>
            </li>
          </ul>
          <ul className="checklist">
            <li> 
            <i class="fa-solid fa-check"></i><span className="listoffer">10% discount on food <br></br> and beverage</span>
            </li>
          </ul>
        </div>
          </td>
          <td className="">
            <div className="align-right">
              <div></div>
              <br></br>
              <div> <span className="color-green bold">15980 NPR</span></div>
            </div>
          </td>
          <td className="">
          {/* <button className="btn btn-primary btn-block selectroom"> Select Room</button> */}
          <button className="ui fluid primary button width150">
              Select Room
          </button>
          </td>
          </tr>

          </tbody>
          

</table>
          </div>
          <div className="col-lg-4 yourselection">
            <div className="colored-box">
              <h4 className="selection">
                Your Selection    
              </h4>
              <hr></hr>
              <div className="empty-selection red">
                
              <span>No Room Selected</span>
              </div>
            </div>
          </div>
         
          </div>
        <div className="my-4">
        </div>
        <div className="segment">
          <h3 className="bold">
          Hotel Amenities
          </h3>
          <hr></hr>
          <div class="row row-cols-4">
                  <div class="col"><li><i class="fa-solid fa-hot-tub-person"></i> <span className="amen">24hrs Hot Shower</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-wifi"></i><span className="amen">24hrs Free Wi-Fi</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-smoking"></i><span className="amen">Smoking Area Available</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-car"></i><span className="amen">Transportation Facility</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-money-bill-simple"></i><span className="amen">ATM/cash machine on site</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-broom"></i><span className="amen">Daily housekeeping</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-shirt"></i><span className="amen">Laundry service</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-bowl-rice"></i><span className="amen">Continental breakfast</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-utensils"></i><span className="amen">Restaurant</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-elevator"></i><span className="amen">Elevator</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-mug-hot"></i><span className="amen">Coffee shop</span></li></div>
                  <div class="col"><li><i class="fa-solid fa-wheelchair"></i><span className="amen">Facilities for disabled guests</span></li></div>

          </div>

        </div>
        <div className="segment">
          <h3 className="bold">
          Hotel Policies
          </h3>
          <hr></hr>
          <h4 className="allpolicy">
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
              Individual aged 18 and above are required to present a valid Photo ID ( passport, driver’s license, government-issued photo ID etc) at the time of check-in.     
          </li>
          <li>
          Along with the Government issued ID proof, you will also have to carry the itinerary on your phone or Tab or a printout will do.          
          </li>
          </ul>
          </h4> 
        
        </div>
        <div className="segment">
          <h3 className="bold">
            <span>Map</span>
          </h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelinfo;
