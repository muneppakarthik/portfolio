import React from "react";
import "./overview.scss";
import Image from "next/image";
import CircularProgress from "@/components/CircularProgress/CircularProgress";
import HorizentalProgress from "@/components/HorizentalProgress/HorizentalProgress";
import Overviewclose from "./overviewclose";

const Overview = ({ className = "" }) => {
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
        <h3>Artur Carter</h3>
        <h4>Front-end Deweloper</h4>
        <h4>Ui/UX Designer</h4>
      </div>

      <div className="profile-about">
        <div className="profile-about__block">
          <ul className="address">
            <li>
              <h6>Residence:</h6>
              <span>Canada</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Toronto</span>
            </li>
            <li>
              <h6>Age:</h6>
              <span>26</span>
            </li>
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <ul className="profile-about__block__circle">
            <li>
              <CircularProgress value={100} />
              <span>French</span>
            </li>
            <li>
              <CircularProgress value={90} />
              <span>English</span>
            </li>
            <li>
              <CircularProgress value={70} />
              <span>Spanish</span>
            </li>
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <HorizentalProgress lable="html" value="90" />
          <HorizentalProgress lable="CSS" value="90" />
          <HorizentalProgress lable="JavaScript" value="80" />
          <HorizentalProgress lable="html" value="90" />
          <HorizentalProgress lable="CSS" value="90" />
          <HorizentalProgress lable="JavaScript" value="80" />
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <ul className="additonal-skills">
            <li>
              <i className="fa-solid fa-check" />
              <span>Bootstrap, Materialize</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Stylus, Sass, Less</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Gulp, Webpack, Grunt</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Stylus, Sass, Less</span>
            </li>
            <li>
              <i className="fa-solid fa-check" />
              <span>Gulp, Webpack, Grunt</span>
            </li>
          </ul>
        </div>
        <div className="profile-about__block__divider" />
        <div className="profile-about__block">
          <button className="download-cv">
            DOWNLOAD CV <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </div>

      <div className="profile-footer">
        <ul>
          <li>
            <i className="icon fab fa-linkedin" />
          </li>
          <li>
            <i className="icon fa-brands fa-square-x-twitter"></i>
          </li>
          <li>
            <i className="icon fa-brands fa-github"></i>
          </li>
          <li>
            <i className="icon fa-brands fa-github"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
