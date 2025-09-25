import React from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "./WorkEducationHistory.scss";
import TimeLineCard from "@/components/WorkEducationHistory/TimeLineCard";

const WorkEducationHistory = () => {
  const educationHistory = [
    {
      title: "University of Toronto",
      startDate: "jan 2018",
      endDate: "may 2020",
      profession: "Student",
      description:
        "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri",
    },
    {
      title: "University of Toronto",
      startDate: "jan 2018",
      endDate: "may 2020",
      profession: "Student",
      description:
        "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri",
    },
    {
      title: "University of Toronto",
      startDate: "jan 2018",
      endDate: "may 2020",
      profession: "Student",
      description:
        "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri",
    },
  ];
  return (
    <div className="work-education-history">
      <div className="work-education-history__education work-education-history__column">
        <SectionHeading label="Education" />
        <div className="work-education-history__education__list-block list-block">
          {educationHistory.map((item, ind) => (
            <React.Fragment key={ind}>
              <TimeLineCard {...item} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="work-education-history__work work-education-history__column">
        <SectionHeading label="Work History" />
        <div className="work-education-history__work__list-block list-block">
          {educationHistory.map((item, ind) => (
            <React.Fragment key={ind}>
              <TimeLineCard {...item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkEducationHistory;
