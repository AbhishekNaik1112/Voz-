"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testimonials from "../utils/testimonial";
import { motion } from "framer-motion";
import { Exo_2 } from "next/font/google";
import Navbar from "../components/Navbar";
import Modal from "@/components/animata/overlay/modal";
import api from "../utils/apiInterceptor";

const exo_2 = Exo_2({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const loginUser = async () => {
      if (user) {
        const userData = {
          username: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          password: user.id,
          role: "user",
        };
        console.log("ggg",userData);
        //         console.log(userData.username);
        //         console.log(userData.email);
        //         console.log(userData.password);
        //         console.log(userData.role);
        localStorage.setItem("username", userData.username as string);
        localStorage.setItem("email", userData.email as string);

        try {
          api.post("/users", userData, {
            withCredentials: true,
          });
          // console.log("User data sent successfully:", response.data);
          console.log("Navigating to /home-page");
          router.push("/home-page");
        } catch (error) {
          console.log("Error sending user data:", error);
        }
      }
    };
    loginUser();
  }, [user, router]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-sans leading-normal tracking-normal bg-gray-900 text-gray-200">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Shapes */}
        <UserButton />
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
            className={`${exo_2.className} text-7xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight`}
          >
            Voz Engine
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Bridging the gap between programming knowledge and physical
            capability with advanced voice commands. Experience the future of
            coding where your voice transforms into powerful commands, enabling
            you to create and manage code effortlessly.
          </p>
          <div className="flex justify-center gap-3 sm:gap-6 mb-5">
            <Link href="/sign-up">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300 ease-in-out transform hover:scale-110">
                Get Started
              </button>
            </Link>
            {/* <Link href="/sign-in">
              <button className="bg-green-500 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 rounded-xl shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110">
                Sign In
              </button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-white">
            Features
          </h2>
          <div className="flex flex-col items-center">
            {/* Feature 1 */}
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Voice Recognition
                </h3>
                <p className="text-base sm:text-lg">
                  Execute coding tasks through voice commands, making
                  programming accessible for everyone. Utilize advanced voice
                  recognition technology to dictate code, streamline workflows,
                  and minimize physical strain.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h6m-6 4h10m1-12h-4a2 2 0 00-2-2H9a2 2 0 00-2 2H3v16h18V4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Real-Time Code Transcription
                </h3>
                <p className="text-base sm:text-lg">
                  Instantly convert voice commands into code with real-time
                  transcription, ensuring accuracy and efficiency in coding.
                  Edit, review, and manage your code seamlessly with immediate
                  transcription.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 px-4 mb-12">
              <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto"
                  >
                    <path
                      fill="#B197FC"
                      d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Natural Language Understanding
                </h3>
                <p className="text-base sm:text-lg">
                  Leverage advanced natural language processing to interpret
                  complex voice commands. Our system understands your intent,
                  ensuring precise and efficient execution of tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Coding with Your Voice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your spoken ideas into functional code effortlessly with
            VozEngine. Embrace the future of coding and join our community of
            innovative developers who are redefining the boundaries of what's
            possible.
          </p>
          <Link href="/sign-up">
            <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
            Testimonials
          </h2>
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            <Carousel
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={5000}
              showStatus={false}
              className="bg-gray-800 rounded-lg shadow-lg"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-10 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl italic mb-4">
                    {testimonial.quote}
                  </p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 VozEngine. All rights reserved.</p>
          <ul className="list-reset mt-4">
            <li className="inline-block mx-2">
              <Link
                href="/privacy-page"
                className="hover:text-white transition duration-300 ease-in-out"
              >
                Privacy
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link
                href="/terms-page"
                className="hover:text-white transition duration-300 ease-in-out"
              >
                Terms
              </Link>
            </li>
          </ul>
          <div className="inline-block mx-2">
            <Modal modalSize="lg" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
