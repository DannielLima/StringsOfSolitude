"use client";

import React from "react";
import HomeComponent from "../components/HomeComponent";
import Introduction from "../components/Introduction";
import IntroductionText from "../components/IntroductionText";
import Characters from "../components/Characters";
import Resume from "../components/Resume";
import End from "../components/End";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <section className="relative w-full h-screen">
        <HomeComponent />
      </section>

      <section className="relative w-full h-screen">
        <Introduction />
      </section>

      <section className="relative w-full h-screen bg-primary-grey flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
        <IntroductionText />
      </section>

      <section className="relative w-full h-screen">
        <Characters />
      </section>

      <section className="relative w-full h-screen">
        <Resume />
      </section>

      <section className="relative w-full h-screen">
        <End />
      </section>
    </div>
  );
}
