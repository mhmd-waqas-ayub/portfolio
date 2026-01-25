import React from "react";

function Skills(){
    return(
        <section id="skills"className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800 p-4 rounded-md">JavaScript</div>
                <div className="bg-slate-800 p-4 rounded-md">React</div>
               <div className="bg-slate-800 p-4 rounded-md">Node.js</div>
               <div className="bg-slate-800 p-4 rounded-md">Express.js</div>
               <div className="bg-slate-800 p-4 rounded-md">MongoDB</div>
               <div className="bg-slate-800 p-4 rounded-md">JWT Authentication</div>
               <div className="bg-slate-800 p-4 rounded-md">REST APIs</div>
               <div className="bg-slate-800 p-4 rounded-md">HTML & CSS</div>                
                </div> 

            </div>
        </section>

    );
}
export default Skills;