import React from "react";
import "./Button.scss";

const Button = ({ label = "Explore now" }) => {
  return (
    <div className="button-wrapper">
      <button>{label}</button>
    </div>
  );
};

export default Button;
