import React from "react";
import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div>
      <Nav />
      <div className="page__notfound">
        <h2>Page Not Found</h2>
      </div>
      <Footer />
    </div>
  );
}
