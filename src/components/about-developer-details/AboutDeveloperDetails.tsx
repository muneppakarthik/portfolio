import React from "react";
import "./AboutDeveloperDetails.scss";

const AboutDeveloperDetails = () => {
  const data = [
    {
      value: 10,
      label: "Years Experience",
    },
    {
      value: 143,
      label: "Completed Projects",
    },
    {
      value: 114,
      label: "Happy Customers",
    },
    {
      value: 20,
      label: "Honors and Awards",
    },
  ];
  return (
    <div className="about-project-completetion-feedback">
      {data.map((item, index) => (
        <div className="completion-wrapper" key={index}>
          <h2>{item.value} +</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutDeveloperDetails;
