import React from "react";
import "./styles/HeaderContact.css";
import imageenveloppe from "../../assets/3d-enveloppe.png";

function HeaderContact() {
  return (
    <div className="container-headercontact">
      <div className="container-headercontact-orange">
        <div className="container-headercontact-title">
          <img className="image-headercontact" src={imageenveloppe} alt="" />
          <div className="headercontact-title">CONTACTER.LA.CANTINE</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContact;
