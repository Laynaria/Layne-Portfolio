import avatar from "../../assets/Laynevatar.png";
import "./Welcome.scss";

function Welcome() {
  return (
    <section className="Welcome">
      <img src={avatar} id="avatar" alt="Avatar Portfolio" width="15%" />
      <div id="WelcomeText">
        <h1>Christopher Raspail</h1>
        <h2>Web Developper, Programmer, Scenarist, Content Creator</h2>
      </div>
    </section>
  );
}

export default Welcome;
