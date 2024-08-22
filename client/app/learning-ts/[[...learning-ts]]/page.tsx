"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaSun, FaMoon } from "react-icons/fa";
import Sidebar from "@/app/components/Sidebar";

// Dynamically import MonacoEditor to prevent SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const InterfacesPage: React.FC = () => {
  const [theme, setTheme] = useState<"vs-dark" | "light">("light");
  const [code] = useState(`//TypeScriptInterfaces.ts
interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user: User = {
  name: "John Doe",
  age: 30,
};

console.log(user.name); // Output: John Doe
console.log(user.age); // Output: 30`);

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
        <header className="mb-8 border-b border-gray-700 pb-4 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold">TypeScript Interfaces</h1>
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
            language="typescript"
            value={code}
            theme={theme}
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

export default InterfacesPage;
