import React, { useState, useRef } from "react";
import { FaFile, FaLanguage, FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { monacoLanguages } from "../utils/monacoLanguages";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [fileName, setFileName] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [description, setDescription] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("File Name:", fileName);
    console.log("Language:", language);
    console.log("Description:", description);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <IoMdClose size={24} />
        </button>
        <div className="flex items-center mb-6">
          <FaFile size={30} className="text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-100">
            Create New File
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center border-b border-gray-700 pb-2">
              <FaFile size={20} className="text-gray-300 mr-2" />
              <input
                type="text"
                id="fileName"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter file name"
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div className="flex items-center border-b border-gray-700 pb-2">
              <FaLanguage size={20} className="text-gray-300 mr-2" />
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              >
                {monacoLanguages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center border-b border-gray-700 pb-2">
                <FaInfoCircle size={20} className="text-gray-300 mr-2" />
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description for the file"
                  className="w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <IoMdClose size={16} className="mr-2" />
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors flex items-center"
              >
                <FaFile size={16} className="mr-2" />
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
