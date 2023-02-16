import React from "react";
import experiences from "../../services/experiences";

import "./About.scss";

function About({ language }) {
  return (
    <section id="aboutSection">
      <h1>{language === "fr" ? "À propos" : "About Me"}</h1>

      <div id="aboutBox">
        {language === "fr" ? (
          <p>Auteur et entrepreneur depuis 2017, </p>
        ) : (
          <p>Author and entrepreneur since 2017, </p>
        )}
        {experiences.map((experience) => (
          <a href={experience.url} alt={`${experience.name} link`}>
            <img src={experience.img} alt={`${experience.name} logo`} />
            {experience.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default About;
