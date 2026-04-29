"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Download,
  BarChart3,
  Database,
  LineChart,
  Sparkles,
  Activity,
} from "lucide-react";

const techTags = ["SQL", "Python", "Power BI", "Django", "React", "SHAP"];

const skillBars = [
  { label: "SQL", value: 85 },
  { label: "Python", value: 80 },
  { label: "Power BI", value: 78 },
  { label: "Cleaning", value: 88 },
  { label: "ML", value: 65 },
  { label: "Bioinfo", value: 55 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[88vh] items-center gap-12 overflow-hidden pt-12 md:grid-cols-2 md:pt-20"
    >
      <div className="pointer-events-none absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-accent-main/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[-120px] h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-text-secondary shadow-sm backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
          </span>
          Open to Data Analyst Roles
        </motion.div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent-main">Hi, I’m</p>

            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Atriya Sivakumar
                <motion.span
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                }}
                className="inline-block origin-bottom-right"
                >
                👋
                </motion.span>
            </h2>
            </div>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            Data analyst turning{" "}
            <span className="relative inline-block text-accent-main">
              messy data
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent-main/15" />
            </span>{" "}
            into clear decisions.
          </h1>

          <p className="max-w-xl text-base leading-8 text-text-secondary md:text-lg">
            I build dashboards, clean data workflows, and analytical reports
            using SQL, Python, Power BI, and modern web tools — with growing
            interest in AI/ML and bioinformatics.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap gap-3 text-sm text-text-secondary"
        >
          {techTags.map((item) => (
            <motion.span
              key={item}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-full border border-border bg-surface/80 px-4 py-2 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-main px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)]"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />
            <span className="relative z-10">View My Work</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="/cv.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main hover:shadow-md"
          >
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent-main/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/90 p-5 shadow-2xl backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-main/40 to-transparent" />

            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-accent-main" />
                  <p className="text-sm font-semibold text-text-primary">
                    Portfolio Snapshot
                  </p>
                </div>
                <p className="mt-1 text-xs text-text-secondary">
                  Data • Dashboards • ML • Bioinformatics
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                Live
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Metric
                icon={<BarChart3 size={16} />}
                label="Projects"
                value={2}
                suffix="+"
              />
              <Metric
                icon={<Database size={16} />}
                label="Domains"
                value={3}
              />
              <Metric
                icon={<LineChart size={16} />}
                label="Tools"
                value={6}
                suffix="+"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Current Skill Focus
                  </p>
                  <p className="text-xs text-text-secondary">
                    Practical exposure & confidence
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-accent-secondary">
                  <Activity size={14} />
                  Growing
                </div>
              </div>

              <div className="mt-4 flex h-32 items-end gap-3">
                {skillBars.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="group flex h-full w-full flex-col items-center justify-end gap-2"
                  >
                    <span className="text-[10px] font-medium text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {skill.value}%
                    </span>

                    <div className="relative h-28 w-full">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${skill.value}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.45 + index * 0.08,
                          ease: "easeOut",
                        }}
                        className="absolute bottom-0 left-0 w-full rounded-t-lg bg-accent-main/75 transition-all duration-300 group-hover:bg-accent-main"
                      />
                    </div>

                    <span className="text-[10px] text-text-secondary">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <FocusCard title="Primary Focus" value="Data Analytics" />
              <FocusCard title="Exploring" value="AI/ML & Bioinformatics" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
  suffix = "",
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, count, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30"
    >
      <div className="mb-3 text-accent-main">{icon}</div>
      <p className="text-xl font-bold text-text-primary">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="text-xs text-text-secondary">{label}</p>
    </div>
  );
}

function FocusCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30">
      <p className="text-xs text-text-secondary">{title}</p>
      <p className="mt-1 text-sm font-semibold text-text-primary">{value}</p>
    </div>
  );
}