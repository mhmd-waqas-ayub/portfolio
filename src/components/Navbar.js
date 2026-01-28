// import DarkModeToggle from "./DarkModeToogle";
// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// function Navbar() {
//   return (
//     <nav className="fixed w-full bg-slate-900/80 dark:bg-white/10 backdrop-blur z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-end font-bold">

// Waqas</div>

//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
//           <a href="#home" className="hover:underline">
//             Home
//           </a>
//           <a href="#about" className="hover:underline">
//             About
//           </a>
//           <a href="#skills" className="hover:underline">
//             Skills
//           </a>
//           <a href="#projects" className="hover:underline">
//             Projects
//           </a>
//           <a href="#contact" className="hover:underline">
//             Contact
//           </a>
//              <DarkModeToggle />
//          <a href="/Waqas_Resume.pdf"
//              target="_blank"
//              rel="noreferrer"
//             className="hover:underline">
//               Resume
//             </a>
       

//           <a
//             href="https://github.com/mhmd-waqas-ayub"
//             target="_blank"
//             rel="noreferrer"
//             className="text-xl"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
//             target="_blank"
//             rel="noreferrer"
//             className="text-xl"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import DarkModeToogle from "./DarkModeToogle";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="px-4">
        <div
          className="
            flex items-center gap-6
            overflow-x-auto whitespace-nowrap
            py-4
            scrollbar-hide
          "
        >
          {/* Logo */}
          <div className="font-bold text-lg flex-shrink-0">
            Waqas
          </div>

          {/* Links */}
          <a href="#home" className="hover:underline flex-shrink-0">Home</a>
          <a href="#about" className="hover:underline flex-shrink-0">About</a>
          <a href="#skills" className="hover:underline flex-shrink-0">Skills</a>
          <a href="#projects" className="hover:underline flex-shrink-0">Projects</a>
          <a href="#contact" className="hover:underline flex-shrink-0">Contact</a>
          
          <DarkModeToogle/>

          {/* Resume */}
          <a
            href="/Waqas_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex-shrink-0"
          >
            Resume
          </a>

          {/* Icons */}
          <a
            href="https://github.com/mhmd-waqas-ayub"
            target="_blank"
            rel="noreferrer"
            className="text-xl flex-shrink-0"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
            target="_blank"
            rel="noreferrer"
            className="text-xl flex-shrink-0"
          >
            <FaLinkedin />
          </a>
{/* 
          Dark Mode Button (example)
          <button className="flex-shrink-0 px-3 py-1 border rounded">
            Dark
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
