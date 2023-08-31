import React from "react";
import "./styles/Contact.css";
import HeaderContact from "../components/Contact/HeaderContact";
import ButtonSend from "../components/Contact/ButtonSend";
import Navbar from "../components/Home/Navbar";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <HeaderContact />
      </div>
      <div className="contact-form">
        <form className="contact-cantine-form-input">
          <input
            className="inputemailcantine"
            type="text"
            name="emailcantine"
            id="emailcantine"
            placeholder="À: La Cantine" />
          <input
            className="inputobjet"
            type="text"
            name="objetmail"
            id="objetmail"
            placeholder="Objet:" />
          <input
            className="inputmessage"
            type="text"
            name="messageemail"
            id="messageemail"
            placeholder="Écrivez votre message" />
        </form>
        <ButtonSend />
      </div>
      <div className="home-container-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Contact;
