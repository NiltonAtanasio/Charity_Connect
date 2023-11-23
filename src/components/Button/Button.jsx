import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyled.jsx";

export default function Button({ link, type, text }) {
  return (
    <ButtonStyled type={type}>
      <Link to={`/${link}`}>{text}</Link>
    </ButtonStyled>
  );
}
