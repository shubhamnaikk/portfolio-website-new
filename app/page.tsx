import React from 'react';
import Hero from "../components/Hero";
import Navbar from '@/components/Navbar';
import TimelineDemo from '@/components/timeline-demo';
import { TechHighlight } from '@/components/techStack';
import GridBackgroundDemo from '@/components/projects';
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Navbar />
        <Hero />
        <TimelineDemo />
        <GridBackgroundDemo />
        <TechHighlight />
        <Footer />
      </div>
    </main>
  );
}
