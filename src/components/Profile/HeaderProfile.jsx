import React from "react";
import "./styles/HeaderProfile.css";
import KidPortrait from "../../assets/kid-portrait.png";

function HeaderProfile() {
  return (
    <div className="container-headerprofile">
        <div className="headerprofile-picture">
            <img className="image-titouan" src={KidPortrait} alt="" />
        </div>
    </div>
  );
}

export default HeaderProfile;
