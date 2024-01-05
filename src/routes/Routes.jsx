import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import Feed from "../pages/Feed/Feed.jsx";
import Home from "../pages/Home/Home.jsx";
import Perfil from "../pages/Perfil/Perfil.jsx";
import PostId from "../pages/PostId/PostId.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export default function ControladorDeRotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/post/:id" element={<PostId />} />
      <Route path="/perfil/:id" element={<Perfil />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
