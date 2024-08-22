import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronRight,
  FaHome,
  FaPlay,
  FaUser,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";
import Modal from "./CreateModal";

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const username = localStorage.getItem("username");

  return (
    <div className="w-64 h-screen bg-gray-800 p-4 text-gray-200">
      <div className="flex items-center justify-between mb-8">
        <span className="font-bold text-xl">Hi, {username}😄</span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <Link href="/home-page" legacyBehavior>
            <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
              <FaHome className="text-lg" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li
            onClick={openModal}
            className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer"
          >
            <FaPlus className="text-lg" />
            <span>Create</span>
          </li>
          <Link href="/code-editor" legacyBehavior>
            <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
              <FaPlay className="text-lg" />
              <span>Playground Editor</span>
            </li>
          </Link>
          <Link href="/profile-page" legacyBehavior>
            <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
              <FaUser className="text-lg" />
              <span>Profile</span>
            </li>
          </Link>
          <li className="flex items-center space-x-2 text-gray-400 hover:scale-105 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-gray-900 cursor-pointer">
            <FaSignOutAlt className="text-lg" />
            <span>Sign Out</span>
          </li>
        </ul>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Sidebar;
