import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <Navbar />

      {/* THIS FIXES OVERLAP EVERYWHERE */}
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


export default App;
