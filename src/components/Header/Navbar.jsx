import React, { useState, useEffect, useContext, useRef } from "react";
import classNames from "classnames";
import { Spiral as Hamburger } from "hamburger-react";

import { AppContext } from "../../App";

const Navbar = () => {
  const navRef = useRef();
  const { onScroll } = useContext(AppContext);
  const [isClicked, setClick] = useState(false);

  // Close expanded navbar onScroll event
  useEffect(() => {
    if (onScroll) setClick(false); // this doesn't work as expected
  }, [onScroll]);

  // Close expanded navbar resize event
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setClick(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Detect outside click when navbar is expanded
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isClicked) !navRef.current.contains(event.target) && setClick(false);
    };

    window.addEventListener("click", handleOutsideClick, true);

    return () => {
      window.removeEventListener("click", handleOutsideClick, true);
    };
  });

  return (
    <nav
      ref={navRef}
      className={classNames(
        " bg-black-200 text-white-400 flex justify-between items-center px-8 w-full",
        onScroll ? "fixed md:px-32 z-[2]" : "absolute md:px-20"
      )}
    >
      <img
        className=" w-[110px] md:w-[150px] h-[110px]"
        src="/image/queen-white.svg"
        alt="logo"
      />

      <ul
        className={classNames(
          "md:flex gap-1 font-medium bg-black-200 ",
          isClicked
            ? "absolute top-16 right-0 w-full mt-4 text-center "
            : "hidden"
        )}
      >
        <li className="px-0 md:px-1.5 py-2 md:py-0 hover:bg-[#5e548ea8] hover:scale-110">
          Home
        </li>
        <li className="px-0 md:px-1.5 py-2 md:py-0 hover:bg-[#5e548ea8] hover:scale-110">
          About
        </li>
        <li className="px-0 md:px-1.5 py-2 md:py-0 hover:bg-[#5e548ea8] hover:scale-110">
          Portfolio
        </li>
        <li className="px-0 md:px-1.5 py-2 md:py-0 hover:bg-[#5e548ea8] hover:scale-110">
          Contact
        </li>
      </ul>
      <div className="font-Rubik_Mono_One absolute right-24 md:relative md:right-0">
        <a href=".">
          <span className=" hidden md:block">Download CV</span>
        </a>
      </div>

      {/* TOGGLE MENU
       For more info check, "https://hamburger-react.netlify.app/ "*/}
      <div className="md:hidden">
        <Hamburger
          toggled={isClicked}
          toggle={setClick}
          rounded
          duration={0.8}
          size={25}
        />
      </div>
    </nav>
  );
};

export default Navbar;
