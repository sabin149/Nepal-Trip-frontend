import React from 'react'
import './hotelinfo.css'
import { Link,useLocation } from 'react-router-dom'


const Hotelinfo = () => {
    const location=useLocation()

    const hotel=location.state.hotel
    console.log(hotel);
  return (
    <div className='main_content'>
        <div className='search_result'>
            <div className="search_result nav">
      <div className="search_result navContainer">
        <div className='flex py-2'>
            <div className='px-3'>
                <p>
                    <span>
                        Destination
                    </span>
                </p>
                <h5> Hotel  Da Yatra </h5>
            </div>
            <div className='px-3'>
                <p>
                    <span>
                    Check In
                    </span>
                </p>
                <h5> 01 June, 2022 </h5>
            </div>
            <div className='px-3'>
                <p>
                    <span>
                    Check Out
                    </span>
                </p>
                <h5> 02 June, 2022</h5>
            </div>
            <div className='px-3'>
                <p>
                    <span>
                    Room(s)
                    </span>
                </p>
                <h5> 1 </h5>
            </div>
            <div className='px-3'>
                <p>
                    <span>
                    Adult(s)
                    </span>
                </p>
                <h5> 1 </h5>
            </div>
            <div className='px-3'>
                <p>
                    <span>
                    Children(s)
                    </span>
                </p>
                <h5> 0 </h5>
            </div>
            <button className='ml-4 primary-b'>
                <span> Modify Search</span>
            </button>
        </div>
             </div>
            </div>
        </div>
        <div className='second-nav d-flex'>
                            <div className='Item'>
                                <Link to="">
                                    <span>Overview </span>
                                </Link>
                            </div>
                            <div className='Item'>
                                <Link to="">
                                    <span>Room Info & price</span>
                                </Link>
                            </div>
                            <div className='Item'>
                                <Link to="">
                                    <span> Hotel Amenities</span>
                                </Link>
                            </div>
                            <div className='Item'>
                                <Link to="">
                                    <span>Hotel Policies</span>
                                </Link>
                            </div>                 
            </div>
        <span> </span>
        <div className="container pd-top-md">
            <div>
                <h2>Hotel Da Yatra Courtyard</h2>
                <p>Street no 15, Lakeside  
                    <Link to="" className="block-in-mobile">
                    <i className="fa-solid fa-location-dot"></i>
                    <span> view in map </span>
                    </Link>
                </p>
                <div className='carousel'>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='mainimage'>
                                <img src='https://assets.xceltrip.com/gallery-1583997472633-34394.jpg' alt='hotel_image'/>
                            </div>
                        </div>
                        <div className="col-6 col-lg-4">.col-6 .col-lg-4</div>
                        </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default  Hotelinfo