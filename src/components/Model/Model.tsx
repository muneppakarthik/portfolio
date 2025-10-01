import React from "react";
import ReactDOM from "react-dom";
import "./Model.scss";

type modelPropType = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
};

const Model = ({ children, className = "", variant = "" }: modelPropType) => {
  if (typeof window === "undefined") return null; // SSR safety
  const portalRoot = document.body;
  return ReactDOM.createPortal(
    <div className={`model-container ${className} ${variant}`}>
      <div className="model-container__overlay"></div>
      <div className="model-container__wrapper">{children}</div>
    </div>,
    portalRoot
  );
};

export default Model;
