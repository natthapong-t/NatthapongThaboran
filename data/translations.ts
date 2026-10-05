import { Language } from "@/context/LanguageContext";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from "@/data/portfolio-data";
import { Project, JobExperience } from "@/lib/types";

export const UI_TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
      hire: "Hire on Fastwork",
      portfolioSuffix: "'s Portfolio",
    },
    hero: {
      devTag: "Software Developer",
      designerTag: "UX/UI Designer",
      hireCta: "Hire on Fastwork",
      viewProjects: "View Projects",
      trackRecord: "Track Record",
      nationality: "Thai",
      location: "Bangkok, Thailand",
    },
    work: {
      title: "Work Experience",
      subtitle: "My professional journey across software engineering and product design.",
      viewAll: "View All Experiences",
      current: "Present",
    },
    stack: {
      title: "Skills & Proficiencies",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A collection of projects I've worked on.",
      seeAll: "all projects",
      viewProjects: "View Projects",
      backHome: "Back to Home",
      filterAll: "All",
      filterWebDev: "Web Development",
      filterWebDesign: "Web Design",
      filterMobileApp: "Mobile Application",
    },
    projectDetail: {
      backToProjects: "Back to Projects",
      liveDemo: "Live Demo",
      figmaDesign: "Figma Design",
      figmaPrototype: "Figma Prototype",
      playStore: "Google Play Store",
      liveWebsite: "Live Website",
      overview: "Overview",
      role: "Role & Contribution",
      techStack: "Tech Stack",
      techStackDesc: "Technologies and tools chosen to achieve performance, clean maintenance, and seamless UX.",
      problemTitle: "Key Challenge & Problem",
      solutionTitle: "The Solution & Strategy",
      processTitle: "Execution & Process",
      outcomeTitle: "Tangible Impact & Outcomes",
      visualsTitle: "Project Visuals",
      prevProject: "Previous Project",
      nextProject: "Next Project",
      notice: "Notice:",
    },
    experienceDetail: {
      backToExperiences: "Back to Experiences",
      overview: "Company Overview",
      coreStack: "Core Stack",
      achievementsTitle: "Key Achievements & Contributions",
      nextExperience: "Next Experience",
      prevRole: "Previous Role",
      nextRole: "Next Role",
      allExperiences: "Work Experience",
      filterAll: "All",
      filterFullTime: "Full-time",
      filterFreelance: "Freelance",
      defaultStackCaption: "Leveraging core technologies to build scalable, resilient, and performant solutions.",
    },
    contact: {
      readyTitle: "Ready to start your",
      nextProject: "next project?",
      subtitle: "Let's build something scalable, performant, and beautiful together.",
    },
    footer: {
      rights: "All rights reserved.",
      designedWith: "Designed and built with Next.js, TypeScript, and Tailwind CSS.",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      work: "ประสบการณ์",
      stack: "ทักษะ",
      projects: "ผลงาน",
      contact: "ติดต่อ",
      hire: "จ้างงานผ่าน Fastwork",
      portfolioSuffix: " — แฟ้มสะสมผลงาน",
    },
    hero: {
      devTag: "Software Developer",
      designerTag: "UX/UI Designer",
      hireCta: "จ้างงานผ่าน Fastwork",
      viewProjects: "ดูผลงานทั้งหมด",
      trackRecord: "สถิติและผลงาน",
      nationality: "ไทย",
      location: "กรุงเทพมหานคร, ประเทศไทย",
    },
    work: {
      title: "ประสบการณ์ทำงาน",
      subtitle: "เส้นทางการทำงานด้านวิศวกรรมซอฟต์แวร์และการออกแบบผลิตภัณฑ์ดิจิทัล",
      viewAll: "ดูประวัติการทำงานทั้งหมด",
      current: "ปัจจุบัน",
    },
    stack: {
      title: "ทักษะและความเชี่ยวชาญ",
    },
    projects: {
      title: "ผลงานเด่น",
      subtitle: "รวมผลงานและระบบที่เคยพัฒนาและออกแบบ",
      seeAll: "ดูโปรเจกต์ทั้งหมด",
      viewProjects: "ดูผลงานทั้งหมด",
      backHome: "กลับสู่หน้าแรก",
      filterAll: "ทั้งหมด",
      filterWebDev: "Web Development",
      filterWebDesign: "Web Design",
      filterMobileApp: "Mobile Application",
    },
    projectDetail: {
      backToProjects: "กลับสู่หน้ารวมผลงาน",
      liveDemo: "ดูตัวอย่างระบบจริง",
      figmaDesign: "ไฟล์ดีไซน์ Figma",
      figmaPrototype: "ทดลองเล่น Prototype",
      playStore: "Google Play Store",
      liveWebsite: "เข้าสู่เว็บไซต์จริง",
      overview: "ภาพรวมโครงการ",
      role: "บทบาทและความรับผิดชอบ",
      techStack: "Tech Stack",
      techStackDesc: "เทคโนโลยีและเครื่องมือที่คัดสรรเพื่อประสิทธิภาพ ความปลอดภัย และการใช้งานที่ราบรื่น",
      problemTitle: "โจทย์และความท้าทายหลัก (Problem)",
      solutionTitle: "แนวทางการแก้ปัญหาและกลยุทธ์ (Solution)",
      processTitle: "ขั้นตอนการดำเนินงาน (Execution & Process)",
      outcomeTitle: "ผลลัพธ์และความสำเร็จที่วัดผลได้ (Outcomes)",
      visualsTitle: "ภาพตัวอย่างระบบ (Project Visuals)",
      prevProject: "โปรเจกต์ก่อนหน้า",
      nextProject: "โปรเจกต์ถัดไป",
      notice: "ข้อชี้แจง:",
    },
    experienceDetail: {
      backToExperiences: "กลับสู่หน้ารวมประสบการณ์",
      overview: "ภาพรวมองค์กร",
      coreStack: "เทคโนโลยีหลัก (Core Stack)",
      achievementsTitle: "ผลงานสำคัญและความรับผิดชอบหลัก",
      nextExperience: "ประสบการณ์ถัดไป",
      prevRole: "ประสบการณ์ก่อนหน้า",
      nextRole: "ประสบการณ์ถัดไป",
      allExperiences: "ประสบการณ์ทำงานทั้งหมด",
      filterAll: "ทั้งหมด",
      filterFullTime: "งานประจำ (Full-time)",
      filterFreelance: "ฟรีแลนซ์ (Freelance)",
      defaultStackCaption: "เลือกใช้เครื่องมือและเทคโนโลยีที่เหมาะสม เพื่อสร้างระบบที่รองรับการขยายตัวและมีประสิทธิภาพสูง",
    },
    contact: {
      readyTitle: "พร้อมเริ่มต้นสร้างสรรค์",
      nextProject: "โปรเจกต์ใหม่ของคุณหรือยัง?",
      subtitle: "มาร่วมสร้างสรรค์ระบบที่เร็ว สวยงาม และรองรับการเติบโตไปด้วยกัน",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์ทั้งหมด",
      designedWith: "ออกแบบและพัฒนาด้วย Next.js, TypeScript และ Tailwind CSS",
    },
  },
};

export const PERSONAL_INFO_TH = {
  ...PERSONAL_INFO,
  name: "ณัฐพงษ์ ทาโบราณ",
  role: "Software Developer & UX/UI Designer",
  headlinePrefix: "ผสานศาสตร์การดีไซน์ &",
  headlineAccent: "วิศวกรรมซอฟต์แวร์",
  shortBio:
    "นักพัฒนาซอฟต์แวร์และนักออกแบบ UX/UI ที่มีประสบการณ์ครอบคลุมทุกกระบวนการพัฒนาผลิตภัณฑ์ดิจิทัล เชี่ยวชาญการเชื่อมโยงระหว่างการออกแบบและการเขียนโค้ดสำหรับเว็บและแอปพลิเคชันมือถือ จัดการได้ตั้งแต่ UI ดีไซน์ การพัฒนาโปรแกรม จนถึงการขึ้นระบบจริง (Deployment)",
  stats: [
    { value: "3+", label: "ปีประสบการณ์ทำงาน", highlight: true },
    { value: "15", label: "งานที่ส่งมอบสำเร็จบน Fastwork (4.6★)", highlight: false },
  ],
};

export const SKILL_CATEGORY_NAMES_TH: Record<string, string> = {
  "Frontend": "ฟรอนต์เอนด์ (Frontend)",
  "Design": "การออกแบบ (UX/UI Design)",
  "Backend & Database": "แบ็กเอนด์ & ฐานข้อมูล (Backend & DB)",
  "Mobile": "โมบายแอปพลิเคชัน (Mobile App)",
  "Tools & Deployment": "เครื่องมือ & การขึ้นระบบ (Tools & DevOps)",
};

export const PROJECTS_TH: Record<string, Partial<Project>> = {
  "baac-astaffs": {
    category: "โมบายแอปพลิเคชัน",
    statusBadge: "ใช้งานจริง",
    type: "แอปพลิเคชันมือถือระดับองค์กร",
    summary:
      "พัฒนาแอปพลิเคชัน HR บนมือถือสำหรับพนักงาน ธ.ก.ส. กว่า 20,000 คน ด้วย Flutter และ Dart เชื่อมต่อสถาปัตยกรรม Microservices C# .NET Core พร้อม GitLab CI/CD",
    description:
      "แอปพลิเคชันมือถือระดับองค์กรสำหรับพนักงาน ธ.ก.ส. ทั่วประเทศกว่า 20,000 คน ครอบคลุมการยื่นขอลา ตรวจสอบเวลาทำงาน ข่าวสารภายในองค์กร และขั้นตอนการอนุมัติ ออกแบบด้วย Figma และพัฒนาด้วย Flutter และ Dart เชื่อมต่อกับ Backend Microservices ด้วย C# .NET Core ที่ปลอดภัย พร้อมส่งขึ้น Harbor registry ของธนาคารผ่าน GitLab CI/CD pipelines",
    role: [
      "Mobile Developer (นักพัฒนาแอปมือถือ)",
      "Backend Developer (นักพัฒนาระบบหลังบ้าน)",
      "UX/UI Designer (ผู้ออกแบบประสบการณ์และส่วนต่อประสาน)",
    ],
    problem:
      "องค์กรต้องการเครื่องมือดิจิทัลบนมือถือที่ปลอดภัยและรวมศูนย์ เพื่อให้พนักงานธนาคารกว่า 20,000 คน สามารถยื่นลา ตรวจสอบเวลาทำงาน และจัดการงาน HR ได้สะดวกทุกที่ทุกเวลา",
    solution: [
      "สร้าง UI ที่รวดเร็ว ใช้งานง่ายบนทุกแพลตฟอร์มด้วย Flutter & Dart",
      "พัฒนาระบบหลังบ้าน Microservices ที่รองรับปริมาณผู้ใช้สูงด้วย C# .NET Core",
      "วางระบบ CI/CD อัตโนมัติด้วย GitLab และ Docker ขึ้นสู่ Harbor registry ภายในธนาคาร",
      "ออกแบบ User Flow ที่กระชับใน Figma เพื่อให้พนักงานทำงานประจำวันได้อย่างรวดเร็ว",
    ],
    process: [
      "รวบรวมความต้องการระดับองค์กรและสร้าง Interactive Prototype บน Figma",
      "พัฒนาส่วนหน้าบ้านด้วย Flutter พร้อมวางโครงสร้าง State Management",
      "ออกแบบสถาปัตยกรรม API Microservices ฝั่ง Backend และร่วมทดสอบ UAT",
      "จัดทำ Docker Containerization และระบบ Harbor Deployment อัตโนมัติ",
    ],
    outcome: [
      "เปิดตัวและมีพนักงานกว่า 20,000 คนทั่วประเทศใช้งานจริงในการทำงานประจำวัน",
      "ลดระยะเวลาในขั้นตอนการยื่นและอนุมัติวันลาของพนักงานได้อย่างเห็นได้ชัด",
    ],
  },
  "company-profile-website": {
    category: "พัฒนาเว็บไซต์",
    statusBadge: "ใช้งานจริง",
    type: "เว็บไซต์องค์กรและประกันภัยออนไลน์",
    summary:
      "ออกแบบและพัฒนาเว็บไซต์องค์กรและแพลตฟอร์มประกันภัยออนไลน์โฉมใหม่ด้วย Figma, Next.js และ TypeScript",
    description:
      "ออกแบบ UI ใหม่และพัฒนาเว็บไซต์องค์กรสำหรับ iCare Insurance นำเสนอข้อมูลบริษัท งบการเงิน ผลิตภัณฑ์ประกันภัย และช่องทางบริการลูกค้า พัฒนาด้วย Next.js, React, Mantine และ TypeScript รองรับทุกขนาดหน้าจออย่างสมบูรณ์แบบ",
    role: [
      "UX/UI Design (ออกแบบประสบการณ์และหน้าจอ)",
      "Frontend Development (พัฒนาส่วนติดต่อผู้ใช้)",
      "Responsive Layout (จัดเลย์เอาต์รองรับทุกอุปกรณ์)",
    ],
    problem:
      "ลูกค้าต้องการจัดระเบียบเนื้อหาจำนวนมาก ทั้งประวัติองค์กร ผลิตภัณฑ์ประกันภัยหลายประเภท งบการเงินประจำปี และคู่มือการเรียกร้องสินไหม ให้เข้าถึงง่าย น่าเชื่อถือ และค้นหาสะดวก",
    solution: [
      "จัดวาง Navigation แยกผลิตภัณฑ์ประกันภัยกับการกำกับดูแลองค์กรอย่างชัดเจน",
      "กำหนด Typography Hierarchy ให้อ่านง่าย สบายตา และ Responsive ทั้งบนคอมพิวเตอร์และมือถือ",
      "วางจุดติดต่อฝ่ายบริการลูกค้าที่เข้าถึงได้ง่ายจากทุกหน้า",
      "พัฒนาโค้ดระดับ Production ด้วย Next.js และสร้าง Reusable UI Components",
    ],
    process: [
      "วาง Wireframe และออกแบบ Component Styling บน Figma",
      "เขียนโค้ด Frontend ด้วย Next.js และ TypeScript",
      "ปรับแต่ง Responsive Layout และ Deploy ขึ้นสู่ Vercel",
    ],
    outcome: [
      "นำเสนอข้อมูลผลิตภัณฑ์และนโยบายประกันภัยได้อย่างสวยงาม อ่านง่าย และเป็นระเบียบ",
      "สถาปัตยกรรมโค้ดมีระเบียบ พร้อมต่อยอดเชื่อมโยงบริการใหม่ ๆ ในอนาคต",
    ],
    demoNote:
      "ผลงานนี้เป็นงานอ้างอิงที่สร้างขึ้นระหว่างร่วมงานกับ iCare Insurance ไม่ใช่ข้อเสนอเชิงพาณิชย์สาธารณะในปัจจุบัน",
  },
  "whale-services-website": {
    category: "ออกแบบเว็บไซต์",
    statusBadge: "ใช้งานจริง",
    type: "เว็บไซต์แนะนำบริษัท",
    summary:
      "ออกแบบและเปิดตัวเว็บไซต์แนะนำบริษัท Whale Services จำกัด ที่ทันสมัย สอดคล้องกับอัตลักษณ์ของแบรนด์",
    description:
      "ออกแบบและเปิดตัวเว็บไซต์ Company Profile สำหรับ บริษัท เวล เซอร์วิสเซส จำกัด มุ่งเน้นการนำเสนอบริการหลักที่ชัดเจน สื่อสารตรงประเด็น และคงอัตลักษณ์ของแบรนด์บนระบบ Deployment เดิมของลูกค้า",
    role: [
      "UX/UI Design (ออกแบบประสบการณ์และหน้าจอ)",
      "Visual Design (ออกแบบกราฟิกและองค์ประกอบศิลป์)",
      "Prototyping (ทำตัวอย่างอินเทอร์แอคทีฟ)",
    ],
    problem:
      "Whale Services ต้องการตัวตนบนโลกออนไลน์ที่น่าเชื่อถือ เพื่อสื่อสารบริการหลักได้อย่างชัดเจนและเชื่อมต่อกับระบบโดเมนเดิม",
    solution: [
      "จัดเลย์เอาต์ทันสมัย สอดคล้องกับ Brand Identity ของบริษัท",
      "แบ่งสัดส่วนเนื้อหาให้อ่านง่ายและสแกนข้อมูลบริการได้อย่างรวดเร็ว",
      "วางโครงสร้างใน Figma ก่อนส่งมอบและขึ้นระบบจริง",
    ],
    process: [
      "ปรับจูนทิศทางแบรนด์และวาง Wireframe ใน Figma",
      "ขัดเกลาเลย์เอาต์และจัดลำดับฟอนต์ให้อ่านง่าย",
      "ทดสอบระบบ Deployment และยืนยันความพร้อมก่อนเปิดตัว",
    ],
    outcome: [
      "ส่งมอบเว็บไซต์องค์กรระดับมืออาชีพตรงตามเวลาที่กำหนด",
      "เสริมสร้างความน่าเชื่อถือให้กับแบรนด์ในการติดต่อจากลูกค้าใหม่",
    ],
  },
  "hrds-portal": {
    category: "พัฒนาเว็บไซต์",
    statusBadge: "ใช้งานจริง",
    type: "ระบบบริการข้อมูลและกำกับดูแลข้อมูล HR ระดับองค์กร",
    summary:
      "พอร์ทัลบริการและกำกับดูแลข้อมูลทรัพยากรบุคคลสำหรับ ธ.ก.ส. มีระบบ Data Catalog, กระบวนการอนุมัติตามลำดับขั้น, ซิงค์ข้อมูล SAP HR และระบบติดตามการทำลายข้อมูลตาม PDPA",
    description:
      "HR Data Service (HRDS) คือแพลตฟอร์มระดับองค์กรของ ธ.ก.ส. สำหรับขอใช้ อนุมัติ และจัดส่งชุดข้อมูล HR ภายใต้การปฏิบัติตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) อย่างเคร่งครัด ครอบคลุมตั้งแต่การค้นหาข้อมูลใน Catalog, ขั้นตอนการขอข้อมูลพร้อมระบุวัตถุประสงค์, ลำดับการอนุมัติตามสายงาน (ผู้บังคับบัญชา, ผู้อำนวยการฝ่าย, ผู้ดูแล HRIS), การจัดส่งไฟล์ที่ปลอดภัยผ่าน MinIO และการติดตามการทำลายข้อมูลเมื่อหมดอายุ",
    role: [
      "Full-Stack Developer (นักพัฒนาฟูลสแต็ก)",
      "Backend Architect (ผู้ออกแบบสถาปัตยกรรมหลังบ้าน)",
      "UX/UI Designer (ผู้ออกแบบ UX/UI)",
    ],
    problem:
      "การขอข้อมูลพนักงานเพื่อใช้งานข้ามฝ่ายและสาขาเดิมใช้เอกสารกระดาษและอีเมล ทำให้ขาดการตรวจสอบ ไม่มีแคตตาล็อกข้อมูลส่วนกลาง และเสี่ยงต่อการผิดกฎหมาย PDPA เนื่องจากไม่มีการติดตามการทำลายข้อมูลเมื่อครบกำหนด",
    solution: [
      "Data Catalog: ระบบค้นหาชุดข้อมูล แบ่งประเภทข้อมูลทั่วไปกับข้อมูลส่วนบุคคล PDPA พร้อมระบุวัตถุประสงค์ RoPA",
      "Multi-Tier Approval: ขั้นตอนการอนุมัติตามสายงาน (ผู้บังคับบัญชา, ผู้อำนวยการฝ่าย, ผู้ดูแล HRIS)",
      "Secure Delivery: จัดส่งไฟล์รายงานผ่าน MinIO Object Storage เข้ารหัส พร้อม Signed URL ที่มีอายุจำกัด",
      "Data Destruction: ระบบติดตามและยืนยันการทำลายข้อมูลหลังสิ้นสุดการใช้งานตาม PDPA",
      "Enterprise Integration: เชื่อมต่อ SSO iAuthenX ของธนาคาร และซิงค์ข้อมูลพนักงานจาก SAP HR",
    ],
    process: [
      "ค้นหาและวิเคราะห์ความต้องการร่วมกับผู้บริหารฝ่าย HR และเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล",
      "ออกแบบ UX/UI ใน Figma ทั้งแดชบอร์ดระดับองค์กรและวิซาร์ดการขอข้อมูลหลายขั้นตอน",
      "ออกแบบสถาปัตยกรรมฐานข้อมูลใน SQL Server ผ่าน Entity Framework Core",
      "พัฒนาระบบ Backend RESTful API ด้วย C# .NET Core ร่วมกับ JWT Authorization และ MinIO SDK",
      "พัฒนา Frontend ด้วย Next.js, TypeScript และ Tailwind CSS",
    ],
    outcome: [
      "เปลี่ยนกระบวนการขอข้อมูลจากกระดาษเป็นระบบดิจิทัลไร้กระดาษ 100%",
      "ควบคุมการใช้ข้อมูลตามมาตรฐาน PDPA พร้อม Audit Trail และการทำลายข้อมูลที่ตรวจสอบได้",
      "เพิ่มความสะดวกรวดเร็วในการขอรายงาน พร้อมรักษาความปลอดภัยข้อมูลของพนักงานกว่า 20,000 คน",
    ],
  },
};

export const EXPERIENCES_TH: Record<string, Partial<JobExperience>> = {
  baac: {
    role: "Software Developer (นักพัฒนาซอฟต์แวร์)",
    description:
      "พัฒนาเว็บและแอปพลิเคชันมือถือภายใน ธ.ก.ส. ได้แก่ แอปพลิเคชันมือถือ Astaffs และระบบขอใช้ข้อมูล HRDS",
    achievements: [
      "BAAC Astaffs: พัฒนาแอปพลิเคชัน HR มือถือสำหรับพนักงานกว่า 20,000 คนด้วย Flutter และ Dart สร้าง Backend Microservices ด้วย C# .NET Core และวางระบบ CI/CD ด้วย GitLab & Docker สู่ Harbor registry ของธนาคาร",
      "HRDS (Human Resource Data Service): ปรับเปลี่ยนกระบวนการขอข้อมูลกระดาษสู่ระบบดิจิทัลเว็บพอร์ทัลพร้อม Workflow อนุมัติตามสิทธิ์ด้วย Next.js และ TypeScript",
      "HRDS Backend: ออกแบบและพัฒนาสถาปัตยกรรมหลังบ้านด้วย C# .NET Core, SQL Server และ MinIO เพื่อการกำกับดูแลข้อมูลและความสอดคล้องตามมาตรฐาน PDPA",
    ],
    stackCaption: "เทคโนโลยีที่ใช้ในการพัฒนาแอปพลิเคชันมือถือ Astaffs และเว็บพอร์ทัล HRDS",
  },
  fastwork: {
    role: "Freelancer UX/UI Designer / Software Developer",
    description:
      "รับงานออกแบบ UX/UI และพัฒนาซอฟต์แวร์อิสระสำหรับลูกค้าบนแพลตฟอร์ม Fastwork ประเทศไทย",
    achievements: [
      "UX/UI Design: ส่งมอบงานออกแบบตั้งแต่ต้นจนจบ ทั้ง Wireframe, UI High-fidelity และ Interactive Prototype ด้วย Figma และ Canva",
      "Mobile Deployment: จัดการด้านเทคนิคและการขึ้นระบบ เช่น ติดตั้งและเผยแพร่ Progressive Web App (PWA) 'TipBox' ขึ้น Google Play Console จัดการ Trusted Web Activity และ Asset links",
    ],
    stackCaption: "เครื่องมือที่ใช้ในการส่งมอบงานออกแบบและติดตั้ง Progressive Web App บนมือถือ",
  },
  "icare-insurance": {
    role: "Front-End Developer (นักพัฒนาส่วนติดต่อผู้ใช้)",
    description:
      "พัฒนาส่วนหน้าบ้าน (Front-End) และออกแบบ UI สำหรับเว็บไซต์องค์กร นามบัตรดิจิทัล และระบบภายใน",
    achievements: [
      "Corporate Website: ออกแบบใหม่และเขียนโค้ดเว็บไซต์องค์กรและแพลตฟอร์มประกันภัยออนไลน์ด้วย Figma, Next.js และ TypeScript",
      "iCard: พัฒนานามบัตรดิจิทัลบนเว็บ รองรับการสแกน QR Code และผูกกับบัตร NFC จริง",
      "Backend CMS: ดูแลและปรับปรุงระบบ CMS จัดการการขายประกันภัยด้วย TypeScript และ Hono",
      "Internal Systems & LINE OA: ออกแบบ UI และขั้นตอนการทำงานสำหรับระบบเอกสารภายในและ LINE OA",
    ],
    stackCaption: "เทคโนโลยี Next.js, TypeScript, React และ Figma ที่ใช้พัฒนาผลิตภัณฑ์ประกันภัยและระบบภายใน",
  },
  nayoo: {
    role: "UX/UI Designer (Intern & Co-Op)",
    description:
      "ศึกษาพฤติกรรมผู้บริโภค สัมภาษณ์ผู้ใช้งาน และสร้าง Design System บน Figma สำหรับสตาร์ทอัพเทคโนโลยีอสังหาริมทรัพย์",
    achievements: [
      "User Research: ดำเนินการสัมภาษณ์ผู้ใช้โดยตรง ทำ A/B Testing และวิจัยพฤติกรรมเพื่อออกแบบฟีเจอร์สำหรับสตาร์ทอัพ",
      "Business Alignment: ทำงานร่วมกับ CEO และทีมธุรกิจเพื่อให้ออกแบบตอบโจทย์เป้าหมายทางธุรกิจ",
      "Component Library: สร้าง UI Components และ Prototype ใน Figma โดยใช้ Auto Layout เพื่อให้ทีม Dev นำไปพัฒนาต่อได้รวดเร็ว",
    ],
    stackCaption: "Figma, การสัมภาษณ์ผู้ใช้ และการทำ Prototype เพื่อการออกแบบฟีเจอร์ของสตาร์ทอัพ",
  },
};

export function getLocalizedPersonalInfo(lang: Language) {
  return lang === "th" ? PERSONAL_INFO_TH : PERSONAL_INFO;
}

export function getLocalizedProjects(lang: Language): Project[] {
  if (lang === "en") return PROJECTS;
  return PROJECTS.map((p) => {
    const override = PROJECTS_TH[p.slug];
    if (!override) return p;
    return { ...p, ...override };
  });
}

export function getLocalizedProject(slug: string, lang: Language): Project | undefined {
  const p = PROJECTS.find((item) => item.slug === slug);
  if (!p) return undefined;
  if (lang === "en") return p;
  const override = PROJECTS_TH[slug];
  return override ? { ...p, ...override } : p;
}

export function getLocalizedExperiences(lang: Language): JobExperience[] {
  if (lang === "en") return EXPERIENCES;
  return EXPERIENCES.map((e) => {
    const override = EXPERIENCES_TH[e.slug];
    if (!override) return e;
    return { ...e, ...override };
  });
}

export function getLocalizedExperience(slug: string, lang: Language): JobExperience | undefined {
  const e = EXPERIENCES.find((item) => item.slug === slug);
  if (!e) return undefined;
  if (lang === "en") return e;
  const override = EXPERIENCES_TH[slug];
  return override ? { ...e, ...override } : e;
}
