"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Web Development", "Web Design", "Mobile Application"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#fbfbfb]">
      <Navbar />

      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Top Back Nav */}
        <div className="flex px-1 justify-start">
          <Link
            href="/#projects"
            className="text-xs font-mono font-medium text-zinc-500 hover:text-[#65a30d] transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-zinc-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Overview Header */}
        <div className="p-2 md:p-4 space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 leading-[0.95]">
            Featured{" "}
            <span className="text-[#65a30d]/80">Projects</span>
          </h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl font-light leading-relaxed pt-2">
            A complete list of projects I&apos;ve worked on over the years, covering web platforms, mobile apps, and design systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 bg-white flex-wrap p-2.5 rounded-2xl border border-zinc-200/80 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer font-medium ${
                activeFilter === cat
                  ? "bg-[#65a30d]/10 text-[#65a30d] border border-[#65a30d]/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bento-card rounded-2xl group relative bg-white p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300"
              aria-label={`Open ${project.title}`}
            >
              {/* Top thumbnail */}
              <div className="h-16 rounded-md overflow-hidden flex items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-contain w-auto rounded-md"
                  loading="lazy"
                />
              </div>

              {/* Top-right open icon */}
              <span className="text-zinc-400 group-hover:text-[#65a30d] transition-colors shrink-0 absolute top-6 right-6">
                <ArrowUpRight className="w-5 h-5" />
              </span>

              {/* Title */}
              <div className="flex items-start justify-between gap-4 mt-4 mb-2">
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#65a30d] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Concise Tagline */}
              <div className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.summary}
              </div>

              {/* Bottom Status & Platform pills */}
              <div className="mt-auto pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 w-full">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md w-fit bg-[#65a30d]/10 border-[#65a30d]/20">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65a30d]"></span>
                      <span className="text-xs font-mono font-medium text-[#65a30d]">
                        {project.statusBadge || "Live"}
                      </span>
                    </span>

                    <div className="flex-1"></div>

                    <span className="text-xs px-2.5 py-1 rounded transition-colors bg-zinc-100 text-zinc-600 border border-zinc-200/60 font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
