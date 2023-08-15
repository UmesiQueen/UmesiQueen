import React from "react";

const Navbar = () => {
  return (
    <nav className=" absolute text-white-400 flex justify-between items-center px-8 md:px-20 w-full">
      <img
        className=" w-[110px] md:w-[150px] h-[110px] md:h-[150px]"
        src="/image/queen-white.svg"
        alt="logo"
      />

      <ul className=" hidden md:flex gap-4 font-medium ">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="font-Rubik_Mono_One hidden md:block">
        <a href=".">Download CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
