import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
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
