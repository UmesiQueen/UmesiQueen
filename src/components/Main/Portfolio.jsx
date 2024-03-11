import { useContext } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { AppContext } from "../../App";
import hangman from "../../assets/image/screenshots/hangman.png";
import cycleShop from "../../assets/image/screenshots/cycle_shop.png";

const projects = [
  {
    liveUrl: "https://cycle-shop.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/cycle-shop",
    imgSrc: cycleShop,
    title: "Cycle Shop",
    description: "Bicycle store web app.",
    tools: ["react", "tailwind", "mui"],
  },
  {
    liveUrl: "https://hangman-react-vert.vercel.app/",
    repoUrl: "https://github.com/UmesiQueen/hangman-react",
    imgSrc: hangman,
    title: "Hangman - Word Game",
    description: "Guess letters one at a time to solve the word puzzle.",
    tools: ["typescript", "axios"],
  },
];

const ProjectCard = ({
  liveUrl,
  repoUrl,
  imgSrc,
  title,
  description,
  tools,
}) => {
  return (
    <div className="works w-full md:h-56 relative md:flex bg-accent-grey text-black-200 hover:scale-[1.02] rounded overflow-hidden ">
      <div className="self-center md:w-1/2">
        <img
          src={imgSrc}
          alt={title}
          width={300}
          height={300}
          className="mt-2 md:mt-0 p-2 mx-auto "
        />
      </div>
      <div className="px-4 pb-4 md:p-4 mt-2 flex md:flex-col flex-col-reverse md:w-1/2">
        <div>
          <h3 className=" text-purple-400">{title}</h3>
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
        <div className="py-2 space-x-2 self-end md:self-start">
          <motion.a
            whileHover={{ color: "#5e548e" }}
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            whileHover={{ color: "#5e548e" }}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Site"
          >
            <LaunchIcon />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { refs } = useContext(AppContext);

  return (
    <section ref={refs.portfolio} className="my-7 px-8 md:px-40 lg:px-48">
      <h2>Past Works</h2>
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

      <div className=" flex flex-col items-center mt-5">
        <div className="lg:w-[600px] space-y-5">
          {projects.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
