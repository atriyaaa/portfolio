"use client";

import { motion } from "framer-motion";
import { Mail, Link, Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-text-secondary md:flex-row"
      >
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="font-medium text-text-primary">
            © {new Date().getFullYear()} Atriya Sivakumar
          </p>
        </div>

        {/* Center small line (nice subtle divider feel) */}
        <div className="hidden h-6 w-px bg-border md:block" />

        {/* Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:atriyasiv@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
          >
            <Mail
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-[1px]"
            />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/atriya-sivakumar/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
          >
            <Link size={14} />
            LinkedIn
            <ArrowUpRight
              size={13}
              className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />
          </a>

          <a
            href="https://github.com/atriyaaa"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
          >
            <Code2 size={14} />
            GitHub
            <ArrowUpRight
              size={13}
              className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />
          </a>
        </div>
      </motion.div>

      {/* Bottom subtle line */}
      <div className="mt-8 flex justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-main/40 to-transparent" />
      </div>
    </footer>
  );
}