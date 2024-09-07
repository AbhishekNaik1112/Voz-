"use client";
import Sidebar from "@/app/components/Sidebar";
import Loader from "@/app/components/Loader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FileItemProps {
  title: string;
  date: string;
  name: string;
  // icon: React.ReactNode;
  href: string;
  index: number;
  isLastOpened?: boolean;
  description?: string;
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
    console.log("useEffect called");
    const fetchFiles = async () => {
      console.log("fetchFiles called");
      try {
        const username = localStorage.getItem("username");
        const response = await axios.get<FileItemProps[]>(
          "http://localhost:5000/codedata/fetch"
        );

        const filteredFiles = response.data.filter(
          (file) => file.name === username
        );

        setFiles(filteredFiles);
    
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
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 key={file.index}">
            {displayedFiles.map((file) => (
              <Card
                key={file.index}
                className={`bg-gray-800 border border-gray-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                  file.isFocused ? "border-blue-500" : ""
                }`}
                onClick={() => handleCardClick(file.index)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-6 h-6 mr-3 text-white`}>
                      {file.icon}
                    </div>
                    {file.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{file.description}</CardDescription>
                  <div className="mt-4">
                    <p className="text-gray-400 text-sm">{file.date}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={file.href} className="text-blue-400 hover:underline">
                    View Details
                  </a>
                </CardFooter>
              </Card>
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
