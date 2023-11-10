import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="top__bar">
      <div className="top__bar__container container__logo">
        <div className="avatar__g"></div>
        <input type="text" />
      </div>
      <div className="top__bar__container container__icon">
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon avatar__g"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
        <div className="top__bar__icon"></div>
      </div>
      <div className="container__logo"></div>
    </div>
  );
}
