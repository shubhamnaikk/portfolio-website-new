"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans text-neutral-800 dark:text-neutral-200 mb-2 leading-snug">
            <span className="font-bold">San Jose State University, California, USA</span>
            <br />
            Master&apos;s in Data Analytics – Data Engineering Concentration
          </h1>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans text-neutral-800 dark:text-neutral-200 mb-2 leading-snug">
            <span className="font-bold">Beyond Marketing, Mumbai, India</span>
            <br />
            Software Engineer
          </h1>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans text-neutral-800 dark:text-neutral-200 mb-4 leading-snug">
            <span className="font-bold">Sarvmatre International Pvt. Ltd., Mumbai, India</span>
            <br />
            Frontend Developer Intern
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans text-neutral-800 dark:text-neutral-200 mb-2 leading-snug">
            <span className="font-bold">Simplrr Technologies, Mumbai, India</span>
            <br />
            Software Engineer Intern
          </h1>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-sans text-neutral-800 dark:text-neutral-200 mb-2 leading-snug">
            <span className="font-bold">Mumbai University, Mumbai, India</span>
            <br />
            Bachelor&apos;s of Engineering in Information Technology
          </h1>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-10 overflow-visible">
      <Timeline data={data} />
    </div>
  );
}
