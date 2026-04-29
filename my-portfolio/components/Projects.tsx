"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  Brain,
  HeartHandshake,
  Sparkles,
  Code2,
  AlertCircle,
  Workflow,
  Trophy,
  Layers,
} from "lucide-react";

const filters = ["All", "Python", "Web App", "ML", "Bioinformatics"];

const projects = [
  {
    title: "CancerXAI",
    category: "Bioinformatics",
    icon: <Brain size={18} />,
    eyebrow: "Explainable AI • Biomedical Data",
    description:
      "Predicts cancer subtypes from gene expression data and explains model outputs using SHAP.",
    problem:
      "Gene expression data is high-dimensional and difficult to interpret, making it challenging to understand how predictions are made in cancer subtype classification.",
    approach:
      "Developed a Django REST API backend and React frontend, integrated a machine learning workflow for subtype prediction, and added SHAP-based explainability to make model outputs more interpretable.",
    impact:
      "Created an interactive explainable AI tool that combines prediction, interpretation, and user-friendly visualization for biomedical data.",
    result: "Prediction + explainability in one biomedical interface",
    process: ["Gene Data", "ML Model", "SHAP", "Web App"],
    tools: ["React", "Django REST API", "Python", "Machine Learning", "SHAP"],
    github: "#",
    demo: "#",
    thumbnail: "xai",
  },
  {
    title: "Echoes of Change",
    category: "Web App",
    icon: <HeartHandshake size={18} />,
    eyebrow: "Django • Social Impact Platform",
    description:
      "Connects volunteers with initiatives based on their skills, interests, and availability.",
    problem:
      "Volunteers often struggle to find meaningful initiatives that match their skills, interests, and schedule, while organizations need better ways to reach suitable participants.",
    approach:
      "Designed and developed a Django-based platform with user-focused matching logic, initiative listings, and a structure aligned with UN SDG 3 and SDG 10.",
    impact:
      "Created a community-focused platform that supports more accessible and meaningful volunteer engagement through technology.",
    result: "Improved accessibility for volunteer-opportunity matching",
    process: ["User Needs", "Matching Logic", "Initiatives", "Platform"],
    tools: ["Django", "Python", "HTML", "CSS", "SQLite"],
    github: "#",
    demo: "#",
    thumbnail: "community",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 py-16">
      <div className="space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Selected Work
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Featured Projects
            </h2>

            <p className="max-w-xl leading-7 text-text-secondary">
              Compact previews of my strongest work — open each case study for
              the full breakdown.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-text-secondary shadow-sm backdrop-blur">
            <span className="font-semibold text-text-primary">
              {projects.length}
            </span>{" "}
            case studies available
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-accent-main bg-accent-main text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)]"
                    : "border-border bg-surface text-text-secondary hover:-translate-y-[1px] hover:border-accent-main/30 hover:text-accent-main"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const visibleTools = project.tools.slice(0, 3);
              const remainingTools = project.tools.length - visibleTools.length;

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                  className="group relative flex h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-accent-main/30 hover:shadow-2xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent-main transition-transform duration-300 group-hover:scale-x-100" />

                  <ProjectThumbnail type={project.thumbnail} />

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
                          {project.eyebrow}
                        </p>

                        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                          {project.title}
                        </h3>
                      </div>

                      <span className="shrink-0 rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                        {project.category}
                      </span>
                    </div>

                    <p className="line-clamp-2 text-sm leading-6 text-text-secondary">
                      {project.description}
                    </p>

                    <p className="line-clamp-1 text-xs font-medium text-accent-secondary">
                      Solves: {project.result}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {visibleTools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary transition-all duration-300 hover:border-accent-main/30 hover:text-accent-main"
                        >
                          {tool}
                        </span>
                      ))}

                      {remainingTools > 0 && (
                        <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-accent-main">
                          +{remainingTools} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-main transition-all duration-300 group-hover:gap-3"
                  >
                    View Case Study
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-main" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-300 hover:rotate-90 hover:text-accent-main"
              >
                <X size={18} />
              </button>

              <div className="grid gap-5 md:grid-cols-[1.5fr_0.8fr]">
                <ProjectThumbnail type={selectedProject.thumbnail} large />

                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                    Project Snapshot
                  </p>

                  <div className="mt-4 space-y-4">
                    <SnapshotItem label="Type" value={selectedProject.category} />
                    <SnapshotItem
                      label="Stack"
                      value={selectedProject.tools.slice(0, 3).join(", ")}
                    />
                    <SnapshotItem label="Focus" value={selectedProject.result} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-sm font-medium text-accent-main">
                  Case Study
                </p>

                <h3 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-text-secondary">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-accent-main/30 bg-accent-main/5 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-main">
                  Key Result
                </p>
                <p className="mt-2 text-lg font-semibold leading-7 text-text-primary">
                  {selectedProject.result}
                </p>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {selectedProject.process.map((step, index) => (
                  <div
                    key={step}
                    className="relative rounded-2xl border border-border bg-surface p-4 text-center"
                  >
                    <p className="text-xs text-text-secondary">Step {index + 1}</p>
                    <p className="mt-1 text-sm font-semibold text-text-primary">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <CaseBlock
                  title="Problem"
                  text={selectedProject.problem}
                  icon={<AlertCircle size={15} />}
                />
                <CaseBlock
                  title="Approach"
                  text={selectedProject.approach}
                  icon={<Workflow size={15} />}
                />
                <CaseBlock
                  title="Impact"
                  text={selectedProject.impact}
                  icon={<Trophy size={15} />}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-main/10 text-accent-main">
                    <Layers size={15} />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Tools Used
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={selectedProject.demo}
                  className="group relative inline-flex justify-center gap-2 overflow-hidden rounded-xl bg-accent-main px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)]"
                >
                  <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />
                  <ExternalLink size={16} className="relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                </a>

                <a
                  href={selectedProject.github}
                  className="group inline-flex justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
                >
                  <Code2 size={16} />
                  GitHub
                </a>
              </div>

              {(selectedProject.github === "#" ||
                selectedProject.demo === "#") && (
                <p className="mt-3 text-xs text-text-secondary">
                  Links are placeholders while the project repository/demo is
                  being prepared.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-text-secondary">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-text-primary">
        {value}
      </p>
    </div>
  );
}

function ProjectThumbnail({
  type,
  large = false,
}: {
  type: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-background p-4 ${
        large ? "h-64" : "h-40"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-main/10 via-transparent to-accent-secondary/10" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>

          <span className="rounded-full bg-accent-main/10 px-2 py-1 text-[10px] font-medium text-accent-main">
            {type === "xai" ? "XAI Preview" : "Web App Preview"}
          </span>
        </div>

        {type === "xai" ? <XAIThumbnail /> : <CommunityThumbnail />}

        <DataPulse />
      </div>
    </div>
  );
}

function XAIThumbnail() {
  return (
    <div className="grid grid-cols-[1fr_0.8fr] gap-3">
      <div className="space-y-2">
        {[72, 58, 84, 45].map((width, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            whileInView={{ width: `${width}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="h-2.5 rounded-full bg-accent-main/70"
          />
        ))}
      </div>

      <div className="rounded-xl border border-border bg-surface/80 p-3">
        <p className="text-[10px] text-text-secondary">Subtype</p>
        <p className="mt-1 text-sm font-semibold text-text-primary">Class B</p>
        <p className="mt-2 text-[10px] text-accent-secondary">SHAP explained</p>
      </div>
    </div>
  );
}

function CommunityThumbnail() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["Skills", "Cause", "Time"].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-xl border border-border bg-surface/80 p-2"
        >
          <p className="text-[10px] text-text-secondary">{item}</p>
          <div className="mt-2 h-2 rounded-full bg-accent-main/60" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-accent-secondary/60" />
        </motion.div>
      ))}
    </div>
  );
}

function DataPulse() {
  return (
    <div className="relative mt-2 h-6 overflow-hidden rounded-xl border border-border bg-surface/70">
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent-main/30"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-secondary shadow-[0_0_12px_rgba(20,184,166,0.7)]"
        animate={{ x: ["0%", "900%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function CaseBlock({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-main/10 text-accent-main">
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
      </div>

      <p className="text-sm leading-7 text-text-secondary">{text}</p>
    </div>
  );
}