import Container from "@/components/Container";
import Link from "next/link";
import { work } from "@/content/work";
import GlassCard from "@/components/GlassCard";
import MotionIn from "@/components/MotionIn";

export default function HomePage() {
  const featured = work.slice(0, 2);

  return (
    <Container>
      {/* ================= HERO ================= */}
      <MotionIn>
        <section className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Senior ML Engineer • Production LLM Systems • Agentic Workflows
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              I build AI systems that ship
            </span>
            <span className="text-zinc-900">
              : retrieval, memory, evaluation, and observability — not just prompts.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base text-zinc-700">
            I design and operate production-grade NLP + LLM platforms for enterprise workflows,
            focusing on measurable quality gates and architecture that scales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white
                         bg-gradient-to-r from-indigo-700 to-sky-600
                         hover:opacity-95 transition shadow-md shadow-indigo-500/15"
            >
              Explore my work
            </Link>

            <Link
              href="/architecture"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-900
                         border border-zinc-200/70 bg-white/70 hover:bg-white
                         transition backdrop-blur"
            >
              My architecture playbook
            </Link>
          </div>
        </section>
      </MotionIn>

      {/* ================= FEATURED ================= */}
      <section className="py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-zinc-700">
              Selected projects with architecture, implementation details, and measurable impact.
            </p>
          </div>

          <Link href="/work" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            View all →
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {featured.map((p, idx) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="block">
              <GlassCard tone={idx % 2 === 0 ? "indigo" : "teal"}>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700">{p.tagline}</p>
                  </div>

                  <span className="rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs text-zinc-600 backdrop-blur">
                    Case study
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

      {/* ================= EXPLORE ================= */}
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
                My design playbook for production RAG, memory, evaluation, and observability.
              </p>
              <div className="mt-4 text-sm font-semibold text-sky-700">Explore →</div>
            </GlassCard>
          </Link>

          <Link href="/journey" className="block">
            <GlassCard tone="teal">
              <h3 className="text-lg font-semibold text-zinc-900">Journey</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Timeline of roles and what I shipped at each stage.
              </p>
              <div className="mt-4 text-sm font-semibold text-teal-700">Explore →</div>
            </GlassCard>
          </Link>
        </div>
      </section>
    </Container>
  );
}