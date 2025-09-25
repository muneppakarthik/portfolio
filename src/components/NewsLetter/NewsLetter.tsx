"use client";
import React from "react";
// import CustomSlider from "@/components/CustomSlider/CustomSlider";
// import NewsLetterCard from "@/components/NewsLetter/NewsLetterCard";
import "./NewsLetter.scss";
// import SectionHeading from "@/components/SectionHeading/SectionHeading";

const NewsLetter = () => {
  const slides = [
    {
      image: "/images/bg.jpg",
      date: "Sep 24, 2020",
      dateLabel: "Events, Nature",
      title: "The main thing for the designer – to create things.",
      description:
        "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
      buttonLabel: "Read More",
    },
    {
      image: "/images/bg.jpg",
      date: "Sep 24, 2020",
      dateLabel: "Events, Nature",
      title: "The main thing for the designer – to create things.",
      description:
        "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
      buttonLabel: "Read More",
    },
    {
      image: "/images/bg.jpg",
      date: "Sep 24, 2020",
      dateLabel: "Events, Nature",
      title: "The main thing for the designer – to create things.",
      description:
        "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
      buttonLabel: "Read More",
    },
    {
      image: "/images/bg.jpg",
      date: "Sep 24, 2020",
      dateLabel: "Events, Nature",
      title: "The main thing for the designer – to create things.",
      description:
        "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
      buttonLabel: "Read More",
    },
  ];
  return (
    <div className="newsletter-container">
      {/* <SectionHeading label="Newsletter" />
      <CustomSlider
        items={slides}
        renderItem={(item) => <NewsLetterCard {...item} />}
      /> */}
    </div>
  );
};

export default NewsLetter;
