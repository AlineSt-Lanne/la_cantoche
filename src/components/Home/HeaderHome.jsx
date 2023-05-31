import React from "react";
import "./styles/HeaderHome.css";
import imageplates from "../../assets/3d-plates.png";
import ButtonReturn from "../Connection/ButtonReturn";

function HeaderHome() {
  return (
    <div className="container-headerhome">
        <div className="container-headerhome-orange">
            <div className="header-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-headerhome-title">
                <img className="image-headerhome" src={imageplates} alt="" />
                <div className="headerhome-title">CE JOUR</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderHome;
