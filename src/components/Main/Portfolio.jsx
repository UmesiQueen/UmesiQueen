import { useContext } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { AppContext } from "../../App";
import hangman from "../../assets/image/screenshots/hangman.png";
import splitter from "../../assets/image/screenshots/splitter.png";
import notes from "../../assets/image/screenshots/notes.png";
import cycleShop from "../../assets/image/screenshots/cycle_shop.png";

const projects = [
  {
    liveUrl: "https://tip-calculator-app-umesiqueen.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/tip-calculator-app",
    imgSrc: splitter,
    imgAlt: "splitter",
    title: "Splitter",
    description: "Split group expenses with ease using Splitter.",
    tools: ["react"],
  },
  {
    liveUrl: "https://cycle-shop.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/cycle-shop",
    imgSrc: cycleShop,
    imgAlt: "cycle shop",
    title: "Cycle Shop",
    description: "Bicycle store web app.",
    tools: ["react", "tailwind", "mui"],
  },
  {
    liveUrl: "https://hangman-react-vert.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/hangman-react",
    imgSrc: hangman,
    imgAlt: "hangman",
    title: "Hangman - Word Game",
    description: "Guess letters one at a time to solve the word puzzle.",
    tools: ["typescript", "axios"],
  },
  {
    liveUrl: "https://memo-app-react.vercel.app",
    repoUrl: "https://github.com/UmesiQueen/memo-app-react",
    imgSrc: notes,
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
    <div className="works relative h-96 bg-accent-grey text-black-200 hover:scale-[1.05] rounded overflow-hidden ">
      <a href={liveUrl}>
        <div className="relative h-40 ">
          <div className="preview absolute w-full h-full bg-[#5e548eae] text-white-200 flex items-center justify-center gap-x-2 invisible">
            <LaunchIcon /> <span>View Site</span>
          </div>
          <img src={imgSrc} alt={imgAlt} className="h-full w-full px-2 pt-2" />
        </div>
      </a>
      <div className="p-4 pt-2 flex flex-col">
        <motion.a
          whileHover={{ backgroundColor: "#5e548e", color: "#fff" }}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="-mr-4 mb-2 w-16 py-1 rounded-l pl-2 self-end shadow-inner text-white-200 bg-[#5e548eae]"
          title="View Source Code"
        >
          <GitHubIcon />
        </motion.a>
        <h3 className=" text-black-200">{title}</h3>
        <p>{description}</p>
        <p className="tools mt-2 text-sm">
          {tools.map((item, i) => (
            <span
              className=" before:content-['#'] before:text-purple-400 mt-auto before:font-bold"
              key={i}
            >
              {item}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { refs } = useContext(AppContext);

  return (
    <section ref={refs.portfolio} className="my-7 px-8 md:px-40 lg:px-48">
      <h2>Portfolio</h2>
      <p className="mt-3">
        Here's some of the projects I've worked on in the past.
        <a
          href="https://github.com/UmesiQueen"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-400 hover:text-accent-pink pl-1"
        >
          Check out Github
        </a>
      </p>

      <div className="grid-container">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
