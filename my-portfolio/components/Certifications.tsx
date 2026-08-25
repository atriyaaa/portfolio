"use client";

import { motion } from "framer-motion";
import {
  Award,
  Sparkles,
  Database,
  Table2,
  BarChart3,
  Network,
} from "lucide-react";

const certifications = [
  {
    name: "Excel from Beginner to Advanced",
    issuer: "Udemy",
    detail: "Microsoft Excel",
    status: "Completed",
    icon: <Table2 size={18} />,
  },
  {
    name: "The Complete SQL Bootcamp",
    issuer: "Udemy",
    detail: "SQL • Databases • Querying",
    status: "Completed",
    icon: <Database size={18} />,
  },
  {
    name: "Tableau A-Z",
    issuer: "Udemy",
    detail: "Data Visualisation • Dashboards",
    status: "In Progress",
    icon: <BarChart3 size={18} />,
  },
  {
    name: "Cisco CCNAv7",
    issuer: "Cisco Networking Academy",
    detail: "Introduction to Networks",
    status: "Completed",
    icon: <Network size={18} />,
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
        {/* HEADER */}
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Certifications
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              Professional Learning
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
              Courses and certifications supporting my development across data,
              analytics, technology, and networking.
            </p>
          </div>

          <div className="rounded-full border border-border bg-background px-4 py-2 text-xs text-text-secondary">
            <span className="font-semibold text-text-primary">
              {certifications.length}
            </span>{" "}
            credentials
          </div>
        </div>

        {/* CERT CARDS */}
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-accent-main transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                {cert.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {cert.name}
                    </h3>

                    <p className="mt-1 text-sm text-text-secondary">
                      {cert.issuer}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[10px] font-medium ${
                      cert.status === "Completed"
                        ? "bg-accent-main/10 text-accent-main"
                        : "bg-accent-secondary/10 text-accent-secondary"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <p className="mt-3 text-xs font-medium text-accent-main">
                  {cert.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}