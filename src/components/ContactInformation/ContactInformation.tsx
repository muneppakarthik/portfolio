import React from "react";
import "./ContactInformation.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactInformation = () => {
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
    <div className="contact-information-container">
      <SectionHeading label="Contact information" />
      <div className="contact-information-container__wrapper">
        {contactDetails.map((contactVariants, index) => (
          <div
            className="contact-information-container__wrapper__service-list-item card-shadow"
            key={index}
          >
            {contactVariants.map((item, ind) => (
              <React.Fragment key={index + ind}>
                <h5>{item.label}</h5>
                <p>{item.value}</p>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
