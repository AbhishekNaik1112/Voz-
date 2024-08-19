"use client";
import Sidebar from "@/app/components/Sidebar";
import PulsatingLoader from "@/app/components/Loader";
import React, { useState, useEffect } from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";

interface FileItemProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

const FileItem: React.FC<FileItemProps> = ({ title, date, icon, color }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
    <h3 className="font-semibold text-lg flex items-center space-x-2 text-white">
      <span>{title}</span>
      {React.cloneElement(icon as React.ReactElement, {
        className: `text-${color}`,
      })}
    </h3>
    <p className="text-sm text-gray-400 mt-2">{date}</p>
  </div>
);

const MainContent: React.FC = () => {
  const [files, setFiles] = useState<FileItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchFiles = async () => {
      try {
        const fetchedFiles: FileItemProps[] = [
          {
            title: "Learning about Interfaces in TypeScript",
            date: "18 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
          },
          {
            title: "Closures",
            date: "12 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
          },
          {
            title: "Async/Await",
            date: "10 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
          },
          {
            title: "Understanding Promises",
            date: "8 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
          },
          {
            title: "TypeScript Generics",
            date: "3 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
          },
          {
            title: "JavaScript ES6 Features",
            date: "7 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
          },
          {
            title: "TypeScript Advanced Types",
            date: "5 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
          },
          {
            title: "JavaScript Error Handling",
            date: "4 days ago",
            icon: <SiJavascript />,
            color: "yellow-300",
          },
          {
            title: "TypeScript Utility Types",
            date: "2 days ago",
            icon: <SiTypescript />,
            color: "blue-600",
          },
          {
            title: "JavaScript Async Patterns",
            date: "1 day ago",
            icon: <SiJavascript />,
            color: "yellow-300",
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

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900 h-screen overflow-y-auto text-gray-200">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Recent Activity</h1>
          <p className="text-gray-400 mt-1">Pick up where you left off</p>
        </header>

        {loading ? (
          <PulsatingLoader /> // Display the pulsating loader while loading
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file, index) => (
              <FileItem
                key={index}
                title={file.title}
                date={file.date}
                icon={file.icon}
                color={file.color}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default MainContent;
