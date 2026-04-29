"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  MoveHorizontal,
} from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Talent Acquisition & Compliance Manager",
    company: "Leopard Logistics, Amazon DSP",
    date: "Oct 2025 – Present",
    points: [
      "Led recruitment of 150+ candidates/month, reducing time-to-hire by 35%.",
      "Maintained 98–100% compliance across fleet audits and documentation.",
      "Managed workforce planning for 40–100+ active drivers.",
    ],
    tags: ["Operations", "Compliance", "Recruitment"],
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    company: "Uptrail",
    date: "Jun – Jul 2025",
    points: [
      "Analyzed 500K+ row datasets to generate actionable insights.",
      "Built Power BI and Tableau dashboards, reducing reporting time by 30%.",
      "Automated ETL workflows with Python and SQL.",
    ],
    tags: ["Python", "SQL", "Power BI", "Tableau"],
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    company: "MeriSKILL",
    date: "May – Jun 2024",
    points: [
      "Delivered statistical analyses for client projects.",
      "Created dashboards that improved stakeholder engagement by 25%.",
    ],
    tags: ["Analytics", "Power BI", "Tableau"],
  },
  {
    type: "work",
    title: "Computer Lab Assistant",
    company: "Asia Pacific University",
    date: "Oct 2023 – May 2025",
    points: [
      "Supported 200+ students in Python, SQL, and C.",
      "Resolved 90%+ of technical issues on first contact.",
    ],
    tags: ["Python", "SQL", "Teaching"],
  },
  {
    type: "education",
    title: "BSc (Hons) Computer Science",
    company: "University of Surrey",
    date: "Sep 2023 – Jun 2025",
    points: [
      "Completed second and final year of Computer Science.",
      "First-Class final-year cancer classification project.",
      "Worked with AI, deep learning, databases, and web development.",
    ],
    tags: ["Computer Science", "AI", "Databases"],
  },
  {
    type: "education",
    title: "Foundation in Computing & Year 1 BSc",
    company: "Asia Pacific University",
    date: "Jun 2021 – May 2023",
    points: [
      "Achieved GPA 3.62/4.00.",
      "Studied programming, databases, operating systems, and AI.",
      "Earned Cisco Academy CCNAv7 Introduction to Networks certification.",
    ],
    tags: ["Python", "C", "Networking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Experience & Education
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              My Journey So Far
            </h2>

            <p className="max-w-xl leading-7 text-text-secondary">
              A horizontal roadmap of internships, work experience, and academic
              background — scroll sideways to explore.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary shadow-sm md:flex">
            <MoveHorizontal size={15} className="text-accent-main" />
            Scroll sideways
            <ArrowRight size={15} className="text-accent-main" />
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin]">
            <div className="relative flex min-w-max snap-x snap-mandatory gap-8 px-8 py-8">
              <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-border" />
              <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-main/50 to-transparent" />

              {timeline.map((item, index) => {
                const isTop = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: isTop ? -18 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="relative flex w-[360px] shrink-0 snap-center flex-col items-center md:w-[430px]"
                  >
                    <div
                      className={`${
                        isTop ? "order-1 mb-7" : "order-3 mt-7"
                      } group relative min-h-[230px] w-full overflow-hidden rounded-3xl border border-border bg-surface/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-accent-main/30 hover:shadow-2xl`}
                    >
                      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent-main transition-transform duration-300 group-hover:scale-x-100" />
                      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent-main/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background text-accent-main transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                            {item.type === "work" ? (
                              <Briefcase size={17} />
                            ) : (
                              <GraduationCap size={17} />
                            )}
                          </div>

                          <span className="rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                            {item.type === "work" ? "Experience" : "Education"}
                          </span>
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                            {item.date}
                          </p>

                          <h3 className="mt-2 text-lg font-semibold leading-snug text-text-primary">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-text-secondary">
                            {item.company}
                          </p>
                        </div>

                        <ul className="space-y-1.5 text-sm leading-6 text-text-secondary">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-main" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary transition-all duration-300 hover:border-accent-main/30 hover:text-accent-main"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="order-2 relative flex h-10 items-center justify-center">
                      <div
                        className={`absolute h-7 w-px bg-border ${
                          isTop ? "-top-7" : "-bottom-7"
                        }`}
                      />

                      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-accent-main bg-background shadow-[0_0_0_6px_rgba(37,99,235,0.08)] transition-transform duration-300 hover:scale-110">
                        <div className="h-2 w-2 rounded-full bg-accent-main" />
                      </div>
                    </div>

                    <div
                      className={`${
                        isTop ? "order-3 mt-7" : "order-1 mb-7"
                      } h-[230px]`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="mt-2 text-center text-xs text-text-secondary md:hidden">
            Swipe sideways to explore the roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}