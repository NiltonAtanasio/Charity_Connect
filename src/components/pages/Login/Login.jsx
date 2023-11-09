import React from "react";
import "./Login.css";

export default function Login() {
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

      <div className="login__card">
        <form action="">
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            className="input__email"
            placeholder="Your e-mail"
            required
          />
          <input
            type="password"
            name="password"
            className="input__password"
            placeholder="Password"
            required
            min={6}
          />
          <button>Login</button>
        </form>
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
