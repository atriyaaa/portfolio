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

const filters = ["All", "Data & AI", "Technology"];

const projects = [
  {
    title: "CancerXAI",
    category: "Data & AI",
    categories: ["Data & AI", "Technology"],
    icon: <Brain size={18} />,
    eyebrow: "Machine Learning • Explainable AI • Full Stack",
    description:
      "A full-stack machine learning application that predicts cancer subtypes from gene-expression data and explains model predictions using SHAP.",
    problem:
      "Gene-expression datasets contain extremely high-dimensional information, making cancer subtype classification computationally challenging and difficult for users to interpret.",
    approach:
      "Processed more than 100,000 gene-expression features and compared SVM, Random Forest, and Neural Network models. PCA was applied to reduce dimensionality, while SHAP was integrated to explain influential features behind predictions. The trained pipeline was integrated into a Django and React web application.",
    impact:
      "Improved classification accuracy from 65% to 80%, reduced feature dimensionality by approximately 95%, and delivered an explainable prediction interface for non-technical users.",
    result: "65% → 80% accuracy • 95% dimensionality reduction",
    process: [
      "Gene Expression Data",
      "Preprocessing & PCA",
      "Model Comparison",
      "SHAP & Web App",
    ],
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "PyTorch",
      "Django",
      "React",
      "SHAP",
      "PCA",
      "Git/GitHub",
    ],
    github: "https://github.com/atriyaaa/FinalYearProject",
    demo: "https://cancerxai.vercel.app",
    thumbnail: "/images/cancerxai.jpeg",
  },
  {
    title: "Echoes of Change",
    category: "Technology",
    categories: ["Technology"],
    icon: <HeartHandshake size={18} />,
    eyebrow: "Django • Web Development • Team Project",
    description:
      "A volunteer engagement platform designed to connect users with suitable community initiatives based on their interests and availability.",
    problem:
      "Volunteers can struggle to discover opportunities that match their interests, skills, and availability, while organisations need an easier way to connect with suitable participants.",
    approach:
      "Developed a Django-based web platform within a four-person team, incorporating personalised activity recommendations, participation tracking, leaderboards, and user-focused workflows.",
    impact:
      "Delivered a working platform while contributing across requirements analysis, development, testing, and collaborative software delivery.",
    result: "Full-stack team project supporting volunteer engagement",
    process: [
      "Requirements",
      "Platform Design",
      "Development",
      "Testing",
    ],
    tools: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "SQLite",
      "Git/GitHub",
    ],
    github: "https://github.com/atriyaaa/EchoesofChange",
    demo: "https://echoesofchange.onrender.com",
    thumbnail: "/images/echoesofchange.jpeg",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 py-16">
      <div className="space-y-10">
        {/* HEADER */}
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
              Projects demonstrating practical experience across data,
              machine learning, software development, and technical
              problem-solving.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-text-secondary shadow-sm backdrop-blur">
            <span className="font-semibold text-text-primary">
              {projects.length}
            </span>{" "}
            current case studies
          </div>
        </div>

        {/* FILTERS */}
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

        {/* PROJECT CARDS */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const visibleTools = project.tools.slice(0, 3);
              const remainingTools =
                project.tools.length - visibleTools.length;

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.04,
                  }}
                  className="group relative flex h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-accent-main/30 hover:shadow-2xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent-main transition-transform duration-300 group-hover:scale-x-100" />

                  <ProjectThumbnail
                    image={project.thumbnail}
                    title={project.title}
                    label={project.category}
                  />

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
                      Result: {project.result}
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

      {/* PROJECT MODAL */}
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
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 24,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-main" />

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-300 hover:rotate-90 hover:text-accent-main"
                aria-label="Close project"
              >
                <X size={18} />
              </button>

              {/* TOP */}
              <div className="grid gap-5 md:grid-cols-[1.5fr_0.8fr]">
                <ProjectThumbnail
                  image={selectedProject.thumbnail}
                  title={selectedProject.title}
                  label={selectedProject.category}
                  large
                />

                <div className="rounded-2xl border border-border bg-surface/80 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                    Project Snapshot
                  </p>

                  <div className="mt-4 space-y-4">
                    <SnapshotItem
                      label="Type"
                      value={selectedProject.category}
                    />

                    <SnapshotItem
                      label="Stack"
                      value={selectedProject.tools
                        .slice(0, 4)
                        .join(", ")}
                    />

                    <SnapshotItem
                      label="Result"
                      value={selectedProject.result}
                    />
                  </div>
                </div>
              </div>

              {/* TITLE */}
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

              {/* KEY RESULT */}
              <div className="mt-6 rounded-2xl border border-accent-main/30 bg-accent-main/5 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-main">
                  Key Result
                </p>

                <p className="mt-2 text-lg font-semibold leading-7 text-text-primary">
                  {selectedProject.result}
                </p>
              </div>

              {/* PROCESS */}
              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {selectedProject.process.map(
                  (step, index) => (
                    <div
                      key={step}
                      className="relative rounded-2xl border border-border bg-surface p-4 text-center"
                    >
                      <p className="text-xs text-text-secondary">
                        Step {index + 1}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-text-primary">
                        {step}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* CASE STUDY BLOCKS */}
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

              {/* TOOLS */}
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

              {/* LINKS */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex justify-center gap-2 overflow-hidden rounded-xl bg-accent-main px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)]"
                >
                  <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[120%]" />

                  <ExternalLink
                    size={16}
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Live Demo
                  </span>
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/40 hover:text-accent-main"
                >
                  <Code2 size={16} />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SnapshotItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-text-secondary">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold leading-6 text-text-primary">
        {value}
      </p>
    </div>
  );
}

function ProjectThumbnail({
  image,
  title,
  label,
  large = false,
}: {
  image: string;
  title: string;
  label: string;
  large?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${
        large ? "h-64" : "h-40"
      }`}
    >
      <img
        src={image}
        alt={`${title} preview`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      </div>

      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-accent-main shadow-sm backdrop-blur">
        {label}
      </span>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-sm font-semibold text-white drop-shadow">
          {title}
        </p>
      </div>
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

        <h4 className="text-sm font-semibold text-text-primary">
          {title}
        </h4>
      </div>

      <p className="text-sm leading-7 text-text-secondary">
        {text}
      </p>
    </div>
  );
}