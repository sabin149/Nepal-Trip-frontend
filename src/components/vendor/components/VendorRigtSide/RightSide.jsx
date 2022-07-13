import React from "react";
import Bookingrevenue from "../VendorBookingRevenue/BookingRevenue";
import "./RightSide.css";

const RightSide = ({booking}) => {
  return (
    <div className="RightSide">
      <div>
        <h3>Booking Revenue</h3>
        <Bookingrevenue booking={booking} />
      </div>
    </div>
  );
};

export default RightSide;
