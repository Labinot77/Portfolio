"use client";

import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";
import Sections from "@/components/Sections";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className={`dark`}>
      <TechStack />
      <Sections
        className="md:h-[80vh] h-fit backdrop-blur-sm ">
        <LandingPage />
      </Sections>
      <Sections
        className="bg-neutral-200 md:h-[50vh] h-fit testing relative z-10">
        <Dashboard />
      </Sections>

    </main>
  );
}
