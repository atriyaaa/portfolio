"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Database, Sparkles, TrendingUp } from "lucide-react";

const datasets = {
  Sales: {
    records: "12K",
    metric: "+18%",
    metricLabel: "Revenue trend",
    insight: "Revenue improves when repeat customers are segmented by region.",
    bars: [42, 58, 50, 72, 66, 84],
  },
  Churn: {
    records: "8K",
    metric: "24%",
    metricLabel: "Churn risk",
    insight: "Customers with low engagement show the highest churn risk.",
    bars: [65, 48, 72, 55, 40, 30],
  },
  Healthcare: {
    records: "100K+",
    metric: "15%",
    metricLabel: "Model lift",
    insight: "Feature interpretation helps explain subtype predictions.",
    bars: [38, 52, 61, 73, 69, 88],
  },
};

export default function InteractiveDashboard() {
  const [active, setActive] = useState<keyof typeof datasets>("Sales");

  const data = useMemo(() => datasets[active], [active]);

  return (
    <section id="interactive" className="scroll-mt-28 py-16">
      <div className="space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-main">
              <Sparkles size={13} />
              Interactive Insights
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Try interacting with my work
            </h2>

            <p className="max-w-xl leading-7 text-text-secondary">
              A small dashboard-style demo showing how I think about filtering,
              metrics, trends, and insight communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {Object.keys(datasets).map((item) => {
              const isActive = active === item;

              return (
                <button
                  key={item}
                  onClick={() => setActive(item as keyof typeof datasets)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-accent-main bg-accent-main text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)]"
                      : "border-border bg-surface text-text-secondary hover:-translate-y-[1px] hover:border-accent-main/30 hover:text-accent-main"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/85 p-6 shadow-sm backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-main/40 to-transparent" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-main/10 blur-3xl" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <DashboardCard
                icon={<Database size={17} />}
                label="Dataset size"
                value={data.records}
              />

              <DashboardCard
                icon={<TrendingUp size={17} />}
                label={data.metricLabel}
                value={data.metric}
              />

              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                  Insight
                </p>
                <p className="text-sm leading-7 text-text-primary">
                  {data.insight}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/80 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {active} Trend
                  </p>
                  <p className="text-xs text-text-secondary">
                    Filtered dashboard preview
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-accent-main/10 px-3 py-1 text-xs font-medium text-accent-main">
                  <BarChart3 size={13} />
                  Live filter
                </div>
              </div>

              <div className="flex h-56 items-end gap-4">
                {data.bars.map((height, index) => (
                  <motion.div
                    key={`${active}-${index}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className="group relative flex w-full items-end justify-center rounded-t-xl bg-accent-main/75 transition-all duration-300 hover:bg-accent-main"
                  >
                    <span className="absolute -top-8 hidden rounded-md border border-border bg-surface px-2 py-1 text-[10px] text-text-secondary shadow-sm group-hover:block">
                      {height}%
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-6 gap-4 text-center text-[10px] text-text-secondary">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-main/30">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent-main">
        {icon}
      </div>

      <p className="text-xs text-text-secondary">{label}</p>
      <p className="mt-1 text-2xl font-bold text-text-primary">{value}</p>
    </div>
  );
}