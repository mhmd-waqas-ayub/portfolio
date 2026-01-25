// import React from "react";


// function Hero(){
//     return(
//         <section id="min-h-screen flex items-center justify-center">
//             <div className="text-center max-w-3xl p-8">
//                 <h1 className="text-3xl font-bold mb-4 animate-fadeIn">
//                     Muhammad Waqas Ayub
//                 </h1>
//                 <p className="text-gray-300 mb-6 animate-fadeIn">
//                     Aspiring Full Stack Developer | MERN Stack, React,MongoDB,Node.js
//                 </p>
//                 <div className="flex justify-center gap-4">
//                     <a href="#projects"className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition">View Projects</a>
//                     <a href="#contact"className="px-6 py-3 rounded-md border border-gray-500 hover:bg-gray-500 transition">Contact Me</a>
//                 </div>
//             </div>
//         </section>

//     );
// }
// export default Hero;
// Import React
import React from "react";

// Hero component
function Hero() {
  return (
    // Hero section with full screen height
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      {/* Wrapper to control width */}
      <div className="max-w-4xl w-full px-6 text-center">
        
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Muhammad Waqas Ayub
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Junior Full-Stack Developer (MERN) | React, Node.js, MongoDB | REST APIs & JWT Auth

          {/* Full-Stack Developer • MERN Stack • React • Node.js */}
        </p>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* View Projects button */}
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          {/* Contact Me button */}
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-500 rounded-md hover:bg-gray-800 transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}

// Export Hero
export default Hero;
