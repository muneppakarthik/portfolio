import React from "react";
import "./HorizentalProgress.scss";

const HorizentalProgress = ({ lable = "", value = "" }) => {
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

export default HorizentalProgress;
