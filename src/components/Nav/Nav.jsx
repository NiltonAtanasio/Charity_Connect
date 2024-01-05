import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <div className="nav__logo">
          <img
            src={logo}
            alt="logo com uma arvore colorida na frente com destaque e prédios atrás"
          />
        </div>
      </NavLink>
      <div className="nav__menu">
        <NavLink to={"/"}>
          <h3>Home</h3>
        </NavLink>
        <NavLink to={"/about"}>
          <h3>About</h3>
        </NavLink>
        <NavLink to={"/faqs"}>
          <h3>FAQs</h3>
        </NavLink>
        <NavLink to={"/login"}>
          <h3>Login</h3>
        </NavLink>
      </div>
    </div>
  );
}
