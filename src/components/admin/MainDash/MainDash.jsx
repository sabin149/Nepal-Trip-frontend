import React from "react";
import Cards from "../Cards/Cards";
import VendorInfoTable from "../Table/VendorInfoTable";
import "./MainDash.css";

const MainDash = ({hotel,token}) => {
  return (
    <div className="MainDash">
      <Cards hotel={hotel} token={token} />
      <VendorInfoTable hotel={hotel} token={token}/>
    </div>
  );
};

export default MainDash;
