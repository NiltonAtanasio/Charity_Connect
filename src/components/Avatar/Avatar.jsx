import React from "react";
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
    <div className="avatar" data-size={size} onClick={() => navigate(link)}>
      <img src={image} alt={alternate} />
    </div>
  );
}
