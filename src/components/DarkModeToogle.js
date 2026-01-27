// import { useState,useEffect } from "react";
// function DarkModeToogle(){
//     const [dark,setDark]=useState(
//         document.documentElement.classList.contains("dark")
//     );
//     useEffect(()=>{
//         if(dark){
//             document.documentElement.classList.add("dark")
//         }
//         else{
//             document.documentElement.classList.remove("dark")
//         }
//     },
//     [dark]
// );
// return(
//     <button onClick={()=>setDark(!dark)}
//     className="px-3 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-slate-800 transition">
//         {dark ? "Light": "Dark"}
//     </button>
// );

// }
// export default DarkModeToogle;
import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    // <button
    //   onClick={() => setDark(!dark)}
    //   className="px-3 py-1 rounded text-sm border border-gray-400
    //              hover:bg-gray-200 dark:hover:bg-slate-800 transition"
    // >
    //   {dark ? "Light" : "Dark"}
    // </button>
    <button
  onClick={() => setDark(!dark)}
  className="
    px-3 py-1 rounded text-sm border
    border-gray-500
    text-black dark:text-white
    hover:bg-gray-200 dark:hover:bg-slate-800
    transition
  "
>
  {dark ? "Light" : "Dark"}
</button>

  );
}

export default DarkModeToggle;
