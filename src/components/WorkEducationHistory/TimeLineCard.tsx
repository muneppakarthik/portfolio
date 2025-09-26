import React from "react";
import Button from "@/components/Button/Button";

const TimeLineCard = ({
  title = "",
  startDate = "",
  endDate = "",
  profession = "",
  description = "",
}) => {
  return (
    <div className="work-education-history__card-item">
      <div className="work-education-history__card-item__title-wrapper">
        <div className="work-education-history__card-item__title-block">
          <h3 className="work-education-history__card-item__title-block__title">
            {title}
          </h3>
          <div className="work-education-history__card-item__title-block__profession">
            <span>{profession}</span>
          </div>
        </div>
        <div className="work-education-history__card-item__title-block__service-date">
          <span className="work-education-history__card-item__title-block__service-date__start">
            {startDate}
          </span>{" "}
          <span>-</span>{" "}
          <span className="work-education-history__card-item__title-block__service-date__end">
            {endDate}
          </span>
        </div>
      </div>

      <p className="work-education-history__card-item__description">
        {description}
      </p>
      <Button variant="outline" label="Recommendation" />
    </div>
  );
};

export default TimeLineCard;
