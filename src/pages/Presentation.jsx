import React from "react";
import { Link } from "react-router-dom";
import "./styles/Presentation.css";
import imagekids from "../assets/3d-casual-kids.png";
import ButtonIntro from "../components/Presentation/ButtonIntro";

function Presentation() {
  return (
    <div className="presentation-container">
      <div className="presentation-title">
        <div className="bienvenue-text">Bienvenue sur</div>
        <div className="title-app">La Cantoche</div>
      </div>
      <div className="div-image-presentation">
        <img className="image-presentation" src={imagekids} alt="" />
      </div>
      <div className="presentation-description">
        L'application créée pour vous afin de suivre au mieux l'alimentation de
        votre enfant à l'école.
      </div>
      <div className="button-presentation">
        <Link to="/loginconnect">
            <ButtonIntro style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}

export default Presentation;
