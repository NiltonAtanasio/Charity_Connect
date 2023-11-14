import React from "react";
import "./Feed.css";
import Topbar from "../../Topbar/Topbar";
import Post from "../../Post/Post";
import Main from "../../Main/Main";

import { HiCursorClick } from "react-icons/hi";

export default function Feed() {
  return (
    <div>
      <Topbar />

      <Main>
        <div className="feed__publicity">
          <h4>publicity</h4>
          <p>about publicity</p>
          <div className="publicity__image"></div>
          <div className="publicity__icons">
            <HiCursorClick className="top__bar__icon" />
          </div>
          <p>about publicity</p>
        </div>

        <div className="feed__posts">
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

          <Post />
        </div>

        <div className="feed__pages">
          <div className="about__page">
            <h4>Page Name</h4>
            <p>About Page</p>
            <div className="avatar__g"></div>
            <div className="publicity__icons">
              <div className="top__bar__icon"></div>
              <div className="top__bar__icon"></div>
              <div className="top__bar__icon"></div>
            </div>
            <p>About Page</p>
          </div>
        </div>
      </Main>
    </div>
  );
}
