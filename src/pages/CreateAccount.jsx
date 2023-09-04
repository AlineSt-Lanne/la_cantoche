import React from "react";
import "./styles/CreateAccount.css";
import { Link } from "react-router-dom";
import HeaderCreateAccount from "../components/CreateAccount/HeaderCreateAccount";
import ButtonValidate from "../components/CreateAccount/ButtonValidate";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function CreateAccount() {
  return (
    <div className="createaccount-container">
      <div className="createaccount-header">
        <HeaderCreateAccount />
      </div>
      <div className="createaccount-form">
        <form className="createaccount-form-input">
          <input
            className="inputemailcreateaccount"
            type="text"
            name="email"
            id="email"
            placeholder="Entrez votre email" />
          <input
            className="inputpasswordcreateaccount"
            type="text"
            name="password"
            id="password"
            placeholder="Entrez votre mot de passe" />
            <input
            className="inputpasswordcreateaccount"
            type="text"
            name="password"
            id="password"
            placeholder="Confirmez votre mot de passe" />
            <Link to="/home">
              <ButtonValidate style={{ cursor: "pointer" }} />
            </Link>
        </form>
      </div>
      <div className="createaccount-separation">
        <div className="separation-trait1"></div>
        <div className="separation-text">ou</div>
        <div className="separation-trait2"></div>
      </div>
      <div className="createaccount-socialnetworks">
        <div className="socialnetworks-text">Avec les réseaux sociaux</div>
        <div className="socialnetworks-icons">
          <FaGoogle className="svg-icons-gmail" />
          <FaFacebook className="svg-icons-apple" />
          <FaApple className="svg-icons-apple" />
        </div>
      </div>
      <div className="createaccount-texte">
        <div className="createaccount-texte-question">Vous avez déjà un compte?</div>
        <Link to="/connection">
          <div className="createaccount-texte-connect">Se connecter</div>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;