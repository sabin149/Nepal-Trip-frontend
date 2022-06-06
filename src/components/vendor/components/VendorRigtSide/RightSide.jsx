import React from "react";
import Bookingrevenue from "../VendorBookingRevenue/BookingRevenue";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Booking Revenue</h3>
        <Bookingrevenue />
      </div>
    </div>
  );
};

export default RightSide;
