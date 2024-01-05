import React from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
import { FaHeart, FaComments, FaBookmark } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__info">
        <Avatar
          image={props.avatar}
          onClick={() => navigate(`/perfil/${props.id}`)}
        />

        <h3 onClick={() => navigate(`/perfil/${props.id}`)}>{props.name}</h3>
        <p>- {props.createdAt}</p>
      </div>
      <div className="post__conf">
        <div className="top__bar__icon"></div>
      </div>

      <div className="post__text">
        <p>{props.text}</p>
      </div>

      <div className="post__image">
        <img
          onClick={() => navigate(`/post/${props.id}`)}
          src={props.image}
          alt="imagem"
        />
      </div>

      <div className="post__bottom">
        <div>
          <FaHeart className="top__bar__icon" />
          <p>{props.likes} - Likes</p>
        </div>

        <div onClick={() => navigate(`/post/${props.id}`)}>
          <FaComments className="top__bar__icon" />
          <p>{props.comments} - comments</p>
        </div>

        <div>
          <FaBookmark className="top__bar__icon" />
          <p>2 - favorite</p>
        </div>
      </div>
    </div>
  );
}
