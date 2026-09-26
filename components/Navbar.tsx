"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Work", href: "/#work" },
    { name: "Stack", href: "/#stack" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-[#65a30d] p-0.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-800">
            {PERSONAL_INFO.name.split(" ")[0]}&apos;s Portfolio
          </span>
        </Link>

        {/* Desktop Nav Pills */}
        <div className="hidden md:flex items-center gap-6 bg-zinc-100/90 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-[#65a30d] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action: Hire CTA */}
        <div className="flex items-center gap-3">
          {/* Hire Button */}
          <a
            href={PERSONAL_INFO.fastworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#65a30d] hover:bg-[#52840a] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-xl transition-colors shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Hire on Fastwork</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-800 p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-6 flex flex-col gap-3 shadow-xl transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-zinc-700 hover:text-[#65a30d] py-2 border-b border-zinc-100 last:border-none"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>
          ))}

          <a
            href={PERSONAL_INFO.fastworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-[#65a30d] hover:bg-[#52840a] text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
          >
            Hire on Fastwork
          </a>
        </div>
      )}
    </nav>
  );
}
