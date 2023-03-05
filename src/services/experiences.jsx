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
    desc: [{ id: 0, span: "fr description theARTchemists" }],
    descEN: [{ id: 0, span: "en description theARTchemists" }],
  },
];

export default experiences;
