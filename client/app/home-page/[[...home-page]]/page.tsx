"use client";
import Sidebar from "@/app/components/Sidebar";
import Loader from "@/app/components/Loader";
import React, { useState, useEffect } from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { UserButton } from "@clerk/nextjs";
import FileItem from "@/app/components/Files";

interface FileItemProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  index: number;
  isLastOpened?: boolean;
  description?: string;
  progress?: number;
  isFocused?: boolean;
  onClick?: () => void;
}

const MainContent: React.FC = () => {
  const [files, setFiles] = useState<FileItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fetchedFiles: FileItemProps[] = [
          {
            title: "Learn about TypeScript Interfaces",
            date: "18 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
            href: "/learning-ts",
            index: 0,
            isLastOpened: true,
            description:
              "Deep dive into TypeScript interfaces and their usage.",
            progress: 70,
          },
          {
            title: "Understanding Closures in JavaScript",
            date: "12 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "",
            index: 1,
            description: "A comprehensive guide on closures.",
            progress: 50,
          },
          {
            title: "Async/Await",
            date: "10 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "",
            index: 2,
            description: "Learn how to handle asynchronous operations.",
            progress: 30,
          },
          {
            title: "Understanding Promises",
            date: "8 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "",
            index: 3,
            description: "Exploring JavaScript promises.",
            progress: 60,
          },
          {
            title: "TypeScript Generics",
            date: "3 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
            href: "",
            index: 4,
            description: "Introduction to generics in TypeScript.",
            progress: 20,
          },
          {
            title: "JavaScript ES6 Features",
            date: "7 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "",
            index: 5,
            description: "New features introduced in ES6.",
            progress: 40,
          },
          {
            title: "TypeScript Advanced Types",
            date: "5 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
            href: "",
            index: 6,
            description: "Deep dive into advanced types.",
            progress: 80,
          },
          {
            title: "JavaScript Error Handling",
            date: "4 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "/javascript/error-handling",
            index: 7,
            description: "Effective techniques for error handling.",
            progress: 90,
          },
          {
            title: "TypeScript Utility Types",
            date: "2 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
            href: "",
            index: 8,
            description: "Using utility types in TypeScript.",
            progress: 50,
          },
          {
            title: "React Hooks",
            date: "1 day ago",
            icon: <SiJavascript />,
            color: "yellow-300",
            href: "",
            index: 9,
            description: "An introduction to React Hooks.",
            progress: 70,
          },
          {
            title: "Next.js Dynamic Routing",
            date: "Today",
            icon: <SiTypescript />,
            color: "blue-600",
            href: "",
            index: 10,
            description: "How to handle dynamic routing in Next.js.",
            progress: 40,
          },
        ];

        setFiles(fetchedFiles);
      } catch (err) {
        setError("Failed to load files.");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const handleViewAllClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = (index: number) => {
    setFocusedIndex(index);
  };

  const displayedFiles = isExpanded ? files : files.slice(0, 4);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900 h-screen overflow-y-auto text-gray-200">
        <UserButton />
        <header className="mb-8 p-4">
          <h1 className="text-5xl font-bold text-white mb-2">
            Recent Activity
          </h1>
          <p className="text-gray-400 mt-1 text-sm text-left">
            Pick up where you left off
          </p>
        </header>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayedFiles.map((file) => (
              <FileItem
                key={file.index}
                title={file.title}
                date={file.date}
                icon={file.icon}
                color={file.color}
                href={file.href}
                index={file.index}
                isLastOpened={file.isLastOpened}
                description={file.description}
                progress={file.progress}
                isFocused={file.index === focusedIndex}
                onClick={() => handleCardClick(file.index)}
              />
            ))}
          </section>
        )}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleViewAllClick}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {isExpanded ? "Show Less" : "View All"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
