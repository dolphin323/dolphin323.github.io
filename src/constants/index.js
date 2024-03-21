import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rebels,
  uofw,
  antagosoft,
  binary,
  fullstack,
  academy_hat,
  teacher,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Member of Research lab",
    icon: rebels,
  },
  {
    title: "Full-stack Developer",
    icon: fullstack,
  },
  {
    title: "Academy mentor",
    icon: teacher,
  },
  {
    title: "CS Masters student",
    icon: academy_hat,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "University of Waterloo, Cheriton School of Computer Science",
    icon: uofw,
    iconBg: "#383E56",
    date: "September 2023 — Present",
    points: [
      "Work on the characterization of repeated builds in CI using feature engineering and regression modeling.",
      "Evaluate usage of LLMs for vulnerability detection in Android. The arxiv: Leverage Large Language Models for Vulnerability Detection",
    ],
  },
  {
    title: "Visiting Assistant",
    company_name: "University of Waterloo, Cheriton School of Computer Science",
    icon: uofw,
    iconBg: "#383E56",
    date: "May 2023 — August 2023",
    points: [
      "Worked on Gradle Build Systems. Studied the change impact on Gradle Build system specifications.",
      "Worked on data flow analysis and improved existing tools for code comparing using AST. Worked on implementing Definition-Use chains.",
    ],
  },
  {
    title: "React Native Engineer",
    company_name: "Antagosoft",
    icon: antagosoft,
    iconBg: "#E6DEDD",
    date: "March 2023 — August 2023",
    points: [
      "Worked on the Fitness app and used ML Kit Pose Detection API to detect poses in real time",
      "Proposed new animations to increase user engagement",
      "Added CI using Fastlane, which reduced time of testing and publishing the mobile application",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Binary Studio Ltd",
    icon: binary,
    iconBg: "#E6DEDD",
    date: "September 2021 — April 2023",
    points: [
      "Developed mobile applications using React Native and TypeScript",
      "Developed website using React, and worked on the backend with Express, TypeORM, and PostgreSQL",
    ],
  },
];

export { services, experiences };
