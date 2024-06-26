import javascriptLogo from "../assets/tools/javascript.svg";
import typescriptLogo from "../assets/tools/typescript.svg";
import reactLogo from "../assets/tools/react.svg";
import nextLogo from "../assets/tools/next.svg";
import vueLogo from "../assets/tools/vue.svg";
import nuxtLogo from "../assets/tools/nuxt.svg";
import htmlLogo from "../assets/tools/html.svg";
import cssLogo from "../assets/tools/css.svg";
import sassLogo from "../assets/tools/sass.svg";
import tailwindLogo from "../assets/tools/tailwind.svg";

import nodeLogo from "../assets/tools/node.svg";
import mysqlLogo from "../assets/tools/mysql.svg";
import apirestLogo from "../assets/tools/apirest.svg";

import figmaLogo from "../assets/tools/figma.svg";
import gitLogo from "../assets/tools/git.svg";
import githubLogo from "../assets/tools/github.svg";
import githubActionsLogo from "../assets/tools/actions.svg";
import scrumLogo from "../assets/tools/scrum.svg";
import dockerLogo from "../assets/tools/docker.svg";
import cicdLogo from "../assets/tools/cicd.svg";
import jestLogo from "../assets/tools/jest.svg";
import playwrightLogo from "../assets/tools/playwright.svg";
import caddyLogo from "../assets/tools/caddy.svg";
import nginxLogo from "../assets/tools/nginx.svg";

const stacksArray = [
  {
    id: 0,
    title: "Frontend",
    titleEN: "Frontend",
    languages: [
      { id: 0, name: "Javascript", img: javascriptLogo },
      { id: 1, name: "Typescript", img: typescriptLogo },
      { id: 2, name: "React", img: reactLogo },
      { id: 3, name: "Next Js", img: nextLogo },
      { id: 4, name: "Vue.Js", img: vueLogo },
      { id: 5, name: "Nuxt Js", img: nuxtLogo },
      { id: 6, name: "HTML5", img: htmlLogo },
      { id: 7, name: "CSS3", img: cssLogo },
      { id: 8, name: "SASS", img: sassLogo },
      { id: 9, name: "Tailwind", img: tailwindLogo },
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
      { id: 3, name: "Github Actions", img: githubActionsLogo },
      { id: 4, name: "Scrum", img: scrumLogo },
      { id: 5, name: "Docker", img: dockerLogo },
      { id: 6, name: "CI/CD", img: cicdLogo },
      { id: 7, name: "Jest", img: jestLogo },
      { id: 8, name: "Playwright", img: playwrightLogo },
      { id: 9, name: "Caddy", img: caddyLogo },
      { id: 10, name: "Nginx", img: nginxLogo },
    ],
  },
];

export default stacksArray;
