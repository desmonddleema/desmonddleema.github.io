import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  tes,
  avysh,
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "TES UK",
    icon: tes,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Software Engineer specializing in delivering customized solutions to meet product requirements through the design, development, automation, and maintenance of product services",
      "Responsible for modernizing legacy systems and transforming them into innovative, cutting-edge applications",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
  {
    title: "Software Developer",
    company_name: "AVYSH",
    icon: avysh,
    iconBg: "#E6DEDD",
    date: "February 2022 - December 2022",
    points: [
      "Software Engineer responsible for delivering solutions to customer and product requirements",
      "Was responsible for scaling product services and deploy solutions on cloud and make it accessible to the end users",
      "Developed modules for early-stage startup in the B2B sector",
      "Developed modules that revolve around Customer Loyalty Programs",
      "Developed localisation framework which manage the translations of web-pages"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "AVYSH",
    icon: avysh,
    iconBg: "#E6DEDD",
    date: " May 2021 - August 2021",
    points: [
      "Software Engineer Intern responsible for developing a framework to scale the product and services across various regions. ",
      "Responsible for creating brand awareness through localisation",
      "Designed and developed an e-commerce application where the webpage will be rendered in the language selected by the user",
      "Achievement: Internship project was awarded as one of the top two projects of the internship"
    ],
  },
  
];


export { services, technologies, experiences };
