import { useContext } from "react";
import { motion } from "framer-motion";

import Button from "../UI/Button/Button";
import { AppContext } from "../../App";

const skills = [
  "HTML5/CSS3",
  "JAVASCRIPT",
  "REACT",
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESSJS",
  "TAILWINDCSS",
  "STYLED COMPONENTS",
  "FRAMER MOTION",
  "MONOGOBD",
  "SQL",
  "VERCEL",
  "HEROKU",
];

const About = () => {
  const { refs } = useContext(AppContext);

  return (
    <section ref={refs.about} className=" mb-5 px-8 md:px-0">
      <h2>About</h2>
      <div className="md:px-8">
        <div className="mt-5 md:mt-0 lg:flex">
          <div className="lg:w-1/2">
            <p>
              Hi Human, I'm Queen. A FrontEnd Developer. I build
              <b> accessible</b>, <b>responsive</b> and <b>optimized</b> web
              applications. Constantly improving my skills to increase my{" "}
              <b>efficiency</b> and <b>productivity</b> as a Developer. Let's
              create magic together.
            </p>

            <p className="mt-5">
              When I'm not burying my head on the screen, I love to go on
              adventures, visit new places and taste new flavours.
            </p>
          </div>

          <div className="py-6 lg:py-0 lg:w-1/2 flex flex-wrap lg:items-start lg:justify-evenly gap-4">
            <Button title="Download CV" />
            <Button title="Contact Me" />

            {/* <a href="/resume.pdf" download="QueenUmesi_Resume.pdf">
              <button className="btn">Download CV</button>
            </a> */}
          </div>
        </div>

        <div>
          <h3>Education and Experiences</h3>
          <p>
            Started my Tech Journey in year 2020, With heightened
            <b> dedication</b> and
            <b> consistency</b> from 2022. From Diploma and Online Courses,
            Freelancing to Interning. See Summary below,
          </p>
          <div className="experience py-10 px-16 md:px-20 lg:px-32">
            <ul>
              <li>
                <span>2020-2022</span>
                <h4>
                  Professional Diploma in Information Technology ( Software
                  Engineer )
                </h4>
                <p>National Institute for Information Technology ( NIIT )</p>
              </li>
              <li>
                <span>2022-2023</span>
                <h4>Web Development Online BootCamp</h4>
                <p>Udemy</p>
              </li>
              <li>
                <span> 2023</span>
                <h4>PNS Intern / Contributor</h4>
                <p>PNS Labs</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3>My Skills</h3>

          <ul className=" skills flex flex-wrap lg:px-8 ">
            {skills.map((skill, index) => (
              <motion.li
                whileHover={{
                  scale: 1.3,
                  backgroundColor: "#fc6666",
                  color: "#fff",
                  marginLeft: "15px",
                  marginRight: "20px",
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
      </div>
    </section>
  );
};

export default About;
