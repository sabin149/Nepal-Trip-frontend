import { Button, Paper } from '@mui/material'
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavoriteHotels, UnSaveHotel } from '../../redux/actions/hotelAction';
import { getUser } from '../../redux/actions/userAction';

const FavoriteHotels = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userID')

    const favoriteHotels = useSelector(state => state?.hotel?.hotel)
    const {user}=useSelector(state=>state?.user)

    console.log(user,"feef");

    useEffect(() => {
        dispatch(getFavoriteHotels({ token }))
    }, [dispatch, token])

    useEffect(() => {
        dispatch(getUser({ id,token }))
    }, [dispatch,id,token])

    const auth = {
        token,
        user
    }

    const handleUnSave=({hotel})=>{
      if(window.confirm("Are you sure you want to unsave this hotel?")){
        dispatch(UnSaveHotel({auth,hotel}))
        window.location.reload()
      }
    }

    return (
        <>
            <div className="container">
                <div className="row d-block mt-4  mx-5"> <p className='h2 text-center'>My Favorites</p>
                    <hr />
                    <div className="d-flex justify-content-center align-content-center">
                        {
                            favoriteHotels.length > 0 && favoriteHotels?.map(hotel => {
                                return <Paper className="card hotel-card" elevation={3} key={hotel._id} style={{
                                    width: '18rem',
                                    margin: '1rem'

                                }} >
                                    <img
                                        src={hotel?.hotel_images[0]?.url}
                                        alt="projectimages"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <h3>
                                        <div
                                            className="my-2 hotel-name"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {hotel?.hotel_name}
                                        </div>
                                    </h3>
                                    <div className="mb-2 text-capitalize hotel-address">
                                        {hotel?.address}, Nepal
                                    </div>

                                    <Button
                                        variant="contained"
                                        color="error"
                                        className="mt-2"
                                        onClick={() => handleUnSave({hotel})}
                                    >
                                        Delete
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="mt-2"
                                        id="viewBtn"
                                        onClick={() => {
                                            navigate(`/hotellist?address=${hotel.address}&startDate=${moment(new Date(),).format()}&endDate=${moment(new Date(new Date().setDate(new Date().getDate() + 1))).format()}&adult=${1}&children=${0}&room=${0}`)
                                        }}
                                    >
                                        View
                                    </Button>

                                </Paper>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavoriteHotels