import React from "react";
import "./styles/HeaderConnection.css";
import ButtonReturn from "./ButtonReturn";

function HeaderConnection() {
  return (
    <div className="container-header">
        <div className="container-header-orange">
            <div className="header-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-header-title">
                <div className="header-title">SE CONNECTER</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderConnection;
