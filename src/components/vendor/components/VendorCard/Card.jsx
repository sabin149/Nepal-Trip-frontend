import React, { useEffect, useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { getBookingsByHotel } from "../../../../redux/actions/bookingAction";
import { useDispatch,useSelector } from "react-redux";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};


function CompactCard({ param, setExpanded }) {
  const dispatch = useDispatch();
  const token=localStorage.getItem("token");
  const Png = param.png;

  const userID = localStorage.getItem('userID');

  const hotels = param?.hotel?.hotels

  const {booking}=useSelector(state=>state);

  const oneHotel = hotels && hotels.filter(hotel => hotel?.user?._id === userID)[0];

  useEffect(() => {
    dispatch(getBookingsByHotel({ hotelId: oneHotel?._id, token }));
}, [dispatch, oneHotel, token])

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

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        {param.title === 'USERS' ?
          allUsers.length:
          param.title === 'HOTELS' ?
            "1" :
            param.title === 'BOOKINGS' ?
              booking.bookings.length :
              param.title === 'REVIEWS' ?
                oneHotel?.hotel_reviews?.length :
                "0"}
        <span>Total</span>
      </div>
    </motion.div>
  );
}
// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2019-10-14T06:30:00.000Z",
          "2020-09-19T06:30:00.000Z",
          "2021-09-19T06:30:00.000Z",
          "2022-09-19T06:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
          "2024-09-19T06:30:00.000Z",
          "2025-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;