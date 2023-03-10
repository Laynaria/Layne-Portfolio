import stacksArray from "../../services/stacksArray";
import "./Stacks.scss";

export default function Stacks({ language }) {
  return (
    <div id="stacks">
      <h2>{language === "fr" ? "Mes Stacks" : "My Stacks"}</h2>
      {stacksArray.map((category) => (
        <div className="stacksCategory" id={category.id} key={category.id}>
          <h3>{language === "fr" ? category.title : category.titleEN}</h3>
          {category.languages.map((stack) => (
            <span id={stack.id} key={stack.id}>
              <img src={stack.img} alt={`${stack.name} Logo`} />
              {stack.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
