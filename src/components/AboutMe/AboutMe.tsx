import React from "react";
import "./AboutMe.scss";
import Button from "../Button/Button";

const AboutMe = () => {
  return (
    <section className="about-container">
      <h2>Quality and Affordable Constructor</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <Button label="Contact Me" variant="outline" />
    </section>
  );
};

export default AboutMe;
