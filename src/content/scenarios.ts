export const scenariosSection = {
  index: "06",
  eyebrow: "Target industries & practical use cases",
  title: "Pragmatic operational scenarios",
  lead: "Concrete engineering blueprints showing how our capabilities remove high-friction bottlenecks across key verticals.",
} as const;

export const scenarios = [
  {
    industry: "Logistics & supply chain",
    title: "Integrated dispatch console and offline driver app",
    body: "A dispatch web console paired with an offline-capable driver app, connected to legacy inventory databases through secure REST APIs for real-time route tracking and automated proof of delivery.",
    stack: ["React", "Flutter", "SQLite Sync", "Node.js"],
    outcome: "Zero lost delivery receipts",
  },
  {
    industry: "Healthcare & clinic operations",
    title: "Encrypted patient intake and tele-consultation",
    body: "A secure browser-based patient intake, scheduling and tele-consultation platform with strict role-based access control and encrypted relational databases to protect clinical data.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "WebRTC"],
    outcome: "End-to-end privacy governance",
  },
  {
    industry: "Financial services & NBFCs",
    title: "Digital KYC onboarding and credit rule workflows",
    body: "An automated onboarding and loan verification workflow that connects customer apps to national identity APIs, document OCR and automated credit scoring rules.",
    stack: ["Java Spring Boot", "Kafka", "Kong API", "React"],
    outcome: "Audit-ready underwriting",
  },
  {
    industry: "B2B SaaS & ISVs",
    title: "Single-tenant to multi-tenant cloud re-architecture",
    body: "Legacy single-tenant applications re-architected into scalable multi-tenant platforms using containerised microservices, tenant-isolated schemas and automated CI/CD pipelines.",
    stack: ["Go", "Docker", "Kubernetes", "Terraform"],
    outcome: "Significant cloud FinOps savings",
  },
] as const;
