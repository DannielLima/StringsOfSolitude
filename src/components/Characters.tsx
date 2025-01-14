"use client";

import React from "react";

const Characters = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/video2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="absolute text-yellow-400 font-lora font-medium text-5xl sm:text-6xl lg:text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 transition-all duration-300 ease-in-out">
        CHARACTERS
      </h1>
    </div>
  );
};

export default Characters;
