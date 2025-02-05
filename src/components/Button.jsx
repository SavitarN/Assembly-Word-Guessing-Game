import React from "react";
import "./style.css";

const Button = (props) => {
  console.log(props.disabled);
  return (
    <>
      <button
        disabled={props.disabled && "true"}
        id="btn"
        onClick={props.onchange}
        className={props.className}
      >
        {props.char}
      </button>
    </>
  );
};

export default Button;
