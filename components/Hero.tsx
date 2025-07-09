"use client"

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";

const words = [
  "Data Engineer",
  "Data Scientist",
  "Data Analyst",
  "AI Engineer",
  "ML Engineer",
  "Software Engineer",
];

export default function Hero() {
  return (
    <div className="relative w-full h-[50rem] overflow-hidden bg-white dark:bg-black">
      {/*  Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade on top of grid */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]" />

      {/* Animated Lines + Hero Content */}
      <BackgroundLines className="relative z-20 flex flex-col items-center justify-center w-full text-center h-full">
        <h6 className="text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mb-2">
          Hello I’m
        </h6>

        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-6 font-bold tracking-tight">
          Shubham Naik
        </h2>

        <div className="text-2xl md:text-3xl font-light text-neutral-500 dark:text-neutral-300">
          <FlipWords words={words} />
        </div>
      </BackgroundLines>
    </div>
  );
}
