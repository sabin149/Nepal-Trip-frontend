import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "./imgs/Logo.svg";
import { SidebarData } from "./Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
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
          <div className="menuItem">
            <Link to="/"
              onClick={() => {
                if (window.confirm('Are you sure you want to logout?')) {
                  dispatch(logout())
                }
              }}
            >
              <i className="fa-solid fa-right-from-bracket" style={{ fontSize: "1.5rem" }} id="logOutBtn"></i>
   
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
