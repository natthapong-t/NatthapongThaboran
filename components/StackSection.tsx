"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { useLanguage } from "@/context/LanguageContext";
import { UI_TRANSLATIONS, SKILL_CATEGORY_NAMES_TH } from "@/data/translations";

export default function StackSection() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="stack">
      <div className="bento-card rounded-2xl p-8 md:p-10 bg-white overflow-hidden relative">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-primary" />
          <span>{t.stack.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const categoryTitle =
              language === "th"
                ? SKILL_CATEGORY_NAMES_TH[category.category] || category.category
                : category.category;
            return (
              <div key={category.category} className="space-y-3">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-200 pb-2 font-semibold">
                  {categoryTitle}
                </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-default flex items-center gap-1.5 bg-zinc-50 border border-zinc-200/80 text-zinc-700 hover:border-primary/50 hover:text-primary"
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        className="w-3.5 h-3.5 object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    ) : null}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
