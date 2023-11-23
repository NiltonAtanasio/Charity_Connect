import React from "react";
import "./Login.css";

import Nav from "../../Nav/Nav";
import Button from "../../Button/Button";
import Footer from "../../Footer/Footer";

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
          <Button text="Login" link="feed" />
        </form>
      </div>

      <Footer />
    </div>
  );
}
