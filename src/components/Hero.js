// import React from "react";
// import profile from "../assets/profile.jpg";

// function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center">
      
//       <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-8">
        
//         {/* LEFT IMAGE */}
//         <div className="w-full md:w-1/3 flex justify-center md:justify-start">
//           <img
//             src={profile}
//             alt="Profile"
//             className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover object-center border-4 border-blue-600 shadow-lg"
//           />
//         </div>

//         {/* RIGHT TEXT */}
//         <div className="w-full md:w-2/3 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeUp" data-aos="fade-up">
//             Muhammad Waqas Ayub
//           </h1>
//           <p className="text-gray-400 text-lg md:text-xl mb-10">
//             Full-Stack Developer • MERN Stack • Node.js • React • JWT Auth
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
//             <a href="#projects" className="px-8 bg-blue-600 rounded-md hover:bg-blue-700 transition">
//               View Project
//             </a>
//             <a href="#contact" className="px-8 bg-blue-600 rounded-md hover:bg-blue-700 transition">
//               Contact Me
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;
import React from "react";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Waqas"
            className="w-64 h-70 rounded-full object-cover object-center border-4 border-blue-600 dark:border-blue-400"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Muhammad Waqas Ayub
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
            Full-Stack Developer • MERN Stack • Node.js • React • JWT Auth
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
