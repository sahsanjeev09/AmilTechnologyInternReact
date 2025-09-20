import React from "react";
import './Input.css'

const Input = ({placeholder, label }) => {
    const id = `input-${label?.replace(/\s+/g, "-").toLowerCase() || "field"}`;

  return (
    <div className="input-container">
        {label && (
            <label htmlFor={id} className="input-label">
                {label}
            </label>
        )}
        <input 
          type="text" 
          id={id} 
          placeholder={placeholder} 
          className="input-field" 
        />
    </div>
  );
}

export default Input;
