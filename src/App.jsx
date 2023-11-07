import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/app.css";

function App() {
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
    </div>
  );
}

export default App;
