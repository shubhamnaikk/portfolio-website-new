"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Cover } from "@/components/ui/cover";

const Projects = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* 🔳 Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* 🌫 Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* 🧩 Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Product-Ready Code in <Cover>Action</Cover> :
        </h1>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Multi-Agentic Text-to-SQL system
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                A secure, robust, multi-agent Text-to-SQL system that allows users to query structured databases.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/project-1.png"
                  alt="Project 1"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/Agentic-Natural-Language-Querying-Across-Structured-Databases.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* CARD 2 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Uber clone
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                Fullstack ride-hailing app built with Next.js, Tailwind CSS, and shadcn/ui components.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/2.png"
                  alt="Project 2"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/DATA236_Project_Group8.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* CARD 3 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Uber eats Clone
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                Built using Next.js, Tailwind CSS, and shadcn/ui components.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/3.png"
                  alt="Project 3"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/Data-236-UBER_EATS.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* CARD 4 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Amazon Reviews Sentiment Analysis
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                End-to-end pipeline for performing sentiment analysis on Amazon product reviews
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/4.png"
                  alt="Project 4"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/Sentiment-Analysis-on-Product-Reviews-Using-Apache-Spark-and-Hadoop.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* CARD 5 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Real-Time Stock Market Data Processing Pipeline
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                Pipeline covers data simulation, streaming, distributed storage, and querying capabilities.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/5.png"
                  alt="Project 5"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/Real-Time-Stock-Market-Data-Processing-Pipeline-Using-Apache-Kafka-and-AWS.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* CARD 6 */}
          <CardContainer>
            <CardBody className="group/card p-6 rounded-xl border border-black/10 dark:border-white/20 bg-gray-50 dark:bg-black">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                Retail Store Analysis Power BI Dashboard
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-500 dark:text-neutral-300">
                Data visualization tool designed to transform raw transactional data.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/6.png"
                  alt="Project 6"
                  width={600}
                  height={240}
                  unoptimized
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-end mt-6">
                <CardItem
                  as="a"
                  href="https://github.com/shubhamnaikk/Retail-Store-Analysis-Power-BI-Dashboard.git"
                  target="_blank"
                  className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  View Project →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Projects;
