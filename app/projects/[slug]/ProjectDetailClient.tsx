"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Layers, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  getLocalizedProject,
  getLocalizedProjects,
  UI_TRANSLATIONS,
} from "@/data/translations";

const TECH_ICONS: Record<string, string> = {
  "Next.js": "https://skillicons.dev/icons?theme=light&i=nextjs",
  "TypeScript": "https://skillicons.dev/icons?theme=light&i=typescript",
  "React": "https://skillicons.dev/icons?theme=light&i=react",
  "Mantine": "https://svgl.app/library/mantine.svg",
  "Figma": "https://skillicons.dev/icons?theme=light&i=figma",
  "Vercel": "https://skillicons.dev/icons?theme=light&i=vercel",
  "Flutter": "https://skillicons.dev/icons?theme=light&i=flutter",
  "Dart": "https://skillicons.dev/icons?theme=light&i=dart",
  "C#": "https://skillicons.dev/icons?theme=light&i=cs",
  ".NET Core": "https://skillicons.dev/icons?theme=light&i=dotnet",
  "GitLab CI/CD": "https://skillicons.dev/icons?theme=light&i=gitlab",
  "Docker": "https://skillicons.dev/icons?theme=light&i=docker",
  "Harbor": "https://cdn.simpleicons.org/harbor",
  "Canva": "https://svgl.app/library/canva.svg",
  "Brand Identity": "https://svgl.app/library/canva.svg",
  "Web Design": "/globe.svg",
  "SQL Server": "/sql-server.svg",
  "MinIO": "https://cdn.simpleicons.org/minio",
  "Tailwind CSS": "https://skillicons.dev/icons?theme=light&i=tailwind",
  "SAP HR Sync": "https://cdn.simpleicons.org/sap",
  "iAuthenX SSO": "https://cdn.simpleicons.org/openid/F78C40",
  "PDPA": "/browser.svg",
};

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const project = getLocalizedProject(slug, language);
  const allProjects = getLocalizedProjects(language);
  const t = UI_TRANSLATIONS[language];

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb]">
      <Navbar />

      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 md:space-y-12">
        {/* Top Back Link */}
        <div className="flex px-2 justify-end">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-800 hover:text-[#65a30d] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.projectDetail.backToProjects}</span>
          </Link>
        </div>

        {/* 1. Overview Grid (Left: Intro, Right: Metadata & Actions) */}
        <section
          id="overview"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min"
        >
          <div className="col-span-1 md:col-span-8 space-y-6">
            <div className="flex flex-col p-2 md:p-4 flex-1">
              <div className="h-16 w-auto mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-16 w-auto object-contain rounded-md"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.05] flex items-baseline flex-wrap gap-3">
                <span>{project.title}</span>
                {project.statusBadge && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md w-fit bg-[#65a30d]/10 border-[#65a30d]/20 text-[#65a30d] text-xs font-mono font-medium align-middle">
                    <span className="w-2 h-2 rounded-full bg-[#65a30d]"></span>
                    <span>{project.statusBadge}</span>
                  </span>
                )}
              </h1>

              <p className="mt-6 text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Metadata Card */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <div className="bento-card h-full w-full rounded-2xl p-7 flex flex-col justify-between min-h-[300px] relative overflow-hidden bg-white">
              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono font-semibold mb-1">
                    {language === "th" ? "หมวดหมู่" : "Category"}
                  </p>
                  <p className="font-mono text-base text-zinc-900 font-semibold">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono font-semibold mb-1">
                    {t.projectDetail.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono font-semibold mb-1">
                    {language === "th" ? "แพลตฟอร์ม" : "Platform"}
                  </p>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 text-zinc-700">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full mt-auto pt-6 space-y-2 border-t border-zinc-100">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-[#65a30d]/10 border border-zinc-200 hover:border-[#65a30d]/30 text-zinc-800 hover:text-[#65a30d] transition-all text-xs font-semibold group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform text-[#65a30d]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Notice if applicable */}
        {project.isDemo && project.demoNote && (
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              <strong className="font-semibold">{t.projectDetail.notice}</strong>{" "}
              {project.demoNote}
            </p>
          </div>
        )}

        {/* 2. Tech Stack Bento Card */}
        <div className="bento-card rounded-2xl p-8 md:p-10 bg-white">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#65a30d]" />
                <span>{t.projectDetail.techStack}</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                {t.projectDetail.techStackDesc}
              </p>
            </div>

            <div className="md:w-2/3 flex flex-wrap gap-2.5 items-center">
              {project.tags.map((tag) => {
                const icon = TECH_ICONS[tag];
                return (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-700 flex items-center gap-2"
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={tag}
                        className="w-4 h-4 object-contain shrink-0"
                        loading="lazy"
                      />
                    )}
                    <span>{tag}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Deep Dive: Problem, Solution, Process, Outcome */}
        {(project.problem || project.solution || project.process || project.outcome) && (
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="bento-card rounded-2xl p-8 bg-white space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900">
                    {t.projectDetail.problemTitle}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && project.solution.length > 0 && (
                <div className="bento-card rounded-2xl p-8 bg-white space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900">
                    {t.projectDetail.solutionTitle}
                  </h3>
                  <ul className="space-y-2">
                    {project.solution.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                        <span className="text-[#65a30d] font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.process && project.process.length > 0 && (
                <div className="bento-card rounded-2xl p-8 bg-white space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900">
                    {t.projectDetail.processTitle}
                  </h3>
                  <ul className="space-y-2">
                    {project.process.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                        <span className="text-[#65a30d] font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcome && project.outcome.length > 0 && (
                <div className="bento-card rounded-2xl p-8 bg-white space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900">
                    {t.projectDetail.outcomeTitle}
                  </h3>
                  <ul className="space-y-2">
                    {project.outcome.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                        <span className="text-[#65a30d] font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 4. Project Visuals / Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-zinc-900">
              {t.projectDetail.visualsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="bento-card rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-2xs group"
                >
                  <img
                    src={img}
                    alt={`${project.title} slice ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Previous / Next Project Navigation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="bento-card p-6 rounded-2xl group flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-[#65a30d] group-hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                  {language === "th" ? "โปรเจกต์ก่อนหน้า" : "Project"}
                </p>
                <p className="font-bold text-zinc-900 group-hover:text-[#65a30d] transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="bento-card p-6 rounded-2xl group flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center gap-4 text-right ml-auto flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-[#65a30d] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                  {t.projectDetail.nextProject}
                </p>
                <p className="font-bold text-zinc-900 group-hover:text-[#65a30d] transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
