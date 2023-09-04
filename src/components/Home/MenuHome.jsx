import React from "react";
import "./styles/MenuHome.css";
import imagechef from "../../assets/3d-chef.png";
import imagesalad from "../../assets/salad.png";
import imagemeal from "../../assets/meal.png";
import imagedessert from "../../assets/milk.png";

function MenuHome() {
    return (
      <div className="container-menuhome">
        <div className="container-home-menu-title">
            <div className="menuhome-title">
              <h2>MENU</h2>
            </div>
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
      </div>
    );
  }
  
export default MenuHome;