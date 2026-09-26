import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#fbfbfb]">
      {/* Fixed Header Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 md:space-y-12 lg:space-y-16">
        {/* 1. Hero Bento Grid */}
        <HeroSection />

        {/* 2. Work Experience */}
        <ExperienceSection />

        {/* 3. Technical Arsenal / Stack */}
        <StackSection />

        {/* 4. Featured Projects */}
        <ProjectsSection />

        {/* 5. Contact CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
