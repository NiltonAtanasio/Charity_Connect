import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <div className="main" direction={props.direction}>
      {props.children}
    </div>
  );
}
