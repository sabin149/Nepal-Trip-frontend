import React from "react";
import Cards from "../VendorCards/Cards";
import VendorBookingsTable from "../VendorTable/Table";
import "./VendorMainDash.css";
const MainDash = ({hotel,token,booking}) => {
  return (
    <div className="MainDash">
      <Cards  hotel={hotel} token={token} booking={booking} />
      <VendorBookingsTable hotel={hotel} token={token} booking={booking}/>
    </div>
  );
};

export default MainDash;
