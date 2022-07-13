import React, { useEffect, useState } from 'react';
import { Button, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveHotel, UnSaveHotel } from '../../../redux/actions/hotelAction';
import { getUser } from '../../../redux/actions/userAction';

const SearchedHotelList = ({ hotelData, searchInfoData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { user } = useSelector(state => state.user)

    const [saved, setSaved] = useState(false)
    const [saveLoad, setSaveLoad] = useState(false)

    const userID = localStorage.getItem("userID")
    const token = localStorage.getItem("token")

    // const hotelList= hotelData.hotels.map(hotel => hotel  )
    // console.log(hotelList);

    const auth = {
        token,
        user
    }

    useEffect(() => {
        dispatch(getUser({ id: userID, token }))
    }, [dispatch, token, userID])

    // const dynamicStyle = saved ? "fa-solid fa-heart h2" : "fa-solid fa-heart text-danger h2"

    const handleSaveHotel = ({ hotel }) => {
        if (auth?.user?.favourites?.includes(hotel._id)) {
            setSaved(false)
            dispatch(UnSaveHotel({ hotel, auth }));
        } else {
            setSaved(true)
            dispatch(saveHotel({ hotel, auth }));

        }
    }

    return (
        <>
            <div className="col-lg-9 search-result">
                <Paper className="card mb-3" elevation={3}>
                    <div className="card-body">
                        <div className=" row m-2 ">
                            <div className="col-md-1 d-flex justify-content-center">
                                <h3>
                                    {hotelData?.hotels?.length > 0
                                        ? hotelData?.hotels?.length
                                        : 0}
                                </h3>
                                <div
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        color: "#000",
                                        marginBottom: "0",
                                        lineHeight: "18px",
                                    }}
                                ></div>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center">
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "#4A4A4A",
                                        fontWeight: "500",
                                        marginBottom: "0",
                                        lineHeight: "18px",
                                    }}
                                >
                                    Properties Found
                                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <div
                                    className="col-6"
                                    style={{
                                        fontSize: "14px",
                                        color: "#003c75",
                                        lineHeight: "19px",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "14px",
                                            color: "#003c75",
                                            lineHeight: "19px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span>
                                            Price
                                        </span>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <span
                                        style={{
                                            fontSize: "14px",
                                            color: "#003c75",
                                            lineHeight: "19px",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Rating
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
                {hotelData && hotelData?.hotels?.map(
                    (hotel) => {

                        return hotel.hotel_validity === true && (
                            <Paper key={hotel._id} className="card hotel-card" elevation={2}>
                                <div className="row">
                                    <div className="col-md-4 img-holder">
                                        <img
                                            src={
                                                hotel.hotel_images[0].url
                                                    ? hotel.hotel_images[0].url
                                                    : hotel.hotel_images[0]
                                            }
                                            alt="projectimages"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <span style={{
                                            position: "relative",
                                            top: "-10rem",
                                            left: "11rem",
                                            right: "0",
                                            bottom: "0",
                                        }}>
                                            {

                                                auth.user.favourites.includes(hotel._id) ? <i className="fa-solid fa-heart text-danger h2"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleSaveHotel({ hotel })
                                                    }} style={{
                                                        cursor: "pointer",
                                                    }} /> :
                                                    <i className="fa-solid fa-heart  h2"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleSaveHotel({ hotel })
                                                        }
                                                        } style={{
                                                            cursor: "pointer",
                                                        }} />

                                            }
                                        </span>
                                    </div>
                                    <div className="col-md-5 hotel_detail">
                                        <h3>
                                            <div
                                                className="mt-2 mb-2 hotel-name"
                                                style={{ cursor: "pointer" }}
                                            >
                                                {hotel.hotel_name}
                                            </div>
                                        </h3>
                                        <div className="mb-2 text-capitalize hotel-address">
                                            {hotel.address}
                                        </div>
                                        <div
                                            className="mb-2"
                                            style={{ color: "#2374c2", fontSize: "14px" }}
                                        >
                                            Show In Map
                                        </div>
                                        <div
                                            className="icn-holder"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {hotel.hotel_facilities.slice(0, 6).map((facility, index) => (
                                                <span key={index} className="mx-1" style={{
                                                    borderRadius: "50%",
                                                    padding: "10px",
                                                    fontSize: "12px",
                                                    border: "1px solid grey",
                                                }}>
                                                    {(facility === "freewifi") && (
                                                        <i className="h3 fa-solid fa-wifi" />
                                                    )}
                                                    {facility === "tours" && (
                                                        <i className="h3 fa-solid fa-camera" />
                                                    )}
                                                    {facility === "bar" && (
                                                        <i className="h3 fa-solid fa-cocktail" />
                                                    )}
                                                    {facility === "restaurant" && (
                                                        <i className="h3 fa-solid fa-utensils" />
                                                    )}
                                                    {facility === "pool" && (
                                                        <i className="h3 fa-solid fa-swimmer" />
                                                    )}
                                                    {facility === "gym" && (
                                                        <i className="h3 fa-solid fa-dumbbell" />
                                                    )}
                                                    {facility === "parking" && (
                                                        <i className="h3 fa-solid fa-car-park" />
                                                    )}
                                                    {facility === "airporttransfer" && (
                                                        <i className="h3 fa-solid fa-plane-departure" />
                                                    )}
                                                    {facility === "breakfast" && (
                                                        <i className="h3 fa-solid fa-bowl-spoon" />
                                                    )}
                                                    {facility === "lunch" && (
                                                        <i className="h3 fa-solid fa-plate-utensils" />
                                                    )}
                                                    {facility === "dinner" && (
                                                        <i className="h3 fa-solid fa-fork-knife" />
                                                    )}
                                                    {facility === "capservice" && (
                                                        <i className="h3 fa-solid fa-headset" />
                                                    )}
                                                    {facility === "34hrroomservice" && (
                                                        <i className="h3 fa-solid fa-clock" />
                                                    )}
                                                    {facility === "childbed" && (
                                                        <i className="h3 fa-solid fa-child" />
                                                    )}
                                                    {facility === "laundary" && (
                                                        <i className="h3 fa-solid fa-laundry" />
                                                    )}
                                                    {facility === "ticketservice" && (
                                                        <i className="h3 fa-solid fa-ticket-alt" />
                                                    )}
                                                    {facility === "medical" && (
                                                        <i className="h3 fa-solid fa-hospital" />
                                                    )}
                                                    {facility === "coffee" && (
                                                        <i className="h3 fa-solid fa-coffee" />
                                                    )}
                                                    {facility === "security" && (
                                                        <i className="h3 fa-solid fa-shield-alt" />
                                                    )}
                                                    {facility === "taxiservice" && (
                                                        <i className="h3 fa-solid fa-taxi" />
                                                    )}
                                                    {facility === "luggage" && (
                                                        <i className=" fa-solid fa-suitcase" />
                                                    )}
                                                    {facility === "wheelchair" && (
                                                        <i className=" fa-solid fa-wheelchair" />
                                                    )}
                                                    {facility === "airconditioning" && (
                                                        <i className=" fa-solid fa-snowflake" />
                                                    )}
                                                    {facility === "smoking" && (
                                                        <i className=" fa-solid fa-smoking" />
                                                    )}
                                                    {facility === "pets" && (
                                                        <i className=" fa-solid fa-dog" />
                                                    )}
                                                    {facility === "atm" && (
                                                        <i className=" fa-solid fa-atm" />
                                                    )}
                                                    {facility === "bank" && (
                                                        <i className=" fa-solid fa-bank" />
                                                    )}
                                                    {facility === "housekeeping" && (
                                                        <i className=" fa-solid fa-bed" />
                                                    )}
                                                    {facility === "elevator" && (
                                                        <i className=" fa-solid fa-elevator" />
                                                    )}
                                                </span>
                                            )
                                            )}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <p className="hotel-price">NPR {hotel.price}</p>
                                            <span style={{ color: "gray", fontSize: "12px" }}>
                                                Price per night
                                                <br></br>
                                                (excluding Taxes)
                                            </span>
                                        </div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="mt-2"
                                            onClick={() => {
                                                navigate(`/hotelinfo/${hotel._id}`, { state: { searchInfoData } });
                                            }}
                                        >
                                            CHOOSE
                                        </Button>
                                    </div>
                                </div>
                            </Paper>

                        )
                    }
                )}
            </div>
        </>
    )
}

export default SearchedHotelList