import React from "react";
import "./GetInTouch.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Input from "../Input/Input";
import Button from "../Button/Button";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <SectionHeading label="Get in touch" />
      <div className="get-in-touch-container__wrapper card-shadow">
        <Input icon="fa-user" />
        <Input icon="fa-at" />
        <Input icon="fa-envelope" textarea={true} />
        <Button label="Send Message" />
      </div>
    </div>
  );
};

export default GetInTouch;
