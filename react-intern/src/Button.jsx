import React from "react";
import "./Button.css";

const Button = ({ buttonText, variant }) => {
  return (
    <button className={`btn ${variant}`}>
      {buttonText}
    </button>
  );
};

export default Button;
