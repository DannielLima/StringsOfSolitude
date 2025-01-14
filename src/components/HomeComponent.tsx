"use client";

import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/1.png"
        alt="home"
        fill
        priority
        placeholder="blur"
        blurDataURL="/1.png"
        style={{ objectFit: "cover" }}
      />
      <p className="absolute text-yellow-400 font-helena font-medium text-6xl sm:text-8xl md:text-9xl -rotate-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all ease-in-out duration-300">
        Strings <br /> of Solitude
      </p>
      <p className="absolute text-white font-lora font-semibold text-xs sm:text-sm md:text-base tracking-wider top-[85%] left-1/2 transform -translate-x-1/2 text-center opacity-80 transition-all ease-in-out duration-300">
        A DANNIEL LIMA FILM
      </p>
    </div>
  );
};

export default HomeComponent;
