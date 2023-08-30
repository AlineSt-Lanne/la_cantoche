import React from "react";
import "./styles/ContactPerson.css";
import retrophone from "../../assets/3d-retro-phone.png";
import motherportrait from "../../assets/mother-portrait.png";

function ContactPerson() {
    return (
      <div className="container-contactperson">
        <div className="contact-person">
          <img className="image-retrophone" src={retrophone} alt="" />
          <div className="type-contact-person">La.mère</div>
          <div className="name-contact-person">
            <img className="mother-portrait" src={motherportrait} alt="" />
            <p className="name-mother">Lydia Mango</p>
          </div>
          <div className="phonenumber-contact-person">06.38.40.37.40</div>
        </div>
      </div>
    );
  }
  
  export default ContactPerson;