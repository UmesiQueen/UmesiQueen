import React from "react";

import "./assets/styles/globals.css";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Portfolio from "./components/Main/Portfolio";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
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
  );
};

export default App;
