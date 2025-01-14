"use client";

import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/2.png"
        alt="introduction"
        fill
        priority
        placeholder="blur"
        blurDataURL="/2.png"
        style={{ objectFit: "cover" }}
      />
      <h1 className="absolute text-yellow-400 font-lora font-medium text-5xl sm:text-6xl md:text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 transition-all ease-in-out duration-300">
        INTRODUCTION
      </h1>
    </div>
  );
};

export default Introduction;
