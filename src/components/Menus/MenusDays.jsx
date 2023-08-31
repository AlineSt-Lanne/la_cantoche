import React from "react";
import "./styles/MenusDays.css";
import { NavLink } from "react-router-dom";

function MenusDays() {
  return (
    <div className="container-menusdays">
        <NavLink to="/menu-monday">
            <button className="menu-monday">L</button>
        </NavLink>
        <NavLink to="/menu-tuesday">
            <button className="menu-tuesday">M</button>
        </NavLink>
        <NavLink to="/menu-thursday">
            <button className="menu-thursday">J</button>
        </NavLink>
        <NavLink to="/menu-friday">
            <button className="menu-friday">V</button>
        </NavLink>
    </div>
  );
}

export default MenusDays;
