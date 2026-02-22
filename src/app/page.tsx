import Container from "@/components/Container";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import MotionIn from "@/components/MotionIn";
import type { PillarKey } from "@/content/work";

const pillars: Array<{
  title: string;
  tagline: string;
  tone: "indigo" | "teal" | "sky";
  href: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  filterKey?: PillarKey;
}> = [
  {
    title: "Agentic AI & Orchestration",
    tagline:
      "Multi-step LLM workflows with coordinator + specialist agents, memory-backed state, and reliability-oriented outputs.",
    tone: "indigo",
    filterKey: "agentic",
    href: "/work?pillar=agentic",
    metrics: [
      { label: "Workflow", value: "Multi-step reasoning" },
      { label: "Reliability", value: "Schema-first outputs" },
      { label: "Ops", value: "Long-running tasks" },
    ],
    stack: ["LLM", "Agents", "Memory", "SNS/SQS", "FastAPI", "Quality gates"],
  },
  {
    title: "Retrieval, Ranking & Entity Resolution",
    tagline:
      "High-recall candidate generation + precision ranking with confidence tiers and safe abstention for ambiguity.",
    tone: "teal",
    filterKey: "retrieval",
    href: "/work?pillar=retrieval",
    metrics: [
      { label: "Pattern", value: "Blocking + reranking" },
      { label: "Safety", value: "Confidence tiers" },
      { label: "Focus", value: "Search relevance" },
    ],
    stack: ["Retrieval", "Ranking", "Entity linking", "Embeddings", "Solr", "Spark"],
  },
  {
    title: "NLP Platforms at Scale",
    tagline:
      "Production NLP across classification, extraction, attribution, and knowledge generation on large corpora.",
    tone: "sky",
    filterKey: "nlp",
    href: "/work?pillar=nlp",
    metrics: [
      { label: "Scale", value: "10M+ documents" },
      { label: "Pipelines", value: "Distributed Spark" },
      { label: "NLP", value: "Transformers + spaCy" },
    ],
    stack: ["Spark", "Transformers", "spaCy", "NLP", "AWS", "Microservices"],
  },
  {
    title: "LLM Evaluation & Quality Monitoring",
    tagline:
      "Metrics-first evaluation pipelines that catch regressions and improve reliability using production sampling.",
    tone: "indigo",
    filterKey: "platform",
    href: "/work?pillar=platform",
    metrics: [
      { label: "Cadence", value: "Safer iteration" },
      { label: "Coverage", value: "Prod sampling" },
      { label: "Observability", value: "Dashboards + alerts" },
    ],
    stack: ["LLM-as-Judge", "Rubrics", "Dash", "CI gates", "Metrics", "AWS"],
  },
  {
    title: "Core Engineering for Production AI",
    tagline:
      "Engineering-led delivery: APIs, distributed jobs, event-driven workflows, and production observability.",
    tone: "teal",
    href: "/architecture",
    metrics: [
      { label: "Runtime", value: "Services + batch" },
      { label: "Architecture", value: "Event-driven" },
      { label: "Quality", value: "Reliability controls" },
    ],
    stack: ["Python", "FastAPI", "AWS", "Observability", "Design patterns", "Operations"],
  },
];

export default function HomePage() {
  return (
    <Container>
      <MotionIn>
        <section className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Senior ML Engineer • Production GenAI Platforms • Agentic LLM Systems • Evaluation & Reliability
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              I build production AI systems that ship
            </span>{" "}
            <span className="text-zinc-900">
              : agentic workflows, memory, evaluation, and observability — not just prompts.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base text-zinc-700">
            With a foundation in software engineering and deep experience building enterprise NLP systems at scale, I now
            design production GenAI platforms. My focus is agentic LLM workflows — orchestration, memory, and evaluation —
            that turn emerging model capabilities into reliable, production-ready AI systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-700 to-sky-600 hover:opacity-95 transition shadow-md shadow-indigo-500/15"
            >
              View work
            </Link>

            <Link
              href="/architecture"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-900 border border-zinc-200/70 bg-white/70 hover:bg-white transition backdrop-blur"
            >
              Architecture playbook
            </Link>
          </div>
        </section>
      </MotionIn>

      {/* PILLARS */}
      <section className="py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">What I build</h2>
            <p className="mt-2 text-zinc-700">My core focus areas in production GenAI and NLP engineering.</p>
          </div>

          <Link href="/work" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            Explore details →
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <Link key={p.title} href={p.href} className="block">
              <GlassCard tone={p.tone}>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-zinc-700">{p.tagline}</p>
                  </div>

                  <span className="rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs text-zinc-600 backdrop-blur">
                    Focus
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
                  {p.stack.slice(0, 6).map((s) => (
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

      {/* EXPLORE */}
      <section className="py-12">
        <div className="grid gap-5 md:grid-cols-3">
          <Link href="/work" className="block">
            <GlassCard tone="indigo">
              <h3 className="text-lg font-semibold text-zinc-900">Work</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Case studies with architecture, implementation details, and impact metrics.
              </p>
              <div className="mt-4 text-sm font-semibold text-indigo-700">Explore →</div>
            </GlassCard>
          </Link>

          <Link href="/architecture" className="block">
            <GlassCard tone="sky">
              <h3 className="text-lg font-semibold text-zinc-900">Architecture</h3>
              <p className="mt-2 text-sm text-zinc-700">
                My design playbook for production agentic workflows, memory, evaluation, and observability.
              </p>
              <div className="mt-4 text-sm font-semibold text-sky-700">Explore →</div>
            </GlassCard>
          </Link>

          <Link href="/journey" className="block">
            <GlassCard tone="teal">
              <h3 className="text-lg font-semibold text-zinc-900">Journey</h3>
              <p className="mt-2 text-sm text-zinc-700">Timeline of roles and what I shipped at each stage.</p>
              <div className="mt-4 text-sm font-semibold text-teal-700">Explore →</div>
            </GlassCard>
          </Link>
        </div>
      </section>
    </Container>
  );
}