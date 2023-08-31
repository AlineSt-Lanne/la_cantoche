import React from "react";
import "./styles/CardCreateMenu.css";

function CardCreateMenu() {
  return (
    <div className="container-cardcreatemenu">
        <div className="card-createmenu">
            <div className="createmenu-title">MENU</div>
            <div className="createmenu-form">
                <form className="createmenu-form">
                    <input
                        className="inputcreatemenu"
                        type="text"
                        name="starter"
                        id="starter"
                        placeholder="Entrée" />
                    <input
                        className="inputcreatemenu"
                        type="text"
                        name="meal"
                        id="meal"
                        placeholder="Plat" />
                    <input
                        className="inputcreatemenu"
                        type="text"
                        name="dessert"
                        id="dessert"
                        placeholder="Produit laitier & Dessert" />
                </form>
            </div>
        </div>
    </div>
  );
}

export default CardCreateMenu;