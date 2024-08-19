import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 p-4 text-gray-200">
      <div className="flex items-center justify-between mb-8">
        <span className="font-bold text-xl">Your Name</span>
        <FaChevronRight className="cursor-pointer text-gray-400 hover:text-white transition-colors" />
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 "
              >
                <span>{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
