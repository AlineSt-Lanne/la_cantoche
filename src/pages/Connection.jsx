import React from "react";
import "./styles/Connection.css";
import { Link } from "react-router-dom";
import HeaderConnection from "../components/Connection/HeaderConnection";
import ButtonConnection2 from "../components/Connection/ButtonConnection2";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Connection() {
  return (
    <div className="connection-container">
      <div className="connection-header">
        <HeaderConnection />
      </div>
      <div className="connection-form">
        <form className="connection-form-input">
          <input
            className="inputemailconnection"
            type="text"
            name="email"
            id="email"
            placeholder="Entrez votre email" />
          <input
            className="inputconnectionpassword"
            type="text"
            name="password"
            id="password"
            placeholder="Entrez votre mot de passe" />
            <Link to="/home">
              <ButtonConnection2 style={{ cursor: "pointer" }} />
            </Link>
        </form>
      </div>
      <div className="connection-separation">
        <div className="separation-trait1"></div>
        <div className="separation-text">ou</div>
        <div className="separation-trait2"></div>
      </div>
      <div className="connection-socialnetworks">
        <div className="socialnetworks-text">Avec les réseaux sociaux</div>
        <div className="socialnetworks-icons">
          <FaGoogle className="svg-icons-gmail" />
          <FaFacebook className="svg-icons-apple" />
          <FaApple className="svg-icons-apple" />
        </div>
      </div>
      <div className="connection-texte">
        <div className="connection-texte-question">Vous n'avez pas de compte?</div>
        <Link to="/createaccount">
          <div className="connection-texte-createaccount">Créer un compte</div>
        </Link>
      </div>
    </div>
  );
}

export default Connection;