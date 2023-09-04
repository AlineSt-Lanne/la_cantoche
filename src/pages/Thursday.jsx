import React from "react";
import "./styles/Tuesday.css";
import HeaderMenu from "../components/Menus/HeaderMenus";
import MenusDays from "../components/Menus/MenusDays";
import MenuThursday from "../components/Menus/MenuThursday";
import CardNutrition from "../components/Home/CardNutrition";
import Navbar from "../components/Home/Navbar";

function Menus() {
    return (
        <div className="menus-container">
            <div className="menus-header">
                <HeaderMenu />
            </div>
            <div className="menus-title">JOURS DE LA SEMAINE</div>
            <div className="menus-menus-days">
                <MenusDays />
            </div>
            <div className="menus-menu-tuesday">
                <MenuThursday />
            </div>
            <div className="menus-cardnutrition">
                <CardNutrition />
            </div>
            <div className="menus-container-navbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Menus;