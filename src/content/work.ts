// @/content/work.ts

export type PillarKey = "agentic" | "retrieval" | "nlp" | "platform";

export const PILLARS: Array<{
  key: PillarKey;
  title: string;
  subtitle: string;
  tone: "indigo" | "teal";
}> = [
  {
    key: "agentic",
    title: "Agentic AI & Copilots",
    subtitle:
      "Multi-agent workflows, memory, guardrails, eval, production orchestration",
    tone: "indigo",
  },
  {
    key: "retrieval",
    title: "Retrieval, Ranking & Entity Resolution",
    subtitle: "Blocking, candidate generation, ranking, confidence tiers, search relevance",
    tone: "teal",
  },
  {
    key: "nlp",
    title: "NLP & Information Extraction at Scale",
    subtitle: "Span/NER, attribution, classification, IE pipelines, batch + service deployments",
    tone: "indigo",
  },
  {
    key: "platform",
    title: "Data Platforms & Engineering",
    subtitle: "Secure ingestion (PII), CI/CD, cloud microservices, observability, internal tooling",
    tone: "teal",
  },
];

export type WorkMetric = { label: string; value: string };

export type WorkExample = {
  title?: string;
  input: string;
  output: string;
  notes?: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  tagline: string;

  // Optional short summary used on cards (if you want)
  summary?: string;

  // ✅ NEW: chronology (latest first). Use YYYY-MM for easy sorting.
  date: string;

  pillars: PillarKey[];
  stack: string[];
  technologies?: string[];
  modelProject?: boolean;

  metrics: WorkMetric[];
  problem: string[];
  approach: string[];
  implementation: string[];
  impact: string[];

  // Dummy “show me” example
  example?: WorkExample;

  // Optional links (blog / repo / internal doc)
  links?: { label: string; href: string }[];
};

/**
 * NOTE ON DATES:
 * These are placeholders so chronology works now.
 * Update any `date: "YYYY-MM"` values once you verify the actual timeline.
 * Sorting works lexicographically for YYYY-MM.
 */
export const work: WorkItem[] = [
  // ---------- AGENTIC ----------
  {
    slug: "agentic-mandad-due-diligence",
    title: "Agentic M&A Due Diligence Copilot (Daylight)",
    tagline:
      "Multi-agent orchestration, memory-backed workflows, evidence-grounded memo generation with quality gates.",
    summary:
      "Coordinator + specialist agents with shared state and evidence-first generation, designed for auditability and reliability.",
    date: "2025-01",
    pillars: ["agentic", "retrieval"],
    modelProject: true,
    stack: [
      "Agent Orchestration",
      "RAG",
      "Redis",
      "DocumentDB",
      "Evaluation",
      "SNS/SQS",
      "FastAPI",
    ],
    metrics: [
      { label: "Pattern", value: "Coordinator + specialist agents" },
      { label: "Safety", value: "Evidence grounding + guardrails" },
      { label: "Ops", value: "Async orchestration + observability" },
    ],
    problem: [
      "Due diligence requires multi-step reasoning across large doc sets with auditability and safe outputs.",
      "Teams need structured outputs that are grounded in evidence and resilient to prompt/model variance.",
    ],
    approach: [
      "Coordinator agent delegates to specialist agents for checklist parsing, clause discovery, risk synthesis, and memo drafting.",
      "Shared state via memory to preserve context across long-running tasks; evidence required for claims.",
    ],
    implementation: [
      "Event-driven orchestration for long-running workflows; step-level checkpoints for replays and partial retries.",
      "Memory-backed agent state; strict JSON schemas for intermediate outputs and final memo sections.",
      "Evaluation harness + quality gates (regression sets, rubric scoring, fail-closed behaviors).",
    ],
    impact: [
      "Accelerated structured review workflows while maintaining traceability and risk controls.",
      "Improved reliability of outputs through schema-first design, guardrails, and continuous evaluation.",
    ],
    example: {
      input:
        `Checklist: "Change of Control clauses, indemnities, termination rights"\n` +
        `Docs: 1,200 PDFs`,
      output:
        `Plan: {"agents":["ChecklistParser","ClauseFinder","RiskSummarizer"],"evidence_required":true}\n` +
        `Memo: sections with citations + risk flags + confidence`,
      notes: [
        "If evidence is missing, the system abstains or flags uncertainty instead of guessing.",
      ],
    },
  },

  // ---------- RETRIEVAL / ENTITY RESOLUTION ----------
  {
    slug: "donor-people-entity-linking",
    title: "Donor → People Authority Entity Linking (iWave replacement)",
    tagline:
      "Retrieval + ranking + confidence tiers to link noisy donor names to 100M-scale people graph.",
    summary:
      "High-recall candidate generation with safe precision ranking and tiered decisions to avoid false merges.",
    date: "2024-12",
    pillars: ["retrieval"],
    modelProject: true,
    stack: [
      "Databricks",
      "Spark",
      "Delta Lake",
      "S3",
      "Python",
      "fastText-style embeddings",
      "Fuzzy matching",
    ],
    metrics: [
      { label: "Scale", value: "People Authority ~100M" },
      { label: "Quality", value: "F1 60% → 78%" },
      { label: "Design", value: "Blocking + reranking + confidence tiers" },
    ],
    problem: [
      "Donor names are noisy, ambiguous (households, trusts, orgs), and missing stable identifiers.",
      "Naive fuzzy matching creates false merges (high reputational cost).",
    ],
    approach: [
      "Bronze→Silver normalization with donor-type gating (PERSON vs ORG/TRUST).",
      "Multi-block retrieval to bound candidate sets, then feature-based ranking.",
      "Decision layer with confidence tiers + abstain on collisions.",
    ],
    implementation: [
      "Multiple blocking keys (last+initial, phonetic, prefixes) to improve recall without exploding compute.",
      "Ranking ensemble (edit distances, Jaro-Winkler, phonetic flags) + embedding cosine; load embeddings only for candidate PGUIDs via filtered join.",
      "Confidence tiers using score + uniqueness + margin; abstain on ambiguous collisions; store reason codes for auditability.",
    ],
    impact: [
      "Improved resolution quality while maintaining safety-first posture (avoid false merges).",
      "Made linking auditable via intermediate tables + reason codes + tiered decisions.",
    ],
    example: {
      title: "Mini example: retrieval → ranking → decision",
      input:
        `donor_name_raw: "Jon & Maria Smyth"\n` +
        `donor_type_gate: PERSON/HOUSEHOLD\n` +
        `candidates(after blocking): [PGUID_91("John Smith"), PGUID_22("Jon Smyth"), PGUID_77("Jon Smythe")]`,
      output:
        `top1: PGUID_22 ("Jon Smyth")\n` +
        `score: 0.93, margin(top1-top2): 0.18\n` +
        `confidence_tier: HIGH\n` +
        `reason_codes: ["BLOCK_PREFIX", "JARO_WINKLER_HIGH", "EMBEDDING_SIM_HIGH"]`,
      notes: [
        "If margin is small or the name is very common, downgrade tier or abstain to avoid false merges.",
      ],
    },
  },

  // ---------- NLP / IE ----------
  {
    slug: "job-title-canonical-role-classifier",
    title: "Job Title → Canonical Role Classification",
    tagline:
      "DistilBERT classifier mapping 27M+ noisy job titles into 25 canonical roles with governance guardrails.",
    summary:
      "Taxonomy-driven job title normalization with confidence gating and rule guardrails to prevent seniority inflation.",
    date: "2024-08",
    pillars: ["nlp"],
    modelProject: true,
    stack: [
      "Python",
      "Transformers",
      "DistilBERT",
      "Batch Inference",
      "Thresholding",
      "Guardrails",
    ],
    metrics: [
      { label: "Scale", value: "27M+ titles" },
      { label: "Taxonomy", value: "25 canonical roles" },
      { label: "Safety", value: "Seniority/modifier guardrails" },
    ],
    problem: [
      "Job titles are inconsistent and long-tail; downstream search/analytics needs stable role taxonomy.",
      "Boundary errors (e.g., seniority inflation) corrupt metadata trust.",
    ],
    approach: [
      "Rule-seeded dataset → human cleaning/validation → hard negatives for confusing near-neighbors.",
      "Confidence gating + post-prediction sanity layer for known failure modes.",
    ],
    implementation: [
      "Offline training + 27M backfill + incremental updates architecture.",
      "Guardrails for patterns like 'assistant to director' to prevent seniority inflation.",
      "Audit-friendly outputs with reason codes and safe fallbacks for low confidence.",
    ],
    impact: [
      "Improved metadata consistency for search, analytics, and downstream products.",
      "Reduced harmful misclassification by adding conservative guardrails and fallbacks.",
    ],
    example: {
      input: `title: "Assistant to Director, Operations"`,
      output:
        `model_pred: DIRECTOR (0.91)\n` +
        `guardrail_triggered: true ("assistant to")\n` +
        `final: OPERATIONS_SUPPORT (0.74)\n` +
        `reason_codes: ["SENIORITY_GUARDRAIL_TRIGGERED"]`,
    },
  },

  {
    slug: "negative-news-attribution",
    title: "Negative News Attribution",
    tagline:
      "Span-level negative event detection + dependency-based attribution to the correct entity.",
    summary:
      "Span-level adverse media extraction with attribution guardrails for multi-entity articles.",
    date: "2022-05",
    pillars: ["nlp"],
    modelProject: true,
    stack: [
      "Python",
      "spaCy",
      "SpanCategorizer",
      "Dependency Parsing",
      "Batch Processing",
      "FastAPI (service mode)",
    ],
    metrics: [
      { label: "Scale", value: "10M+ articles" },
      { label: "Quality", value: "~72% F1" },
      { label: "Output", value: "Evidence spans + confidence tiers" },
    ],
    problem: [
      "Document-level negativity isn’t enough; products need (entity, allegation_type, evidence).",
      "Multi-entity articles make proximity-based linking wrong and risky.",
    ],
    approach: [
      "Detect negative allegation/event spans (SpanCat).",
      "Attribute spans to the correct entity using dependency patterns + guardrails.",
      "Use confidence tiers and abstain behavior for ambiguity.",
    ],
    implementation: [
      "SpanCat for span detection/classification; dependency parsing to follow subject/object/possessive patterns.",
      "Decision layer: require margin between top-1 and top-2; abstain when ambiguous.",
      "Risk posture: false attribution is worse than missing; conservative thresholds and fallbacks.",
    ],
    impact: [
      "Entity-level adverse media signals with evidence spans and auditable reason codes.",
      "Scaled to 10M+ with cost/latency-friendly architecture patterns.",
    ],
    example: {
      input:
        `Text: "ACME Corp was accused of fraud. The CEO denied wrongdoing."\n` +
        `Entities: ["ACME Corp", "CEO"]`,
      output:
        `[\n` +
        `  {\n` +
        `    "entity": "ACME Corp",\n` +
        `    "label": "FRAUD",\n` +
        `    "evidence_span": "accused of fraud",\n` +
        `    "confidence_tier": "HIGH",\n` +
        `    "reason_codes": ["DEP_NSUBJ(accused→ACME Corp)"]\n` +
        `  }\n` +
        `]`,
      notes: [
        "If multiple entities score similarly, downgrade confidence or abstain.",
      ],
    },
  },

  {
    slug: "secure-pii-ingestion-platform",
    title: "Secure PII Ingestion + Normalization Platform",
    tagline:
      "100M-record secure ingestion pipeline with normalization, encryption standards, Unity Catalog governance, and Solr indexing.",
    summary:
      "Governed ingestion and indexing for large-scale third-party PII with normalization, encryption consistency, and controlled access.",
    date: "2023-09",
    pillars: ["platform"],
    modelProject: false,
    stack: [
      "AWS",
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "S3",
      "Solr",
      "Python",
      "Datalake",
    ],
    metrics: [
      { label: "Scale", value: "100M records" },
      { label: "Focus", value: "PII governance + secure handling" },
      { label: "Search", value: "Solr schema + ingestion" },
    ],
    problem: [
      "Product needed secure handling of third-party PII at very large scale.",
      "Data arrived inconsistent; required normalization/standardization under governance controls.",
    ],
    approach: [
      "Secure ingestion into lakehouse with consistent encryption + standardization.",
      "Governed access via Unity Catalog; downstream searchable index via Solr.",
    ],
    implementation: [
      "Batch retrieval + preprocessing pipelines; schema validation, normalization, and encrypted field handling.",
      "Unity Catalog policies for controlled access and governance.",
      "Solr schema designed for secure search and controlled access patterns; ingestion pipeline to support app use cases.",
    ],
    impact: [
      "Enabled product team to safely work with PII at scale under governance constraints.",
      "Improved downstream searchability and integration speed for application teams.",
    ],
    example: {
      input:
        `vendor_record: {"first":"JON","last":"SMYTH","dob_enc":"<cipher>","phone":"+1 (919) 555-0123"}`,
      output:
        `normalized: {"first":"Jon","last":"Smyth","dob_enc":"<cipher>","phone_e164":"+19195550123","pii_class":"restricted"}`,
      notes: [
        "Example shows normalization while preserving encrypted fields; access controlled via catalog policies.",
      ],
    },
  },

  {
    slug: "biography-attribute-extraction",
    title: "Executive Biography Attribute Extraction",
    tagline:
      "Spark backbone + transformer-powered NLP microservice extracting structured employment/education triples.",
    summary:
      "Hybrid batch + service architecture to extract structured employment and education attributes from large-scale bios.",
    date: "2021-04",
    pillars: ["nlp", "platform"],
    modelProject: true,
    stack: [
      "Spark",
      "FastAPI",
      "Docker",
      "AWS Auto Scaling",
      "spaCy",
      "Flair",
      "CoreNLP KBP",
      "Benepar",
    ],
    metrics: [
      { label: "Scale", value: "20M+ docs" },
      { label: "Architecture", value: "Batch backbone + online service" },
      { label: "Output", value: "Employment/Education triples + confidence" },
    ],
    problem: [
      "Downstream products need structured bio attributes (employer/title/date, school/degree/year) from unstructured bios.",
      "Must be explainable and production-stable at very large scale.",
    ],
    approach: [
      "Spark for data-scale ingestion, cleaning, corpora preparation, and orchestration.",
      "Dedicated NLP extraction microservice for inference and modular upgrades.",
    ],
    implementation: [
      "Dockerized FastAPI service with AWS Auto Scaling + ALB health checks.",
      "Hybrid IE pipeline: spaCy base + Flair NER + CoreNLP KBP + rules + constituency parsing.",
      "Confidence scoring as an API contract for downstream filtering.",
    ],
    impact: [
      "Turned bios into structured, queryable attributes for product experiences.",
      "Operationalized quality via gold sets + regression harness.",
    ],
    example: {
      input:
        `Bio: "Jane Doe is a Senior Data Scientist at LexisNexis. She earned an MS in CS from NCSU in 2018."`,
      output:
        `employment: [{"org":"LexisNexis","title":"Senior Data Scientist","tense":"current","confidence":0.91}]\n` +
        `education: [{"school":"NCSU","degree":"MS CS","year":"2018","confidence":0.88}]`,
      notes: [
        "Spark orchestrates the 20M backfill; microservice runs NLP inference.",
      ],
    },
  },

  {
    slug: "cicd-microservices-unique-stamper",
    title: "CI/CD Modernization + Unique Stamper Microservice",
    tagline:
      "Migrated REST microservices to cloud CI/CD with quality gates; built Unique Stamper API for 20M+ news items.",
    summary:
      "Modernized delivery pipelines and shipped a high-throughput stamping service used across large news content volumes.",
    date: "2019-07",
    pillars: ["platform"],
    modelProject: false,
    stack: ["CI/CD", "Cloud", "REST", "SonarQube", "Java", "Scala", "Dapr"],
    metrics: [
      { label: "Scale", value: "20M+ news items" },
      { label: "Ops", value: "On-commit build/test automation" },
      { label: "Quality", value: "SonarQube coverage + gates" },
    ],
    problem: [
      "Needed reliable delivery for microservices and a high-throughput ID/stamp generator for news content.",
      "Lacked consistent CI/CD standards, quality gates, and repeatable deployment workflows.",
    ],
    approach: [
      "Standardize CI/CD pipelines + quality gates; build a dedicated microservice for stamp generation.",
      "Improve developer velocity while increasing reliability and code quality.",
    ],
    implementation: [
      "Automated build/test on commit; introduced SonarQube quality/coverage checks.",
      "Designed, implemented, and deployed RESTful Unique Stamper generation API.",
      "Adopted Scala + Dapr service patterns for service-to-service reliability (timeouts/retries/service discovery patterns).",
    ],
    impact: [
      "Faster, safer deployments; improved code quality and operational consistency.",
      "Reliable unique stamp generation at large content scale.",
    ],
  },

  {
    slug: "boa-monitoring-ops-portal",
    title: "Application Monitoring & Service Operations Portal (Bank of America)",
    tagline:
      "C#/.NET + JS portal for monitoring 400+ apps/jobs/servers and automating ops workflows for 50+ users.",
    summary:
      "Unified operations portal with dashboards and automation to reduce overhead for a large application fleet.",
    date: "2015-06",
    pillars: ["platform"],
    modelProject: false,
    stack: ["C#", ".NET", "JavaScript", "Dashboards", "Ops Automation"],
    metrics: [
      { label: "Coverage", value: "400+ applications" },
      { label: "Users", value: "50+ ops team" },
      { label: "Features", value: "Monitoring + tasks + scheduling" },
    ],
    problem: [
      "Ops teams needed a single portal for monitoring and workflow automation across many systems.",
      "Lack of centralized visibility increased time-to-detect and manual operational work.",
    ],
    approach: [
      "Build a unified dashboard + automation portal for monitoring and operations management.",
      "Provide role-based views and operational tools for task and event workflows.",
    ],
    implementation: [
      "Dashboards for application/job/server monitoring with tailored views.",
      "Task/event management, reporting, and scheduling for service operations workflows.",
      "Integrated workflows to reduce manual steps and improve traceability.",
    ],
    impact: [
      "Reduced operational overhead and improved visibility across a large application fleet.",
      "Helped a team of 50+ monitor 400+ applications and associated jobs/servers from a single portal.",
    ],
  },
];