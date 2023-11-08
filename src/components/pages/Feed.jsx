import React from "react";
import "./Feed.css";

export default function Feed() {
  return (
    <div>
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

      <div className="main">
        <div className="main__publicity"></div>
        <div className="main__posts">
          <div className="stories">
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
            <div className="avatar__g"></div>
          </div>

          <div className="create__post">
            <input type="text" />
            <button>O</button>
          </div>
        </div>
        <div className="main__pages"></div>
      </div>
      <div className="footer">
        <div>
          <h4>Menu</h4>
          <p>Home</p>
          <p>About</p>
          <p>FAQs</p>
          <p>Login</p>
        </div>
        <div className="footer__icon">
          <h4>Follow us</h4>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}
