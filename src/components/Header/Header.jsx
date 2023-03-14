import { useState } from "react";
import "./Header.scss";

function Header({
  language,
  setLanguage,
  isTransitionning,
  setIsTransitionning,
}) {
  // Burger State and function to change icon when clicking
  const [isBurger, setIsBurger] = useState(false);

  // isLoading is here to make burger menu unclickable until most the animations are loaded
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const languageHandler = () => {
    setIsTransitionning(true);
    setTimeout(() => {
      language === "fr" ? setLanguage("en") : setLanguage("fr");
      setIsTransitionning(false);
    }, 500);
  };

  const burgerHandler = () => {
    if (!isLoading) {
      setIsBurger(!isBurger);
    }
  };

  // ScrolltoTop Function when clicking on Logo
  const scrollToTop = () => {
    const body = document.querySelector("body");
    body.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#aboutSection");
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const projectSection = document.querySelector("#projectsSection");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <label htmlFor="burger" className="burger">
        {isLoading ? (
          ""
        ) : (
          <input id="burger" type="checkbox" onClick={burgerHandler} />
        )}
        <span></span>
        <span></span>
        <span></span>
      </label>

      <label className="switch">
        {isLoading ? "" : <input type="checkbox" onClick={languageHandler} />}
        <span className="slider"></span>
      </label>
      {/* Burger Open? Show Navigation else nothing*/}
      <nav className={isBurger ? "showNav" : "hideNav"}>
        <ul className={isTransitionning ? "languageTransition" : ""}>
          <li onClick={scrollToTop}>Home</li>
          <li onClick={scrollToAbout}>
            {language === "fr" ? "À propos" : "About Me"}
          </li>
          <li onClick={scrollToProjects}>
            {language === "fr" ? "Projets" : "Projects"}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
