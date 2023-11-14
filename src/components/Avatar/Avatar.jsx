import React from "react";
import "./Avatar.css";
import placeholder from "../../images/placeholder.png";

export default function Avatar({ size = "n", image = placeholder, alternate }) {
  return (
    <div className="avatar" data-size={size}>
      <img src={image} alt={alternate} />
    </div>
  );
}
