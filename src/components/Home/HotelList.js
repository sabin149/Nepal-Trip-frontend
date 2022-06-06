import { red } from '@mui/material/colors';
import React from 'react'
import "../../styles/hotel_list.css";
import { Paper } from '@mui/material';
import uploadImage from "../../images/hotel_image.png"

const HotelList = () => {
  return (
    <div>
        <div className="sub-header d-flex flex-row mb-3 justify-content-center align-item-center" style={{height:"100px"}}>
            <div class=" flex-px-3 app" style={{marginLeft:'20px'}}>
                <span style={{fontSize:'14px'}}>Destination</span>
                <h5 style={{fontSize:'14px'}}>Kathmandu, Nepal</h5>
                </div>
            <div class=" flex-px-3 app" >
                <span style={{fontSize:'14px'}}>Check In</span>
                <h5 style={{fontSize:'14px'}}>01 July, 2022</h5>
            </div>
            <div class="flex-px-3 app">
                <span style={{fontSize:'14px'}}>Check Out</span>
                <h5 style={{fontSize:'14px'}}>05 July, 2022</h5>
            </div>
            <div class="flex-px-3 app">
                <span style={{fontSize:'14px'}}>Rooms(2)</span>
                <h5 style={{fontSize:'14px'}}>1</h5>
            </div>
            <div class="flex-px-3 app">
                <span style={{fontSize:'14px'}}>Adults(2)</span>
                <h5 style={{fontSize:'14px'}}>2</h5>
            </div>
            <div class="flex-px-3 app">
                <span style={{fontSize:'14px'}}>Children(2)</span>
                <h5 style={{fontSize:'14px'}}>0</h5>
            </div>            
        </div>

    <div className='container'>
        <div className='row'>
            <div className='d-flex justify-content-around mx-0 mb-1' >
                <div className='col-2'>
                    
                </div>

                <div className='col-9' style={{padding:"10px", margin:"10px"}}>
                    <div className='card mb-3'>
                        <div className='row m-2 '>
                            <div className='col-5 '>
                                <div style={{
                                    fontSize:"18px",
                                     fontWeight:'500',
                                      color:"#000",
                                       marginBottom:"0",
                                        lineHeight:"18px"
                                        }}>500</div>
                                <p style={{
                                    fontSize:"14px",
                                      color:"#4A4A4A",
                                      fontWeight:'500',
                                       marginBottom:"0",
                                        lineHeight:"18px"
                                        }}
                                >Properties Found</p>
                            </div>
                            <div className='col-2' style={{
                                fontSize:'14px',
                                color:'#003c75',
                                lineHeight:"19px",
                                fontWeight:'500',
                                cursor:'pointer',
                            }}>
                                <span 
                                style={{
                                    fontSize:'14px',
                                    color:'#003c75',
                                    lineHeight:"19px",
                                    fontWeight:'500',
                                    cursor:'pointer',
                                }}>Price</span>
                            </div>

                            <div className='col-2'>
                                <span 
                                style={{
                                    fontSize:'14px',
                                    color:'#003c75',
                                    lineHeight:"19px",
                                    fontWeight:'500',
                                    cursor:'pointer',
                                }}>Rating</span>
                            </div>

                            <div className='col-3'>
                                <span
                                style={{
                                    fontSize:'14px',
                                    color:'#003c75',
                                    lineHeight:"19px",
                                    fontWeight:'500',
                                    cursor:'pointer',
                                }}
                                >Trip Advisor Rating</span>
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
                                <div className='icn-holder ' style={{cursor:"pointer"}}>
                                    
                                    <i class="fa-solid fa-ban-smoking icn"></i>
                                    <i class="fa-solid fa-taxi icn"></i>
                                    <i class="fa-solid fa-wifi icn"></i>
                                    

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
                    
                </div>

            </div>

        </div>

    </div>
    </div>
    
  )
}

export default HotelList