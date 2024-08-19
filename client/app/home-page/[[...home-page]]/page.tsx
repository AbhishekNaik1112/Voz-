"use client";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";

const MainContent: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900 h-screen overflow-y-auto text-gray-200">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Recent Activity</h1>
          <p className="text-gray-400 mt-1">Pick up where you left off</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="font-semibold text-lg flex items-center space-x-2 text-white">
              <span>Learning about Interfaces in Typescript</span>
              <SiTypescript className="text-blue-600" />
            </h3>
            <p className="text-sm text-gray-400 mt-2">18 days ago</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="font-semibold text-lg flex items-center space-x-2 text-white">
              <span>Closures</span>
              <SiJavascript className="text-yellow-300" />
            </h3>
            <p className="text-sm text-gray-400 mt-2">12 days ago</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainContent;
