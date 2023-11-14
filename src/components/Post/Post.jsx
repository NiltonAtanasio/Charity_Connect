import React from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";

export default function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h3>User_Name</h3>
        <p>- 2 h</p>
      </div>
      <div className="post__conf">
        <div className="top__bar__icon"></div>
      </div>

      <div className="post__text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio illo
          illum nostrum laboriosam. Veniam dignissimos inventore provident eos
          repudiandae, dolorem ad deleniti minima. Nemo, quisquam. Possimus
          deserunt quod eligendi vero.
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
  );
}
