import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/notes.png";
import Work2 from "./assets/cryptocurrency.png";
import Work3 from "./assets/pokemon.jpeg";
import Work4 from "./assets/randomquotes.png";
import Work5 from "./assets/pwdgen.png";
import Work6 from "./assets/weather.jpeg";
import Work7 from "./assets/quiz.jpg";
import Work8 from "./assets/todo.png";
import Work9 from "./assets/amazon.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Lakshmi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Pravallika",
  },

  {
    id: 3,
    title: "Age : ",
    description: "36 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Hyderabad",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91-9985992413",
  },

  {
    id: 8,
    title: "Email : ",
    description: "lakki2922@gmail.com",
  },

  {
    id: 9,
    title: "Linkedin : ",
    description: "pravallika-lakshmi-7a33b5234",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English,Hindi,Telugu",
  },
];

export const stats = [
  {
    id: 1,
    no: "7+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "SharePoint <br /> Experience",
  },

  {
    id: 3,
    no: "2+",
    title: "Web Developer <br /> Experience",
  },

  {
    id: 4,
    no: "2+",
    title:
      " Teaching experience <br/> Restarting my career after maternity break",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2015 - 2017",
    title: "Web Developer <span> Ashland </span>",
    desc: "Worked on creating ------.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2010 - 2015",
    title: "SharePoint Developer <span> Wipro </span>",
    desc: "Lotus Notes databases to SharePoint migration for Novartis Client.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Teaching <span> Global Edge School </span>",
    desc: "Worked as a class teacher for 3rd grade.",
  },
  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2009 - 2009",
    title: "Teaching <span> RBVRR Women college </span>",
    desc: "Worked as a lecturer for Bio Physics subject.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title:
      "BTech in ECE <span> SriNidhi Institute of Science & Technology </span>",
    desc: "Completed BTech with 78.18%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2005",
    title: "Intermediate <span> Sri Chaitanya </span>",
    desc: "Completed Intermediate with 94.8%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2003",
    title: "School <span> St.Anthonys High School </span>",
    desc: "Completed schooling with 85.3%",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "96",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "92",
  },

  {
    id: 4,
    title: "React",
    percentage: "84",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work9,
    title: "Shopping Cart",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Shopping cart",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React,Firebase,HTML,CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://clone-6dd40.web.app/",
      },
    ],
  },
  {
    id: 3,
    img: Work1,
    title: "Notes",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Notes Application",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React,Material UI",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/notes",
      },
    ],
  },

  {
    id: 4,
    img: Work2,
    title: "Cryptocurrency",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Cryptocurrency",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS,HTML,Material UI",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/crypto",
      },
    ],
  },

  {
    id: 5,
    img: Work3,
    title: "Pokemon",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Pokemon",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS,HTML,CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/pokemon",
      },
    ],
  },

  {
    id: 6,
    img: Work4,
    title: "Random Quotes",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Random Quotes",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/quotes",
      },
    ],
  },

  {
    id: 7,
    img: Work5,
    title: "Password Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Password Generator",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        title: "Preview : ",
        desc: "/pwdgen",
      },
    ],
  },

  {
    id: 8,
    img: Work6,
    title: "Weather Forecast",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather Forecast",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/weather",
      },
    ],
  },
  {
    id: 9,
    img: Work7,
    title: "Quiz",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Quiz",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/quiz",
      },
    ],
  },
  {
    id: 10,
    img: Work8,
    title: "ToDo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ToDo",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "/todo",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
