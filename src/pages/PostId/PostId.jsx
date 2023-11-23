import React from "react";
import "./PostId.css";
import Topbar from "../../components/Topbar/Topbar";
import "../../components/Post/Post.css";
import Avatar from "../../components/Avatar/Avatar";
import { FaHeart, FaComments, FaBookmark } from "react-icons/fa";

export default function Post_id() {
  return (
    <div>
      <Topbar />

      <div className="main">
        <div className="main__posts">
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
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
