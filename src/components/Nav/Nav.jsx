import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <Link to={"/"}>
        <div className="nav__logo">
          <img
            src={logo}
            alt="logo com uma arvore colorida na frente com destaque e prédios atrás"
          />
        </div>
      </Link>
      <div className="nav__menu">
        <Link to={"/"}>
          <h3>Home</h3>
        </Link>
        <Link to={"/about"}>
          <h3>About</h3>
        </Link>
        <Link to={"/faqs"}>
          <h3>FAQs</h3>
        </Link>
        <Link to={"/login"}>
          <h3>Login</h3>
        </Link>
      </div>
    </div>
  );
}
