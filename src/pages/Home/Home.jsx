import React from "react";
import "./Home.css";

import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import logo from "../../images/logo.png";
import Avatar from "../../components/Avatar/Avatar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="main__home">
        <div className="main__text">
          <h1>
            O grupo CharityConnect ajuda as pessoas a se conectarem, encontrarem
            comunidades e expandirem seu alcance
          </h1>
          <Button type="button" text="register" link="/register" />
        </div>
        <div className="main__image">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="titles">
        <div className="titles__card">
          <Avatar />
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <Avatar />
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <Avatar />
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <Avatar />
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>
      </div>

      <div className="images">
        <div className="images__img"></div>
        <div className="images__text">
          <h4>title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            exercitationem neque deserunt, nemo expedita velit. Cupiditate, illo
            tenetur hic minima beatae quas ullam ipsam in officia dolor.
            Necessitatibus, laborum deserunt.
          </p>
        </div>
      </div>

      <div className="images">
        <div className="images__text">
          <h4>title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            exercitationem neque deserunt, nemo expedita velit. Cupiditate, illo
            tenetur hic minima beatae quas ullam ipsam in officia dolor.
            Necessitatibus, laborum deserunt.
          </p>
        </div>
        <div className="images__img"></div>
      </div>

      <Footer />
    </div>
  );
}
