import { useState } from "react";
import burger from "../../assets/Burger.svg";
import cross from "../../assets/Cross.svg";

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
      {/* Menu Logo */}
      <span id="logoMenu" onClick={scrollToTop}>
        Home
      </span>

      {/* Burger Menu Icon */}
      {isBurger ? (
        <img
          className="burger"
          src={cross}
          alt="Burger Menu Icon Open"
          onClick={burgerHandler}
        />
      ) : (
        <img
          className="burger"
          src={burger}
          alt="Burger Menu Icon Closed"
          onClick={burgerHandler}
        />
      )}

      {/* Navigation */}
      {isBurger ? (
        <nav>
          <ul>
            <li onClick={scrollToProjects}>Projects</li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
