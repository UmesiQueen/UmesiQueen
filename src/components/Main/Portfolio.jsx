import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    liveUrl: "https://hangman-react-vert.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/hangman-react",
    imgSrc: "/image/screenshots/hangman.png",
    imgAlt: "hangman",
    title: "Hangman - Word Game",
    description:
      " Hangman is a guessing game. Guess letters one at a time to solve the word puzzle.",
    tools: ["react", "tailwindCSS", "axios"],
  },
  {
    liveUrl: "https://tip-calculator-app-umesiqueen.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/tip-calculator-app",
    imgSrc: "/image/screenshots/splitter.png",
    imgAlt: "splitter",
    title: "Splitter",
    description: "Split group expenses with ease using Splitter.",
    tools: ["react"],
  },
  {
    liveUrl: "https://memo-app-react.vercel.app",
    repoUrl: "https://github.com/UmesiQueen/memo-app-react",
    imgSrc: "/image/screenshots/notes.png",
    imgAlt: "memo",
    title: "Memo - Note Keeper",
    description:
      "Capture and edit your thoughts and ideas on the note keeper app.",
    tools: ["mongodb", "axios", "framerMotion"],
  },
];

const ProjectCard = ({
  liveUrl,
  repoUrl,
  imgAlt,
  imgSrc,
  title,
  description,
  tools,
}) => {
  return (
    <div className="works relative w-64 h-96 hover:bg-[#262625] border border-white-200 hover:scale-[1.05] ">
      <a href={liveUrl} className="block h-full">
        <div className="relative">
          <div className="preview absolute w-full h-full bg-[#5e548eae] text-white-200 flex items-center justify-center gap-x-2 invisible">
            <LaunchIcon /> <span>View Site</span>
          </div>
          <img src={imgSrc} alt={imgAlt} className="h-full w-full" />
        </div>
        <div className="p-4">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="tools mt-2 text-sm">
            {tools.map((item, i) => (
              <span
                className=" before:content-['#'] before:text-accent-pink mt-auto"
                key={i}
              >
                {item}{" "}
              </span>
            ))}
          </p>
        </div>
      </a>

      <motion.a
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 absolute z-[1] top-32 -right-6 rounded-full bg-purple-400 shadow-inner text-white-400"
        title="View Source Code"
      >
        <GitHubIcon />
      </motion.a>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="mt-10 px-8 md:px-0">
      <h2>Portfolio</h2>
      <div className="md:px-8 ">
        <p className="mt-3">
          Here's some of the projects I've worked on in the past.
          <a
            href="https://github.com/UmesiQueen"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-purple-400 hover:text-accent-pink pl-1"
          >
            To see more ⇢
          </a>
        </p>

        <div className=" flex flex-col items-col mt-7">
          <div className="flex flex-wrap gap-10">
            {projects.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
