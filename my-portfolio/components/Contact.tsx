"use client";

import { motion } from "framer-motion";
import { Mail, Link, Code2, Send, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface/80 p-8 text-center shadow-sm backdrop-blur md:p-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-accent-main/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-main/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-2xl space-y-7">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Get In Touch
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Open to Data Analyst Opportunities
            </h2>

            <p className="leading-7 text-text-secondary">
              I’m currently looking for data analyst roles where I can
              contribute, learn, and grow. Feel free to reach out if you’d like
              to connect or discuss opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:atriyasiv@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-main px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)]"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">Email Me</span>
              <Send
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background/80 px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              Download CV
            </a>
          </div>

          <div className="mx-auto flex max-w-md flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
            <a
              href="https://www.linkedin.com/in/atriya-sivakumar/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              <Link size={17} />
              LinkedIn
            </a>

            <a
              href="https://github.com/atriyaaa"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              <Code2 size={17} />
              GitHub
            </a>
          </div>

          <p className="text-xs text-text-secondary">
            Usually happy to connect about data analytics, dashboards, and
            early-career opportunities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}