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
    title: "GMU Course Search and Scheduler",
    description:
      "- Created a robust class search system specifically tailored for George Mason University, catering to a student population of over 30,000 allowing them to seamlessly add their course timings to their calendar. It employs a MongoDB database to manage course and scheduling data, a Go application to establish a RESTful API for the backend deployed on Cloud Run, and a Next.js frontend for user-friendly interaction deployed on vercel. - Utilized GitHub Actions for continuous integration by running a dockerized build of the application as well as router tests every time a commit is pushed to the main branch which then allows for Google Cloud Run to deploy a new instance of my application every time a code change is made.",
    tags: [
      "Go",
      "MongoDB",
      "Next.js",
      "REST APIs",
      "Cloud Run",
      "Docker",
      "Tailwind",
    ],
    imageUrl: "/gmusearch1.png",
  },
  {
    title: "Next.js Weather App",
    description:
      "- Designed and implemented the front-end using Next.js and Tailwind CSS to deliver an interactive and visually appealing user interface. - Leveraged server-side rendering (SSR) with Next.js to enhance website performance. - Integrated various weather data APIs (Open Weather API, Open Meteo API) to provide users with comprehensive and accurate weather information. - Utilized libraries like Leaflet for map integration and Moment.js for date/time manipulation. - Deployed the application to Vercel for global accessibility.",
    tags: ["React", "Next.js", "REST APIs", "Tailwind"],
    imageUrl: "/next-weatherpic.png",
  },
  {
    title: "PumpUp AI Exercise Tracker",
    description:
      "- An AI powered Exercise Tracker application utilizing an OpenAI chat bot to answer user fitness/health questions based on their tracked exercises to achieve their fitness and heath goals. Designed and implemented a responsive, user-centric interface for PumpUp, an innovative AI-powered workout tracker, using Next.js inspired by my first react project a MERN Stack Exercise Tracker. -Developed robust APIs to manage exercise data and AI interactions and MongoDB for optimized data storage and scalability. Integrated Pinecone with the OpenAI API to deliver precise AI responses, including detailed exercise information, progress tracking, personalized feedback, and nutrition advice based on the users workout routine and tracked exercises.",
    tags: [
      "Next.js",
      "OpenAI API",
      "MongoDB",
      "Pinecone Vector DB",
      "Tailwind",
    ],
    imageUrl: "/pumpup.png",
  },
  {
    title: "NBA PPG Prediction Model",
    description:
      "- Created a prediction model to predict a players points per game (PPG) stat for the upcoming 2024-2025 season based on their PPG from the past 3 seasons (2022-2022, 2022-2023, 2023-2024). Used a Linear Regression model using scikit-learn to combine a player's data from all three seasons to help predict their PPG in the upcoming 2024-2025 season.",
    tags: ["React", "Next.js", "Tailwind", "Python", "Scikit-Learn", "Flask"],
    imageUrl: "/NBAPPGpic.png",
  },
  {
    title: "MERN Stack Exercise Tracker",
    description:
      "- A exercise tracker web application where a user can keep track of the various exercises they completed or want to complete during their workout. - Designed and implemented the front-end using React.js and TailwindCSS, ensuring a clean and responsive UI. - Constructed the back-end API with Node.js, Express.js, and MongoDB, enabling secure data storage and retrieval. - Integrated JSON Web Tokens for user authentication and authorization, guaranteeing data security. - Deployed the application to render.com for the back-end and netlify for the front-end, ensuring worldwide accessibility.",
    tags: ["React", "MongoDB", "Node.js", "Tailwind", "Express", "JWT"],
    imageUrl: "/exercise-tpic.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Go",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express",
  "REST APIs",
  "Git",
  "GitHub",
  "SQL",
  "Postgres",
  "Oracle",
  "MongoDB",
  "Docker",
  "Python",
  "Java",
  "C",
  "Linux/Unix",
  "GUI",
] as const;
