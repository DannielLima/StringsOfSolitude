"use client";

import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/1.png"
        alt="home"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <p className="absolute text-yellow-400 font-helena font-medium text-6xl sm:text-8xl -rotate-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        Strings <br /> of Solitude
      </p>
      <p className="absolute text-white font-lora font-semibold text-xs sm:text-sm tracking-wider top-[85%] left-1/2 transform -translate-x-1/2 text-center">
        A DANNIEL LIMA FILM
      </p>
    </div>
  );
};

export default HomeComponent;
