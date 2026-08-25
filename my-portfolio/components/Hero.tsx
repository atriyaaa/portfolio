"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Download,
  BarChart3,
  Code2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const techTags = [
  "SQL",
  "Excel",
  "Python",
  "Tableau",
  "Django",
  "React",
  "Cyber GRC",
];

const focusAreas = [
  {
    icon: <BarChart3 size={18} />,
    title: "Data & BI",
    description: "SQL • Excel • Dashboards • Analytics",
  },
  {
    icon: <Code2 size={18} />,
    title: "Technology",
    description: "Python • Django • React • Git",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Cyber & GRC",
    description: "Risk • Compliance • Audit • Controls",
  },
];

export default function Hero() {
  const [showCvModal, setShowCvModal] = useState(false);

  return (
    <section
      id="home"
      className="relative grid min-h-[88vh] items-center gap-12 overflow-hidden pt-12 md:grid-cols-2 md:pt-20"
    >
      <div className="pointer-events-none absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-accent-main/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[-120px] h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl" />

      {/* LEFT SIDE */}
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

          Open to Data, Technology & Cyber Opportunities
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
            Computer Science graduate building{" "}
            <span className="relative inline-block text-accent-main">
              practical solutions
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent-main/15" />
            </span>{" "}
            with data and technology.
          </h1>

          <p className="max-w-xl text-base leading-8 text-text-secondary md:text-lg">
            I work across data analytics, software development and operational
            compliance — combining technical problem-solving with real-world
            business experience across Data & BI, Technology and Cyber/GRC.
          </p>
        </div>

        {/* TECH TAGS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
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

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent-main px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)]"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />

            <span className="relative z-10">Explore My Work</span>

            <ArrowRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            onClick={() => setShowCvModal(true)}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main hover:shadow-md"
          >
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />

            View CVs
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-accent-main/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/90 p-5 shadow-2xl backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-main/40 to-transparent" />

            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-accent-main" />

                  <p className="text-sm font-semibold text-text-primary">
                    Portfolio Snapshot
                  </p>
                </div>

                <p className="mt-1 text-xs text-text-secondary">
                  Data • Technology • Cybersecurity
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                Building
              </div>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-3">
              <Metric
                icon={<BarChart3 size={16} />}
                label="Projects"
                value={2}
                suffix="+"
              />

              <Metric
                icon={<Code2 size={16} />}
                label="Career Tracks"
                value={3}
              />

              <Metric
                icon={<ShieldCheck size={16} />}
                label="Core Areas"
                value={3}
              />
            </div>

            {/* FOCUS AREAS */}
            <div className="mt-6 rounded-2xl border border-border bg-background/80 p-4">
              <div className="mb-4">
                <p className="text-sm font-medium text-text-primary">
                  Areas of Focus
                </p>

                <p className="text-xs text-text-secondary">
                  Building skills and experience across three complementary
                  technology paths
                </p>
              </div>

              <div className="space-y-3">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.45 + index * 0.1,
                    }}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30 hover:shadow-sm"
                  >
                    <div className="rounded-lg bg-accent-main/10 p-2 text-accent-main">
                      {area.icon}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {area.title}
                      </p>

                      <p className="mt-1 text-xs text-text-secondary">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CURRENT DIRECTION */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <FocusCard
                title="Background"
                value="BSc Computer Science"
              />

              <FocusCard
                title="Current Goal"
                value="Graduate Technology Roles"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CV MODAL */}
      {showCvModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setShowCvModal(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-2xl"
          >
            {/* CLOSE BUTTON */}
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
                Which version would you like?
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Select the CV most relevant to the role or area you're
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
  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

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
      <div className="mb-3 text-accent-main">
        {icon}
      </div>

      <p className="text-xl font-bold text-text-primary">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>

      <p className="text-xs text-text-secondary">
        {label}
      </p>
    </div>
  );
}

function FocusCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30">
      <p className="text-xs text-text-secondary">
        {title}
      </p>

      <p className="mt-1 text-sm font-semibold text-text-primary">
        {value}
      </p>
    </div>
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