import chocolatInn from "../assets/projectsPicture/ChocolatInn.png";
import chocolatInnLogo from "../assets/projectsPicture/ChocolatInnLogo.png";

import portfolioAria from "../assets/projectsPicture/PortfolioAria.png";
import portfolioAriaLogo from "../assets/projectsPicture/PortfolioAriaLogo.png";

import toastyMood from "../assets/projectsPicture/ToastyMood.png";
import toastyMoodLogo from "../assets/projectsPicture/ToastyMoodLogo.png";

import wizardCodeSchool from "../assets/projectsPicture/WizardCodeSchool.png";
import wizardCodeSchoolLogo from "../assets/projectsPicture/WizardCodeSchoolLogo.png";

import portfolioLayne from "../assets/projectsPicture/PortfolioLayne.png";
import portfolioLayneLogo from "../assets/Laynevatar.png";

const projectsArray = [
  {
    name: "Chocolat'Inn",
    logo: chocolatInnLogo,
    alt: "Chocolat'Inn Logo",
    img: chocolatInn,
    link: `https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie/`,
    github: `https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie`,
    hashtags: "#HTML #CSS #Javascript",
    desc: "Chocolat'Inn est un projet de petit site vitrine pour un Chocolatier fictif. Nous avions douze jours pour le réaliser avec une équipe de cinq personnes au total.",
    descTwo:
      "Nous avons réalisé ce projet au tout début de notre formation à la Wild Code School.",
    status: "Terminé",
  },
  {
    name: "Portfolio Aria",
    logo: portfolioAriaLogo,
    alt: "Portfolio Aria Logo",
    img: portfolioAria,
    link: `https://aria-portfolio.netlify.app/`,
    github: `https://github.com/Laynaria/Aria-Portfolio`,
    hashtags: "#React #JSX #CSS #Javascript",
    desc: "Aria est une illustratrice et une touche à tout des métiers graphiques. Elle m'a sollicité afin de lui réaliser un portfolio graphique avec des animations, notamment celui d'un fil qui se dessine lorsque la page défile.",
    status: "En cours",
  },
  {
    name: "Toasty Mood v1",
    logo: toastyMoodLogo,
    alt: "Toasty Mood Logo",
    img: toastyMood,
    link: `https://toasty-mood.netlify.app/`,
    github: `https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P2-Team-Eagle`,
    hashtags: "#React #JSX #CSS #API #Javascript #Scrum",
    desc: "Toasty Mood est un projet d'application lifestyle de journal intime combiné avec une API de météo.",
    descTwo:
      "L'idée était que l'utilisateur pourrait comparer les humeurs qu'il enregistre à travers les jours avec la météo afin de voir son influence!",
    status: "Terminé",
  },
  {
    name: "Wizard Code School",
    logo: wizardCodeSchoolLogo,
    alt: "Wizard Code School Logo",
    img: wizardCodeSchool,
    link: `https://wizard-code-school.netlify.app/`,
    github: `https://github.com/vassili45/Hackathon-1`,
    hashtags: "#React #JSX #CSS #Javascript",
    desc: "Moins de 30 heures pour coder un projet en rapport avec le thème voyage pour un Hackathon de la Wild Code School.",
    descTwo:
      "Un challenge que nous avons sû relever avec humour dans une petite histoire mélangeant l'univers de Harry Potter et de la Wild Code School. L'équipe était encore une fois composée de cinq personnes!",
    status: "Terminé",
  },
  {
    name: "Portfolio Layne",
    logo: portfolioLayneLogo,
    alt: "Portfolio Layne Logo",
    img: portfolioLayne,
    link: ``,
    github: `https://github.com/Laynaria/Layne-Portfolio`,
    hashtags: "#React #JSX #SASS #CSS #Javascript",
    desc: "Ce projet est tout simplement celui de mon portfolio que vous avez actuellement sous les yeux, il n'est donc pas nécessaire de cliquer sur le lien pour y accéder",
    status: "En cours",
  },
];

export default projectsArray;
