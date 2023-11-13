import React from "react";
import "./Cadastro.css";

import Nav from "../Nav/Nav";
import Button from "../../Button/Button";

export default function Cadastro() {
  return (
    <div>
      <Nav />

      <div className="cadastro__card">
        <form action="">
          <h2>Create an Account</h2>
          <input
            type="text"
            name="first__name"
            placeholder="Your first name"
            required
          />
          <input
            type="text"
            name="last__name"
            placeholder="Your last name"
            required
          />
          <input type="email" name="email" placeholder="Your e-mail" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            min={6}
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
            required
            min={6}
          />
          <Button text="Create My Account" />
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
