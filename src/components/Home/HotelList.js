import "./hotel_list.css";
import { useNavigate, useLocation } from 'react-router-dom';
import moment from "moment"

const HotelList = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const searchData = location.state.searchData
    const searchInfo = location.state.searchInfo

    return (
        <>
            <div className="sub-header d-flex flex-row mb-3 justify-content-center align-item-center" style={{ height: "80px" }}>
                <div className=" flex-px-3 app" style={{ marginLeft: '20px' }}>
                    <span style={{ fontSize: '14px' }}>Destination</span>
                    <h5 style={{ fontSize: '14px' }} className="text-capitalize">{searchInfo.search}, Nepal</h5>
                </div>
                <div className=" flex-px-3 app" >
                    <span style={{ fontSize: '14px' }}>Check In</span>
                    <h5 style={{ fontSize: '14px' }}> {moment(searchInfo.date.startDate).format("DD MMMM YYYY")}</h5>

                    {/* moment().format("MMMM Qo DD YYYY"); */}
                </div>
                <div className="flex-px-3 app">
                    <span style={{ fontSize: '14px' }}>Check Out</span>
                    <h5 style={{ fontSize: '14px' }}>{moment(searchInfo.date.endDate).format("DD MMMM YYYY")}</h5>
                </div>
                <div className="flex-px-3 app">
                    <span style={{ fontSize: '14px' }}>Rooms</span>
                    <h5 style={{ fontSize: '14px' }}>{searchInfo.options.room}</h5>
                </div>
                <div className="flex-px-3 app">
                    <span style={{ fontSize: '14px' }}>Adults</span>
                    <h5 style={{ fontSize: '14px' }}>{searchInfo.options.adult}</h5>
                </div>
                <div className="flex-px-3 app">
                    <span style={{ fontSize: '14px' }}>Children</span>
                    <h5 style={{ fontSize: '14px' }}>{searchInfo.options.children}</h5>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-around mx-0 mb-1' >
                        <div className='col-2'>
                        </div>

                        <div className='col-9' style={{ padding: "10px", margin: "10px" }}>
                            <div className='card mb-3'>
                                <div className='row m-2 '>
                                    <div className='col-5 '>
                                        <div style={{
                                            fontSize: "18px",
                                            fontWeight: '500',
                                            color: "#000",
                                            marginBottom: "0",
                                            lineHeight: "18px"
                                        }}>{searchData.found}</div>
                                        <p style={{
                                            fontSize: "14px",
                                            color: "#4A4A4A",
                                            fontWeight: '500',
                                            marginBottom: "0",
                                            lineHeight: "18px"
                                        }}
                                        >Properties Found</p>
                                    </div>
                                    <div className='col-2' style={{
                                        fontSize: '14px',
                                        color: '#003c75',
                                        lineHeight: "19px",
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                    }}>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: '#003c75',
                                                lineHeight: "19px",
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                            }}>Price</span>
                                    </div>

                                    <div className='col-2'>
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: '#003c75',
                                                lineHeight: "19px",
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                            }}>Rating</span>
                                    </div>


                                </div>
                            </div>
                            {
                                searchData.hotels.map((hotel) => (
                                    hotel.hotel_validity === true &&

                                    <div key={hotel._id} className='card hotel-card'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='img-holder'>
                                                    <img src={
                                                        hotel.hotel_images[0].url ? hotel.hotel_images[0].url :
                                                            hotel.hotel_images[0]
                                                    } alt="projectimages" style={{ width: "15rem" }} />
                                                </div>
                                            </div>
                                            <div className='col-md-5 hotel_detail' >
                                                <h4>
                                                    <div className='mt-2 mb-2' style={{ cursor: "pointer" }}>
                                                        {hotel.hotel_name}
                                                    </div>
                                                </h4>
                                                <div className='mb-2 text-capitalize'>
                                                    {hotel.address}
                                                </div>
                                                <div className='mb-2' style={{ color: '#2374c2', fontSize: '14px' }}>
                                                    Show In Map
                                                </div>
                                                <div className='icn-holder' style={{ cursor: "pointer" }}>
                                                    {
                                                        hotel.hotel_facilities.map((facility, index) =>

                                                            <span key={index}>

                                                                {
                                                                    facility === "good" &&
                                                                    <i className="fa-solid fa-wifi"></i>

                                                                }
                                                                {
                                                                    facility !== "good" &&

                                                                    <i className="fa-solid fa-bed"></i>

                                                                }
                                                                {/* {       
                                                                        facility==="noice" &&
                                                                        <i className="fa-solid fa-pen"></i>
                                                                    

                                                                } */}

                                                                {facility}
                                                            </span>

                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div>
                                                    <p className='hotel-price'>
                                                        NPR {hotel.price}
                                                    </p>
                                                    <span style={{ color: "gray", fontSize: "12px" }}>Price per night
                                                        <br></br>
                                                        (excluding Taxes)
                                                    </span>
                                                </div>
                                                <button className="button btn btn-primary" onClick={() => {
                                                    navigate(`/hotelinfo/${hotel._id}`, { state: { hotel: hotel, searchInfo } })

                                                }}>CHOOSE</button>
                                            </div>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>


                    </div>

                </div>

            </div>



        </>

    )
}

export default HotelList