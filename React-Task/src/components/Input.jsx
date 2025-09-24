import React from "react";
import "../styles/component/input.css";

const Input = ({ label, placeholder = "Placeholder" }) => {
  return (
    <div className="form-field">
      {label && (
        <label className="label" htmlFor={label}>
          {label}
        </label>
      )}
      <input id={label} className="input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
