import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h4>Menu</h4>

        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/about"}>
          <p>About</p>
        </Link>
        <Link to={"/faqs"}>
          <p>FAQs</p>
        </Link>
        <Link to={"/login"}>
          <p>Login</p>
        </Link>
      </div>
      <div className="footer__icon">
        <h4>Follow us</h4>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaGithub />
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Contact us</p>
      </div>
    </div>
  );
}
