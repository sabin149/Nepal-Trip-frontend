import React from 'react'
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteHotelRoom } from '../../redux/actions/roomAction';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
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
                            console.log(room),
                                    <tr key={room._id}  >
                                        <td className="" rowSpan="1">
                                            <h3 className="color-dark-blue bold pointer" onClick={handleClickOpen('body')}> {room.room_type}</h3>
                                            <div>

                                                <Dialog sx={{
                                                    zIndex:"1",
                                                    backgroundBlendMode:"darken",
                                                    backgroundColor:"rgba(0,0,0,0.5)",
                                                }}
                                                    open={open}
                                                    onClose={handleClose}
                                                    scroll={scroll}
                                                    aria-labelledby="scroll-dialog-title"
                                                    aria-describedby="scroll-dialog-description"
                                                >
                                                    <h3 className='mt-3' style={{
                                                        marginLeft:"23px",
                                                    }}>Room Details</h3>
                                                    <hr />
                                                    <DialogContent dividers={scroll === 'paper'}>
                                                       
                                                       <Carousel images={room.room_images} />
                                                    </DialogContent>

                                                </Dialog>
                                            </div>
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