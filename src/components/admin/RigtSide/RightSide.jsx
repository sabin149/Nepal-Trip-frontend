import React from "react";
import Bookingrevenue from "../BookingRevenue/BookingRevenue";
import "./RightSide.css";
import ApexChart from "../BookingRevenue/TotalBookings";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Booking Revenue</h3>
        <Bookingrevenue />
      </div>
      <div>
        <h3>Total Bookings</h3>
        <ApexChart/>
      </div>
    </div>
  );
};

export default RightSide;
