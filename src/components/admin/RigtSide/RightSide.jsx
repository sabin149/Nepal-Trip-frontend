import React from "react";
import Bookingrevenue from "../BookingRevenue/BookingRevenue";
import "./AdminRightSide.css";
import HotelsByDate from "../BookingRevenue/HotelsByDate";

const RightSide = ({hotel,booking}) => {
  return (
    <div className="RightSide">
      <div>
        <h3>Booking Revenue</h3>
        <Bookingrevenue booking={booking}/>
      </div>
      <div>
        <h3>Total Bookings</h3>
        <HotelsByDate hotel={hotel}/>
      </div>
    </div>
  );
};

export default RightSide;
