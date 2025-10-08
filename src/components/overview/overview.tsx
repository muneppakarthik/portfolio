import React from "react";
import "./overview.scss";
import Image from "next/image";
import CircularProgress from "@/components/CircularProgress/CircularProgress";
import HorizentalProgress from "@/components/HorizentalProgress/HorizentalProgress";
import Overviewclose from "./overviewclose";

const Overview = ({ className = "" }) => {
  const aboutDetails = [
    {
      label: "Residence",
      value: "India",
    },
    {
      label: "City",
      value: "Bengalore",
    },
    {
      label: "Age",
      value: "27",
    },
  ];

  const languages = [
    {
      label: "English",
      value: 90,
    },
    {
      label: "Kannada",
      value: 90,
    },
    {
      label: "Telugu",
      value: 100,
    },
    {
      label: "Tamil",
      value: 95,
    },
  ];

  const skills = [
    {
      label: "HTML",
      value: "95",
    },
    {
      label: "CSS",
      value: "95",
    },
    {
      label: "JavaScript",
      value: "90",
    },
    {
      label: "React JS",
      value: "95",
    },
    {
      label: "Next JS",
      value: "90",
    },
    {
      label: "TypeScript",
      value: "85",
    },
    {
      label: "JQuery",
      value: "80",
    },
  ];
  const additionalSkills = [
    "Bootstrap, React Bootstrap",
    "React Material UI",
    "SCSS",
    "Webpack",
    "React Redux, Router, Hooks",
    "Axios, REST, GraphQL",
    "RazorPay & MultisafePay",
    "WCAG Accessibility Standards",
    "GitHub, Bitbucket",
    "Figma, Adobe XD",
    "Light House, Core Web Vitals",
    "SEO",
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      link: "https://in.linkedin.com",
    },
    // {
    //   icon: "fa-brands fa-square-x-twitter",
    //   link: "https://in.linkedin.com/",
    // },
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/muneppakarthik",
    },
  ];
  return (
    <div className={`overview-wrapper ${className}`}>
      <div className="profile-card">
        <div className="image-block">
          <Image
            src="/images/profile.jpg"
            width={90}
            height={90}
            className="profile-card__avatar"
            alt="avatar"
          />
          <Overviewclose />
        </div>
        <h3>m karthik</h3>
        <h4>Front-end Developer</h4>
        <h4>React JS</h4>
      </div>

      <div className="profile-about">
        <div className="profile-about__block">
          <ul className="address">
            {aboutDetails.map((item, ind) => (
              <li key={ind}>
                <h6>{item.label}:</h6>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <ul className="profile-about__block__circle">
            {languages.map((item, ind) => (
              <li key={ind}>
                <CircularProgress value={item.value} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          {skills.map((item, ind) => (
            <React.Fragment key={ind}>
              <HorizentalProgress lable={item.label} value={item.value} />
            </React.Fragment>
          ))}
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <ul className="additonal-skills">
            {additionalSkills.map((item, ind) => (
              <li key={ind}>
                <i className="fa-solid fa-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <a href="/resume.pdf" download="/resume.pdf" className="download-cv">
            DOWNLOAD CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>

      <div className="profile-footer">
        <ul>
          {socialLinks.map((item, ind) => (
            <li key={ind}>
              <a href={item.link} target="__blank">
                <i className={`icon ${item.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
