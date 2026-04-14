"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpeg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Creating web & App products, <br />
          brands,
          <span className="text-violet-500"> and experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi ! I&apos;m Iven - A Passionate
          <span className="text-orange-500 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Computer Engineer",
                  " Frontend Developer",
                  " Backend Developer",
                  " Web Developer",
                  " App Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        
      </div>
    </div>
  );
};

export default Hero;
