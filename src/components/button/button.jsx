import React from "react";
import "./style.css";
const Button = ({ title, onClick, width, disabled }) => {
  return (
    <button
      className={`btn ${width === "100" ? "btn--wd-100" : ""}`}
      onClick={onClick}
      disabled={disabled ?? false}
    >
      {title}
    </button>
  );
};

export default Button;
