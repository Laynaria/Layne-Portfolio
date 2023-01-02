import { useState } from "react";
import "./Header.scss";

function Header() {
  // Burger State and function to change icon when clicking
  const [isBurger, setIsBurger] = useState(false);

  const burgerHandler = () => {
    setIsBurger(!isBurger);
  };

  // ScrolltoTop Function when clicking on Logo
  const scrollToTop = () => {
    const body = document.querySelector("body");
    body.scrollIntoView({
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
      <label for="burger" className="burger">
        <input id="burger" type="checkbox" onClick={burgerHandler} />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      {/* Burger Open? Show Navigation else nothing*/}
      <nav className={isBurger ? "showNav" : "hideNav"}>
        <ul>
          <li onClick={scrollToTop}>Home</li>
          <li onClick={scrollToProjects}>Projects</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
