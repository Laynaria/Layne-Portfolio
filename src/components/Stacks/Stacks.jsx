import { useEffect } from "react";
import stacksArray from "../../services/stacksArray";
import "./Stacks.scss";

export default function Stacks({ language }) {
  // UseEffect used for checking which stacks are displayed based on scroll
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

    const hiddenElements = document.querySelectorAll(".stacksCategory span");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div id="stacks">
      <h2>{language === "fr" ? "Mes Stacks" : "My Stacks"}</h2>
      {stacksArray.map((category) => (
        <div className="stacksCategory" id={category.id} key={category.id}>
          <h3>{language === "fr" ? category.title : category.titleEN}</h3>
          {category.languages.map((stack) => (
            <span
              className="stack"
              id={stack.id}
              key={stack.id}
              style={{ transition: `${stack.id * 0.5 + 1}s` }}
            >
              <img src={stack.img} alt={`${stack.name} Logo`} />
              {stack.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
