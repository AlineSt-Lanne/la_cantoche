import React from "react";
import "./styles/MenuTuesday.css";
import imagechef from "../../assets/3d-chef.png";
import imagesalad from "../../assets/salad.png";
import imagemeal from "../../assets/meal.png";
import imagedessert from "../../assets/milk.png";

function MenuTuesday() {
    return (
        <div className="container-menu">
        <div className="container-home-menu-title">
            <div className="menu-title">MARDI</div>
            <img className="image-title-menumonday" src={imagechef} alt="" />
        </div>
        <div className="container-home-menu">
          <div className="container-menu-starter">
            <div className="menu-starter">
              <img className="image-starter" src={imagesalad} alt="" />
              <div className="title-starter">Entrée</div>
        </div>
            <div className="info-starter">Beurre de sardines</div>
          </div>
          <div className="container-menu-meal">
            <div className="menu-meal">
              <img className="image-meal" src={imagemeal} alt="" />
              <div className="title-meal">Plat</div>
            </div>
            <div className="info-meal">Rôti de dinde sauce chasseur et brocolis</div>
          </div>    
          <div className="container-menu-dessert">
            <div className="menu-dessert">
              <img className="image-dessert" src={imagedessert} alt="" />
              <div className="title-dessert">Dessert et produit laitier</div>
            </div>
            <div className="info-dessert">Semoule au lait fermier</div>
          </div>
        </div>
      </div>
    );
  }
  
export default MenuTuesday;