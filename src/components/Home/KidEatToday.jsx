import React from "react";
import "./styles/KidEatToday.css";
import imagekidsbox from "../../assets/3d-boy-girl-box.png";
import imagesalad from "../../assets/salad.png";
import imagemeal from "../../assets/meal.png";
import imagedessert from "../../assets/milk.png";

function KidEatToday() {
    return (
      <div className="container-kideattoday">
        <div className="container-kideattoday-title">
            <div className="kideattoday-title">
                <h3>Qu'est ce que Titouan à manger aujourd'hui :</h3>
            </div>
            <img className="image-title-kideattoday" src={imagekidsbox} alt="" />
        </div>
        <div className="container-kideattoday-infos">
            <div className="container-kideattoday-starter">
                <div className="infos-starter">
                    <img className="image-kideattoday-starter" src={imagesalad} alt="" />
                    <div className="title-kideattoday-starter">Entrée</div>
                </div>
                <div className="info-kideattoday-starter">Pas mangé</div>
            </div>
            <div className="container-kideattoday-meal">
                <div className="infos-meal">
                    <img className="image-kideattoday-meal" src={imagemeal} alt="" />
                    <div className="title-kideattoday-meal">Plat</div>
                </div>
                <div className="info-kideattoday-meal">Repas non terminé</div>
            </div>
            <div className="container-kideattoday-dessert">
                <div className="infos-dessert">
                    <img className="image-kideattoday-dessert" src={imagedessert} alt="" />
                    <div className="title-kideattoday-dessert">Dessert</div>
                </div>
                <div className="info-kideattoday-dessert">Bien mangé!</div>
            </div>
        </div>
      </div>
    );
  }
  
  export default KidEatToday;