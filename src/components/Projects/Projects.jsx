import React from "react";
import projectsArray from "../../services/projectsArray";
import siteIcon from "../../assets/projectsPicture/siteIcon.svg";
import githubIcon from "../../assets/projectsPicture/githubIcon.svg";
import "./Projects.scss";

function Card({ language }) {
  return (
    <section id="projectsSection">
      <h1>{language === "fr" ? "Projets" : "Projects"}</h1>
      <div id="projectsCards">
        {projectsArray.map((project) => (
          <>
            <div className="Card">
              {/* Title of Card */}
              <h2 className="titleCard">
                <img src={project.logo} width="50px" alt={project.alt} />
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
                      width="30px"
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
                      width="30px"
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
          </>
        ))}
      </div>
    </section>
  );
}

export default Card;
