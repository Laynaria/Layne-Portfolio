import wildLogo from "../assets/experiences/WildCodeSchoolLogo.png";
import wildBanner from "../assets/experiences/WildCodeSchoolBanner.svg";

import laynariaLogo from "../assets/experiences/LaynariaLogo.png";
import laynariaBanner from "../assets/experiences/LaynariaBanner.svg";

import artchemistsLogo from "../assets/experiences/ARTchemistsLogo.jpg";
import artchemistsBanner from "../assets/experiences/ARTchemistsBanner.svg";

const experiences = [
  {
    id: 0,
    name: "Wild Code School",
    logo: wildLogo,
    banner: wildBanner,
    url: "https://www.wildcodeschool.com/",
    desc: [
      {
        id: 0,
        span: "La Wild Code School est un organisme qui propose des formations intensives aux divers métiers Web. Actuellement Teaching Assistant, j'enseigne et accompe mes élèves dans leur montée en compétences sur des formations intensives de 5 mois, à l'issue desquelles ils peuvent prétendre à une certification Bac + 2.",
      },
      {
        id: 1,
        span: "Mon poste étant en Alternance, je monte de plus en compétences en tant que Concepteur Développeur d'Application, sur diverses technologies dont une partie DevOPS, et réaliserait un passage de titre Bac + 3 en septembre 2024.",
      },
    ],
    descEN: [
      {
        id: 0,
        span: "The Wild Code School is an organization which propose intensives training to the various professions of the web. I'm currently working there as a Teaching Assistant, where I assist my students in their skills development through 5 months of intensive trainings, after which they may qualify for a Diploma of Higher Education (Bac + 2).",
      },
      {
        id: 1,
        span: "My work being an apprenticeship, I'm also developing my skills as an Application Designer and Developer, on multiple technologies with a portion of DevOPS, and will pass my Bachelor (Bac + 3) in september 2024.",
      },
    ],
  },
  {
    id: 1,
    name: "Laynaria",
    logo: laynariaLogo,
    banner: laynariaBanner,
    url: "https://laynaria.com/",
    desc: [
      {
        id: 0,
        span: "Laynaria est un projet créé et réalisé en duo. On y retrouve toutes nos créations : Bande Dessinées, Illustrations, Timelapses, etc…",
      },
      {
        id: 1,
        span: "Nous avons lancé ce projet en septembre 2017, et je m’occupe de tout ce qui n’est pas illustration : scénarii, traductions, mise en ligne des contenus, gestion du wordpress, des boutiques, du tipeee et des réseaux sociaux.",
      },
    ],
    descEN: [
      {
        id: 0,
        span: "Laynaria is a project created and realized in duo. It includes all our creations: Comics, Illustrations, Timelapses, etc…",
      },
      {
        id: 1,
        span: "We launched this project in September 2017, and I work on everything which isn’t illustration: scenario, translations, contents publications, managing wordpress, shops, tipeee and social networks.",
      },
    ],
  },
  {
    id: 2,
    name: "TheARTchemists",
    logo: artchemistsLogo,
    banner: artchemistsBanner,
    url: "https://www.theartchemists.com/",
    desc: [
      {
        id: 0,
        span: "TheARTchemists est un web-magazine culturel spécialisé dans la découverte de tous types de talents artistiques et d’expérimentations plus ou moins avant-gardiste. J’ai été rédacteur de ma propre chronique pendant un peu plus de deux ans au sein de cette plateforme.",
      },
      {
        id: 1,
        span: "Mes tâches dans cette aventure étaient multiples : Gérer ma section, rechercher des sujets, préparer des interviews et mettre en place mes articles, ainsi que de participer aux réunions de Rédaction. ",
      },
    ],
    descEN: [
      {
        id: 0,
        span: "TheARTchesmists is a culture web-magazine specialized in discovering any new type of artistic talents and experimentations of a more or less avant-garde style. I was a writer of my own chronic for a bit more than two years on this platform.",
      },
      {
        id: 1,
        span: "I had numerous tasks in this adventure: manage my own section, research subjects, prepare interviews and set up my articles, along with participate in Editorial Meetings.",
      },
    ],
  },
];

export default experiences;
