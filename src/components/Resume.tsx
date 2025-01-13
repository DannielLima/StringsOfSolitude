"use client";

import React from "react";

const Resume = () => {
  return (
    <div className="relative bg-primary-grey w-full h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12">
      <div className="lg:w-1/2 p-4 lg:p-8">
        <h1 className="text-yellow-400 font-lora font-medium tracking-widest text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          A REFRESHING <br /> RESONANCE <br /> OF RAW <br /> EMOTION
        </h1>
      </div>

      <div className="hidden lg:block w-px bg-white h-[50%]"></div>

      <div className="lg:w-1/2 p-4 lg:p-8">
        <p className="text-white font-akzidenz font-light tracking-widest text-left text-sm sm:text-base md:text-lg lg:text-xl">
          “Strings of Solitude” distinguishes itself in the contemporary film
          landscape through its raw, unfiltered portrayal of the human psyche
          against the breathtaking vastness of nature. <br />
          Instead of relying on high-stakes drama or intricate plot twists, the
          film anchors itself in the simplicity of genuine human connection,
          underpinned by the universal language of music.
        </p>
      </div>
    </div>
  );
};

export default Resume;
