import avatar from "../../assets/Laynevatar.png";
import "./Welcome.scss";

function Welcome({ language, isTransitionning }) {
  return (
    <section className="Welcome">
      <img src={avatar} id="avatar" alt="Avatar Portfolio" />
      <div id="WelcomeText">
        <h1 className={isTransitionning ? "languageTransition" : ""}>
          Christopher Raspail
        </h1>
        <h2 className={isTransitionning ? "languageTransition" : ""}>
          {language === "fr"
            ? "Developpeur Web FullStack, Scénariste, Auteur, Créateur de Contenu"
            : "Web Developper FullStack, Scenarist, Author, Content Creator"}
        </h2>
      </div>
    </section>
  );
}

export default Welcome;
