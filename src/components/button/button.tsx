import React from "react";
import "./Button.scss";

const Button = ({ label = "Explore now", variant = "" }) => {
  return (
    <div className="button-wrapper">
      <button className={`${variant}`}>{label}</button>
    </div>
  );
};

export default Button;
