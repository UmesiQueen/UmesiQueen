import React from "react";
import Socials from "../UI/Socials/Socials";

const Footer = () => {
  return (
    <footer className="md:mt-10 px-8 py-10 md:px-48 text-white-400 md:flex justify-between items-center">
      <div>
        <img
          className=" w-[110px] md:w-[150px] h-[110px] md:h-[150px]"
          src="/image/queen-white.svg"
          alt="logo"
        />
        <a
          href="mailto:queenumesi01@gmail.com"
          className=" hover:text-purple-400 underline mb-2"
        >
          queenumesi01@gmail.com
        </a>
        <p>Frontend Developer</p>
      </div>
      <div className="mt-5">
        <h3>Mediums</h3>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
