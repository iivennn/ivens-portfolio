"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      
      {/* TITLE */}
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      {/* ICON SKILLS */}
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil, i) => (
          <Tilt key={skil.name} scale={1.2} transitionSpeed={400}>
            <div
              data-aos="flip-right"
              data-aos-delay={i * 100}
              className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
            >
              <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
              <p className="text-purple-400 mt-1">{skil.name}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* 🔥 TECHNICAL SKILLS SECTION */}
      <div className="mt-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-cyan-300 mb-6">
          Technical Skills
        </h2>

        <div className="space-y-4 text-gray-300 text-sm md:text-base">

          <p>
            <span className="text-white font-semibold">Programming:</span>{" "}
            C++, Python (Basic), JavaScript, HTML/CSS, Node.js, React
          </p>

          <p>
            <span className="text-white font-semibold">Technologies:</span>{" "}
            Arduino, ESP32, Raspberry Pi, Firebase, MySQL, LAMP Stack
          </p>

          <p>
            <span className="text-white font-semibold">Design Tools:</span>{" "}
            Figma, Canva
          </p>

        </div>
      </div>

    </div>
  );
};

export default Skills;