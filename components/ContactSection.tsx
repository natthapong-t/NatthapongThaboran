"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useLanguage } from "@/context/LanguageContext";
import { UI_TRANSLATIONS } from "@/data/translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const contactLinks = [
    {
      name: "Fastwork",
      label: "Fastwork Profile",
      href: PERSONAL_INFO.fastworkUrl,
      icon: (
        <Image src="/fastwork.svg" alt="Fastwork" width={20} height={20} />
      ),
    },
    {
      name: "Phone",
      label: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`,
      icon: (
        <Phone className="w-5 h-5 text-zinc-700" />
      ),
    },
    {
      name: "Email",
      label: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <Mail className="w-5 h-5 text-zinc-700" />
      ),
    },
    {
      name: "GitHub",
      label: "github.com/natthapong-t",
      href: PERSONAL_INFO.githubUrl,
      icon: (
        <svg className="w-5 h-5 fill-zinc-900" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      label: "LinkedIn/natthapong-t",
      href: PERSONAL_INFO.linkedinUrl,
      icon: (
        <svg className="w-5 h-5 fill-[#0a66c2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Heading */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            {t.contact.readyTitle} <br />
            <span className="text-primary">{t.contact.nextProject}</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-sm leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Right Contact Card */}
        <div className="bento-card rounded-2xl p-8 relative overflow-hidden bg-white">
          <div className="space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Phone" ? undefined : "_blank"}
                rel={item.name === "Phone" ? undefined : "noopener noreferrer"}
                className="w-fit flex items-center gap-3 text-zinc-600 hover:text-primary transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full p-2 bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
