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

import greenRent from "../assets/projectsPicture/GreenRent.png";
import greenRentLogo from "../assets/projectsPicture/leaf.svg";

import externatic from "../assets/projectsPicture/Externatic.png";
import externaticLogo from "../assets/projectsPicture/ExternaticLogo.png";

import veganWitchPot from "../assets/projectsPicture/VeganWitchPot.png";
import veganWitchPotLogo from "../assets/projectsPicture/VeganWitchPotLogo.svg";

const projectsArray = [
  {
    id: 0,
    name: "Chocolat'Inn",
    logo: chocolatInnLogo,
    alt: "Chocolat'Inn Logo",
    img: chocolatInn,
    link: `https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie/`,
    github: `https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie`,
    hashtags: "#HTML #CSS #Javascript",
    desc: {
      fr: "Chocolat'Inn est un projet de petit site vitrine pour un Chocolatier fictif. Nous avions douze jours pour le réaliser avec une équipe de cinq personnes au total.",
      en: "Chocolat'Inn is a little project around a showcase website for a fictive Chocolatier. We had twelve days to create it with a team of five people in total.",
    },
    descTwo: {
      fr: "Nous avons réalisé ce projet au tout début de notre formation à la Wild Code School.",
      en: "We made this project at the start of our training at Wild Code School.",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: 1,
    name: "Portfolio Aria",
    logo: portfolioAriaLogo,
    alt: "Portfolio Aria Logo",
    img: portfolioAria,
    link: `https://aria-portfolio.netlify.app/`,
    github: `https://github.com/Laynaria/Aria-Portfolio`,
    hashtags: "#React #JSX #Node #CSS #Javascript",
    desc: {
      fr: "Aria est une illustratrice et une touche-à-tout des métiers graphiques. Elle m'a sollicité afin de lui réaliser un portfolio graphique avec des animations, notamment celui d'un fil qui se dessine lorsque la page défile.",
      en: "Aria is an illustrator and a jack-of-all-trades of graphic professions. She asked me to create her portfolio with animations, particularly the one of a thread which draw itself when the page scrolls.",
    },
    status: { fr: "En cours", en: "In progress" },
  },
  {
    id: 2,
    name: "Toasty Mood v1",
    logo: toastyMoodLogo,
    alt: "Toasty Mood Logo",
    img: toastyMood,
    link: `https://toasty-mood.netlify.app/`,
    github: `https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P2-Team-Eagle`,
    hashtags: "#React #JSX #Node #CSS #API #Javascript #Scrum",
    desc: {
      fr: "Toasty Mood est un projet d'application lifestyle de journal intime combiné avec une API de météo.",
      en: "Toasty Mood is a lifestyle application project of a diary combined with a weather forecast API.",
    },
    descTwo: {
      fr: "L'idée était que l'utilisateur pourrait comparer les humeurs qu'il enregistre à travers les jours avec la météo afin de voir son influence!",
      en: "The idea was for the user to be able to compare his mood that he would register through the days with the weather to see how it could influence it!",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: 3,
    name: "Wizard Code School",
    logo: wizardCodeSchoolLogo,
    alt: "Wizard Code School Logo",
    img: wizardCodeSchool,
    link: `https://wizard-code-school.netlify.app/`,
    github: `https://github.com/vassili45/Hackathon-1`,
    hashtags: "#React #JSX #Node #CSS #Javascript",
    desc: {
      fr: "Moins de 30 heures pour coder un projet en rapport avec le thème du voyage pour un Hackathon de la Wild Code School?",
      en: "Less than 30 hours to code a project in relation with the traveling theme for a Wild Code School Hackathon?",
    },
    descTwo: {
      fr: "Un challenge que nous avons su relever avec humour dans une petite histoire mélangeant l'univers de Harry Potter et de la Wild Code School. L'équipe était encore une fois composée de cinq personnes!",
      en: "A challenge that we took on humorously with a story mixing the Harry Potter universe with the Wild Code School. The team was once again composed of five people.",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: 4,
    name: "Portfolio Layne",
    logo: portfolioLayneLogo,
    alt: "Portfolio Layne Logo",
    img: portfolioLayne,
    link: ``,
    github: `https://github.com/Laynaria/Layne-Portfolio`,
    hashtags: "#React #JSX #Node #SASS #CSS #Javascript",
    desc: {
      fr: "Ce projet est tout simplement celui de mon portfolio que vous avez actuellement sous les yeux, il n'est donc pas nécessaire de cliquer sur le lien pour y accéder.",
      en: "This project is simply the one of my portfolio that you currently are looking at, so it’s unnecessary to click on the link to access it.",
    },
    status: { fr: "En cours", en: "In progress" },
  },
  {
    id: 5,
    name: "Green Rent",
    logo: greenRentLogo,
    alt: "Green Rent Logo",
    img: greenRent,
    link: ``,
    github: `https://github.com/Laynaria/Midnight-Hackathon`,
    hashtags: "#React #JSX #Express #Node #Tailwind #CSS #Javascript #MYSQL",
    desc: {
      fr: "Nous avions 48h pour coder un projet fullstack pour ce second hackathon dont le thème était un site de location de véhicule.",
      en: "We had 48h to code a fullstack project for this second hackathon which theme was to make a vehicle rent website.",
    },
    descTwo: {
      fr: "Nous avons gagné la première place dans notre cluster et sommes ainsi arrivé en finale, où il m'a fallu présenter le projet en anglais devant une audience internationale assez conséquente.",
      en: "We won first place in our cluster and reached the final, where I had to present this project in english in front of a fairly substantial international audience.",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: 6,
    name: "Externatic",
    logo: externaticLogo,
    alt: "Externatic Logo",
    img: externatic,
    link: `https://externatic.remote-fr-2.wilders.dev/`,
    github: `https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P3-Externatic`,
    hashtags: "#React #JSX #Express #Node #SASS #CSS #Javascript #MYSQL",
    desc: {
      fr: "Notre projet final de formation, en partenariat avec Externatic. Le but était de leur créer un P.O.C. pour leur plateforme de recrutement: Offres d'emploi, gestions des candidats, gestion des entreprises, authentification, etc.",
      en: "Our training final project, in partnership with Externatic. The goal was to create a P.O.C for their recruitment platform: Job offers, candidates management, societies management, authentification, etc.",
    },
    descTwo: {
      fr: "Point important : Ils souhaitaient rester au centre du processus de recrutement.",
      en: "Important point: They wanted to remain at the center of the recruitment process.",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: 7,
    name: "Vegan Witch Pot",
    logo: veganWitchPotLogo,
    alt: "Externatic Logo",
    img: veganWitchPot,
    link: ``,
    github: `https://github.com/Laynaria/Vegan-Witch-Pot`,
    hashtags: "#React #JSX #Express #Node #SASS #CSS #Javascript #MYSQL",
    desc: {
      fr: "Mon projet de certification fullstack: un site de recettes vegan, avec composition de menu hebdomadaires et liste de courses.",
      en: "My fullstack certification project: a vegan recipes website, with weekly menu composition and grocery list.",
    },
    descTwo: {
      fr: "À terme, il y aura aussi un système d'authentification et la possibilité de partager ses recettes avec validation admin.",
      en: "Ultimately, there will be an authentification system and the possibility to share your reicipes with admin validation.",
    },
    status: { fr: "En cours", en: "In progress" },
  },
];

export default projectsArray;
