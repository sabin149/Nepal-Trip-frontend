import React, { useEffect } from "react";
import "./AdminCards.css";
import { cardsData } from "../Data/Data";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/userAction";
import { getBookings } from "../../../redux/actions/bookingAction";
import { getReviews } from "../../../redux/actions/reviewAction";
import Card from "../Card/Card";
import moment from "moment";

const Cards = () => {

  const dispatch = useDispatch();
  const { user, hotel, review, booking } = useSelector(state => state)
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getBookings({ token }))
  }, [token, dispatch])

  useEffect(() => {
    dispatch(getUsers(token));
  }, [token, dispatch])

  useEffect(() => {
    dispatch(getReviews({ token }))
  }, [token, dispatch])

  const userCreatedDateCount = user && user?.users?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  ).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})

  const userDataInArray = Object.keys(userCreatedDateCount).map(item => {
    return userCreatedDateCount[item]
  }
  )

  const userSeries = [
    {
      name: 'Users',
      data: userDataInArray,
    }
  ]

  //hotel
  const hotelCreatedDateCount = hotel && hotel?.hotels?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  ).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})

  const hotelDataInArray = Object.keys(hotelCreatedDateCount).map(item => {
    return hotelCreatedDateCount[item]
  }
  )
  const hotelSeries = [
    {
      name: 'Hotels',
      data: hotelDataInArray,
    }
  ]

  //booking
  const bookingCreatedDateCount = booking && booking?.bookings?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  ).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})

  const bookingDataInArray = Object.keys(bookingCreatedDateCount).map(item => {
    return bookingCreatedDateCount[item]
  }
  )
  const bookingSeries = [
    {
      name: 'Bookings',
      data: bookingDataInArray,
    }
  ]

  //review
  const reviewCreatedDateCount = review && review?.reviews?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  ).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})

  const reviewDataInArray = Object.keys(reviewCreatedDateCount).map(item => {
    return reviewCreatedDateCount[item]
  }
  )
  const reviewSeries = [
    {
      name: 'Reviews',
      data: reviewDataInArray,
    }
  ]


  return (
    <div className="Admin_Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={
                card.title === "USERS" ?
                  user.count :
                  card.title === "HOTELS" ?
                    hotel.count :
                    card.title === "BOOKINGS" ?
                      booking.count :
                      card.title === "REVIEWS" ?
                        review.count :
                        "0"
              }
              png={card.png}
              series={
                card.title === "USERS" ?
                  userSeries :
                  card.title === "HOTELS" ?
                    hotelSeries :
                    card.title === "BOOKINGS" ?
                      bookingSeries :
                      card.title === "REVIEWS" ?
                        reviewSeries :
                        [5, 10, 15, 20, 25, 30, 35]
              }

            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
