import React from "react";
import "../styles/component/button.css";

const Button = ({ buttonText = "Button", variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
