import React, { useState } from "react";
import experiences from "../../services/experiences";

import "./About.scss";

function About({ language }) {
  const [exp, setExp] = useState(0);
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
          <button
            type="button"
            // onClick={setExp(experience.id)}
            key={experience.id}
          >
            <img src={experience.img} alt={`${experience.name} logo`} />
            {experience.name}
          </button>
        ))}
        <p id="experienceParagraph">
          {" "}
          <a href={experiences[exp].url} alt={`${experiences[exp].name} link`}>
            <img
              src={experiences[exp].img}
              alt={`${experiences[exp].name} logo`}
            />
            {experiences[exp].name}
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
