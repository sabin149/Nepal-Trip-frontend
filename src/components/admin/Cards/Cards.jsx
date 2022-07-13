import React, { useEffect } from "react";
import "./AdminCards.css";
import { cardsData } from "../Data/Data";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/userAction";
import { getBookings } from "../../../redux/actions/bookingAction";
import { getReviews } from "../../../redux/actions/reviewAction";
import Card from "../Card/Card";


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

  return (
    <div className="Admin_Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              user
              hotel
              review
              booking
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
