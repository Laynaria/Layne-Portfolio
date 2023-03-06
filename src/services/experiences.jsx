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
        span: "fr description wild code school is a school that schools like a school for schooling until i can do anything else that school for schooling the school of super duper school forever and ever i will never be able to school that school out of school man brave yourselves schools are coming and they will school you forever but i hope you'll be okay with that cause i'm not",
      },
      {
        id: 1,
        span: "second paragraphe",
      },
      {
        id: 2,
        span: "troisième paragraphe",
      },
    ],
    descEN: [
      {
        id: 0,
        span: "en description wild code school is a school that schools like a school for schooling until i can do anything else that school for schooling the school of super duper school forever and ever i will never be able to school that school out of school man brave yourselves schools are coming and they will school you forever but i hope you'll be okay with that cause i'm not",
      },
    ],
  },
  {
    id: 1,
    name: "Laynaria",
    logo: laynariaLogo,
    banner: laynariaBanner,
    url: "https://laynaria.com/",
    desc: [{ id: 0, span: "fr description laynaria" }],
    descEN: [{ id: 0, span: "en description laynaria" }],
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
