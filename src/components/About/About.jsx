import React from "react";

import "./About.scss";

function About({ language }) {
  return (
    <section id="aboutSection">
      <h1>{language === "fr" ? "À propos" : "About Me"}</h1>
    </section>
  );
}

export default About;
