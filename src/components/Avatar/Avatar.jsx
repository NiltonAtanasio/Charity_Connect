import React from "react";
import { AvatarStyled } from "./AvatarStyled";
import "./Avatar.css";
import placeholder from "../../images/placeholder.png";
import { useNavigate } from "react-router-dom";

export default function Avatar({
  size = "n",
  image = placeholder,
  alternate,
  link,
}) {
  const navigate = useNavigate();

  return (
    <AvatarStyled className="avatar" size={size} onClick={() => navigate(link)}>
      <img src={image} alt={alternate} />
    </AvatarStyled>
  );
}
