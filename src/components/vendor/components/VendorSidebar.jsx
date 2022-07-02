import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/Logo.svg";
import { SidebarData } from "../VendorData/VendorData";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Sidebar = ({hotel, token,booking}) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link to={item.path} className="text-decoration-none text-dark">
                  <item.icon />
                  <span>{item.heading}</span>
                </Link>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <Link
              to="/"
              onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  dispatch(logout());
                }
              }}
            >
              <i
                className="fa-solid fa-right-from-bracket"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
