"use client";

import React from "react";

const IntroductionText = () => {
  return (
    <div className="bg-primary-grey flex flex-col lg:flex-row items-center justify-center lg:h-screen p-6">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:pr-8">
        <h1 className="text-3xl sm:text-4xl text-yellow-400 font-lora font-bold text-center lg:text-left p-4">
          INTRODUCTION
        </h1>
        <p className="text-md sm:text-lg mt-4 font-akzidenz text-white font-semibold text-center lg:text-left px-4">
          In the tranquil backdrop of the Alps, world-renowned violinist Clara
          Delaney seeks refuge from her turbulent past.
        </p>
        <p className="text-md sm:text-lg mt-4 font-akzidenz text-white font-semibold text-center lg:text-left px-4">
          Here, she crosses paths with Emil Vogel, a reclusive music maestro
          with a story of his own, and Lena Becker, a local with a heart full of
          secrets. As melodies intertwine, so do their fates.
        </p>
      </div>

      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default IntroductionText;
