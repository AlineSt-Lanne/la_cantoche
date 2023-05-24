import React from "react";
import "./styles/Home.css";
import imagechef from "../assets/3d-chef.png";
import imagesalad from "../assets/salad.png";
import imagemeal from "../assets/meal.png";
import imagedessert from "../assets/milk.png";
import HeaderHome from "../components/Home/HeaderHome";

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <HeaderHome />
      </div>
      <div className="container-card-menu">
        <div className="container-home-menu-title">
          <div className="menu-title">MENU</div>
          <img className="image-title-menu" src={imagechef} alt="" />
        </div>
        <div className="container-home-menu">
          <div className="container-menu-starter">
            <div className="menu-starter">
              <img className="image-starter" src={imagesalad} alt="" />
              <div className="title-starter">Entrée</div>
            </div>
            <div className="info-starter">Betteraves bio - vinaigrette</div>
          </div>
          <div className="container-menu-meal">
            <div className="menu-meal">
              <img className="image-meal" src={imagemeal} alt="" />
              <div className="title-meal">Plat</div>
            </div>
            <div className="info-meal">Pâtes bio à la bolognaise végétarienne</div>
          </div>
          <div className="container-menu-dessert">
            <div className="menu-dessert">
              <img className="image-dessert" src={imagedessert} alt="" />
              <div className="title-dessert">Dessert et produit laitier</div>
            </div>
            <div className="info-dessert">Gouda bio et flan caramel</div>
          </div>
        </div>
        <div className="container-card-nutrition"></div>
      </div>
    </div>
  );
}

export default Home;
