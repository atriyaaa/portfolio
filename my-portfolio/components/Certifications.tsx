"use client";

import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const certifications = [
  {
    name: "Cisco CCNAv7",
    issuer: "Cisco Networking Academy",
    detail: "Introduction to Networks",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-border bg-surface/75 p-6 shadow-sm backdrop-blur"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Certifications
            </div>

            <h2 className="text-xl font-semibold text-text-primary">
              Professional Learning
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-accent-main transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                <Award size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-text-primary">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-xs font-medium text-accent-main">
                  {cert.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}