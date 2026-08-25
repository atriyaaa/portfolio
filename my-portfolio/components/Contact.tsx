"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Link,
  Code2,
  Send,
  Sparkles,
  Download,
  X,
} from "lucide-react";

export default function Contact() {
  const [showCvModal, setShowCvModal] = useState(false);

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
              Open to Data, Technology & Cyber Opportunities
            </h2>

            <p className="leading-7 text-text-secondary">
              I’m currently exploring graduate and junior opportunities across
              Data & BI, Technology, and Cybersecurity/GRC. Feel free to reach
              out if you’d like to connect, discuss a role, or learn more about
              my projects and experience.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:atriya0712@gmail.com"
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

            <button
              onClick={() => setShowCvModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              <Download size={16} />
              View CVs
            </button>
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
            Happy to connect about graduate opportunities, technical projects,
            data analytics, software development, and cybersecurity/GRC.
          </p>
        </div>
      </motion.div>

      {showCvModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setShowCvModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-2xl"
          >
            <button
              onClick={() => setShowCvModal(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-text-secondary transition-colors hover:bg-background hover:text-text-primary"
              aria-label="Close CV selector"
            >
              <X size={18} />
            </button>

            <div className="mb-6 pr-8">
              <p className="text-sm font-medium text-accent-main">
                Choose a CV
              </p>

              <h3 className="mt-1 text-2xl font-semibold text-text-primary">
                Select the most relevant version
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Choose the CV that best matches the role or area you’re
                interested in.
              </p>
            </div>

            <div className="space-y-3">
              <CvOption
                title="Data & BI"
                description="Data analysis, BI, reporting and analytics roles"
                href="/Atriya_Sivakumar_Data_BI_CV.pdf"
              />

              <CvOption
                title="Cyber & GRC"
                description="Cybersecurity, risk, compliance and assurance roles"
                href="/Atriya_Sivakumar_Cyber_GRC_CV.pdf"
              />

              <CvOption
                title="Technology"
                description="Technology, software and digital roles"
                href="/Atriya_Sivakumar_Technology_CV.pdf"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function CvOption({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      download
      className="group flex items-center justify-between rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:shadow-md"
    >
      <div>
        <p className="font-semibold text-text-primary transition-colors group-hover:text-accent-main">
          {title} CV
        </p>

        <p className="mt-1 text-xs text-text-secondary">
          {description}
        </p>
      </div>

      <Download
        size={18}
        className="shrink-0 text-text-secondary transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accent-main"
      />
    </a>
  );
}