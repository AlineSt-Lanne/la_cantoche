import React from "react";
import "./styles/Profile.css";
import HeaderProfile from "../components/Profile/HeaderProfile";
import AllergiesProfile from "../components/Profile/AllergiesProfile";
import ContactPerson from "../components/Profile/ContactPerson";
import Navbar from "../components/Home/Navbar";

function Profile() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <HeaderProfile />
        </div>
        <div className="profile-title-cantine">
          <h2>JOURS DE CANTINE</h2>
        </div>
        <div className="profile-days-cantine">
          <div className="days-cantine">Lundi - Mardi - Jeudi - Vendredi</div>
        </div>
        <div className="profile-restrictions-cantine">
          <h2>RESTRICTIONS ALIMENTAIRES</h2>
        </div>
        <div className="container-profile-allergies">
          <AllergiesProfile />
        </div>
        <div className="profile-contact-cantine">
          <h2>PERSONNE(S) À CONTACTER</h2>
        </div>
          <div className="container-profile-contact">
            <ContactPerson />
          </div>
        <div className="profile-container-navbar">
          <Navbar />
        </div>
      </div>
    );
  }
  
  export default Profile;