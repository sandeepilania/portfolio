import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-14">
      <p className="text-sm font-medium text-indigo-600">
        Senior ML Engineer • Production LLM Systems • Agentic Workflows
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        I build AI systems that ship: retrieval, memory, evaluation, and observability — not just prompts.
      </h1>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600">
        I design and operate production-grade NLP + LLM platforms for large-scale enterprise workflows,
        with measurable quality gates and architecture that scales.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800"
        >
          View selected work <ArrowRight size={16} />
        </a>

        {/* Replace these with your real links */}
        <a
          href="https://github.com/"
          className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}