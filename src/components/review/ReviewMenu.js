import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteComment } from '../../../redux/actions/commentAction'

const ReviewMenu = ({ hotel, review, setOnEdit }) => {

    const userID = localStorage.getItem('userID')
    const dispatch = useDispatch()

    // if(hotel?.user?._id === userID){
    //     console.log("hotel?.user?._id === userID")

    // }else{
    //     console.log("hotel?.user?._id !== userID")
    //     console.log(hotel?.user?._id)
    //     console.log("object");
    //     console.log(userID);
    // }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemove = () => {
        setAnchorEl(null);
        if (hotel.user._id === userID || review.user._id === userID) {
            // dispatch(deleteComment({hotel, auth, comment}))
        }
    }

    return (
        <div className="menu">
            {
                (review?.user?._id === userID) &&
                <div className="nav-item dropdown">
                    <span id="moreLink" data-toggle="dropdown" >
                        <i className="fa-solid fa-ellipsis-vertical" aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu} />
                    </span>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                          {   review?.user?._id === userID? 
                          <div>
                             <MenuItem onClick={() => {
                                setAnchorEl(null);
                                setOnEdit(true)

                            }}> <span><i className="fa-solid fa-pen-to-square me-1"></i></span>Edit</MenuItem>
                            <MenuItem onClick={handleRemove}> <span><i className="fa-solid fa-trash me-1"></i></span> Remove</MenuItem>
                            </div>:
                            <div>
                            <MenuItem onClick={() => {
                                setAnchorEl(null);
                                setOnEdit(true)

                            }}> <span><i className="fa-solid fa-trash me-1"></i></span>Remove</MenuItem>
                            </div>
                            }
                        </Menu>

                    

                </div>
            }

        </div>
    )
}

export default ReviewMenu
