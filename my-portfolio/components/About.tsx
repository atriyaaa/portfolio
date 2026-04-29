"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Brain,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={18} />,
    title: "Recent Graduate",
    text: "Graduated a year ago and now focused on building practical, job-ready data projects.",
  },
  {
    icon: <Target size={18} />,
    title: "Current Focus",
    text: "Targeting data analyst roles, with additional interest in AI/ML and bioinformatics.",
  },
  {
    icon: <Brain size={18} />,
    title: "How I Think",
    text: "I like breaking messy problems into clean insights, dashboards, and decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-main">
            <Sparkles size={13} />
            About Me
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Curious, analytical, and focused on turning data into clarity.
            </h2>

            <p className="leading-7 text-text-secondary">
              I’m Atriya, a recent graduate building a career in data analytics.
              I enjoy working with data from cleaning and exploration through to
              dashboards, insights, and storytelling.
            </p>

            <p className="leading-7 text-text-secondary">
              My main focus is data analyst roles, especially where I can use
              SQL, Python, Excel, and Power BI to solve practical problems. I’m
              also gradually exploring AI/ML and bioinformatics through projects
              like CancerXAI.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary">
              <MapPin size={15} className="text-accent-main" />
              Open to opportunities
            </div>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              View my work
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-surface/70 p-5 shadow-sm backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
              Personal working style
            </p>

            <p className="mt-3 text-sm leading-7 text-text-secondary">
              I like clean structure, careful problem-solving, and outputs that
              are easy for non-technical users to understand.
            </p>
          </div>
        </motion.div>

        {/* Right - slightly lowered on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="grid gap-5 md:mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent-main transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-accent-main transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}