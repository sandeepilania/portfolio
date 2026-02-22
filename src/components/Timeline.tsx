"use client";

import Section from "./Section";
import GlassCard from "./GlassCard";
import MotionIn from "./MotionIn";
type TimelineItem = {
  time: string;        // e.g., "2024 – Present"
  title: string;
  detail: string;
  focus?: string[];
  growth?: string;
  learning?: string;
};

export default function Timeline({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: TimelineItem[];
}) {
  return (
    <MotionIn>
      <Section id={id} title={title} subtitle={subtitle}>
        {/* Timeline rail + nodes */}
        <ol className="relative mt-8 space-y-6">
          {/* Left vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-indigo-300/70 via-sky-300/60 to-teal-300/70" />

          {items.map((t, idx) => (
            <li key={`${t.time}-${t.title}`} className="relative pl-14">
              {/* Node */}
              <span className="absolute left-5 top-6 -translate-x-1/2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-white shadow-sm ring-2 ring-indigo-500/40">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
                </span>
              </span>

              {/* Time badge */}
              <div className="mb-2">
                <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur">
                  {t.time}
                </span>
              </div>

              {/* Card */}
              <GlassCard tone={idx % 2 === 0 ? "indigo" : "sky"}>
                <div className="text-base font-semibold tracking-tight text-zinc-900">
                  {t.title}
                </div>

                <p className="mt-2 text-sm text-zinc-700">{t.detail}</p>

                {t.focus?.length ? (
                  <ul className="mt-3 space-y-1 text-sm text-zinc-700 list-disc pl-5">
                    {t.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                ) : null}

                {t.growth ? (
                  <p className="mt-3 text-sm text-zinc-700">
                    <span className="font-semibold text-zinc-900">Growth:</span>{" "}
                    {t.growth}
                  </p>
                ) : null}

                {t.learning ? (
                  <div className="mt-4 rounded-xl border border-zinc-200/70 bg-white/70 p-3 backdrop-blur">
                    <div className="text-xs font-medium text-zinc-600">
                      Key learning
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-900">
                      {t.learning}
                    </div>
                  </div>
                ) : null}
              </GlassCard>
            </li>
          ))}
        </ol>
      </Section>
    </MotionIn>
  );
}