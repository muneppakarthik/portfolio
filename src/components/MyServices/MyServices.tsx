import React from "react";
import "./MyServices.scss";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";

const MyServices = () => {
  const data = [
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
    {
      title: "Web Development",
      buttonLabel: "Show more",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    },
  ];
  return (
    <div className="my-services-container">
      <SectionHeading label="My services" />
      <div className="my-services-container__wrapper">
        {data.map((item, index) => (
          <div
            className="my-services-container__wrapper__service-list-item card-shadow"
            key={index}
          >
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <Button label={item.buttonLabel} variant="outline" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
