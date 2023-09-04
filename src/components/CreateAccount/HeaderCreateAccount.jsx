import React from "react";
import "./styles/HeaderCreateAccount.css";
import ButtonReturn from "../Connection/ButtonReturn";

function HeaderCreateAccount() {
  return (
    <div className="container-headercreateaccount">
        <div className="container-headercreateaccount-orange">
            <div className="headercreateaccount-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-headercreateaccount-title">
                <div className="headercreateaccount-title">CRÉER SON COMPTE</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderCreateAccount;
