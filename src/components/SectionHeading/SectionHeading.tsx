import React from "react";
import "./SectionHeading.scss";

const SectionHeading = ({ label = "" }) => {
  return (
    <div className="section-heading-container">
      <h4>{label}</h4>
    </div>
  );
};

export default SectionHeading;
