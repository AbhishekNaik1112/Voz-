"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/app/components/Sidebar";

// Dynamically import MonacoEditor to prevent SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const InterfacesPage: React.FC = () => {
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
console.log(user.age); // Output: 30
`);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900 h-screen overflow-y-auto text-gray-200">
        <header className="mb-8 border-b border-gray-700 pb-4">
          <h1 className="text-4xl font-extrabold text-white">
            TypeScript Interfaces
          </h1>
        </header>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 h-full">
          <MonacoEditor
            height="calc(100vh - 120px)"
            language="typescript"
            value={code}
            theme="vs-dark"
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
