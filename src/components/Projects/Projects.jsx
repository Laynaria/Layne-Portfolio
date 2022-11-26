import React from "react";
import projectsArray from "../../services/projectsArray";
import siteIcon from "../../assets/projectsPicture/siteIcon.svg";
import githubIcon from "../../assets/projectsPicture/githubIcon.svg";
import "./Projects.scss";

function Card() {
  return (
    <section id="projectsSection">
      {projectsArray.map((stack) => (
        <>
          <div className="Card">
            {/* Title of Card */}
            <h1 className="titleCard">
              <img src={stack.logo} width="50px" alt={stack.alt} />
              {stack.name}
              <span className="spanTitleCard">
                <a
                  href={stack.link}
                  target="_blank"
                  className={stack.link === "" ? "unclickable" : ""}
                >
                  <img
                    src={siteIcon}
                    alt="Website External Link Icon"
                    width="30px"
                    className={stack.link === "" ? "unclickable" : ""}
                  />
                </a>
                <a
                  href={stack.github}
                  target="_blank"
                  className={stack.github === "" ? "unclickable" : ""}
                >
                  <img
                    src={githubIcon}
                    alt="Github External Link Icon"
                    width="30px"
                    className={stack.github === "" ? "unclickable" : ""}
                  />
                </a>
              </span>
            </h1>

            <div className="bodyCard">
              <img
                src={stack.img}
                alt={`${stack.name} website picture`}
                width="100%"
              />
              <p className="description">{stack.desc}</p>
              {stack.descTwo ? (
                <p className="descriptionTwo">{stack.descTwo}</p>
              ) : (
                ""
              )}
            </div>
            <p className="hashtags">{stack.hashtags}</p>
          </div>
        </>
      ))}
    </section>
  );
}

export default Card;
