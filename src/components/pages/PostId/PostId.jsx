import React from "react";
import "./PostId.css";

export default function Post_id() {
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
        <div className="main__posts">
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

          <div className="post__comment">
            <div className="post__info">
              <div className="avatar__g"></div>
              <h4>User_Name</h4>
              <p>- 1 h</p>
            </div>
            <div className="post__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quaerat nostrum ex quasi tenetur magni, voluptatibus, voluptate
                laboriosam accusantium temporibus dolorem dolor et, ratione non
                illo eaque totam esse quae?
              </p>
            </div>
            <div className="post__bottom">
              <div className="top__bar__icon"></div>
              <p>4 curtidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
