import React from "react"; // import React

function Footer() {
  return (
    <footer className="bg-slate-900 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        © {new Date().getFullYear()} Muhammad Waqas Ayub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
