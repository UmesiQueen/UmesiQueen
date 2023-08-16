import { useContext } from "react";

import Socials from "../UI/Socials/Socials";
import { AppContext } from "../../App";

const Home = () => {
  const { refs } = useContext(AppContext);

  return (
    <section
      ref={refs.home}
      className="h-screen text-white-400 flex flex-col justify-center  items-center md:flex-row md:justify-evenly md:space-x-10"
    >
      <div>
        <img src={"/image/queen-art.svg"} alt="digital art" />
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <h1 className=" font-Rubik_Mono_One text-xl md:text-4xl tracking-wide text-center">
          Queen Umesi
        </h1>
        <h2 className=" font-Rubik font-semibold py-2 text-white-200">
          Frontend Developer
        </h2>
        <div className=" mt-8 md:mt-10 flex justify-center lg:justify-start">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Home;
