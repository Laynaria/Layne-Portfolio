import avatar from "../../assets/Laynevatar.png";
import "./Welcome.scss";

function Welcome({ language }) {
  return (
    <section className="Welcome">
      <img src={avatar} id="avatar" alt="Avatar Portfolio" />
      <div id="WelcomeText">
        <h1>Christopher Raspail</h1>
        <h2>
          {language === "fr"
            ? "Developpeur Web, Programmeur, Scénariste, Auteur, Créateur de Contenu"
            : "Web Developper, Programmer, Scenarist, Author, Content Creator"}
        </h2>
      </div>
    </section>
  );
}

export default Welcome;
