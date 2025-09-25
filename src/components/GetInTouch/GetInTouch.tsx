import React from "react";
import "./GetInTouch.scss";
import SectionHeading from "../sectionHeading/SectionHeading";
import Input from "../input/Input";
import Button from "../button/Button";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <SectionHeading label="Get in touch" />
      <div className="get-in-touch-container__wrapper card-shadow">
        <Input icon="fa-user" placeHolder="Name" />
        <Input icon="fa-at" placeHolder="Email" />
        <Input icon="fa-envelope" textarea={true} placeHolder="Message" />
        <Button label="Send Message" />
      </div>
    </div>
  );
};

export default GetInTouch;
