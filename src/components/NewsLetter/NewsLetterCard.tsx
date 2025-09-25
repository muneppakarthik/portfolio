import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";

const NewsLetterCard = ({
  image = "",
  date = "",
  dateLabel = "",
  title = "",
  description = "",
  buttonLabel = "",
}) => {
  return (
    <div className="newsletter-container__card-item">
      <div className="newsletter-container__card-item__image-block">
        <Image
          src={image}
          alt=""
          //   placeholder="blur"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="newsletter-container__card-item__info-block">
        <p className="newsletter-container__card-item__date">
          {date} {dateLabel}
        </p>
        <h3 className="newsletter-container__card-item__title">{title}</h3>
        <p className="newsletter-container__card-item__description">
          {description}
        </p>
        <Button label={buttonLabel} variant="outline" />
      </div>
    </div>
  );
};

export default NewsLetterCard;
