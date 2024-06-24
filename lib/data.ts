import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Next.js Weather App",
    description:
      "- Designed and implemented the front-end using Next.js and Tailwind CSS to deliver an interactive and visually appealing user interface. - Leveraged server-side rendering (SSR) with Next.js to enhance website performance. - Integrated various weather data APIs (Open Weather API, Open Meteo API) to provide users with comprehensive and accurate weather information. - Utilized libraries like Leaflet for map integration and Moment.js for date/time manipulation. - Deployed the application to Vercel for global accessibility.",
    tags: ["React", "Next.js", "REST APIs", "Tailwind"],
    imageUrl: "/next-weatherpic.png",
  },
  {
    title: "MERN Stack Exercise Tracker",
    description:
      "- A exercise tracker web application where a user can keep track of the various exercises they completed or want to complete during their workout. - Designed and implemented the front-end using React.js and TailwindCSS, ensuring a clean and responsive UI. - Constructed the back-end API with Node.js, Express.js, and MongoDB, enabling secure data storage and retrieval. - Integrated JSON Web Tokens for user authentication and authorization, guaranteeing data security. - Deployed the application to render.com for the back-end and netlify for the front-end, ensuring worldwide accessibility.",
    tags: ["React", "MongoDB", "Node.js", "Tailwind", "Express", "JWT"],
    imageUrl: "/exercise-tpic.png",
  },
  {
    title: "NBA PPG Prediction Model",
    description:
      "Created a prediction model to predict a players points per game (PPG) stat for the upcoming 2024-2025 season based on their PPG from the past 3 seasons (2022-2022, 2022-2023, 2023-2024). Used a Linear Regression model using scikit-learn to combine a player's data from all three seasons to help predict their PPG in the upcoming 2024-2025 season.",
    tags: ["React", "Next.js", "Tailwind","Python", "Scikit-Learn", "Flask",],
    imageUrl: "/NBAPPGpic.png",
  }
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "REST APIs",
  "Git",
  "GitHub",
  "TailwindCSS",
  "SQL",
  "Oracle",
  "MongoDB",
  "Express",
  "Python",
  "Java",
  "C",
  "Linux/Unix",
  "GUI"
  
  
] as const;
