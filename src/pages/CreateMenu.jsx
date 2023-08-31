import React from "react";
import "./styles/CreateMenu.css";
import HeaderCreateMenu from "../components/CreateMenu/HeaderCreateMenu";
import CardCreateMenu from "../components/CreateMenu/CardCreateMenu";
import ButtonSendMenu from "../components/CreateMenu/ButtonSendMenu";
import Navbar from "../components/Home/Navbar";

function CreateMenu() {
  return (
    <div className="createmenu-container">
        <div className="home-header">
            <HeaderCreateMenu />
        </div>
        <div className="createmenu-infos">
            <p className="createmenu-text">Bonjour!</p>
            <p className="createmenu-text">Vous pouvez soumettre ici vos idées et créations de menu afin de contribuer à la vie de la cantine.</p>
        </div>
        <div className="createmenu-cardcreatemenu">
            <CardCreateMenu />
        </div>
        <div className="createmenu-sendmenu">
            <ButtonSendMenu />
        </div>
        <div className="createmenu-container-navbar">
            <Navbar />
        </div>
    </div>
  );
}

export default CreateMenu;
