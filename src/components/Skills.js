// import React from "react";

// function Skills(){
//     return(
//         // <section id="skills"className="min-h-screen flex items-center">
//         <section id="skills" className="pt-32 pb-24 ">

//             <div className="max-w-6xl mx-auto pt-24">
//                 <h2 className="text-3xl font-bold text-black dark:text-white"data-aos="fade-up" >Skills</h2>

//              <div className="bg-gray-100 dark:bg-slate-800">
//                 <div className="bg-gray-100 dark:bg-slate-800">JavaScript</div>
//                 <div className="bg-gray-100 dark:bg-slate-800">React</div>
//                <div className="bg-gray-100 dark:bg-slate-800">Node.js</div>
//                <div className="bg-gray-100 dark:bg-slate-800">Express.js</div>
//                <div className="bg-gray-100 dark:bg-slate-800">MongoDB</div>
//                <div className="bg-gray-100 dark:bg-slate-800">JWT Authentication</div>
//                <div className="bg-gray-100 dark:bg-slate-800">REST APIs</div>
//                <div className="bg-gray-100 dark:bg-slate-800">HTML & CSS</div>                
//                 </div> 

//             </div>
//         </section>

//     );
// }
// export default Skills;
import React from "react";

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "REST APIs",
    "HTML & CSS",
  ];

  return (
    <section id="skills" className="pt-28 pb-20 / " data-aos="fade-up">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4 "data-aos="fade-up">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-slate-800 text-black dark:text-white p-4 rounded-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
