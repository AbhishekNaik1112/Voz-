"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const dancingScript = Dancing_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const LearnMorePage: React.FC = () => {
  return (
    <div className="font-sans leading-normal tracking-normal bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-700 rounded-full opacity-50 blur-sm"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-800 rounded-full opacity-50 blur-sm"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-green-600 rounded-full opacity-50 blur-sm"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 100, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-0 h-0 border-l-8 border-r-8 border-b-16 sm:border-l-12 sm:border-r-12 sm:border-b-24 md:border-l-16 md:border-r-16 md:border-b-32 border-l-transparent border-r-transparent border-b-blue-500 opacity-50 blur-sm"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-20 right-10 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-red-600 opacity-50 blur-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/4 left-3/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-yellow-500 transform rotate-45 opacity-50 blur-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 bg-teal-500 opacity-50 blur-sm"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-600 opacity-50 blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-5 left-5 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-pink-400 opacity-50 blur-sm"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: -50, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="text-center relative z-10">
          <h1
            className={`${dancingScript.className} text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight`}
          >
            Learn More About VozEngine
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the details of VozEngine, a voice-controlled coding
            assistant designed to transform the way you code.
          </p>
        </div>
      </section>

      {/* What Does This Project Do Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
            What Does This Project Do?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-center">
            VozEngine bridges the gap between programming knowledge and physical
            capability through advanced voice recognition technology. It enables
            users to create, modify, and manage code using intuitive voice
            commands, streamlining workflows and enhancing accessibility.
          </p>
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
            How Does It Work?
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                  Voice Commands
                </h3>
                <p className="text-base sm:text-lg">
                  Users interact with VozEngine using voice commands. The system
                  interprets these commands and translates them into code or
                  actions within the code editor, making coding more accessible
                  and efficient.
                </p>
              </div>
            </div>
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                  Real-Time Transcription
                </h3>
                <p className="text-base sm:text-lg">
                  VozEngine converts voice input into code in real-time,
                  allowing for immediate feedback and seamless code management.
                  This feature helps maintain accuracy and efficiency in the
                  coding process.
                </p>
              </div>
            </div>
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                  Natural Language Processing
                </h3>
                <p className="text-base sm:text-lg">
                  The system utilizes advanced natural language processing to
                  understand and execute complex commands. This ensures that the
                  user's intent is accurately captured and translated into code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Made This Project Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
            Why I Made This Project
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-center">
            I created VozEngine to address the challenges faced by developers
            who find traditional coding methods physically demanding or
            inaccessible. By harnessing the power of voice recognition, the
            project aims to make coding more inclusive and efficient, opening up
            new possibilities for those who may struggle with conventional
            methods.
          </p>
        </div>
      </section>

      {/* Contact Card Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
            Contact Me
          </h2>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <p className="text-base sm:text-lg mb-4 text-center">
                If you have any questions or want to collaborate, feel free to
                reach out to me.
              </p>
              <div className="text-center flex flex-col items-center">
                <a
                  href="https://github.com/abhisheknaik1112"
                  className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-4xl mr-2" /> Abhishek Naik
                </a>
                <p className="text-base sm:text-lg mt-2">
                  <a
                    href="mailto:abhisheknaik1112@gmail.com"
                    className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out flex items-center"
                  >
                    <SiGmail className="text-4xl mr-2" /> abhisheknaik1112@gmail
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
