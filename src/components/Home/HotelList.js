import { red } from '@mui/material/colors';
import React from 'react'
import "../../styles/hotel_list.css";
import { Paper } from '@mui/material';
import uploadImage from "../../images/hotel_image.png"

const HotelList = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='d-flex justify-content-around mx-0 mb-1' >
                <div className='col-2'>
                    <h3>col 1</h3>
                </div>

                <div className='col-9' style={{padding:"10px", margin:"10px"}}>
                    <div className='card'>
                        <div className='row'>
                            <div className='col-9'>
                                <h5>500</h5>
                                <p>Properties Found</p>
                            </div>

                        </div>
                    </div>

                    <div className='card hotel-card'>
                        <div className='row'>
                            <div className='col-md-4'>
                            <div className='img-holder'>
                                <img src={uploadImage} alt="..." style={{width:"15rem"}} />
                            </div>
                            </div> 
                            <div className='col-md-5'>
                                <h4>
                                    <div  className='mt-2 mb-2' style={{cursor:"pointer"}}>
                                        Maya Manor Boutiqu Hotel
                                    </div>
                                </h4>
                                <div className='mb-2'>
                                Hattisar Road, Kathmandu
                                </div>
                                <div className='mb-2' style={{color:'#2374c2',fontSize:'14px'}}>
                                    Show In Map
                                </div>
                                <div className='icn-holder' style={{cursor:"pointer"}}>
                                    <span>aaa</span>
                                    <span>bbb</span>
                                    <span>ccc</span>
                                </div>
                            </div>
                            <div className='col md-3'>
                                <div>
                                    <p className='hotel-price'>
                                        7500 NPR
                                    </p>
                                    <span style={{color:"gray",fontSize:"12px"}}>Price per night 
                                    <br></br>
                                    (excluding Taxes)
                                    </span>
                                </div>
                                <button class="button" className='bt'>CHOOSE</button> 
                            </div>
                        </div>
                    </div>

                    <div className='card ' >
                        <div className='row'>
                            <div className='col-md-4'>
                            <div className='img-holder'>
                                <img src={uploadImage} alt="..." style={{width:"15rem"}} />
                            </div>
                            </div> 
                            <div className='col-md-5 '>
                                <h4>
                                    <div  className='mt-2 mb-2' style={{cursor:"pointer"}}>
                                        Maya Manor Boutiqu Hotel
                                    </div>
                                </h4>
                                <div className='mb-2'>
                                Hattisar Road, Kathmandu
                                </div>
                                <div className='mb-2' style={{color:'#2374c2',fontSize:'14px'}}>
                                    Show In Map
                                </div>
                                <div className='icn-holder' style={{cursor:"pointer"}}>
                                    <span>aaa</span>
                                    <span>bbb</span>
                                    <span>ccc</span>
                                </div>
                            </div>
                            <div className='col md-3'>
                                <div>
                                    <p className='hotel-price'>
                                        7500 NPR
                                    </p>
                                    <span style={{color:"gray",fontSize:"12px"}}>Price per night 
                                    <br></br>
                                    (excluding Taxes)
                                    </span>
                                </div>
                                <button class="button" className='bt'>CHOOSE</button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1'>
                    <h3>col 3</h3>
                </div>

            </div>

        </div>

    </div>
    
  )
}

export default HotelList