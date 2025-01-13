"use client";

import React from "react";

const End = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/video3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <h1 className="absolute text-yellow-400 font-lora font-medium text-4xl sm:text-6xl lg:text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        THANK YOU
      </h1>

      <div className="absolute bottom-16 left-4 sm:left-8 md:left-16 text-left">
        <h3 className="text-yellow-400 font-akzidenz font-bold text-sm sm:text-base md:text-lg tracking-wider">
          GITHUB
        </h3>
        <a
          href="https://github.com/DannielLima"
          className="text-white font-akzidenz font-bold text-sm sm:text-base md:text-lg tracking-wider"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more on GitHub"
        >
          DANNIEL LIMA
        </a>
      </div>

      <div className="absolute bottom-16 right-4 sm:right-8 md:right-16 text-right">
        <h3 className="text-yellow-400 font-akzidenz font-bold text-sm sm:text-base md:text-lg tracking-wider">
          LINKEDIN
        </h3>
        <a
          href="https://www.linkedin.com/in/danniellima/"
          className="text-white font-akzidenz font-bold text-sm sm:text-base md:text-lg tracking-wider"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more on LinkedIn"
        >
          DANNIEL LIMA
        </a>
      </div>
    </div>
  );
};

export default End;
