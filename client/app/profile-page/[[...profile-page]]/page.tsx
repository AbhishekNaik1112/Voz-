"use client";
import React from "react";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    fullName: "Abhishek Naik",
    email: "abishek.naik@kalvium.community",
    bio: "Software engineer with a passion for creating dynamic and scalable applications. Enjoys working with modern web technologies and always eager to learn new things.",
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900 h-screen overflow-y-auto text-gray-200">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Your Profile</h1>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <FaEdit />
            <span>Edit</span>
          </button>
        </header>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-gray-400 text-6xl" />
            <div>
              <h2 className="text-2xl font-bold text-white">{user.fullName}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-400">{user.bio}</p>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
