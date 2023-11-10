import React from "react";
import "./PostId.css";
import Topbar from "../../Topbar/Topbar";
import Post from "../../Post/Post";

export default function Post_id() {
  return (
    <div>
      <Topbar />

      <div className="main">
        <div className="main__posts">
          <Post />

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
