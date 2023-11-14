import React from "react";
import "./PostId.css";
import Topbar from "../../Topbar/Topbar";
import Post from "../../Post/Post";
import Avatar from "../../Avatar/Avatar";
import { FaHeart } from "react-icons/fa";

export default function Post_id() {
  return (
    <div>
      <Topbar />

      <div className="main">
        <div className="main__posts">
          <Post />

          <div className="post__comment">
            <div className="post__info">
              <Avatar />
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
              <FaHeart className="top__bar__icon" />
              <p>4 curtidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
