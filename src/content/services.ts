export type IconName = "code" | "mobile" | "design" | "quality" | "cloud" | "data";

export interface ServicePractice {
  id: string;
  short: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: IconName;
  covers: string;
  deliverables: string[];
  stack: string[];
  value: string;
}

export const servicesSection = {
  index: "04",
  eyebrow: "Core service portfolio",
  title: "Full-cycle engineering practices",
  lead: "Select a practice to see its technical scope, recommended production stack and direct business value, or switch to the complete capability matrix.",
} as const;

export const services: ServicePractice[] = [
  {
    id: "01",
    short: "Web Engineering",
    title: "Digital Product & Custom Web Engineering",
    subtitle: "Practice 01 — Full-stack applications & microservices",
    summary: "SPAs • Microservices • Legacy modernisation",
    icon: "code",
    covers:
      "Enterprise web applications, customer portals, high-concurrency backend microservices and phased legacy modernisation without operational disruption.",
    deliverables: [
      "Modern single-page and server-rendered web portals",
      "REST and GraphQL microservices with strict OpenAPI 3.1 contracts",
      "Legacy codebases refactored into modular, containerised services",
      "Multi-tenant SaaS architecture with isolated database schemas",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Python (FastAPI / Django)", "Go", "Java (Spring Boot)", "PostgreSQL", "Redis"],
    value:
      "Faster time to market, fewer manual spreadsheet bottlenecks and clean, maintainable software your internal team can own.",
  },
  {
    id: "02",
    short: "Mobile Apps",
    title: "Mobile Application Engineering (iOS & Android)",
    subtitle: "Practice 02 — Native & cross-platform mobility",
    summary: "iOS & Android • Flutter • Offline-first sync",
    icon: "mobile",
    covers:
      "High-performance iOS and Android applications engineered with offline-first local storage, biometric hardware security and smooth 60fps interfaces.",
    deliverables: [
      "Cross-platform iOS and Android apps from one maintainable codebase",
      "Offline-first SQLite and WatermelonDB storage with background sync",
      "Biometric security (Face ID / Touch ID) and hardware keystore encryption",
      "Automated Fastlane CI/CD pipelines for App Store and Google Play releases",
    ],
    stack: ["Flutter", "React Native", "iOS Native", "Android Native", "SQLite", "Firebase", "Fastlane", "GraphQL"],
    value:
      "Reliable mobile experiences for field teams and customers even in zero-connectivity zones, with dual-platform build costs cut substantially.",
  },
  {
    id: "03",
    short: "UI/UX Design",
    title: "Experience Design & Interface Architecture (UI/UX)",
    subtitle: "Practice 03 — Design systems & rapid prototyping",
    summary: "Wireframes • Clickable prototypes • Design systems",
    icon: "design",
    covers:
      "User research, workflow journey mapping, low-friction wireframing, clickable high-fidelity prototypes and tokenised component design systems.",
    deliverables: [
      "“See it before you build it” interactive Figma prototypes in ten business days",
      "Tokenised multi-brand component libraries documented in Storybook",
      "Enterprise dashboard and workflow simplification audits",
      "WCAG AA accessibility and mobile-first responsive verification",
    ],
    stack: ["Figma", "Adobe XD", "Storybook", "Tailwind CSS", "Design Tokens", "WCAG Accessibility"],
    value:
      "Fewer operator errors, faster user onboarding and approved interfaces that translate directly into clean frontend code without rework.",
  },
  {
    id: "04",
    short: "Quality Engineering",
    title: "Quality Engineering & Continuous Assurance (QA)",
    subtitle: "Practice 04 — Shift-left automated verification",
    summary: "Playwright E2E • API validation • k6 load tests",
    icon: "quality",
    covers:
      "Automated end-to-end browser regression, API contract validation, high-concurrency load testing and mandatory CI/CD pull-request quality gates.",
    deliverables: [
      "Headless browser end-to-end regression suites on every pull request",
      "Automated API payload and backward-compatibility contract checks",
      "High-load stress benchmarking to pinpoint database bottlenecks before launch",
      "Static code analysis and automated DevSecOps vulnerability scanning",
    ],
    stack: ["Playwright", "Cypress", "Postman", "k6 Load Testing", "Jest", "Pytest", "SonarQube"],
    value:
      "Production crashes eliminated, release verification compressed from weeks to hours and platform integrity protected.",
  },
  {
    id: "05",
    short: "Cloud & DevOps",
    title: "Cloud Architecture, Platform Engineering & DevOps",
    subtitle: "Practice 05 — Immutable infrastructure & FinOps",
    summary: "AWS / Azure / GCP • Terraform IaC • Kubernetes",
    icon: "cloud",
    covers:
      "Cloud migrations across AWS, Azure and GCP, reproducible Infrastructure as Code, Kubernetes orchestration and cloud cost governance.",
    deliverables: [
      "Zero-downtime cloud migrations and multi-AZ high-availability topologies",
      "Version-controlled Infrastructure as Code for one-click environment provisioning",
      "Docker containerisation and auto-scaling Kubernetes (EKS / GKE / AKS) clusters",
      "Prometheus and Grafana observability with FinOps spend optimisation",
    ],
    stack: ["AWS", "Google Cloud", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
    value:
      "99.9%+ availability, automated zero-downtime deployments and no runaway cloud bills.",
  },
  {
    id: "06",
    short: "Data, AI & APIs",
    title: "Data Systems, Applied AI & Enterprise APIs",
    subtitle: "Practice 06 — ETL pipelines, private RAG & integration",
    summary: "ETL pipelines • Enterprise RAG • ERP/CRM gateways",
    icon: "data",
    covers:
      "Automated ETL/ELT pipelines, BI warehousing, secure retrieval-augmented generation over private knowledge and ERP/CRM middleware connectors.",
    deliverables: [
      "ETL/ELT pipelines that consolidate siloed operational data into clean warehouses",
      "Private enterprise AI and RAG search on pgvector with role-based guardrails",
      "Executive Power BI and custom real-time operational dashboards",
      "Secure REST/GraphQL gateways and event-driven Kafka/RabbitMQ ERP connectors",
    ],
    stack: ["Python", "SQL", "dbt", "Snowflake", "BigQuery", "Power BI", "LangChain", "pgvector", "Kafka", "Kong API Gateway"],
    value:
      "Manual departmental reporting replaced with real-time analytics, disconnected ERP/CRM systems joined up and private data queried safely.",
  },
];
