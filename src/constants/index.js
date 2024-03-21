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
    icon: mobile,
  },
  {
    title: "Academy mentor",
    icon: backend,
  },
  {
    title: "CS Masters student",
    icon: backend,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };
