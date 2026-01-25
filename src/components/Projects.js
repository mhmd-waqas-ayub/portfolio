// // Import React to use JSX
// import React from "react";

// // Projects component
// function Projects() {
//   return (
//     // Projects section container
//     <section id="projects" className="min-h-screen flex items-center">
//       {/* Centered container */}
//       <div className="max-w-6xl mx-auto p-8">
//         {/* Section heading */}
//         <h2 className="text-3xl font-bold mb-4">Projects</h2>
//         <div className="grid grid-cols-1 md: grid-cols-2 gap-6">

//         {/* Project card 1 */}
//         <div className="bg-slate-800 p-6 rounded-md shadow-lg hover:shadow-xl transition">
//           {/* Project title */}
//           <h3 className="text-xl font-bold mb-2">Job Board API</h3>
//           {/* Project description */}
//           <p className="mb-2 text-gray-300">
//             Job Board API built with Node.js, Express, MongoDB, and JWT Authentication.
//           </p>
//           {/* Links */}
//           <div className="flex gap-4">
//             <a href="#" className="underline">GitHub</a>
//             <a href="#" className="underline">Live Demo</a>
//           </div>
//         </div>

//         {/* Project card 2 */}
//         <div className="bg-slate-800 p-6 rounded-md shadow-lg hover:shadow-xl transition">
//           {/* Project title */}
//           <h3 className="text-xl font-bold mb-2">Social Media API</h3>
//           {/* Project description */}
//           <p className="mb-2 text-gray-300">
//             Social Media API with CRUD operations, authentication and authorization.
//           </p>
//           {/* Links */}
//           <div className="flex gap-4">
//             <a href="#" className="underline">GitHub</a>
//             <a href="#" className="underline">Live Demo</a>
//           </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Export Projects component
// export default Projects;
import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">Job Board API</h3>
            <p className="text-gray-300 mb-4">
              A backend REST API built with Node.js, Express, and MongoDB that allows
  companies to post jobs and users to apply. Implements JWT-based
  authentication, role-based authorization, and full CRUD operations
  following RESTful best practices
            </p>
            <div className="flex gap-4">
              <a className="underline" href="#">GitHub</a>
              <a className="underline" href="#">Live</a>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">Social Media API</h3>
            <p className="text-gray-300 mb-4">
              A scalable backend API that supports user authentication, protected
  routes, and CRUD operations for posts. Built using Node.js, Express,
  MongoDB, and JWT with clean MVC structure.
            </p>
            <div className="flex gap-4">
              <a className="underline" href="#">GitHub</a>
              <a className="underline" href="#">Live</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

