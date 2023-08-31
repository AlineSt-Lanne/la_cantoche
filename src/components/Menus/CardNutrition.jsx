import React from "react";
import "./styles/MenuMonday.css";
import cardnutrition from "../../assets/cardnutrition.png";

function CardNutrition() {
    return (
        <div className="container-cardnutrition">
            <div className="container-infos-cardnutrition">
                <div className="cardnutrition-title">APPORTS.NUTRITIFS</div>
                <img className="image-cardnutrition" src={cardnutrition} alt="" />
            </div>
      </div>
    );
  }
  
export default CardNutrition;