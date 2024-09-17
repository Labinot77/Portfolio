import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="h-[85vh] bg-[#c7c7c7]"> 
        <LandingPage />
      </div>
      <div
        className="h-screen bg-gradient-to-b from-[#c7c7c7] to-[#ffffff]">
        <Dashboard />
      </div>
    </main>
  );
}
