// Import React
import React from "react";
import {FaGithub,FaLinkedin} from "react-icons/fa";

// Navbar component
function Navbar() {
  return (
    // Navbar container fixed on top
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50">
      {/* Navbar content */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Brand name */}
        <div className="text-xl font-bold">Waqas</div>

        {/* Links */}
        <div className="flex gap-6">
          {/* Link to home section */}
          <a href="#home" className="hover:underline">
            Home
          </a>

          {/* Link to about section */}
          <a href="#about" className="hover:underline">
            About
          </a>

          {/* Link to skills section */}
          <a href="#skills" className="hover:underline">
            Skills
          </a>

          {/* Link to projects section */}
          <a href="#projects" className="hover:underline">
            Projects
          </a>

          {/* Link to contact section */}
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub/>
          </a>
          <a href="https://likedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";


// function Navbar(){
//     return(
//         <nav className="fixed w-full top-0 left-0 bg-slate-900 shadow-md">
//             <div className="max=w=6xl mx-auto flex justify-between items-center p-4">
//                 <div className="text-xl font-bold">
//                 Waqas Portfolio
//             </div>
//             <div className="space-x-4">
//                 <a href="#home"className="hover:text-blue-400">Home</a>
//                 <a href="#about"className="hover:text-blue-400">About</a>
//                 <a href="#projects"className="hover:text-blue-400">Projects</a>
//                 <a href="skills"className="hover:text-blue-400">Skills</a>
//                 <a href="contact"className="hover:text-blue-400">Contact</a>
//             </div>
//             </div>
            
//         </nav>

//     );
// }
// export default Navbar;