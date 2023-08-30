import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

function Navbar() {
  return (
    <div className="container-navbar">
        <NavLink to="/home">
            <FaHome className="svg-icons-home" />
        </NavLink>
        <NavLink to="/home">
            <FaUtensils className="svg-icons-utensils" />
        </NavLink>
        <NavLink to="/home">
            <GiCook className="svg-icons-cook" />
        </NavLink>
        <NavLink to="/home">
            <FaEnvelope className="svg-icons-envelope" />
        </NavLink>
        <NavLink to="/profile">
            <IoMdContact className="svg-icons-profile" />
        </NavLink>
    </div>
  );
}

export default Navbar;
