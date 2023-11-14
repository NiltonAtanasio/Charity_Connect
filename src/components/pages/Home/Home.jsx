import React from "react";
import "./Home.css";

import Nav from "../../Nav/Nav";
import Button from "../../Button/Button";

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
          <Button text="Cadastrar" />
        </div>
        <div className="main__image"></div>
      </div>

      <div className="titles">
        <div className="titles__card">
          <div className="titles__card__image"></div>
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <div className="titles__card__image"></div>
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <div className="titles__card__image"></div>
          <h4>Title</h4>
          <p>mini sumary of information</p>
        </div>

        <div className="titles__card">
          <div className="titles__card__image"></div>
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

      <div className="footer">
        <div>
          <h4>Menu</h4>
          <p>Home</p>
          <p>About</p>
          <p>FAQs</p>
          <p>Login</p>
        </div>
        <div className="footer__icon">
          <h4>Follow us</h4>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}
