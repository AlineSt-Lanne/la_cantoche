import React from "react";
import "./styles/HeaderCreateAccount.css";
import ButtonReturn from "../Connection/ButtonReturn";

function HeaderCreateAccount() {
  return (
    <div className="container-header">
        <div className="container-header-orange">
            <div className="header-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-header-title">
                <div className="header-title">CRÉEE SON COMPTE</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderCreateAccount;
