"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200/80 bg-white/60 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-[#65a30d] p-0.5 overflow-hidden">
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-semibold text-zinc-800">
            {PERSONAL_INFO.name}
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <p className="flex items-center gap-1.5 text-center text-zinc-500">
          <span>Made with ❤️ and ☕</span>
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-zinc-600 hover:text-[#65a30d] transition-colors p-1.5 rounded-lg hover:bg-zinc-100 cursor-pointer"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
