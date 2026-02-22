export type Metric = { label: string; value: string };
export type WorkItem = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;

  metrics: Metric[];
  stack: string[];

  // case-study sections
  problem: string[];
  approach: string[];
  implementation: string[];
  impact: string[];
};

export const work: WorkItem[] = [
  {
    slug: "agentic-due-diligence",
    title: "Agentic Due Diligence Platform",
    tagline: "Coordinator + specialist agents for legal risk analysis with memory and evaluation gates.",
    summary:
      "Designed an agentic workflow that parses checklists, classifies documents, extracts issues, and generates evidence-grounded memos with structured outputs and retries.",
    metrics: [
      { label: "Scale", value: "10M+ docs" },
      { label: "Manual effort", value: "↓ ~60% (est.)" },
      { label: "Quality", value: "Schema-first outputs" },
    ],
    stack: ["LLM", "RAG", "Redis", "DocumentDB", "SNS/SQS", "FastAPI"],
    problem: [
      "Due diligence requires reviewing large document sets with inconsistent risk identification.",
      "Manual workflows were slow, hard to standardize, and difficult to audit end-to-end.",
    ],
    approach: [
      "Use a coordinator agent to orchestrate specialist agents (checklist parsing, doc classification, issue analysis).",
      "Separate short-term task state from long-term memory for multi-step reasoning.",
      "Gate generation on retrieved evidence and enforce JSON schemas.",
    ],
    implementation: [
      "Event-driven orchestration (SNS → SQS) for long-running tasks and retries.",
      "Redis for short-term state; DocumentDB for long-term memory & metadata.",
      "Structured outputs + validation, with failure taxonomy for observability.",
    ],
    impact: [
      "Faster, more consistent risk identification across document sets.",
      "Improved auditability via traces, evidence references, and structured outputs.",
      "Enabled iteration via evaluation hooks and regression-style testing.",
    ],
  },
  {
    slug: "llm-evaluation-platform",
    title: "LLM Evaluation & Quality Monitoring",
    tagline: "A metrics-first evaluation pipeline that catches regressions before they ship.",
    summary:
      "Built an evaluation framework combining offline benchmarks, production sampling, rubric-based judging, and dashboards/alerts to monitor quality and drift.",
    metrics: [
      { label: "Cadence", value: "Weekly iteration" },
      { label: "Coverage", value: "Prod sampling" },
      { label: "Observability", value: "Dashboards + alerts" },
    ],
    stack: ["LLM-as-Judge", "Rubrics", "Dash", "AWS", "Data Pipelines"],
    problem: [
      "LLM changes (prompt/model/retrieval) caused silent regressions.",
      "There was no consistent way to measure quality across scenarios and users.",
    ],
    approach: [
      "Define rubrics per task (grounding, correctness, completeness, safety).",
      "Use both offline sets + production sampling to detect drift and edge cases.",
      "Make evaluation results a deploy gate in CI/CD.",
    ],
    implementation: [
      "Scorecards + breakdown by intent/topic + failure reasons.",
      "Regression suite triggered per prompt/model change.",
      "Alerting for drift and cost/latency anomalies.",
    ],
    impact: [
      "Reduced risk of silent regressions and improved release confidence.",
      "Faster iteration by making quality measurable and visible.",
      "Created shared language for quality across engineering + product.",
    ],
  },
];