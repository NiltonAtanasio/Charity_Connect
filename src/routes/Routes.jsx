import React from "react";
import { Routes, Route } from "react-router-dom";

import Cadastro from "../components/pages/Cadastro/Cadastro";
import Feed from "../components/pages/Feed/Feed";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Perfil from "../components/pages/Perfil/Perfil";
import PostId from "../components/pages/PostId/PostId";

export default function ControladorDeRotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/post/:id" element={<PostId />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  );
}
