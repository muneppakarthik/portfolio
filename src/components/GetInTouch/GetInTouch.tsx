import React from "react";
import "./GetInTouch.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Input from "../Input/Input";
import Button from "@/components/Button/Button";

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
