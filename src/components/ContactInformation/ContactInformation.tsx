import React from "react";
import "./ContactInformation.scss";
import SectionHeading from "../sectionHeading/SectionHeading";

const ContactInformation = () => {
  const contactDetails = [
    [
      {
        label: "Country",
        value: "Canada",
      },
      {
        label: "Country",
        value: "Toronto",
      },
      {
        label: "Country",
        value: "20 Dellbank Rd",
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
              <div
                className="contact-information-container__wrapper__service-list-item__block"
                key={index + ind}
              >
                <h5>{item.label}:</h5>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
