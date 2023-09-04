import React from "react";
import "./styles/HeaderCreateMenu.css";
import imagecreatemenu from "../../assets/3d-avocado-and-orange.png";

function HeaderCreateMenu() {
  return (
    <div className="container-headerhome">
      <div className="container-headerhome-orange">
        <div className="container-headerhome-title">
          <img className="image-headercreatemmenu" src={imagecreatemenu} alt="" />
          <div className="headerhome-title">
            <h1>CREATION DE MENU</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCreateMenu;