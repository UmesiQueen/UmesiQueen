import React from "react";
import Socials from "../Socials/Socials";
import Logo from "../../assets/image/queen-white.svg";

const Footer = () => {
  return (
    <footer className=" p-8 md:px-48 md:py-10 text-white-400 flex flex-col md:flex-row md:justify-between md:items-end">
      <div>
        <img
          className=" w-[110px] md:w-[150px] h-[50px] my-3 md:my-4 md:-ml-3"
          src={Logo}
          alt="logo"
        />
        <p>Frontend Developer</p>
      </div>
      <div className="mt-5 text-right self-end">
        <h3>Mediums</h3>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
