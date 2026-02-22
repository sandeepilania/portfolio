"use client";

import Container from "@/components/Container";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import MotionIn from "@/components/MotionIn";
import { work, PILLARS, type PillarKey } from "@/content/work";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

function isPillarKey(x: unknown): x is PillarKey {
  return x === "agentic" || x === "retrieval" || x === "nlp" || x === "platform";
}

function pillarLabel(key: PillarKey) {
  return PILLARS.find((p) => p.key === key)?.title ?? key;
}

export default function WorkPage() {
  const searchParams = useSearchParams();
  const pillar = searchParams.get("pillar");
  const activePillar: PillarKey | undefined = isPillarKey(pillar) ? pillar : undefined;

  const { items, sorted } = useMemo(() => {
    const sortedAll = [...work].sort((a, b) => b.date.localeCompare(a.date));
    const filtered = activePillar
      ? sortedAll.filter((p) => p.pillars.includes(activePillar))
      : sortedAll;

    return { items: filtered, sorted: sortedAll };
  }, [activePillar]);

  return (
    <Container>
      <MotionIn>
        <section className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Work Portfolio • Case Studies • Production Impact
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              Work
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base text-zinc-700">
            {activePillar
              ? `Showing projects for: ${pillarLabel(activePillar)}`
              : "All projects, ordered from most recent to earliest."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/architecture"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-700 to-sky-600 hover:opacity-95 transition shadow-md shadow-indigo-500/15"
            >
              Architecture playbook
            </Link>

            <Link
              href="/contact"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-900 border border-zinc-200/70 bg-white/70 hover:bg-white transition backdrop-blur"
            >
              Discuss a project
            </Link>

            {activePillar && (
              <Link
                href="/work"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-900 border border-zinc-200/70 bg-white/70 hover:bg-white transition backdrop-blur"
              >
                View all projects →
              </Link>
            )}
          </div>

          {activePillar && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
                Filtered: <span className="font-semibold">{pillarLabel(activePillar)}</span> •{" "}
                <span className="font-semibold">{items.length}</span> projects
              </span>
            </div>
          )}
        </section>
      </MotionIn>

      <section className="py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {activePillar ? pillarLabel(activePillar) : "All Projects"}
            </h2>
            <p className="mt-2 text-zinc-600">Latest first.</p>
          </div>

          <span className="text-sm text-zinc-600">
            {items.length} {activePillar ? "shown" : "total"}
          </span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {items.map((p, idx) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="block">
              <GlassCard tone={idx % 2 === 0 ? "indigo" : "teal"}>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:underline">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700">{p.tagline}</p>
                    <div className="mt-2 text-xs text-zinc-500">{p.date}</div>
                  </div>

                  <span className="rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs text-zinc-600 backdrop-blur">
                    {p.modelProject ? "Model + System" : "System"}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-zinc-200/70 bg-white/70 p-3 backdrop-blur"
                    >
                      <div className="text-xs text-zinc-600">{m.label}</div>
                      <div className="mt-1 text-sm font-semibold text-zinc-900">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-gradient-to-r from-slate-900/5 to-slate-900/0 px-3 py-1 text-xs text-zinc-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}