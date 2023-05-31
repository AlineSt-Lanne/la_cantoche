import React from "react";
import "./styles/Home.css";
import HeaderHome from "../components/Home/HeaderHome";
import MenuHome from "../components/Home/MenuHome";
import CardNutrition from "../components/Home/CardNutrition";
import KidEatToday from "../components/Home/KidEatToday";
import ButtonSuggestMenu from "../components/Home/ButtonSuggestMenu";
import Navbar from "../components/Home/Navbar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <HeaderHome />
      </div>
      <div className="home-container-card-menu">
        <MenuHome />
      </div>
      <div className="home-container-cardnutrition">
        <CardNutrition />
      </div>
      <div className="home-container-kideattoday">
        <KidEatToday />
      </div>
      <div className="home-container-sendmenu">
        <div className="home-title-sendmenu">Et si vous nous partagiez votre recette?</div>
        <ButtonSuggestMenu />
      </div>
      <div className="home-container-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
