import Section from "./Section";
import GlassCard from "./GlassCard";
import MotionIn from "./MotionIn";

const principles = [
  {
    title: "Retrieval before reasoning",
    body: "Entitlements-aware retrieval with citations and confidence signals; generate only from evidence.",
  },
  {
    title: "Memory with intent",
    body: "Separate short-term task state from long-term knowledge. Both need expiry + governance.",
  },
  {
    title: "Evaluation as a product feature",
    body: "Rubrics, regression suites, drift monitoring. If you can’t measure quality, you can’t scale it.",
  },
  {
    title: "Guardrails are layered",
    body: "Schema enforcement, tool constraints, policy checks, and safe fallbacks—not a single ‘safety prompt’.",
  },
  {
    title: "Observability is non-negotiable",
    body: "Trace inputs, retrieval, tool calls, latency, cost, and failure reasons for every run.",
  },
  {
    title: "Design for failure",
    body: "Retries, idempotency, partial progress, timeouts, and graceful degradation are first-class.",
  },
];

export default function ArchitecturePlaybook() {
  return (
    <MotionIn>
      <Section
        id="architecture"
        title="How I Design AI Systems"
        subtitle="My default architecture principles for production RAG, agentic workflows, and LLM platforms."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((p, idx) => (
            <GlassCard
              key={p.title}
              tone={idx % 3 === 0 ? "indigo" : idx % 3 === 1 ? "sky" : "teal"}
            >
              <h3 className="font-semibold tracking-tight text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{p.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </MotionIn>
  );
}