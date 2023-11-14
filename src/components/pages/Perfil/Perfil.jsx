import React from "react";
import "./Perfil.css";
import Topbar from "../../Topbar/Topbar";
import Post from "../../Post/Post";
import Main from "../../Main/Main";
import Avatar from "../../Avatar/Avatar";

export default function Perfil() {
  return (
    <div>
      <Topbar />

      <Main direction="column">
        <div className="perfil__capa">
          <Avatar size="g" />
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

        <Post />
      </Main>
    </div>
  );
}
