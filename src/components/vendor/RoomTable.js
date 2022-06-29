import React, { useState } from 'react'
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteHotelRoom } from '../../redux/actions/roomAction';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const RoomTable = ({ hotel }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');

    const handleDeleteRoom = ({ room }) => {
        if (window.confirm('Are you sure you want to delete this room?')) {
            dispatch(deleteHotelRoom({ room, token }))
            window.location.reload()
        }
    }

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleClickOpen = ({ scrollType, room }) => () => {
        setOpen(true);
        setScroll(scrollType);
        setSelectedRoom(room);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            <div className="row pricetable">
                <div className="col-lg-8 pricehotel">
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th scope="col"> <span className=""> Room Type</span> </th>
                                <th scope="col">Options</th>
                                <th scope="col">Price Per Night </th>
                                <th scope="col">Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                hotel.rooms.map(room => (
                                    <tr key={room._id}  >
                                        <td className="" rowSpan="1">
                                            <h3 className="color-dark-blue bold pointer" onClick={handleClickOpen({ scrollType: 'body', room })} style={{
                                                display:"inline-table"
                                                
                                            }}> {room.room_type}</h3>
                                            <Dialog sx={{
                                             
                                                backgroundBlendMode: "darken",
                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                borderTop: "1px solid rgba(0,0,0,0.1)",
                                            }}
                                                open={open}
                                                onClose={handleClose}
                                                scroll={scroll}
                                                aria-labelledby="scroll-dialog-title"
                                                aria-describedby="scroll-dialog-description"
                                            >
                                               <div className="room_header">
                                               <h4 className='mt-3 align-left' style={{
                                                    color:"black",
                                                    lineHeight:"1.2em",
                                                    fontSize: "1.28em",
                                                
                                                }}>Room Details</h4>
                                               </div>
                                          
                                                <h3 className='color-dark-blue' style={{
                                                    marginLeft: "20px",
                                                    fontWeight:"500",
                                                    fontSize: "2.2rem",
                                                }}>{selectedRoom?.room_type}</h3>
                                                <DialogContent dividers={scroll === 'paper'}>

                                                    <Carousel images={selectedRoom?.room_images} />
                                                </DialogContent>
                                                <div className="amenities m-0">
                                                    <hr></hr>

                                                    <div className="row row-cols-2">
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-wifi"></i>

                                                                <span className="amen">
                                                                    24hrs Free Wi-Fi
                                                                </span>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-shirt"></i>

                                                                <span className="amen">Restaurant</span>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-smoking"></i>
                                                                <span className="amen">
                                                                    Smoking Area Available
                                                                </span>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-car"></i>

                                                                <span className="amen">
                                                                    Transportation Facility
                                                                </span>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-bed"></i>

                                                                <span className="amen">
                                                                    Twin Bed
                                                                </span>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li>
                                                                <i className="fa-solid fa-bath"></i>

                                                                <span className="amen">
                                                                    Bath
                                                                </span>
                                                            </li>
                                                        </div>

                                                    </div>
                                                </div>

                                            </Dialog>

                                            <div className="image-holder bg-light-gray height160">
                                                <img className="room-image" src={room.room_images[0].url} alt="roomimage" />
                                            </div>
                                            <div>

                                                <ul className="mg-top-sm ">
                                                    <li>
                                                        <i className="fa-solid fa-hot-tub-person"></i>

                                                        <span className="amen">Hot Tub</span></li>
                                                    <li>
                                                        <i className="fa-solid fa-wifi"></i>


                                                        <span className="amen">Free Wi-Fi</span></li>
                                                    <li>
                                                        <i className="fa-solid fa-smoking"></i>

                                                        <span className="amen">Smoking Area</span></li>
                                                    <li>
                                                        <i className="fa-solid fa-bowl-rice"></i>

                                                        <span className="amen">Free Breakfast</span></li>
                                                    <li>
                                                        <i className="fa-solid fa-car"></i>


                                                        <span className="amen">Transport</span></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="">
                                            <h4 className="bold">FREE Breakfast</h4>
                                            <h5 className="mg-top-0">Non-refundable</h5>
                                            <div>
                                                <ul className="checklist">
                                                    <li>
                                                        <i className="fa-solid fa-check"></i>


                                                        <span className="listoffer">Breakfast</span>
                                                    </li>
                                                </ul>
                                                <ul className="checklist">
                                                    <li>
                                                        <i className="fa-solid fa-check"></i>

                                                        <span className="listoffer">10% discount on food <br></br> and beverage</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td className="">
                                            <div className="align-right">
                                                <div></div>
                                                <br></br>
                                                <div className="text-center"> <span className="color-green bold text-center">{room.room_price} NPR</span></div>
                                            </div>
                                        </td>

                                        <td className="d-flex justify-content-around align-content-between mt-5">
                                            <span onClick={() => {
                                                navigate(`/editRoomDetails/${room._id}`, {
                                                    state: {
                                                        room
                                                    }
                                                })
                                            }}>
                                                <i className="fa-solid fa-pen-to-square text-success h5" style={{ cursor: "pointer" }}></i>

                                            </span>
                                            <span onClick={() => {
                                                handleDeleteRoom({ room })
                                            }}>
                                                <i className="fa-solid fa-trash-can text-danger h5" style={{ cursor: "pointer" }}></i>

                                            </span>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default RoomTable