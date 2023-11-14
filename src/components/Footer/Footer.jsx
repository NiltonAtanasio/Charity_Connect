import React from "react";
import "./Footer.css";

import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
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
