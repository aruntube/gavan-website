export const lifecycleSection = {
  index: "07",
  eyebrow: "Engineering governance",
  title: "A six-stage disciplined delivery lifecycle",
  lead: "A transparent, predictable methodology designed to eliminate scope ambiguity and production surprises.",
} as const;

export const lifecycle = [
  { step: "01", when: "Days 1–5", title: "Discovery & scope framing", body: "Reviewing technical requirements, mapping relational data schemas and setting clear, testable acceptance criteria before code begins.", artifact: "Scope blueprint & ERD" },
  { step: "02", when: "Days 6–10", title: "Solution architecture & design", body: "Data models, system sequence flows, OpenAPI contracts, wireframes and clickable Figma prototypes.", artifact: "Clickable Figma & API spec" },
  { step: "03", when: "Bi-weekly cadence", title: "Agile sprint delivery", body: "Two-week sprints with strict clean-code standards, peer pull-request review and automated daily staging builds.", artifact: "Live staging releases" },
  { step: "04", when: "Continuous CI gate", title: "Multi-layer quality assurance", body: "Automated Playwright regression suites, Postman API contract validation and k6 concurrency stress tests.", artifact: "Automated QA test report" },
  { step: "05", when: "Zero downtime", title: "Secure production deployment", body: "Blue/green releases using Terraform Infrastructure as Code, container orchestration and automated migrations.", artifact: "Production IaC & runbooks" },
  { step: "06", when: "Long-term SLA", title: "Platform evolution & support", body: "Ongoing L2/L3 maintenance, DevSecOps patching, cloud cost optimisation and feature enhancements under clear SLAs.", artifact: "Real-time telemetry & SLA" },
] as const;
