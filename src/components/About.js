// import React from "react";
// function About(){
//     return(
// <section id="about"className="min-h-screen flex items-center">
//     <div className="max-w-6xl mx-auto p-8">
//         <h2 className="text-3xl font-bold mb-4">About Me</h2>
//         <p className="text-lg text-gray-300">
//             I'm an aspiring Full-Stack-Developer with hands-on experience in Node.js and React.
//             I build real world application using MERN stack,JWT authentication,and REST Apis.
//         </p>
//     </div>
// </section>
//     );
// }
// export default About;
import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          <p className="text-gray-300 max-w-3xl leading-relaxed">
  I am a Junior Full-Stack Developer specializing in the MERN stack, with
  hands-on experience building secure and scalable web applications.
  I have worked extensively with React for frontend development and
  Node.js, Express, and MongoDB for backend APIs, including authentication
  and authorization using JWT. I focus on clean code, RESTful architecture,
  and real-world problem solving.
</p>

        </p>
      </div>
    </section>
  );
}

export default About;
