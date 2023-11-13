import React from "react";
import "./Login.css";

import Nav from "../Nav/Nav";
import Button from "../../Button/Button";

export default function Login() {
  return (
    <div>
      <Nav />

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
          <Button text="Login" />
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
