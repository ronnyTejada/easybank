import React from "react";
import "./style.css";
const Title = ({ text, size }) => {
  return (
    <h1 className={`title ${size !== undefined ? `title--size-${size}` : ""}`}>
      {text}
    </h1>
  );
};

export default Title;
