"use client";

import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";
import Sections from "@/components/Sections";
import TechStack from "@/components/TechStack";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={`${theme}`}>
      <TechStack />

      
      <Sections
        // theme="light"
        // setTheme={setTheme}
        className="h-[80vh] backdrop-blur-sm "
      >
        <LandingPage />
      </Sections>
      <Sections
        // theme="light"
        // setTheme={setTheme}
        className="bg-neutral-200 h-[50vh] testing relative z-10"
      >
        <Dashboard />
      </Sections>

    </main>
  );
}
