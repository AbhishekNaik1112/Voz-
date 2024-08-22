import React from "react";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="relative w-16 h-16">
      {/* DNA strand components */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="dna-loader"></div>
      </div>
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
      @keyframes dna {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .dna-loader {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 50%;
        border: 4px solid rgba(0, 0, 255, 0.3);
        border-top: 4px solid blue;
        animation: dna 2s linear infinite;
      }

      .dna-loader::before,
      .dna-loader::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 4px solid rgba(0, 0, 255, 0.3);
        border-top: 4px solid blue;
        animation: dna 2s linear infinite;
      }

      .dna-loader::before {
        top: 20%;
        left: 20%;
        width: 60%;
        height: 60%;
      }

      .dna-loader::after {
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
      }
    `}</style>
  </div>
);

export default Loader;
