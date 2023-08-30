import React from "react";
import "./styles/HeaderProfile.css";
import KidPortrait from "../../assets/kid-portrait.png";
import MaitressePortrait from "../../assets/maitresse-portrait.png";

function HeaderProfile() {
  return (
    <div className="container-headerprofile">
        <div className="container-headerprofile-infos">
          <div className="headerprofile-infos-categories">
            <h3 className="infos-categories">Age</h3>
            <h3 className="infos-categories">Classe</h3>
            <h3 className="infos-categories">Maîtresse</h3>
          </div>
          <div className="container-infos-profile">
            <div className="headerprofile-infos-profile">
              <h3 className="infos-profile">6 ans</h3>
              <h3 className="infos-profile">CP B</h3>
              <img className="image-maitresse" src={MaitressePortrait} alt="" />
              <h3 className="infos-maitresse">Monique</h3>
            </div>
          </div>
        </div>
        <div className="headerprofile-picture">
            <img className="image-titouan" src={KidPortrait} alt="" />
        </div>
    </div>
  );
}

export default HeaderProfile;
