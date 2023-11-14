import React from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
import { FaHeart, FaComments, FaBookmark } from "react-icons/fa";

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
        <div>
          <FaHeart className="top__bar__icon" />
          <p>2 - Likes</p>
        </div>

        <div>
          <FaComments className="top__bar__icon" />
          <p>1 - comments</p>
        </div>

        <div>
          <FaBookmark className="top__bar__icon" />
          <p>2 - favorite</p>
        </div>
      </div>
    </div>
  );
}
