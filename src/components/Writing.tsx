import Section from "./Section";
import GlassCard from "./GlassCard";
import MotionIn from "./MotionIn";

export default function Writing() {
  return (
    <MotionIn>
      <Section
        id="writing"
        title="Writing"
        subtitle="Technical writing on production GenAI systems, agentic workflows, and LLM platform design."
      >
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm text-amber-800">
          <span className="font-semibold">🚧 Work in progress</span> — Articles and case studies are currently being written. Check back soon.
        </div>

        <GlassCard tone="teal">
          <p className="text-sm text-zinc-700">
            Coming soon: 3 case studies. Add your Medium links here once published.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>How to build an LLM evaluation pipeline that actually catches regressions</li>
            <li>Memory design for agentic systems: short-term vs long-term + governance</li>
            <li>Observability for RAG/agents: traces, failure taxonomies, and cost controls</li>
          </ul>
        </GlassCard>
      </Section>
    </MotionIn>
  );
}