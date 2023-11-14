import React from "react";
import "./Topbar.css";
import logo from "../../images/logo.png";

export default function Topbar() {
  return (
    <div className="top__bar">
      <div className="container__logo">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container__icon">
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon avatar__g"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
      </div>
      <div className="container__input">
        <input type="text" />
      </div>
    </div>
  );
}
