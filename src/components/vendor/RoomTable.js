import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteHotelRoom } from '../../redux/actions/roomAction';

const modalBoxstyle = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60vw',
    width: '60vw',
    // height:"100vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4, 
    borderTop: "5px solid #c48d3b",
    borderBottom:" 1px solid rgba(34,36,38,.25)",
    zIndex:1,
};

const RoomTable = ({hotel}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const token = localStorage.getItem('token');

    const handleDeleteRoom = ({ room }) => {
        if (window.confirm('Are you sure you want to delete this room?')) {
            dispatch(deleteHotelRoom({ room, token }))
            window.location.reload()
        }
    }
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
                        {/* Deluxe Room */}
                        <tbody>


                            {
                                hotel.rooms.map(room => (
                                    <tr key={room._id}  >
                                        <td className="" rowSpan="1">
                                            <h3 className="color-dark-blue bold pointer" onClick={handleOpen}> {room.room_type}</h3>
                                            <div>
                                                <Modal sx={{
                                                    overflowY: 'scroll',

                                                    width: '100%',

                                                }}
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={modalBoxstyle}>
                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            Text in a modal
                                                        </Typography>
                                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                            <Carousel images={room.room_images} />

                                                            <Typography>
                                                                {console.log(room.room_type)}

                                                            </Typography>

                                                        </Typography>
                                                    </Box>
                                                </Modal>
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