import reactLogo from "../assets/tools/react.svg";
import javascriptLogo from "../assets/tools/javascript.svg";
import cssLogo from "../assets/tools/css.svg";
import htmlLogo from "../assets/tools/html.svg";

import nodeLogo from "../assets/tools/node.svg";
import mysqlLogo from "../assets/tools/mysql.svg";
import apirestLogo from "../assets/tools/apirest.svg";

import figmaLogo from "../assets/tools/figma.svg";
import gitLogo from "../assets/tools/git.svg";
import githubLogo from "../assets/tools/github.svg";
import scrumLogo from "../assets/tools/scrum.svg";
import wordpressLogo from "../assets/tools/wordpress.svg";

const stacksArray = [
  {
    id: 0,
    title: "Frontend",
    titleEN: "Frontend",
    languages: [
      {
        id: 0,
        name: "React",
        img: reactLogo,
      },
      { id: 1, name: "Javascript", img: javascriptLogo },
      { id: 2, name: "CSS3", img: cssLogo },
      { id: 3, name: "HTML5", img: htmlLogo },
    ],
  },
  {
    id: 1,
    title: "Backend",
    titleEN: "Backend",
    languages: [
      { id: 0, name: "Node", img: nodeLogo },
      { id: 1, name: "Express", img: nodeLogo },
      { id: 2, name: "MySQL", img: mysqlLogo },
      { id: 3, name: "API REST", img: apirestLogo },
    ],
  },
  {
    id: 2,
    title: "Outils",
    titleEN: "Tools",
    languages: [
      { id: 0, name: "Figma", img: figmaLogo },
      { id: 1, name: "Git", img: gitLogo },
      { id: 2, name: "Github", img: githubLogo },
      { id: 3, name: "Scrum", img: scrumLogo },
      { id: 4, name: "Wordpress", img: wordpressLogo },
    ],
  },
];

export default stacksArray;
