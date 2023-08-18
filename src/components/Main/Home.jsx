import { useContext } from "react";

import Socials from "../Socials/Socials";
import { AppContext } from "../../App";

const Home = () => {
  const { refs } = useContext(AppContext);

  return (
    <section
      ref={refs.home}
      className=" h-fit lg:h-screen text-white-400 flex flex-col justify-center items-center lg:flex-row md:justify-evenly pb-14 pt-24 lg:pb-0 px-8 md:px-40 lg:px-48 "
    >
      <div className="lg:w-1/2 inline-flex justify-center">
        <img
          src="/image/queen-art.svg"
          alt="profile art"
          className=" w-96 lg:w-[500px] aspect-square -ml-3 "
        />
      </div>
      <div className=" lg:w-1/2 flex flex-col items-center mt-4 md:mt-0">
        <h1 className=" font-Rubik_Mono_One text-xl md:text-2xl lg:text-4xl text-center">
          Queen Umesi
        </h1>
        <h2 className=" font-Rubik font-semibold py-2 text-white-200">
          Frontend Developer
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Home;
