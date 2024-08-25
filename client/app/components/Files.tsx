import React from "react";
import Link from "next/link";

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

const FileItem: React.FC<FileItemProps> = ({
  title,
  date,
  icon,
  color,
  href,
  index,
  isLastOpened = false,
  description = "",
  progress = 0,
  isFocused = false,
  onClick,
}) => {
  const author = localStorage.getItem("username") || "Unknown Author";

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`relative bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer ${
          isLastOpened ? "border-blue-500" : ""
        } ${isFocused ? "border-green-500" : ""}`}
        style={{ width: "100%", marginBottom: "16px" }}
        onClick={onClick}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <h3
              className={`font-semibold text-xl ${
                isLastOpened ? "text-blue-500" : "text-white"
              }`}
            >
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-300 mt-1">{description}</p>
            )}
            <p className="text-xs text-gray-400 mt-1">by {author}</p>
          </div>
          <div className="flex-shrink-0">
            {React.cloneElement(icon as React.ReactElement, {
              className: `text-${color} text-4xl`,
            })}
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">{date}</p>
        {progress !== undefined && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400 mb-1">Progress</p>
            <div className="relative w-full bg-gray-500 rounded-full h-2 mx-auto">
              <div
                className="absolute top-0 left-0 h-full bg-blue-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default FileItem;
