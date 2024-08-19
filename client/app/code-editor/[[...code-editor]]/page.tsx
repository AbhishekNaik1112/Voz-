"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaCode, FaMicrophone, FaSun, FaMoon } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";
import { monacoLanguages } from "@/app/utils/monacoLanguages";

// Dynamically import MonacoEditor to prevent SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const CodeEditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>("javascript");
  const [theme, setTheme] = useState<"light" | "vs-dark">("light");

  const handleEditorChange = (value: string | undefined) => {
    console.log("Editor content:", value);
  };

  const handleVoiceCommand = () => {
    // Logic for voice command functionality
    console.log("Voice command activated");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "vs-dark" : "light"));
  };

  return (
    <div className={`flex ${theme === "vs-dark" ? "bg-gray-900" : "bg-white"}`}>
      <Sidebar />
      <main
        className={`flex-1 p-8 h-screen overflow-y-auto ${
          theme === "vs-dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <header className="mb-8 flex items-center justify-between border-b border-gray-700 pb-4">
          <h1 className="text-4xl font-extrabold flex items-center space-x-3">
            <FaCode className="text-4xl" />
            <span>Code Editor</span>
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleVoiceCommand}
              className="flex items-center p-3 rounded-full bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              aria-label="Voice Command"
            >
              <FaMicrophone className="text-2xl mr-2" />
              <span className="hidden md:inline">AI Assistance</span>
            </button>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 text-lg font-medium shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {monacoLanguages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <button
              onClick={toggleTheme}
              className="flex items-center p-3 rounded-full bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <FaMoon className="text-2xl" />
              ) : (
                <FaSun className="text-2xl" />
              )}
            </button>
          </div>
        </header>

        <section
          className={`p-4 rounded-lg shadow-lg border ${
            theme === "vs-dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-100 border-gray-300"
          } h-full`}
        >
          <MonacoEditor
            height="calc(100vh - 95px)"
            language={language}
            defaultValue=""
            theme={theme}
            onChange={handleEditorChange}
            options={{
              fontSize: 16,
              lineHeight: 26,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: "on",
              autoIndent: "full",
              autoClosingBrackets: "always",
              tabCompletion: "on",
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default CodeEditorPage;