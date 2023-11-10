import React from "react";
import "./Cadastro.css";

export default function Cadastro() {
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
          <button>Create My Account</button>
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
