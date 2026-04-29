"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  LineChart,
  Database,
  Brain,
  Dna,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Data Analysis",
    icon: <BarChart3 size={18} />,
    level: "Core",
    description: "Cleaning, exploring, and interpreting data clearly.",
    skills: ["SQL joins", "Window functions", "Excel", "EDA", "Data Cleaning"],
  },
  {
    title: "Programming",
    icon: <Code2 size={18} />,
    level: "Core",
    description: "Using code to automate analysis and workflows.",
    skills: ["Python", "Pandas", "NumPy", "Scripting", "Data Processing"],
  },
  {
    title: "Visualization",
    icon: <LineChart size={18} />,
    level: "Core",
    description: "Turning analysis into dashboards and stories.",
    skills: ["Power BI", "Dashboard Design", "Data Storytelling", "Charts"],
  },
  {
    title: "Databases",
    icon: <Database size={18} />,
    level: "Working",
    description: "Querying structured data and building insight layers.",
    skills: ["PostgreSQL", "MySQL", "Query Optimization", "CTEs"],
  },
  {
    title: "Machine Learning",
    icon: <Brain size={18} />,
    level: "Exploring",
    description: "Building interpretable models and evaluating results.",
    skills: ["Regression", "Classification", "Model Evaluation", "SHAP"],
  },
  {
    title: "Bioinformatics",
    icon: <Dna size={18} />,
    level: "Exploring",
    description: "Applying analytical thinking to biomedical data.",
    skills: ["Gene Expression", "Cancer Subtypes", "XAI", "Biomedical Data"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Skills
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Tools & Technologies
            </h2>

            <p className="max-w-xl leading-7 text-text-secondary">
              A practical toolkit for cleaning, analyzing, visualizing, and
              communicating data-driven insights.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-text-secondary shadow-sm backdrop-blur">
            <span className="font-semibold text-text-primary">Primary focus:</span>{" "}
            Data Analytics
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/85 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-accent-main/30 hover:shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent-main transition-transform duration-300 group-hover:scale-x-100" />
              <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-accent-main/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-accent-main transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                    {group.icon}
                  </div>

                  <span className="rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                    {group.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary transition-all duration-300 hover:border-accent-main/30 hover:text-accent-main"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-surface/70 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-text-secondary">
              I’m strongest in turning messy data into understandable outputs:
              dashboards, reports, and clear analytical summaries.
            </p>

            <a
              href="#projects"
              className="inline-flex w-fit rounded-xl bg-accent-main px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)]"
            >
              See skills in projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}