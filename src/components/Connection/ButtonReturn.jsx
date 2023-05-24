import React from "react";
import "./styles/ButtonReturn.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ButtonReturn() {
    const navigate = useNavigate();

  return (
    <div className="container-buttonreturn">
        <div className="buttonreturn">
            <button
                className="buttonreturn"
                type="button"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className="svg-icons-return" />
            </button>
        </div>
    </div>
  );
}

export default ButtonReturn;
