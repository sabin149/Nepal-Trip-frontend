import React from "react";
import "./Cards.css";
import { cardsData } from "../../VendorData/VendorData";

import Card from "../VendorCard/Card";
import moment from "moment";

const Cards = ({ hotel, booking }) => {

  const userID = localStorage.getItem('userID');

  const hotels = hotel?.hotels

  const oneHotel = hotels && hotels.filter(hotel => hotel?.user?._id === userID)[0];


  const hotelReviewsUsers = oneHotel && oneHotel?.hotel_reviews && oneHotel?.hotel_reviews?.map(review => review?.user)

  const bookingUsers = booking?.bookings && booking?.bookings && booking?.bookings?.map(booking => booking?.user)

  let allUsers = []

  if (bookingUsers !== undefined && hotelReviewsUsers !== undefined) {
    allUsers = [...bookingUsers, ...hotelReviewsUsers].filter((user, index, self) =>
      index === self.findIndex((t) => (
        t?._id === user?._id
      ))
    )
  }

  const userCreatedDateCount = allUsers && allUsers?.map(item => {
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


  const userDataInArray = userCreatedDateCount !== undefined && Object.keys(userCreatedDateCount).map(item => {
    return userCreatedDateCount[item]
  }
  )

  const userSeries = [
    {
      name: 'Users',
      data: [4,7,12,15,10,18,20],
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
      data: [10,15,7,9,12,15,18],
    }
  ]

  //review
  const reviewCreatedDateCount = oneHotel && oneHotel?.hotel_reviews && oneHotel?.hotel_reviews?.map(item => {
    //  to week days
    return moment(item.createdAt).format("dddd")
  }
  )?.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    }
    else {
      acc[curr] += 1
    }
    return acc
  }
    , {})


  const reviewDataInArray = reviewCreatedDateCount !== undefined && Object?.keys(reviewCreatedDateCount)?.map(item => {
    return reviewCreatedDateCount[item]
  }
  )
  const reviewSeries = [
    {
      name: 'Reviews',
      data: [6,4,8,13,14,9,15],
    }
  ]

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={
                card.title === "BOOKINGS" ?
                  bookingSeries :
                  card.title === "REVIEWS" ?
                    reviewSeries :
                    card.title === "USERS" ?
                      userSeries :
                      []
              }
              oneHotel={oneHotel}
              allUsers={allUsers}
              booking={booking}

            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
