"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getExperienceDuration } from "@/lib/duration";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  getLocalizedExperience,
  getLocalizedExperiences,
  UI_TRANSLATIONS,
} from "@/data/translations";

const SKILL_ICONS: Record<string, string> = {
  "Flutter": "https://skillicons.dev/icons?theme=light&i=flutter",
  "Dart": "https://skillicons.dev/icons?theme=light&i=dart",
  "C#": "https://skillicons.dev/icons?theme=light&i=cs",
  ".NET Core": "https://skillicons.dev/icons?theme=light&i=dotnet",
  "Next.js": "https://skillicons.dev/icons?theme=light&i=nextjs",
  "TypeScript": "https://skillicons.dev/icons?theme=light&i=typescript",
  "React": "https://skillicons.dev/icons?theme=light&i=react",
  "SQL Server": "/sql-server.svg",
  "Railway": "/railway.svg",
  "Docker": "https://skillicons.dev/icons?theme=light&i=docker",
  "GitLab CI/CD": "https://skillicons.dev/icons?theme=light&i=gitlab",
  "Figma": "https://skillicons.dev/icons?theme=light&i=figma",
  "Canva": "https://svgl.app/library/canva.svg",
  "PWA": "/browser.svg",
  "Android": "https://skillicons.dev/icons?theme=light&i=android",
  "Tailwind CSS": "https://skillicons.dev/icons?theme=light&i=tailwind",
  "Vercel": "https://skillicons.dev/icons?theme=light&i=vercel",
  "Mantine": "https://svgl.app/library/mantine.svg",
  "PostgreSQL": "https://skillicons.dev/icons?theme=light&i=postgresql",
  "MinIO": "https://cdn.simpleicons.org/minio",
  "Google Play Console": "https://cdn.simpleicons.org/googleplay",
  "Hono": "https://cdn.simpleicons.org/hono",
  "LINE OA": "https://cdn.simpleicons.org/line/06C755",
  "Auto Layout": "https://skillicons.dev/icons?theme=light&i=figma",
  "Wireframing": "https://cdn.simpleicons.org/framer/0055FF",
  "Prototyping": "https://skillicons.dev/icons?theme=light&i=figma",
  "User Interviews": "https://cdn.simpleicons.org/googlemeet/00897B",
  "A/B Testing": "https://cdn.simpleicons.org/postman/FF6C37",
};

const METRIC_LABELS_TH: Record<string, string> = {
  "EMPLOYEES SERVED": "จำนวนผู้ใช้งานในองค์กร",
  "COMPLETED ORDERS": "งานที่ส่งมอบสำเร็จ",
  "CLIENT RATING (13 REVIEWS)": "คะแนนรีวิวจากลูกค้า (13 รีวิว)",
  "TOTAL CLIENTS": "ลูกค้าทั้งหมด",
  "DELIVERABLES": "ผลงานที่ส่งมอบ",
  "DURATION": "ระยะเวลาการทำงาน",
  "FEATURES DESIGNED": "ฟีเจอร์ที่ออกแบบ",
  "KEY DELIVERABLES": "ผลงานสำคัญ",
};

export default function ExperienceDetailClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const exp = getLocalizedExperience(slug, language);
  const allExperiences = getLocalizedExperiences(language);
  const t = UI_TRANSLATIONS[language];

  if (!exp) {
    notFound();
  }

  const currentIndex = allExperiences.findIndex((e) => e.slug === slug);
  const nextExp =
    allExperiences[(currentIndex + 1) % allExperiences.length];
  const prevExp =
    allExperiences[(currentIndex - 1 + allExperiences.length) % allExperiences.length];

  const localizedJobType =
    language === "th"
      ? exp.jobType === "Full-time"
        ? "งานประจำ"
        : exp.jobType === "Freelance"
        ? "ฟรีแลนซ์"
        : exp.jobType
      : exp.jobType;

  const localizedDate =
    language === "th"
      ? exp.date.replace(/Present/gi, "ปัจจุบัน")
      : exp.date;

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#fbfbfb]">
      <Navbar />

      <main className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Top Back Nav */}
        <div className="flex px-1 justify-start">
          <Link
            href="/experiences"
            className="text-xs font-mono font-medium text-zinc-500 hover:text-primary transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-zinc-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.experienceDetail.backToExperiences}</span>
          </Link>
        </div>

        {/* Bento Grid: 8 Cols (Story & Bullets) + 4 Cols (Metrics & Stack) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ── Left Card (8 Cols): Main Story & Key Initiatives ── */}
          <div className="lg:col-span-8 rounded-3xl border border-zinc-200/80 bg-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xs h-full">
            {/* Ambient background glow matching reference */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Badges */}
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono font-medium text-zinc-600">
                    {localizedDate}
                  </span>
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md">
                  <span className="text-xs font-mono font-medium text-zinc-600">
                    {localizedJobType}
                  </span>
                </span>
              </div>

              {/* Company Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
                {exp.company}
                <span className="text-primary">.</span>
              </h1>

              {/* Role & Location */}
              <h2 className="text-xl sm:text-2xl font-medium text-zinc-700">
                {exp.role}{" "}
                <span className="text-zinc-400 font-light">— {exp.location}</span>
              </h2>

              {/* Lead Summary */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl font-light pt-1">
                {exp.description}
              </p>

              {/* Bullet Points with Bold Lead & Colon */}
              <ul className="space-y-3.5 pt-2 text-sm sm:text-base leading-relaxed max-w-2xl">
                {exp.achievements.map((item, idx) => {
                  const colonIndex = item.indexOf(":");
                  if (colonIndex !== -1) {
                    const title = item.slice(0, colonIndex);
                    const desc = item.slice(colonIndex + 1);
                    return (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-600">
                        <span className="text-zinc-400 text-base leading-none select-none mt-1.5">•</span>
                        <span>
                          <strong className="font-semibold text-zinc-900 mr-1">
                            {title}:
                          </strong>
                          <span>{desc}</span>
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2.5 text-zinc-600">
                      <span className="text-zinc-400 text-base leading-none select-none mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom Duration Pill */}
            <div className="relative z-10 mt-10 pt-4 flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono font-medium text-zinc-800 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>{getExperienceDuration(exp, language)}</span>
              </span>
            </div>
          </div>

          {/* ── Right Column (4 Cols): Metrics + Core Stack (Equal Height Distribution) ── */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            {/* 1. Metrics & Highlights Card (flex-1 with min-h-fit to prevent clipping) */}
            <div className="flex-1 min-h-fit rounded-3xl border border-zinc-200/80 bg-white p-7 relative overflow-hidden shadow-2xs flex flex-col justify-between">
              {/* Soft bottom-right radial glow */}
              <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent pointer-events-none" />

              {/* Logo & Verified Badge */}
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl p-1 bg-white border border-zinc-200 overflow-hidden shadow-2xs flex items-center justify-center">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Verified Rosette Badge Icon matching reference */}
                <div className="text-zinc-400 p-1" title="Verified Experience">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
              </div>

              {/* Metrics Rows with Dividers */}
              <div className="relative z-10 my-auto divide-y divide-zinc-100">
                {(exp.metrics && exp.metrics.length > 0
                  ? exp.metrics
                  : [
                      { value: exp.projectsCount || "02", label: "KEY DELIVERABLES" },
                    ]
                ).map((m, idx, arr) => {
                  const localizedMetricValue =
                    language === "th"
                      ? m.value
                          .replace(/Months/gi, "เดือน")
                          .replace(/Month/gi, "เดือน")
                          .replace(/Years/gi, "ปี")
                          .replace(/Year/gi, "ปี")
                      : m.value;
                  const localizedMetricLabel =
                    language === "th"
                      ? METRIC_LABELS_TH[m.label] || m.label
                      : m.label;
                  return (
                    <div
                      key={idx}
                      className={idx === 0 ? "pb-3" : idx === arr.length - 1 ? "pt-3" : "py-3"}
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight leading-none mb-1">
                        {localizedMetricValue}
                      </p>
                      <p className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                        {localizedMetricLabel}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Core Stack Card (flex-1 with min-h-fit to prevent clipping) */}
            <div className="flex-1 min-h-fit rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-2xs flex flex-col justify-between">
              <div>
                {/* Header with terminal tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs font-bold">
                    &lt;&gt;
                  </span>
                  <span className="text-xs font-mono font-semibold text-primary">
                    {t.experienceDetail.coreStack}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills?.map((skill) => {
                    const icon = SKILL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        className="rounded-lg bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-700 px-2.5 py-1.5 flex items-center gap-1.5 shadow-3xs"
                      >
                        {icon ? (
                          <img
                            src={icon}
                            alt={skill}
                            className="w-3.5 h-3.5 object-contain"
                            loading="lazy"
                          />
                        ) : null}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Stack Caption Footer */}
              <p className="text-xs text-zinc-500 leading-relaxed mt-6 pt-4 border-t border-zinc-100 font-light">
                {exp.stackCaption || t.experienceDetail.defaultStackCaption}
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Role Navigation */}
        <section className="border-t border-zinc-200 pt-8 mt-12 flex items-center justify-between gap-4">
          <Link
            href={`/experiences/${prevExp.slug}`}
            className="group flex flex-col items-start gap-1 p-4 rounded-xl border border-zinc-200 bg-white hover:border-primary/50 transition-colors max-w-xs w-full shadow-2xs"
          >
            <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 group-hover:text-primary">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{t.experienceDetail.prevRole}</span>
            </span>
            <span className="text-sm font-semibold text-zinc-800">
              {prevExp.company}
            </span>
          </Link>

          <Link
            href={`/experiences/${nextExp.slug}`}
            className="group flex flex-col items-end gap-1 p-4 rounded-xl border border-zinc-200 bg-white hover:border-primary/50 transition-colors max-w-xs w-full text-right shadow-2xs"
          >
            <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 group-hover:text-primary">
              <span>{t.experienceDetail.nextRole}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-sm font-semibold text-zinc-800">
              {nextExp.company}
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
