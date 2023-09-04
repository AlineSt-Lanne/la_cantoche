import React from "react";
import "./styles/HeaderMenus.css";
import imageburger from "../../assets/3d-burger.png";

function HeaderMenus() {
  return (
    <div className="container-headermenus">
      <div className="container-headermenus-orange">
        <div className="container-headermenus-title">
          <img className="image-headermenus" src={imageburger} alt="" />
          <div className="headermenus-title">
            <h1>MENUS DE LA SEMAINE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenus;
