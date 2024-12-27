"use client";
import PortfolioLayout from "./components/PortfolioLayout";
import StarCanvas from "./components/starbackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Starry Background */}
      <StarCanvas />

      {/* Main Portfolio Content */}
      <div className="relative z-10 bg-gray-900 bg-opacity-10 text-white">
        <PortfolioLayout />
      </div>
    </div>
  );
}
