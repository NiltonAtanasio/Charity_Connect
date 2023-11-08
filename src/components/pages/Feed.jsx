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

          <div className="post">
            <div className="post__info">
              <div className="avatar__g"></div>
              <h3>User_Name</h3>
              <p>- 2 h</p>
            </div>
            <div className="post__conf">
              <div className="top__bar__icon"></div>
            </div>

            <div className="post__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                illo illum nostrum laboriosam. Veniam dignissimos inventore
                provident eos repudiandae, dolorem ad deleniti minima. Nemo,
                quisquam. Possimus deserunt quod eligendi vero.
              </p>
            </div>

            <div className="post__image"></div>
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
