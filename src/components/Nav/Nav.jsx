import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img
          src={logo}
          alt="logo com uma arvore colorida na frente com destaque e prédios atrás"
        />
      </div>
      <div className="nav__menu">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>FAQs</h3>
        <h3>Login</h3>
      </div>
    </div>
  );
}
