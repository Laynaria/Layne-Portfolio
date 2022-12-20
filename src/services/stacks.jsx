import reactLogo from "../assets/react.png";

const stacks = [
  {
    img: reactLogo,
    alt: "React Logo",
    descPartOne: `React is a `,
    descHighlight: `javascript Library`,
    descPartTwo: ` which makes a lot of things
possible. You have a really open way of coding in it compared to
    frameworks like Angular.`,
    hashtags: "#JS #React #Code #Library",
  },
  {
    name: "Frontend",
    languages: ["Javascript", "React", "CSS3", "HTML5"],
  },
  {
    name: "Backend",
    languages: ["Node", "Express", "MySQL", "API REST"],
  },
  {
    name: "Autres",
    languages: ["Figma", "Git", "Github", "Scrum", "Wordpress"],
    // ptet le nommer tools dans ce cas là, et faire une exception, ou juste une exception dans le html sinon ça marche aussi.
  },
];

export default stacks;
