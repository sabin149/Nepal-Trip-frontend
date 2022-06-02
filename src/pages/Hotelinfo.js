import React from 'react'
import '../styles/hotelinfo.css'

export const Hotelinfo = () => {
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
            <button class='ml-4 primary-b'>
                <span> Modify Search</span>
            </button>
        </div>
      </div>
            </div>
        </div>
        <div className='second-nav'>
                <div class="container clearfix">
                    <div class="float-left">
                        <div className='menu'>
                            <div className='Item'>
                                <a>
                                    <span>Overview </span>
                                </a>
                            </div>
                            <div className='Item'>
                                <a>
                                    <span>Room Info & price</span>
                                </a>
                            </div>
                            <div className='Item'>
                                <a>
                                    <span> Hotel Amenities</span>
                                </a>
                            </div>
                            <div className='Item'>
                                <a>
                                    <span>Hotel Policies</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        <span> </span>
        {/* <div class="container pd-top-md">
            <div>
                <h2>Hotel Da Yatra Courtyard</h2>
                <p>Street no 15, Lakeside  
                    <a class="block-in-mobile">
                    <i class="fa-solid fa-location-dot"></i>
                    <span> view in map </span>
                    </a>
                </p>
                <div className='carousel'>
                    <div class="row">
                        <div class="col-lg-8">
                            <div className='mainimage'>
                                <img src='https://assets.xceltrip.com/gallery-1583997472633-34394.jpg' alt='hotel image'/>
                            </div>
                        </div>
                        <div class="col-6 col-lg-4">.col-6 .col-lg-4</div>
                        </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}
