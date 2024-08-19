import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Modal({
  modalSize = "lg",
}: {
  modalSize?: "sm" | "lg";
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <li className="inline-block mx-2">
        <a
          onClick={() => setIsOpen(true)}
          className="hover:text-white transition duration-300 ease-in-out cursor-pointer"
        >
          Contact
        </a>
      </li>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "180deg" }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              }}
              exit={{ scale: 0, rotate: "180deg" }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-lg cursor-default overflow-hidden rounded-md bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 p-6 text-white shadow-2xl",
                {
                  "max-w-sm": modalSize === "sm",
                  "max-w-[calc(100%-80rem)] max-h-[calc(100%-20rem)]":
                    modalSize === "lg",
                }
              )}
            >
              <div className="flex flex-col gap-3">
                <p className="mb-1 text-center">
                  <section className="bg-gray-900 py-20">
                    <div className="container mx-auto px-6">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
                        Contact Me
                      </h2>
                      <div className="flex flex-col items-center">
                        <div className="bg-gray-700 rounded-lg shadow-lg p-8 max-w-md mx-auto">
                          <p className="text-base sm:text-lg mb-4 text-center">
                            If you have any questions or want to collaborate,
                            feel free to reach out to me.
                          </p>
                          <div className="text-center flex flex-col items-center">
                            <a
                              href="https://github.com/abhisheknaik1112"
                              className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out flex items-center"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="text-4xl mr-2" /> Abhishek
                              Naik
                            </a>
                            <p className="text-base sm:text-lg mt-2">
                              <a
                                href="mailto:abhisheknaik1112@gmail.com"
                                className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out flex items-center"
                              >
                                <SiGmail className="text-4xl mr-2" />{" "}
                                abhisheknaik1112@gmail
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
