import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h3>logo</h3>
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
