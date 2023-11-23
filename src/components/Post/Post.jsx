import React from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
import { FaHeart, FaComments, FaBookmark } from "react-icons/fa";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar image={post.userAvatar} />
        <h3>{post.name}</h3>
        <p>- {post.createdAt}</p>
      </div>
      <div className="post__conf">
        <div className="top__bar__icon"></div>
      </div>

      <div className="post__text">
        <p>{post.text}</p>
      </div>

      <div className="post__image">
        <img src={post.image} alt="imagem" />
      </div>

      <div className="post__bottom">
        <div>
          <FaHeart className="top__bar__icon" />
          <p>{post.likes} - Likes</p>
        </div>

        <div>
          <FaComments className="top__bar__icon" />
          <p>{post.comments} - comments</p>
        </div>

        <div>
          <FaBookmark className="top__bar__icon" />
          <p>2 - favorite</p>
        </div>
      </div>
    </div>
  );
}
