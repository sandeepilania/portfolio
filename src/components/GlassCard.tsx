"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  tone = "indigo",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "indigo" | "teal" | "sky";
}) {
  const toneMap: Record<string, string> = {
    indigo: "from-indigo-400/25 via-sky-400/20 to-cyan-400/20",
    teal: "from-teal-400/25 via-cyan-400/20 to-sky-400/20",
    sky: "from-sky-400/25 via-cyan-400/18 to-indigo-400/18",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn("group relative rounded-2xl p-[1px]", className)}
    >
      {/* gradient border */}
      <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-r", toneMap[tone])} />

      {/* soft glow */}
      <div
        className={cn(
          "absolute -inset-2 rounded-2xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100",
          "bg-gradient-to-r",
          toneMap[tone]
        )}
      />

      {/* inner */}
      <div className="relative rounded-2xl bg-white/75 backdrop-blur-xl border border-white/70 p-6 shadow-sm shadow-slate-900/5">
        {children}
      </div>
    </motion.div>
  );
}