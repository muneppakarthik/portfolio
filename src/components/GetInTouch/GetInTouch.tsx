import React from "react";
import "./GetInTouch.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Input from "../Input/Input";
import Button from "../button/button";

const GetInTouch = () => {
  const contactDetails = [
    [
      {
        label: "Country",
        value: "Canada",
      },
      {
        label: "Country",
        value: "Canada",
      },
      {
        label: "Country",
        value: "Canada",
      },
    ],
    [
      {
        label: "Email",
        value: "carter.inbox@mail.com",
      },
      {
        label: "Telegram",
        value: "@arter",
      },
      {
        label: "Skype",
        value: "Arter",
      },
    ],
    [
      {
        label: "Support service",
        value: "+78 (098) 333 11 22",
      },
      {
        label: "Office",
        value: "+78 (098) 326 11 22",
      },
      {
        label: "Personal",
        value: "+78 (098) 326 11 22",
      },
    ],
  ];

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
