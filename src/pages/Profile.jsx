import React from "react";
import "./styles/Profile.css";
import HeaderProfile from "../components/Profile/HeaderProfile";

function Profile() {
    return (
      <div className="profile-container">
        <div className="home-header">
            <HeaderProfile />
        </div>
      </div>
    );
  }
  
  export default Profile;