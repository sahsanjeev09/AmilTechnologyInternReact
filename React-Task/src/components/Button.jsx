import React from "react";

const Button = ({ buttonText = "Button", variant }) => {
  return (
    <button className={`button ${variant}`}>{buttonText}</button>
  );
};

export default Button;