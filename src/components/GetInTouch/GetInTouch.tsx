import React from "react";
import "./GetInTouch.scss";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const GetInTouch = () => {
  return (
    <section className="get-in-touch-container" id="get-in-touch">
      <SectionHeading label="Get in touch" />
      <div className="get-in-touch-container__wrapper card-shadow">
        <Input icon="fa-user" placeHolder="Name" />
        <Input icon="fa-at" placeHolder="Email" />
        <Input icon="fa-envelope" textarea={true} placeHolder="Message" />
        <Button label="Send Message" />
      </div>
    </section>
  );
};

export default GetInTouch;
