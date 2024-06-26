import React, { useEffect } from "react";
import projectsArray from "../../services/projectsArray";
import siteIcon from "../../assets/projectsPicture/siteIcon.svg";
import githubIcon from "../../assets/projectsPicture/githubIcon.svg";
import "./Projects.scss";

function Card({ language, isTransitionning }) {
  // UseEffect used for checking which cards are displayed based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      id="projectsSection"
      className={isTransitionning ? "languageTransition" : ""}
    >
      <h2>{language === "fr" ? "Projets" : "Projects"}</h2>
      <div id="projectsCards">
        {projectsArray
          .map((project) => (
            <div className="Card hidden" key={project.id}>
              {/* Title of Card */}
              <h2 className="titleCard">
                <img
                  src={project.logo}
                  alt={project.alt}
                  className="logoCard"
                />
                {project.name}
                <span className="spanTitleCard">
                  <a
                    href={project.link}
                    target="_blank"
                    className={project.link === "" ? "unclickable" : ""}
                  >
                    <img
                      src={siteIcon}
                      alt="Website External Link Icon"
                      className={project.link === "" ? "unclickable" : ""}
                    />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className={project.github === "" ? "unclickable" : ""}
                  >
                    <img
                      src={githubIcon}
                      alt="Github External Link Icon"
                      className={project.github === "" ? "unclickable" : ""}
                    />
                  </a>
                </span>
              </h2>

              <div className="bodyCard">
                <img
                  src={project.img}
                  alt={`${project.name} website picture`}
                  width="100%"
                />
                <p className="description">{project.desc[language]}</p>
                {project.descTwo ? (
                  <p className="descriptionTwo">{project.descTwo[language]}</p>
                ) : (
                  ""
                )}
              </div>
              <p className="hashtags">
                <span>{project.hashtags}</span>
                <span>{project.status[language]}</span>
              </p>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
}

export default Card;
