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
  const [code] = useState(`// TypeScriptInterfaces.ts

// Define a basic interface with required and optional properties
interface User {
  name: string; // Required property
  age: number;  // Required property
  email?: string; // Optional property
}

// Create an object that adheres to the User interface
const user: User = {
  name: "John Doe",
  age: 30,
};

// Log the properties to the console
console.log(user.name); // Output: John Doe
console.log(user.age);  // Output: 30

// Define an interface with a read-only property
interface Person {
  readonly id: number; // Read-only property
  name: string;
  age: number;
}

// Create an object that adheres to the Person interface
const person: Person = {
  id: 1,
  name: "Alice",
  age: 25,
};

// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// Define an interface for a function type
interface Greeter {
  (message: string): void; // Function signature
}

// Implement the Greeter interface
const greet: Greeter = (message) => {
  console.log(message);
};

// Call the function
greet("Hello, world!"); // Output: Hello, world!

// Define an interface with an index signature
interface Dictionary {
  [key: string]: number; // Index signature
}

// Create an object that adheres to the Dictionary interface
const dict: Dictionary = {
  apples: 5,
  oranges: 10,
};

// Access properties using dynamic keys
console.log(dict.apples);  // Output: 5
console.log(dict["oranges"]); // Output: 10

// Define an interface and extend it
interface Employee extends Person {
  employeeId: number; // Additional property
}

// Create an object that adheres to the Employee interface
const employee: Employee = {
  id: 2,
  name: "Bob",
  age: 32,
  employeeId: 1234,
};

// Log the employee details
console.log(employee.name);       // Output: Bob
console.log(employee.employeeId); // Output: 1234

// Define an interface for a shape with a method
interface Shape {
  area(): number; // Method signature
}

// Implement the Shape interface in a class
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  // Implement the method
  area(): number {
    return this.width * this.height;
  }
}

// Create an instance of Rectangle
const rect = new Rectangle(10, 20);

// Log the area of the rectangle
console.log(rect.area()); // Output: 200
`);

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
