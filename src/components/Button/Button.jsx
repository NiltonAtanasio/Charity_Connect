import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <button>
      <Link to={`/${props.link}`}>{props.text}</Link>
    </button>
  );
}
