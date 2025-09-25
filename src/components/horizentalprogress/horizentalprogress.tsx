import React from "react";
import "./Horizentalprogress.scss";

const Horizentalprogress = ({ lable = "", value = "" }) => {
  return (
    <div className="horizental-progress-wrapper">
      <div className="lable-block">
        <span>{lable}</span>
        <span>{value}%</span>
      </div>
      <div className="progress-block">
        <div className="overlay" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default Horizentalprogress;
