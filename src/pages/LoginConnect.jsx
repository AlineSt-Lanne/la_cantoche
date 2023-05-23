import React from "react";
import { Link } from "react-router-dom";
import "./styles/LoginConnect.css";
import imagekids from "../assets/3d-casual-kids.png";
import ButtonConnection from "../components/Connection/ButtonConnection";
import ButtonCreateAccount from "../components/Connection/ButtonCreateAccount";

function LoginConnect() {
  return (
    <div className="loginconnect-container">
      <div className="loginconnect-title">La Cantoche</div>
      <div className="div-image-loginconnect">
        <img className="image-loginconnect" src={imagekids} alt="" />
      </div>
      <div className="buttons-loginconnect">
        <div className="button-connection-loginconnect">
          <Link to="/connection">
              <ButtonConnection style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div className="button-createaccount-loginconnect">
          <Link to="/createaccount">
              <ButtonCreateAccount style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginConnect;
