import React from "react";
import "./styles/Menus.css";
import HeaderMenu from "../components/Menus/HeaderMenus";
import MenusDays from "../components/Menus/MenusDays";
import MenuMonday from "../components/Menus/MenuMonday";
import CardNutrition from "../components/Home/CardNutrition";
import Navbar from "../components/Home/Navbar";

function Menus() {
    return (
        <div className="menus-container">
            <div className="menus-header">
                <HeaderMenu />
            </div>
            <div className="menus-title">
                <h2 className="menus-title">JOURS DE LA SEMAINE</h2>
            </div>
            <div className="menus-menus-days">
                <MenusDays />
            </div>
            <div className="menus-menu-monday">
                <MenuMonday />
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