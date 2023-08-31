import React from "react";
import "./styles/HeaderMenus.css";
import imageburger from "../../assets/3d-burger.png";
import ButtonReturn from "../Connection/ButtonReturn";

function HeaderMenus() {
  return (
    <div className="container-headermenus">
        <div className="container-headermenus-orange">
            <div className="header-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-headermenus-title">
                <img className="image-headermenus" src={imageburger} alt="" />
                <div className="headermenus-title">MENUS.DE.LA.SEMAINE</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderMenus;
