import React from "react";
import "./Input.scss";

const Input = ({
  type = "text",
  icon = "",
  textarea = false,
  placeHolder = "",
  name = "",
}) => {
  return (
    <div className={`input-block ${textarea ? "textarea-block" : ""}`}>
      <span className="input-block__icon icon-block">
        <i className={`fas ${icon} icon`}></i>
      </span>
      {!textarea && (
        <input
          type={type}
          className="input-block__input"
          placeholder={placeHolder}
          name={name}
        />
      )}
      {textarea && (
        <textarea
          className="input-block__input input-block__textarea"
          placeholder={placeHolder}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;
