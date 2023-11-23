import React from "react";
import "../../components/Post/Post.css";
import "./Perfil.css";
import Topbar from "../../components/Topbar/Topbar";
import { FaHeart, FaComments, FaBookmark } from "react-icons/fa";
import Main from "../../components/Main/Main";
import Avatar from "../../components/Avatar/Avatar";

export default function Perfil() {
  return (
    <div>
      <Topbar />

      <Main direction="column">
        <div className="perfil__capa">
          <Avatar size="g" />
        </div>

        <div className="perfil__name">
          <h2>Fulano</h2>
          <p>@fulaninho</p>
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
              <p>City: São Paulo</p>
              <p>E-mail: fulano@gmail.com</p>
              <p>Phone number: decubra</p>
            </div>
          </div>
          <div className="perfil__stories">
            <h4>Destaques</h4>
            <div className="stories__container">
              <div className="stories__card">
                <Avatar />
                <p>nome</p>
              </div>
              <div className="stories__card">
                <Avatar />
                <p>nome</p>
              </div>
              <div className="stories__card">
                <Avatar />
                <p>nome</p>
              </div>
              <div className="stories__card">
                <Avatar />
                <p>nome</p>
              </div>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="post__info">
            <Avatar />
            <h3>Fulano</h3>
            <p>- 4h</p>
          </div>
          <div className="post__conf">
            <div className="top__bar__icon"></div>
          </div>

          <div className="post__text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="post__image">
            <img
              src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
              alt="imagem"
            />
          </div>

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
      </Main>
    </div>
  );
}
