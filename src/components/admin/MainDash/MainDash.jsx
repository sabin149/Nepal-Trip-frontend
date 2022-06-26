import React from "react";
import Cards from "../Cards/Cards";
import VendorInfoTable from "../Table/VendorInfoTable";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards />
      <VendorInfoTable/>
    </div>
  );
};

export default MainDash;
