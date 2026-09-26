"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-1 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            A collection of projects I&apos;ve worked on.{" "}
            <span className="font-bold">
              See{" "}
              <Link href="/projects" className="text-[#65a30d] hover:underline">
                all projects
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
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
    </section>
  );
}
