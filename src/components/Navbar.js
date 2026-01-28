// // import DarkModeToogle from "./DarkModeToogle";
// // import React from "react";
// // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // function Navbar() {
// //   return (
// //     <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50">
// //       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
// //         <div className="text-xl font-bold">Waqas</div>

// //         <div className="flex gap-6 items-center">
// //           <a href="#home" className="hover:underline">
// //             Home
// //           </a>
// //           <a href="#about" className="hover:underline">
// //             About
// //           </a>
// //           <a href="#skills" className="hover:underline">
// //             Skills
// //           </a>
// //           <a href="#projects" className="hover:underline">
// //             Projects
// //           </a>
// //           <a href="#contact" className="hover:underline">
// //             Contact
// //           </a>
// //                <DarkModeToogle/>
// //           {/* Icons inside anchor tags */}
// //           <a
// //             href="https://github.com/mhmd-waqas-ayub"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="text-xl"
// //           >
// //             <FaGithub />
// //           </a>

// //           <a
// //             href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="text-xl"
// //           >
// //             <FaLinkedin />
// //           </a>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React from "react";
// import DarkModeToogle from "./DarkModeToogle";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="fixed w-full bg-slate-800/70 dark:bg-slate-900/80 backdrop-blur z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <div className="text-xl font-bold text-black dark:text-white">
//           Waqas
//         </div>

//         <div className="flex gap-6 items-center">
//           <a href="#home" className="hover:underline text-black dark:text-white">
//             Home
//           </a>
//           <a href="#about" className="hover:underline text-black dark:text-white">
//             About
//           </a>
//           <a href="#skills" className="hover:underline text-black dark:text-white">
//             Skills
//           </a>
//           <a href="#projects" className="hover:underline text-black dark:text-white">
//             Projects
//           </a>
//           <a href="#contact" className="hover:underline text-black dark:text-white">
//             Contact
//           </a>

//           <DarkModeToogle />

//           <a
//             href="https://github.com/mhmd-waqas-ayub"
//             target="_blank"
//             rel="noreferrer"
//             className="text-xl text-black dark:text-white"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
//             target="_blank"
//             rel="noreferrer"
//             className="text-xl text-black dark:text-white"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import DarkModeToggle from "./DarkModeToogle";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 dark:bg-white/10 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end font-bold
">Waqas</div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
             <DarkModeToggle />

          <a
            href="/Waqas_Resume.pdf"
            download
            className="px-3 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-slate-800 transition">
            Resume
          </a>

       

          <a
            href="https://github.com/mhmd-waqas-ayub"
            target="_blank"
            rel="noreferrer"
            className="text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-waqas-ayub-a965423a5"
            target="_blank"
            rel="noreferrer"
            className="text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
