import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 p-4 text-gray-200">
      <div className="flex items-center justify-between mb-8">
        <span className="font-bold text-xl">Abhishek Naik</span>
        <FaChevronRight className="cursor-pointer text-gray-400 hover:text-white transition-colors" />
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <Link href="/home-page" legacyBehavior>
            <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
              <span>Dashboard</span>
            </li>
          </Link>
          <Link href="/profile-page" legacyBehavior>
            <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
              <span>Profile</span>
            </li>
          </Link>
          <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
            <span>Sign Out</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
