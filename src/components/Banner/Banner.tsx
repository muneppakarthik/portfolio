import React from "react";
import "./Banner.scss";
import Button from "@/components/Button/Button";

const Banner = () => {
  return (
    <section className="banner-container" id="home">
      {/* <div className="banner-container__overlay" /> */}
      <div className="banner-container__block">
        <h2>
          Discover my Amazing <br /> Art Space!
        </h2>
        <p>
          <i>{`<code> `}</i>I build &nbsp;
          <span>web interface.</span>
          <i>{`</code> `}</i>
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Banner;
