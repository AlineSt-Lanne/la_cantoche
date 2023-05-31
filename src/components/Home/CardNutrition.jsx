import React from "react";
import "./styles/CardNutrition.css";
import imagecardnutrition from "../../assets/cardnutrition.png";
function CardNutrition() {
  return (
    <div className="container-cardnutrition">
      <div className="container-home-cardnutrition">
            <div className="cardnutrition-title">APPORTS NUTRITIFS</div>
            <img className="image-cardnutrition" src={imagecardnutrition} alt="" />
        </div>
    </div>
  );
}

export default CardNutrition;
