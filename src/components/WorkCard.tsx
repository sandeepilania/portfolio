"use client";

import { motion } from "framer-motion";
import type { WorkItem } from "@/content/work";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{item.title}</h3>

          {/* use tagline instead of oneLiner */}
          <p className="mt-2 text-sm text-zinc-600">{item.tagline}</p>
        </div>

        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
          Case study
        </span>
      </div>

      {/* metrics */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {item.metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <div className="text-xs text-zinc-500">{m.label}</div>
            <div className="mt-1 text-sm font-medium">{m.value}</div>
          </div>
        ))}
      </div>

      {/* stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
            {s}
          </span>
        ))}
      </div>

      {/* short summary instead of highlights */}
      <p className="mt-5 text-sm text-zinc-700">
  {item.summary ?? item.impact?.[0] ?? item.approach?.[0] ?? ""}
</p>
    </motion.div>
  );
}