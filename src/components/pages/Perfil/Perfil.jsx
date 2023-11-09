import React from "react";
import "./Perfil.css";

export default function Perfil() {
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
        <div className="perfil__capa">
          <div className="avatar__g"></div>
        </div>

        <div className="perfil__name">
          <h2>Perfil name</h2>
          <p>user_name</p>
        </div>

        <div className="perfil__info">
          <p>About</p>
          <p>About</p>
          <p>About</p>
          <p>About</p>
        </div>

        <div className="perfil__info2">
          <div className="perfil__bio">
            <h4>Information</h4>
            <div className="bio_information">
              <p>City:</p>
              <p>E-mail:</p>
              <p>Phone number:</p>
            </div>
          </div>
          <div className="perfil__stories">
            <h4>Destaques</h4>
            <div className="stories__container">
              <div className="stories__card">
                <div className="avatar__g"></div>
                <p>nome</p>
              </div>
              <div className="stories__card">
                <div className="avatar__g"></div>
                <p>nome</p>
              </div>
              <div className="stories__card">
                <div className="avatar__g"></div>
                <p>nome</p>
              </div>
              <div className="stories__card">
                <div className="avatar__g"></div>
                <p>nome</p>
              </div>
            </div>
          </div>
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

          <div className="post__bottom">
            <div className="top__bar__icon"></div>
            <p>config info</p>
          </div>
          <div className="post__bottom">
            <div className="top__bar__icon"></div>
            <p>config info</p>
          </div>
          <div className="post__bottom">
            <div className="top__bar__icon"></div>
            <p>config info</p>
          </div>
        </div>
      </div>
    </div>
  );
}
