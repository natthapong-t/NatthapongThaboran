"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExperiencesPage() {
  const [selectedType, setSelectedType] = useState<string>("All");

  const filterTypes = ["All", "Full-time", "Freelance"];

  const filteredExperiences =
    selectedType === "All"
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.jobType === selectedType);

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#fbfbfb]">
      <Navbar />

      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Top Back Nav */}
        <div className="flex px-1 justify-start">
          <Link
            href="/#work"
            className="text-xs font-mono font-medium text-zinc-500 hover:text-[#65a30d] transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-zinc-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Overview Header */}
        <div className="p-2 md:p-4 space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 leading-[0.95]">
            Experience
          </h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            A complete list of roles and engagements I’ve worked on over the years.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 bg-white flex-wrap p-2.5 rounded-2xl border border-zinc-200/80 shadow-2xs">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`text-xs px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer font-medium ${
                selectedType === type
                  ? "bg-[#65a30d]/10 text-[#65a30d] border border-[#65a30d]/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70 border border-transparent"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid of Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((job) => (
            <Link
              key={job.slug}
              href={`/experiences/${job.slug}`}
              className="bento-card rounded-2xl p-8 hover:bg-zinc-50/60 group relative bg-white h-full flex flex-col justify-between block cursor-pointer transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-6">
                  <div className="h-12 w-12 rounded-xl p-1 bg-zinc-50 border border-zinc-200 overflow-hidden shrink-0 shadow-2xs">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                      job.isCurrent
                        ? "bg-[#65a30d] text-white font-medium"
                        : "text-zinc-500 bg-zinc-100 border border-zinc-200"
                    }`}
                  >
                    {job.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-[#65a30d] transition-colors flex items-center justify-between">
                  <span>{job.role}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#65a30d] transition-colors" />
                </h3>

                <p className="text-sm text-zinc-500 mb-4">
                  <span className="font-bold text-[#65a30d]">{job.company}</span> •{" "}
                  <span>{job.location}</span>
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed font-light line-clamp-3 mb-2">
                  {job.description}
                </p>
              </div>

              {job.skills && (
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5 mt-6">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
