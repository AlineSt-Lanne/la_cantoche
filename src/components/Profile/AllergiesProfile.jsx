import React from "react";
import "./styles/AllergiesProfile.css";
import paperbag from "../../assets/3d-paper-bag.png";

function AllergiesProfile() {
    return (
      <div className="container-allergiesprofile">
        <div className="container-allergies-1">
            <div className="title-allergies-1">Allergies</div>
            <img className="image-paperbag" src={paperbag} alt="" />
            <div className="list-allergies">
              <ul className="allergies-infos">
                <li className="allergie-info">Fraises</li>
                <li className="allergie-info">Cacahuètes</li>
              </ul>
            </div>
        </div>
        <div className="container-allergies-2">
            <div className="title-allergies-2">Intolérances et régime particulier</div>
            <img className="image-paperbag" src={paperbag} alt="" />
            <div className="list-allergies">
              <ul className="allergies-infos">
                <li className="allergie-info">Lactose</li>
                <li className="allergie-info">Réduire le sel</li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
  
  export default AllergiesProfile;