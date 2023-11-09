import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="nav">
        <div className="nav__logo">
          <h3>logo</h3>
        </div>
        <div className="nav__menu">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>FAQs</h3>
          <h3>Login</h3>
        </div>
      </div>

      <div className="main">
        <div className="main__text">
          <h1>
            O grupo CharityConnect ajuda as pessoas a se conectarem, encontrarem
            comunidades e expandirem seu alcance
          </h1>
          <button>Cadastrar</button>
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
          <h3>title</h3>
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
          <h3>title</h3>
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
