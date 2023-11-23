import React from "react";

import Nav from "../../components/Nav/Nav";
import Signin from "../Authentication/Signin.jsx";
import Footer from "../../components/Footer/Footer";

export default function Login() {
  return (
    <div>
      <Nav />
      <Signin />
      <Footer />
    </div>
  );
}
