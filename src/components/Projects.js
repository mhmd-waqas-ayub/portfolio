// import React from "react"; // import React

// function Projects() {
//   return (
//     // <section id="projects" className="min-h-screen flex items-center">
//     <section id="projects" className="pt-32 pb-24 flex items-center">
      

//       <div className="max-w-6xl mx-auto pt-24">
//         <h2 className="text-3xl font-bold text-black dark:text-white" data-aos="fade-up">
//         Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//  <div className="bg-gray-100 dark:bg-slate-800">
//             <h3 className="text-xl font-bold mb-2">Job Board API</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Job Board API built with Node.js, Express, MongoDB, and JWT
//               Authentication.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/mhmd-waqas-ayub"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="underline"
//               >
//                 GitHub
//               </a>
//               <a
//                 href="https://myportfolio7951.netlify.app"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="underline"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>

//           <div className="bg-gray-100 dark:bg-slate-800">

//             <h3 className="text-xl font-bold mb-2">Social Media API</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Social Media API with CRUD operations, authentication and
//               authorization.
//             </p>
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/mhmd-waqas-ayub"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="underline"
//               >
//                 GitHub
//               </a>
//               <a
//                 href="https://myportfolio7951.netlify.app"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="underline"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from "react";

function Projects() {
  return (
    <section id="projects" className="pt-28 pb-24 min-h-screen" data-aos="fade-up">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4"data-aos="fade-up">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-slate-800 text-black dark:text-white p-6 rounded-md shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Job Board API</h3>
            <div className="flex gap-2 mb-2">
              {/* <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                JWT
              </span> */}
            </div>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Job Board API built with Node.js, Express, MongoDB, and JWT
              Authentication.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/mhmd-waqas-ayub"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub
              </a>
              <a
                href="https://myportfolio7951.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="bg-gray-200 dark:bg-slate-800 text-black dark:text-white p-6 rounded-md shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Social Media API</h3>
            <div className="flex gap-2 mb-2">
              {/* <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                Express
              </span>
              <span className="px-2 py-1 bg-blue-200 dark:bg-blue-600 rounded-full text-sm">
                CRUD
              </span> */}
            </div>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              Social Media API with CRUD operations, authentication and
              authorization.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/mhmd-waqas-ayub"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub
              </a>
              <a
                href="https://myportfolio7951.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
