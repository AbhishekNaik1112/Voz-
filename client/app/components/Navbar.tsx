import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50 text-xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="w-full sm:w-auto flex justify-between sm:justify-start">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold">VozEngine</a>
          </Link>
          <motion.button
            className="text-white sm:hidden focus:outline-none"
            onClick={() => {
              const navMenu = document.getElementById("nav-menu");
              if (navMenu) {
                navMenu.classList.toggle("hidden");
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </motion.button>
        </div>
        <motion.div
          id="nav-menu"
          className="w-full sm:flex sm:items-center sm:space-x-4 sm:w-auto hidden transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl"
          >
            <Link href="#features" legacyBehavior>
              <a className="block hover:bg-gray-700 px-3 py-2 rounded">
                Features
              </a>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl"
          >
            <Link href="/learn-more" legacyBehavior>
              <a className="block hover:bg-gray-700 px-3 py-2 rounded">About</a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl"
          ></motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
