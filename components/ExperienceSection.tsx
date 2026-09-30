"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedExperiences, UI_TRANSLATIONS } from "@/data/translations";

export default function ExperienceSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { language } = useLanguage();
  const experiences = getLocalizedExperiences(language);
  const t = UI_TRANSLATIONS[language];

  const checkScroll = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();
    return () => {
      scroller.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;
    const firstCard = scroller.firstElementChild as HTMLElement;
    const gap = parseFloat(window.getComputedStyle(scroller).gap) || 24;
    const cardStep = (firstCard ? firstCard.offsetWidth : scroller.clientWidth) + gap;
    scroller.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section id="work">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-1 tracking-tight">
            {t.work.title}
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            {t.work.subtitle}{" "}
            <span className="font-bold">
              <Link href="/experiences" className="text-[#65a30d] hover:underline ml-1">
                {t.work.viewAll}
              </Link>
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-zinc-200 text-zinc-600 flex items-center justify-center hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-zinc-200 text-zinc-600 flex items-center justify-center hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Scroller */}
      <div
        ref={scrollerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-hide snap-x snap-mandatory pb-4 pt-1"
      >
        {experiences.map((job, index) => (
          <div
            key={index}
            className="w-[calc(100vw-2rem)] max-w-[420px] sm:max-w-none sm:w-[440px] lg:w-[480px] shrink-0 snap-start"
          >
            <Link
              href={`/experiences/${job.slug}`}
              className="bento-card rounded-2xl p-6 sm:p-8 hover:bg-zinc-50/60 group relative bg-white h-full flex flex-col justify-between block cursor-pointer overflow-hidden"
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
                    className={`text-xs font-mono px-2.5 py-1 rounded-md shrink-0 ${
                      job.isCurrent
                        ? "bg-[#65a30d] text-white font-medium"
                        : "text-zinc-500 bg-zinc-100 border border-zinc-200"
                    }`}
                  >
                    {job.isCurrent ? t.work.current : job.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-[#65a30d] transition-colors flex items-start justify-between gap-2">
                  <span className="break-words min-w-0">{job.role}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#65a30d] transition-colors shrink-0 mt-0.5" />
                </h3>

                <p className="text-sm text-zinc-500 mb-4 break-words">
                  <span className="font-bold text-[#65a30d]">{job.company}</span> •{" "}
                  <span>{job.location}</span>
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed font-light line-clamp-3 mb-2 break-words">
                  {job.description}
                </p>
              </div>

              {/* Skill chips */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
