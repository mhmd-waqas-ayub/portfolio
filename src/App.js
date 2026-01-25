import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App(){
  return(
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar/>
      <Hero/>
      <section id="home"className="min-h-screen flex  items-center justify-center">
        {/* <div className="text-center">
         <h1 className="text-3xl font-bold text-center pt-20">
        Muhammad Waqas Ayub
      </h1>
      <p className="text-center text-gray-400 mt-2">
        Aspiring Full-Stack developer | MERN Stack
      </p>
        </div> */}
      </section>
      <About/>
      <Contact/>
      <Projects/>
      <Skills/>
      <Footer/>
      

    </div>

  );

}
export default App;