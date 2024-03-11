import { useContext } from "react";
import { motion } from "framer-motion";

import { AppContext } from "../../App";

const skills = [
  "HTML5/CSS3",
  "JAVASCRIPT",
  "REACT",
  "TYPESCRIPT",
  "NODEJS",
  "TAILWINDCSS",
  "FRAMER MOTION",
  "MONOGOBD",
  "SQL",
];

const About = () => {
  const { refs } = useContext(AppContext);

  const handleClick = () => {
    window.scrollTo({
      top:
        refs.contact.current.offsetTop - (window.innerWidth >= 768 ? 96 : 75),
      behavior: "smooth",
    });
  };

  return (
    <section ref={refs.about} className=" mb-5 px-8 md:px-40 lg:px-48">
      <div className="mt-5 md:mt-0 lg:flex">
        <div className="lg:w-1/2">
          <p>
            Hi Human, I'm Queen. A Frontend Developer. I build
            <b> accessible</b>, <b>responsive</b> and <b>optimized</b> web
            applications. Constantly improving my skills to increase my{" "}
            <b>efficiency</b> and <b>productivity</b> as a Developer.
          </p>

          <p className="mt-3">
            When I'm not burying my head on the screen 💻, I love to go on
            adventures, visit new places and taste new flavours.
          </p>
        </div>

        <div className="mt-4 lg:mt-0 py-6 lg:py-0 lg:w-1/2 flex flex-wrap justify-between content-center lg:items-start md:justify-evenly gap-4">
          <a
            href="/Queen_Umesi_-_Frontend_Developer.pdf"
            download="Queen_Umesi_-_Frontend_Developer.pdf"
          >
            <button className="btn py-2 px-4 w-[150px]">Download CV</button>
          </a>
          <button className="btn py-2 px-4 w-[150px]" onClick={handleClick}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ul className=" skills flex justify-center gap-x-1 gap-y-2 md:gap-2 flex-wrap pb-3 ">
          {skills.map((skill, index) => (
            <motion.li
              whileHover={{
                backgroundColor: "#fc6666",
                color: "#fff",
                boxShadow: "inset 0px 0px 1px 2px rgba(0,0,0,0.6)",
              }}
              transition={{ type: "spring", damping: 10 }}
              key={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
