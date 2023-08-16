import { useEffect, useState, createContext } from "react";

import "./assets/styles/globals.css";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Portfolio from "./components/Main/Portfolio";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";

export const AppContext = createContext(null);

const App = () => {
  const [onScroll, setScroll] = useState(false);

  // Capture onScroll event
  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY >= 45) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });

  return (
    <AppContext.Provider value={{ onScroll }}>
      <div>
        <header className="relative">
          <Navbar />
        </header>
        <main className="text-white-200 md:px-40">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
