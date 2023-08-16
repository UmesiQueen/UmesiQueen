import { useState, useEffect, useContext, useRef } from "react";
import classNames from "classnames";
import { Spiral as Hamburger } from "hamburger-react";

import { AppContext } from "../../App";

const Navbar = () => {
  const navRef = useRef();

  const { refs } = useContext(AppContext);
  const { home, about, portfolio, contact } = refs;

  const [isClicked, setClick] = useState(false);
  const [onScroll, setScroll] = useState(false);

  // Capture onScroll event
  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY >= 45) {
        setScroll(true);
        setClick(false); // Close expanded navbar onScroll event`
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });

  // Close expanded navbar on resize event
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

  //Smooth scroll through page using each sections ref
  const scrollToSection = (e) => {
    const currentWidth = window.innerWidth;

    window.scrollTo({
      top: e.current.offsetTop - (currentWidth >= 768 ? 96 : 75), //exclude padding top
      behavior: "smooth",
    });
    setClick(false);
  };

  return (
    <header className="relative">
      <nav
        ref={navRef}
        className={classNames(
          " bg-black-200 text-white-400 flex justify-between items-center px-8 py-[12.5px] md:py-[23px] w-full",
          onScroll ? "fixed md:px-20 lg:px-36 z-[2]" : "absolute md:px-14 "
        )}
      >
        <img
          className=" w-[110px] md:w-[150px] h-[50px]"
          src="/image/queen-white.svg"
          alt="logo"
          onClick={() => scrollToSection(home)}
        />
        <ul
          className={classNames(
            "md:flex gap-1 font-Rubik font-medium bg-inherit ",
            isClicked
              ? "absolute top-16 right-0 w-full mt-2 text-center "
              : "hidden"
          )}
        >
          <li
            className="mx-0 md:mx-1.5 py-2 md:py-0 md:hover:bg-inherit hover:bg-[#5e548ea8] md:hover:text-purple-400 md:hover:scale-100 hover:scale-110"
            onClick={() => scrollToSection(home)}
          >
            Home
          </li>
          <li
            className="mx-0 md:mx-1.5 py-2 md:py-0 md:hover:bg-inherit hover:bg-[#5e548ea8] md:hover:text-purple-400 md:hover:scale-100 hover:scale-110"
            onClick={() => scrollToSection(about)}
          >
            About
          </li>
          <li
            className="mx-0 md:mx-1.5 py-2 md:py-0 md:hover:bg-inherit hover:bg-[#5e548ea8] md:hover:text-purple-400 md:hover:scale-100 hover:scale-110"
            onClick={() => scrollToSection(portfolio)}
          >
            Portfolio
          </li>
          <li
            className="mx-0 md:mx-1.5 py-2 md:py-0 md:hover:bg-inherit hover:bg-[#5e548ea8] md:hover:text-purple-400 md:hover:scale-100 hover:scale-110"
            onClick={() => scrollToSection(contact)}
          >
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
    </header>
  );
};

export default Navbar;
