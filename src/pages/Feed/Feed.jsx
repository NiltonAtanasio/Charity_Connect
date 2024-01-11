import { useEffect, useState } from "react";
import "./Feed.css";
import Topbar from "../../components/Topbar/Topbar.jsx";
import Post from "../../components/Post/Post";
import Main from "../../components/Main/Main";
import { HiCursorClick } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";
import Avatar from "../../components/Avatar/Avatar";
import Cookies from "js-cookie";
import { getAllPosts } from "../../services/postService.js";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  async function findPost() {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse.data.results);
  }

  useEffect(() => {
    findPost();
    console.log(Cookies.get("token"));
  }, []);

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
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>

          <div className="create__post">
            <input type="text" />
            <button>O</button>
          </div>
          {posts.map((item) => (
            <Post
              key={item.id}
              id={item.id}
              name={item.userName}
              avatar={item.userAvatar}
              text={item.text}
              likes={item.likes}
              comments={item.comments}
              image={item.image}
              createdAt={item.createdAt}
            />
          ))}
        </div>

        <div className="feed__pages">
          <div className="about__page">
            <h4>Page Name</h4>
            <p>About Page</p>
            <Avatar />
            <div className="publicity__icons">
              <RiUserFollowFill className="top__bar__icon" />
              <HiCursorClick className="top__bar__icon" />
              <AiFillMessage className="top__bar__icon" />
            </div>
            <p>About Page</p>
          </div>
        </div>
      </Main>
    </div>
  );
}
