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
          <p>
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
                <div className="mainimage">
                  <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-bs-ride="true"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="https://assets.xceltrip.com/gallery-1583997472681-bf101.jpg" class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="https://assets.xceltrip.com/gallery-1583997750433-d1d99.jpg" class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="https://assets.xceltrip.com/gallery-1583998204828-65cc0.jpg" class="d-block w-100" alt="..."></img>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                  <div className="bg-light-gray pd-all-sm mh-100 box-shadow">
                      <div>
                          <h4 className="color-dark-blue bold">
                              About 
                              Hotel Da Yatra Courtyard
                          </h4>
                          <div className="caption">
                          We are a “Neoclassical Luxury Hotel” in the helm of the tourist hub of Pokhara .69 Kms from lake Fewa. The hotel offers an assortment of 46 rooms with satori evoking views of the Himalayas and lake from lake-view rooms and the terrace. Host meetings 
                          </div>
                          <span className="blue pointer">
                              <span> Read More  </span>
                              <i class="fa-solid fa-angle-right"></i>
                          </span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelinfo;
