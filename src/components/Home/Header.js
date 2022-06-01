import React from "react";
import "../Home/header.css";


const Header = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <img src="images/"alt="logo" />
          </div>
        <div className="navItems">
          <div className="hotel">
          <i class="fa-solid fa-suitcase"> </i> <span> Hotel Booking </span>{" "}
          </div>
          <div className="flight">
          <i class="fa-solid fa-plane"> </i> <span> Flight Booking </span>{" "}
          </div>
          <button className="navButton"> Sign In </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
