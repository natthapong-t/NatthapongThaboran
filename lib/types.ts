export interface ProjectLink {
  name: string;
  icon: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  description: string;
  role: string[];
  tags: string[];
  links: ProjectLink[];
  image: string;
  gallery: string[];
  problem?: string;
  solution?: string[];
  process?: string[];
  outcome?: string[];
  isDemo?: boolean;
  demoNote?: string;
  statusBadge?: string;
}

export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface JobExperience {
  slug: string;
  company: string;
  role: string;
  jobType: "Full-time" | "Freelance" | "Co-Op" | "Internship" | "Part-time";
  date: string;
  duration?: string;
  location: string;
  image: string;
  isCurrent?: boolean;
  description: string;
  longDescription?: string[];
  achievements: string[];
  skills?: string[];
  metrics?: ExperienceMetric[];
  stackCaption?: string;
  projectsCount?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
  image: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}
