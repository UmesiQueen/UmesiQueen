import { createContext, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";

import "./assets/styles/globals.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Portfolio from "./components/Main/Portfolio";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";
// import AnimatedCursor from "./components/Cursor/Cursor";

export const AppContext = createContext(null);

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  return (
    <AppContext.Provider value={{ refs: { home, about, portfolio, contact } }}>
      {/* <AnimatedCursor /> */}
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </AppContext.Provider>
  );
};

export default App;
