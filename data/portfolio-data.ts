import { Project, JobExperience, SkillCategory } from "@/lib/types";

export const PERSONAL_INFO = {
  name: "Natthapong Thaboran",
  nickname: "Ton",
  role: "Software Developer & UX/UI Designer",
  company: "BAAC",
  location: "Bangkok, Thailand",
  country: "Thailand",
  countryFlag: "🇹🇭",
  nationality: "Thai",
  phone: "+6663-397-7863",
  email: "natthapong.nth@gmail.com",
  fastworkUrl: "https://fastwork.co/user/natnth",
  linkedinUrl: "https://www.linkedin.com/in/natthapong-t-8938b2313",
  githubUrl: "https://github.com/natthapong-t",
  avatar: "/me.jpg",
  headlinePrefix: "Bridging Design &",
  headlineAccent: "Engineering.",
  shortBio:
    "Software Developer and UX/UI Designer with experience across the entire product development process. I specialize in bridging the gap between design and engineering for web and mobile applications. Handling everything from UI design and coding to final deployment.",
  education: {
    school: "Khon Kaen University",
    location: "Khon Kaen, Thailand",
    degree: "Bachelor of Science in Computer Science",
    period: "2019 – 2023",
    logo: "/school-logo/kku.jpg",
  },
  stats: [
    { value: "3+", label: "Years Experience", highlight: true },
    { value: "15", label: "Fastwork Orders Served (4.6★)", highlight: false },
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: "baac-astaffs",
    title: "BAAC Astaffs",
    category: "Mobile Application",
    type: "Enterprise Mobile App",
    statusBadge: "Live",
    summary:
      "Built a mobile HR app for 20,000+ employees using Flutter and Dart, backed by a microservices architecture in C# .NET Core and GitLab CI/CD.",
    description:
      "Enterprise mobile application built for BAAC bank employees nationwide (20,000+ staff). Features include leave submission, attendance tracking, internal news, and approval workflows. Designed in Figma and developed using Flutter and Dart with a secure C# .NET Core microservices backend, deployed to the bank's Harbor registry via GitLab CI/CD pipelines.",
    role: [
      "Mobile Developer",
      "Backend Developer",
      "UX/UI Designer",
    ],
    tags: [
      "Flutter",
      "Dart",
      "C#",
      ".NET Core",
      "GitLab CI/CD",
      "Docker",
      "Harbor",
      "Figma",
    ],
    links: [
      {
        name: "Google Play Store",
        icon: "Globe",
        href: "https://play.google.com/store/apps/details?id=tech.baac.hrit.baacastaffs&hl=th",
      },
    ],
    image: "/project-thumbnail/astaffs.jpg",
    gallery: [
      "/project-thumbnail/astaffs.jpg",
    ],
    problem:
      "The organization required a unified, secure mobile tool for over 20,000 bank staff to submit leave requests, verify work records, and manage HR tasks on the go.",
    solution: [
      "Fast, intuitive cross-platform UI built with Flutter & Dart",
      "Scalable microservices backend built with C# .NET Core",
      "Automated CI/CD pipelines with GitLab and Docker deploying to internal Harbor registry",
      "Clean user flow designed in Figma for rapid daily operations",
    ],
    process: [
      "Enterprise requirements gathering & Figma prototyping",
      "Flutter UI implementation & state management",
      "Backend microservices API architecture & UAT testing",
      "Docker containerization & Harbor deployment automation",
    ],
    outcome: [
      "Launched and actively used by 20,000+ staff members across Thailand",
      "Significantly accelerated internal leave request processing times",
    ],
    isDemo: false,
  },
  {
    slug: "company-profile-website",
    title: "iCare Insurance",
    category: "Web Development",
    type: "Company Profile Website",
    statusBadge: "Live",
    summary:
      "Modern corporate website and online insurance platform redesigned and coded using Figma, Next.js, and TypeScript.",
    description:
      "Redesigned and developed a modern corporate website and online insurance platform for iCare Insurance. Featuring company overview, financial statements, insurance products, and customer support services. Built with Next.js, React, Mantine, and TypeScript with responsive layout and clean typography.",
    role: [
      "UX/UI Design",
      "Frontend Development",
      "Responsive Layout",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Mantine",
      "Figma",
      "Vercel",
    ],
    links: [
      {
        name: "Live Demo",
        icon: "Globe",
        href: "https://corporate-website-demo.vercel.app/",
      },
      {
        name: "Figma Design",
        icon: "Figma",
        href: "https://www.figma.com/design/dkDXSLaJ89IVuw517sbyfr/-DRAFT--iCare-Insurance?node-id=113-398&t=4GBUnDg5IaeQkgn3-1",
      },
    ],
    image: "/project-thumbnail/company-website.jpg",
    gallery: [
      "/project-gallery/ici/Slice 1.jpg",
      "/project-gallery/ici/Slice 2.jpg",
      "/project-gallery/ici/Slice 3.jpg",
      "/project-gallery/ici/Slice 4.jpg",
      "/project-gallery/ici/Slice 5.jpg",
      "/project-gallery/ici/Slice 6.jpg",
      "/project-gallery/ici/Slice 7.jpg",
    ],
    problem:
      "The client needed to organize extensive content — corporate profile, multi-tier insurance products, annual financial reports, and claim guidelines — into an approachable, credible web experience.",
    solution: [
      "Top-level navigation separating business products from corporate governance",
      "Consistent typography hierarchy and responsive layout across desktop & mobile",
      "Direct customer support touchpoints across all pages",
      "Production-ready Next.js frontend with reusable UI components",
    ],
    process: [
      "Figma wireframes & component styling",
      "Frontend implementation using Next.js & TypeScript",
      "Responsive optimization & Vercel deployment",
    ],
    outcome: [
      "Delivered clean, accessible presentation of insurance products and policies",
      "Production-ready code architecture ready for future service integrations",
    ],
    isDemo: true,
    demoNote:
      "This is a portfolio reference built during my time at iCare Insurance. It does not represent an active public commercial offering.",
  },
  {
    slug: "whale-services-website",
    title: "Whale Services",
    category: "Web Design",
    type: "Company Profile Website",
    statusBadge: "Live",
    summary:
      "Clean, modern company profile website for Whale Services Co., Ltd., matching corporate branding and deployment setup.",
    description:
      "Designed and launched a company profile website for Whale Services Co., Ltd. The project focused on clean service presentation and brand consistency within the client's existing deployment infrastructure.",
    role: [
      "UX/UI Design",
      "Visual Design",
      "Prototyping",
    ],
    tags: [
      "Figma",
      "Canva",
      "Brand Identity",
      "Web Design",
    ],
    links: [
      {
        name: "Live Website",
        icon: "Globe",
        href: "https://whale.services/",
      },
      {
        name: "Figma Prototype",
        icon: "Figma",
        href: "https://www.figma.com/design/OTNRCtR5JQcDuIyjt0dXNE/Whale-Service?node-id=0-1&t=zNEidpB4Sa7OyIBA-1",
      },
    ],
    image: "/project-thumbnail/whale-services.jpg",
    gallery: [
      "/project-gallery/whale-services/Slice 1.jpg",
      "/project-gallery/whale-services/Slice 2.jpg",
      "/project-gallery/whale-services/Slice 3.jpg",
      "/project-gallery/whale-services/Slice 4.jpg",
      "/project-gallery/whale-services/Slice 5.jpg",
      "/project-gallery/whale-services/Slice 6.jpg",
    ],
    problem:
      "Whale Services required a credible online presence that communicated their core service offerings clearly while adhering to their existing domain setup.",
    solution: [
      "Modern layout aligned with the company's brand identity",
      "Scannable service sections highlighting key offerings",
      "Wireframed in Figma first, then finalized for client deployment",
    ],
    process: [
      "Brand alignment and Figma wireframing",
      "Layout and typographic refinements",
      "Deployment and launch verification",
    ],
    outcome: [
      "Delivered a professional corporate web presence on time",
      "Improved brand credibility for customer inquiries",
    ],
    isDemo: false,
  },
  {
    slug: "hrds-portal",
    title: "BAAC HRDS",
    category: "Web Development",
    type: "Enterprise Data Service & Governance",
    statusBadge: "Live",
    summary:
      "Enterprise HR data service and governance portal for BAAC, featuring a self-service data catalog, multi-tier approval workflows, SAP HR sync, and PDPA data destruction tracking.",
    description:
      "HR Data Service (HRDS) is BAAC's enterprise platform for requesting, approving, and delivering confidential human resource datasets. Designed to enforce strict data governance and PDPA compliance, the system streamlines the complete data lifecycle: self-service data catalog discovery, multi-step requisition wizards with purpose declaration, hierarchical role-based approvals (Supervisor, Department Head, and HRIS Admin), secure delivery via MinIO object storage, and automated data retention and destruction tracking.",
    role: [
      "Full-Stack Developer",
      "Backend Architect",
      "UX/UI Designer",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      ".NET Core",
      "SQL Server",
      "MinIO",
      "Tailwind CSS",
      "PDPA",
      "SAP HR Sync",
      "iAuthenX SSO",
    ],
    links: [],
    image: "/project-thumbnail/hrds.png",
    gallery: [
      "/project-gallery/hrds/1-landing.png",
      "/project-gallery/hrds/2-dashboard.png",
    ],
    problem:
      "Requests for confidential employee records across bank branches and departments previously relied on manual paper forms and ad-hoc emails. This lacked clear auditability, had no centralized catalog of available data assets, and created compliance risks under PDPA with no automated tracking for mandatory data disposal when usage ended.",
    solution: [
      "Data Catalog: Self-service catalog classifying datasets into General vs. PDPA Personal Data with mandatory RoPA documentation requirements.",
      "Multi-Tier Approval Workflow: Configured hierarchical authorization routing across supervisor endorsement, department head approval, and HRIS admin review.",
      "Secure Delivery & MinIO Storage: Secured report delivery through encrypted MinIO object storage with time-limited signed download URLs.",
      "Data Destruction Lifecycle: Built automated retention tracking and confirmation workflows to verify disposal of expired data in compliance with PDPA.",
      "Enterprise Integration: Integrated with BAAC's central iAuthenX SSO and built synchronization pipelines with SAP HR raw employee master data.",
    ],
    process: [
      "Requirement discovery with HR leadership and PDPA compliance officers",
      "UX/UI design in Figma with responsive enterprise dashboards and multi-step request wizards",
      "Database schema architecture in SQL Server using Entity Framework Core",
      "Backend RESTful API implementation in C# .NET Core with JWT authorization and MinIO SDK",
      "Frontend development in Next.js 16 (App Router), TypeScript, and Tailwind CSS",
    ],
    outcome: [
      "Transformed manual paper-based HR data requests into a 100% paperless enterprise digital workflow",
      "Enforced comprehensive PDPA compliance with end-to-end audit trails, purpose governance, and verified data destruction",
      "Accelerated report delivery turnaround while protecting confidential data for 20,000+ bank employees",
    ],
    isDemo: false,
  },
];

export const EXPERIENCES: JobExperience[] = [
  {
    slug: "baac",
    company: "BAAC",
    role: "Software Developer",
    jobType: "Full-time",
    date: "June, 2025 — Present",
    location: "Bangkok, Thailand",
    image: "/company-logo/baac.jpg",
    isCurrent: true,
    projectsCount: "02",
    description:
      "Developing internal web and mobile applications at BAAC, including the Astaffs mobile HR app and HRDS request portal.",
    achievements: [
      "BAAC Astaffs: Built a mobile HR app for 20,000+ employees using Flutter and Dart. Created a microservices backend with C# .NET Core and set up CI/CD pipelines with GitLab and Docker to deploy updates to the bank's Harbor registry.",
      "HRDS (Human Resource Data Service): Developed the digital transformation of internal paper-based requests with a secure, role-based approval workflow web portal using Next.js and TypeScript.",
      "HRDS Backend: Developed the backend architecture for HRDS using C# .NET Core, SQL Server, and MinIO, ensuring data governance and strict PDPA compliance for sensitive employee data.",
    ],
    metrics: [
      { value: "20,000+", label: "EMPLOYEES SERVED" },
    ],
    skills: [
      "Flutter",
      "Dart",
      "C#",
      ".NET Core",
      "Next.js",
      "TypeScript",
      "SQL Server",
      "MinIO",
      "GitLab CI/CD",
      "Docker",
    ],
    stackCaption:
      "Technologies used for Astaffs mobile app and HRDS web portal.",
  },
  {
    slug: "fastwork",
    company: "Fastwork",
    role: "Freelancer UX/UI Designer / Software Developer",
    jobType: "Freelance",
    date: "Jan, 2024 — Present",
    duration: "1 Year 8 Months",
    location: "Remote",
    image: "/company-logo/fastwork.png",
    isCurrent: true,
    projectsCount: "15",
    description:
      "Freelance UX/UI design and software development for clients on Fastwork Thailand.",
    achievements: [
      "UX/UI Design: Delivered end-to-end UX/UI design solutions for various clients, creating wireframes, high-fidelity interfaces, and interactive prototypes using Figma and Canva.",
      "Mobile Deployment: Handled technical deployment for mobile applications, notably configuring and publishing a Progressive Web App (PWA) named 'TipBox' to the Google Play Console, managing Trusted Web Activity and asset links.",
    ],
    metrics: [
      { value: "15", label: "COMPLETED ORDERS" },
      { value: "4.6★", label: "CLIENT RATING (13 REVIEWS)" },
      { value: "8", label: "TOTAL CLIENTS" },
    ],
    skills: [
      "Figma",
      "Canva",
      "PWA",
      "Google Play Console",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    stackCaption:
      "Tools used for client design deliverables and mobile PWA deployment.",
  },
  {
    slug: "icare-insurance",
    company: "iCare Insurance",
    role: "Front-End Developer",
    jobType: "Full-time",
    date: "Sep, 2024 — May, 2025",
    duration: "9 Months",
    location: "Bangkok, Thailand",
    image: "/company-logo/ici.jpg",
    isCurrent: false,
    projectsCount: "02",
    description:
      "Front-end development and UI design for corporate website, digital business cards, and internal tools.",
    achievements: [
      "Corporate Website: Redesigned and coded the company's corporate website and online insurance platform using Figma, Next.js, and TypeScript.",
      "iCard: Built iCard, a digital business card web app featuring QR code scanning and physical NFC card linking.",
      "Backend CMS: Maintained and updated a backend CMS for insurance sales using TypeScript and Hono.",
      "Internal Systems & LINE OA: Designed UI layouts and user workflows for internal document systems and LINE OA.",
    ],
    metrics: [
      { value: "4", label: "DELIVERABLES" },
      { value: "9 Months", label: "DURATION" },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Figma",
      "Mantine",
      "Hono",
      "LINE OA",
      "Tailwind CSS",
    ],
    stackCaption:
      "Next.js, TypeScript, React, and Figma used for insurance products and internal systems.",
  },
  {
    slug: "nayoo",
    company: "NaYoo",
    role: "UX/UI Designer (Intern & Co-Op)",
    jobType: "Full-time",
    date: "2023 — 2024",
    duration: "8 Months (Intern & Co-Op)",
    location: "Khon Kaen, Thailand",
    image: "/company-logo/nayoo.jpg",
    isCurrent: false,
    projectsCount: "02",
    description:
      "Researched customer behavior, conducted user interviews, and created Figma design systems for a real estate tech startup.",
    achievements: [
      "User Research: Conducted direct user interviews, ran A/B tests, and researched user behavior to design features for a startup product.",
      "Business Alignment: Worked closely with the CEO and business team to make sure the designs met business goals.",
      "Component Library: Created clear UI components and prototypes in Figma using Auto Layout to help the dev team build features faster.",
    ],
    metrics: [
      { value: "10+", label: "FEATURES DESIGNED" },
    ],
    skills: [
      "Figma",
      "User Interviews",
      "A/B Testing",
      "Auto Layout",
      "Wireframing",
      "Prototyping",
    ],
    stackCaption:
      "Figma, user interviews, and prototyping used for startup feature design.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "https://skillicons.dev/icons?theme=light&i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?theme=light&i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?theme=light&i=typescript" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?theme=light&i=tailwind" },
      { name: "Mantine", icon: "https://svgl.app/library/mantine.svg" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: "https://skillicons.dev/icons?theme=light&i=figma" },
      { name: "Photoshop", icon: "https://skillicons.dev/icons?theme=light&i=ps" },
      { name: "Canva", icon: "https://svgl.app/library/canva.svg" },
      { name: "UX/UI", icon: "" },
      { name: "Wireframing", icon: "" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: ".NET Core", icon: "https://skillicons.dev/icons?theme=light&i=dotnet" },
      { name: "C#", icon: "https://skillicons.dev/icons?theme=light&i=cs" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?theme=light&i=postgresql" },
      { name: "SQL Server", icon: "/sql-server.svg" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: "https://skillicons.dev/icons?theme=light&i=flutter" },
      { name: "Dart", icon: "https://skillicons.dev/icons?theme=light&i=dart" },
      { name: "React Native", icon: "https://skillicons.dev/icons?theme=light&i=react" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?theme=light&i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?theme=light&i=github" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?theme=light&i=vercel" },
      { name: "Nginx", icon: "https://skillicons.dev/icons?theme=light&i=nginx" },
      { name: "Docker", icon: "https://skillicons.dev/icons?theme=light&i=docker" },
      { name: "Railway", icon: "/railway.svg" },
    ],
  },
];
