import React from "react";
import "../Home/header.css";
import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";


const Header = ({ isUser }) => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="w-50" />
          </Link>
        </div>
        <div className="navItems">
          <div className="hotel">
            <i className="fa-solid fa-suitcase"> </i> 
        
            <span> Hotel Booking </span>
          </div>
          <div className="flight">
            <i className="fa-solid fa-plane"> </i> 
        
            <span > Flight Booking </span>
          </div>
          {!isUser ? <button className="navButton" data-bs-toggle="modal" data-bs-target="#exampleModal"> Sign In </button> :
            <button className="navButton" onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                dispatch(logout())
                window.href = "/"
              }
            }}> Logout
              <i className="fa-solid fa-right-from-bracket" ></i>

            </button>}
          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
              <div className="modal-content" style={{ marginTop: "6rem" }}>
                <Login />
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel2" aria-hidden="true" >
            <div className="modal-dialog">
              <div className="modal-content" >
                <Register />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
