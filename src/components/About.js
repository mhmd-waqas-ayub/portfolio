// import React from "react";

// function About(){
//   return(
//     // <section id="#about"className="min-h-screen flex items-center">
//     <section id="about" className="pt-32 pb-24">

//       <div className="max-w-6xl mx-auto pt-24">
//         <h2 className="text-3xl font-bold text-black dark:text-white"data-aos="fade-up" >
//           About 
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300">
//            I am a Full-Stack Developer working with MERN stack. I build real
//           world applications using Node.js, Express, MongoDB, React, and JWT
//           authentication. I enjoy solving real problems and building products
//           that users love.
//         </p>
//       </div>
//     </section>

//   );
// }
// export default About;
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="pt-28 pb-20 flex items-center"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4"data-aos="fade-up">About</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am a Full-Stack Developer working with MERN stack. I build real
          world applications using Node.js, Express, MongoDB, React, and JWT
          authentication. I enjoy solving real problems and building products
          that users love.
        </p>
      </div>
    </section>
  );
}

export default About;
