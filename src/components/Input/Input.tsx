import React from "react";
import "./Input.scss";

const Input = ({ type = "text", icon = "", textarea = false }) => {
  return (
    <div className={`input-block ${textarea ? "textarea-block" : ""}`}>
      <span className="input-block__icon icon-block">
        <i className={`fas ${icon} icon`}></i>
      </span>
      {!textarea && <input type={type} className="input-block__input" />}
      {textarea && (
        <textarea className="input-block__input input-block__textarea" />
      )}
    </div>
  );
};

export default Input;
