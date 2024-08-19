import React from "react";

const PulsatingLoader: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="relative">
      <div className="w-16 h-16 bg-blue-600 rounded-full absolute opacity-75 animate-ping"></div>
      <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
    </div>
  </div>
);

export default PulsatingLoader;
