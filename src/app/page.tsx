"use client";

import React from "react";
import HomeComponent from "../components/HomeComponent";
import Introduction from "../components/Introduction";
import IntroductionText from "../components/IntroductionText";
import Characters from "../components/Characters";
import Resume from "../components/Resume";
import End from "../components/End";

const sections = [
  { component: <HomeComponent /> },
  { component: <Introduction /> },
  { component: <IntroductionText /> },
  { component: <Characters /> },
  { component: <Resume /> },
  { component: <End /> },
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {sections.map((section, index) => (
        <section
          key={index}
          className="w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
        >
          {section.component}
        </section>
      ))}
    </div>
  );
}
