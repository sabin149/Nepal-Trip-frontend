import React from "react";
import Cards from "../VendorCards/Cards";
import VendorBookingsTable from "../VendorTable/Table";
import "./VendorMainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards />
      <VendorBookingsTable/>
    </div>
  );
};

export default MainDash;
