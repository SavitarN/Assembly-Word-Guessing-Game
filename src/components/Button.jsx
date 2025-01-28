import React from "react";
import "./style.css";
const Button = (props) => {
  return (
    <>
      <button onClick={props.onchange}>{props.char}</button>
    </>
  );
};

export default Button;
