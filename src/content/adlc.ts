export const adlcSection = {
  index: "05",
  eyebrow: "Agentic Development Lifecycle (ADLC)",
  title: "AI agents accelerate the build. Engineers stay accountable.",
  lead: "Coding agents now write a large share of production code. We run them inside the same architecture-first, test-gated process as human engineers, never around it, so speed never comes at the cost of ownership, security or maintainability.",
} as const;

export const adlcStages = [
  {
    step: "01",
    title: "Intent & context engineering",
    body: "Requirements, domain rules, schemas and coding conventions are codified into agent-readable specs: repository guides, architecture decision records and API contracts.",
    artifact: "Context pack & spec",
  },
  {
    step: "02",
    title: "Agent-assisted design",
    body: "Agents draft options, trade-offs and sequence flows. Our architects choose, challenge and record the decision before any implementation begins.",
    artifact: "Reviewed ADR & contracts",
  },
  {
    step: "03",
    title: "Supervised agentic build",
    body: "Agents implement in small, scoped pull requests under repository policies. Every change is reviewed by an engineer who understands the system.",
    artifact: "Reviewed pull requests",
  },
  {
    step: "04",
    title: "Automated verification",
    body: "Agent-generated tests run alongside deterministic CI gates: contract checks, end-to-end regression and evals for any AI-powered features.",
    artifact: "Test & eval report",
  },
  {
    step: "05",
    title: "Governed release",
    body: "Human sign-off, provenance for every commit and rollback-safe deployments. Agents prepare the release; people approve it.",
    artifact: "Release record & audit trail",
  },
  {
    step: "06",
    title: "Observe & learn",
    body: "Production telemetry flows back into the context pack. Agents triage incidents and propose fixes, and the loop starts again with better information.",
    artifact: "Telemetry-driven backlog",
  },
] as const;

export const adlcGuardrails = [
  {
    title: "Humans own the architecture",
    body: "Agents propose; engineers decide. Schema, security and acceptance criteria are never delegated to a model.",
  },
  {
    title: "Same gates for every change",
    body: "Agent-written code passes the identical review, test and CI gates as human-written code. No fast lane.",
  },
  {
    title: "Full audit trail, your repository",
    body: "Every agent action is attributable and committed to your Git history. You own the code, the context pack and the tooling.",
  },
] as const;

export const adlcOutcomes = [
  { title: "Faster first increment", body: "Working software in the first sprint, because scaffolding, tests and boilerplate no longer wait on a human calendar." },
  { title: "More tests per feature", body: "Agents make thorough test coverage cheap, so regression suites grow with every change instead of lagging behind." },
  { title: "Predictable review load", body: "Small, well-described pull requests keep senior reviewers focused on design and risk rather than typing." },
] as const;

export const adlcCta = {
  label: "Discuss an agentic delivery pilot",
  topic: "Agentic development (ADLC)",
  note: "Start with one bounded workstream and measure the difference.",
} as const;
