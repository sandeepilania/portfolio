export type TimelineItem = {
  time: string;
  title: string;
  detail: string;
  focus?: string[];
  growth?: string;
  learning?: string;
};

export const professionalTimeline: TimelineItem[] = [
  {
    time: "2025 – Present",
    title: "Senior Data Scientist — GenAI & Agentic Systems (LexisNexis)",
    detail:
      "Leading engineering-driven development of production GenAI platforms and agentic workflows for enterprise legal and knowledge applications.",
    focus: [
      "Agentic workflows and long-running orchestration (event-driven patterns)",
      "Memory-backed agent state for multi-step reasoning",
      "LLM evaluation frameworks and production quality monitoring",
      "Architecture patterns for reliable GenAI delivery",
    ],
    growth:
      "Shifted from NLP platform ownership to GenAI platform architecture and reliability leadership.",
    learning:
      "In GenAI systems, evaluation and reliability controls matter as much as model capability.",
  },
  {
  time: "2021 – 2024",
  title:
    "Data Scientist I → II → III — Enterprise NLP & Data Platforms (LexisNexis)",
  detail:
    "Designed and operated large-scale NLP and data platform systems transforming unstructured and third-party data into structured intelligence used across multiple products.",
  focus: [
    "Built secure PII ingestion pipeline processing 100M+ third-party records using AWS, Databricks, and Unity Catalog with normalization and encryption workflows",
    "Designed Solr schema and search indexing strategy enabling efficient application-level retrieval and access",
    "Biography extraction platform (20M+ docs) using Spark pipelines and transformer-powered NLP microservices",
    "Negative news attribution linking allegation spans to correct entities using SpanCategorizer + dependency parsing",
    "Job title canonicalization at 27M+ scale using DistilBERT classification with metadata guardrails",
    "Entity linking pipeline mapping donor and people records via retrieval + ranking architecture on Databricks",
    "Production evaluation pipelines preventing quality regressions across NLP workflows",
  ],
  growth:
    "Expanded from model development into end-to-end platform ownership spanning data ingestion, search infrastructure, NLP pipelines, and evaluation.",
  learning:
    "Reliable AI systems depend on strong data foundations — ingestion, normalization, and search architecture drive downstream model success.",
},
{
  time: "2018 – 2020",
  title: "Software Engineer III — Platform & Services (LexisNexis)",
  detail:
    "Built backend platform services and early ML infrastructure that later enabled large-scale NLP systems.",
  focus: [
    "Kickstarted CI/CD migration for REST microservices with automated build, test, and SonarQube quality gates",
    "Designed and deployed a microservice for Unique Stamper generation used across 20M+ news content",
    "Built Scala-based DAPR annotation tooling enabling SMEs to annotate and evaluate organization and people enrichment quality",
    "Migrated services to cloud infrastructure improving deployment reliability and release velocity",
  ],
  growth:
    "Transitioned from application engineering into ML platform and data workflow ownership.",
  learning:
    "Reliable ML systems start with strong engineering foundations — CI/CD, annotation tooling, and data pipelines.",
},
  {
    time: "May 2017 – Aug 2017",
    title: "Software Engineer Intern — LexisNexis",
    detail:
      "Worked on named entity recognition pipelines and internal tooling supporting legal data workflows.",
    focus: [
      "NER tooling on large legal corpora",
      "Early ML pipeline experience",
      "First exposure to production data scale challenges",
    ],
    growth:
      "Sparked transition from software engineering toward applied ML and NLP.",
    learning:
      "Real datasets introduce complexity far beyond model design.",
  },
  {
    time: "2012 – 2016",
    title: "Senior Software Engineer — Bank of America",
    detail:
      "Built enterprise backend applications and operational dashboards supporting large-scale banking systems.",
    focus: [
      "Application monitoring portal covering 400+ applications",
      "Service operations automation tools",
      "Backend engineering with .NET, C#, JavaScript",
    ],
    growth:
      "Established strong engineering discipline around reliability, maintainability, and operational thinking.",
    learning:
      "Operational visibility is critical for any production system — a lesson that later shaped ML observability work.",
  },
];

export const educationTimeline = [
  {
    time: "2016 – 2018",
    title: "MS Computer Science — North Carolina State University",
    detail:
      "Advanced training in distributed systems, data processing, and applied machine learning.",
    focus: [
      "Spatio-temporal analytics and computing lab research",
      "Applied ML foundations",
      "Systems thinking for scalable data processing",
    ],
    learning:
      "Research and systems thinking together enable scalable applied AI.",
  },
  {
    time: "2008 – 2012",
    title: "B.Tech Computer Science — Vellore Institute of Technology",
    detail:
      "Built strong computer science fundamentals across algorithms, software engineering, and system design.",
    focus: [
      "Core CS foundations",
      "Software engineering fundamentals",
      "Early exposure to ML concepts",
    ],
    learning:
      "Strong fundamentals compound throughout a technical career.",
  },
];