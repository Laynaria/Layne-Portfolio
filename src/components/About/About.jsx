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
          <p>
            Scénariste et entrepreneur depuis 2017, j'ai décidé de me
            reconvertir dans une autre de mes passions en fin 2022: le
            Développement Web.
          </p>
        ) : (
          <p>
            Scenarist and entrepreneur since 2017, I chose to reconvert myself
            into another of my passion in late 2022: Web development.
          </p>
        )}

        {/* We map the buttons for the experience slider, clicking on a 
        button will change a state to show the selected experience informations */}
        <div id="experienceMenu">
          {experiences.map((experience) => (
            <button
              type="button"
              onClick={() => setExp(experience.id)}
              key={experience.id}
            >
              <img src={experience.logo} alt={`${experience.name} logo`} />
              <span className="experienceTitle">{experience.name}</span>
            </button>
          ))}
        </div>

        {/* Selected experience informations. Depends of the exp state */}
        <p id="experienceParagraph">
          <span
            className="experienceDecorationSpan"
            style={{ backgroundImage: `url(${experiences[exp].banner})` }}
          ></span>
          {language === "fr"
            ? experiences[exp].desc.map((elem) => (
                <span className="experienceParagraphSpan" key={elem.id}>
                  {elem.span}
                </span>
              ))
            : experiences[exp].descEN.map((elem) => (
                <span className="experienceParagraphSpan" key={elem.id}>
                  {elem.span}
                </span>
              ))}
          <a
            href={experiences[exp].url}
            target="_blank"
            alt={`${experiences[exp].name} link`}
          >
            <img
              src={experiences[exp].logo}
              alt={`${experiences[exp].name} logo`}
            />
            {experiences[exp].name}
          </a>
        </p>

        <p>mes Stacks</p>
      </div>
    </section>
  );
}

export default About;
