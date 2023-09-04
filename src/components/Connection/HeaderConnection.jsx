import React from "react";
import "./styles/HeaderConnection.css";
import ButtonReturn from "./ButtonReturn";

function HeaderConnection() {
  return (
    <div className="container-headerconnection">
        <div className="container-headerconnection-orange">
            <div className="headerconnection-arrow-return">
                <ButtonReturn />
            </div>
            <div className="container-headerconnection-title">
                <div className="headerconnection-title">SE CONNECTER</div>
            </div>
        </div>
    </div>
  );
}

export default HeaderConnection;
