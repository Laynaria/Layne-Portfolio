import React, { useState } from "react";
import Stacks from "../Stacks/Stacks";
import experiences from "../../services/experiences";

import "./About.scss";

function About({ language, isTransitionning }) {
  const [exp, setExp] = useState(0);
  const [currentButton, setCurrentButton] = useState(0);
  const [isSliderChanging, setIssliderChanging] = useState(false);

  const sliderHandler = (id) => {
    if (exp !== id) {
      setCurrentButton(id);
      setIssliderChanging(true);
      setTimeout(() => {
        setExp(id);
        setIssliderChanging(false);
      }, 500);
    }
  };
  return (
    <section
      id="aboutSection"
      className={isTransitionning ? "languageTransition" : ""}
    >
      <h2>{language === "fr" ? "À propos" : "About Me"}</h2>

      <div id="aboutBox">
        {language === "fr" ? (
          <p>
            Scénariste et entrepreneur depuis 2017, en fin 2022 j'ai décidé de
            me reconvertir dans une autre de mes passions: le Développement Web.
          </p>
        ) : (
          <p>
            Scenarist and entrepreneur since 2017, in late 2022 I chose to
            reconvert myself into another of my passion: Web development.
          </p>
        )}

        {/* We map the buttons for the experience slider, clicking on a 
        button will change a state to show the selected experience informations */}
        <div id="experienceMenu">
          {experiences.map((experience) => (
            <button
              type="button"
              onClick={() => sliderHandler(experience.id)}
              key={experience.id}
              className={experience.id === currentButton ? "currentSlide" : ""}
            >
              <img src={experience.logo} alt={`${experience.name} logo`} />
              <span className="experienceTitle">{experience.name}</span>
            </button>
          ))}
        </div>

        {/* Selected experience informations. Depends of the exp state */}
        <p
          id="experienceParagraph"
          className={isSliderChanging ? "languageTransition" : ""}
        >
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

        <Stacks language={language} />
      </div>
    </section>
  );
}

export default About;
