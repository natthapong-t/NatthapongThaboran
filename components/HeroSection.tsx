"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPersonalInfo, UI_TRANSLATIONS } from "@/data/translations";

export default function HeroSection() {
  const { language } = useLanguage();
  const info = getLocalizedPersonalInfo(language);
  const t = UI_TRANSLATIONS[language];

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
    >
      {/* 1. Main Hero Bento Card (lg:col-span-8, row-span-2) */}
      <div className="lg:col-span-8 row-span-2 bento-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group bg-white">
        <div className="absolute inset-0 bg-gradient-radial from-[#65a30d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="z-10 space-y-6">
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex gap-2 px-3 py-1 rounded-full border backdrop-blur-md w-fit bg-[#65a30d]/10 border-[#65a30d]/20 text-[#65a30d]">
              <span className="text-xs font-mono font-medium">{t.hero.devTag}</span>
            </div>
            <div className="inline-flex gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 backdrop-blur-md w-fit">
              <span className="text-xs font-mono text-zinc-600">{t.hero.designerTag}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-zinc-900 max-w-2xl">
            {info.headlinePrefix}{" "}
            <span className="text-[#65a30d]/90">{info.headlineAccent}</span>
          </h1>

          {/* Short Bio directly reflecting CV */}
          <p className="text-zinc-600 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            {info.shortBio}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="z-10 flex flex-wrap gap-4 mt-8">
          <a
            href={info.fastworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-[#65a30d] px-8 font-medium text-white transition-all duration-300 hover:bg-zinc-900 shadow-xs cursor-pointer"
          >
            <span className="mr-2">{t.hero.hireCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white px-8 font-medium text-zinc-900 transition-colors hover:bg-zinc-50 shadow-xs"
          >
            {t.hero.viewProjects}
          </Link>
        </div>

        {/* Ambient radial blur */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#65a30d]/15 rounded-full blur-[80px] pointer-events-none"></div>
      </div>

      {/* 2. Profile Bento Card (lg:col-span-4) */}
      <div className="lg:col-span-4 bento-card rounded-2xl p-6 flex flex-col justify-center gap-2 relative overflow-hidden bg-white">
        <div className="absolute top-4 right-4">
          <div className="bg-white/80 backdrop-blur-md border border-zinc-200 px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 text-zinc-600">
            <span>🇹🇭 {t.hero.nationality}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full border-2 border-[#65a30d]/50 p-1 mb-3 shadow-xs bg-white">
            <img
              src={info.avatar}
              alt={info.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
            {info.name}
          </h3>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">
            {info.role} @ {info.company}
          </p>

          <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>{t.hero.location}</span>
          </p>
        </div>
      </div>

      {/* 3. Impact / Stats Bento Card (lg:col-span-4) */}
      <div className="lg:col-span-4 bento-card rounded-2xl p-6 flex flex-col justify-between bg-white">
        <div className="flex items-center gap-2 mb-4 text-[#65a30d]">
          <Database className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider font-semibold">
            {t.hero.trackRecord}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {info.stats.map((stat, idx) => (
            <div key={idx}>
              <p
                className={`text-3xl font-bold ${
                  stat.highlight ? "text-[#65a30d]" : "text-zinc-900"
                }`}
              >
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
