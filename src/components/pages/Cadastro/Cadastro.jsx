import React from "react";
import "./Cadastro.css";

import Nav from "../../Nav/Nav";
import Button from "../../Button/Button";
import Footer from "../../Footer/Footer";

export default function Cadastro() {
  return (
    <div>
      <Nav />

      <div className="cadastro__card">
        <form action="">
          <h2>Create an Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Your first name"
            required
          />
          <input
            type="text"
            name="userName"
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
            name="confirmPassword"
            placeholder="Confirm password"
            required
            min={6}
          />
          <input type="url" name="avatar" placeholder="Your avatar" required />
          <Button text="Create My Account" link="login" />
        </form>
      </div>

      <Footer />
    </div>
  );
}
