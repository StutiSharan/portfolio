import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-7 animate-fadeIn">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          <span className="text-cyan-600 text-xl font-semibold hover:text-cyan-400 transition duration-300 ease-in-out">
           Developed by Stuti Sharan
           </span>
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-s mt-1 italic ">
          Thank you for visiting my portfolio ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;
