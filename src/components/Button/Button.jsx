import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyled.jsx";

export default function Button({ link, type, text }) {
  const navigate = useNavigate();

  return (
    <ButtonStyled type={type} onClick={() => navigate(link)}>
      {text}
    </ButtonStyled>
  );
}
