import React from "react";
import Cards from "../VendorCards/Cards";
import Table from "../VendorTable/Table";
import "./VendorMainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
