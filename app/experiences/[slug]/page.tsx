import React from "react";
import { notFound } from "next/navigation";
import { EXPERIENCES } from "@/data/portfolio-data";
import ExperienceDetailClient from "./ExperienceDetailClient";

export async function generateStaticParams() {
  return EXPERIENCES.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = EXPERIENCES.find((e) => e.slug === slug);

  if (!exp) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${exp.company} — Natthapong Thaboran`,
    description: exp.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = EXPERIENCES.find((e) => e.slug === slug);

  if (!exp) {
    notFound();
  }

  return <ExperienceDetailClient slug={slug} />;
}
