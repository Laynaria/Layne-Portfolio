import avatar from "../../assets/Laynevatar.png";
import "./Welcome.scss";

function Welcome() {
  return (
    <section className="Welcome">
      <img src={avatar} id="avatar" alt="Avatar Portfolio" width="15%" />
      <h1>
        Ceci est un portfolio réalisé en un week-end pour la talent week, il
        subira sans doute une refonte par la suite.
      </h1>
    </section>
  );
}

export default Welcome;
