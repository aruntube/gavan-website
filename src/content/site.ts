export const site = {
  name: "Gavan Infotech",
  tagline: "Transforming your digital experience",
  headline: "Engineering precision. Digital impact.",
  url: "https://gavaninfotech.com",
  email: "contact@gavaninfotech.com",
  website: "www.gavaninfotech.com",
  hq: "India",
  hqNote: "Serving domestic and international clients",
  description:
    "Gavan Infotech is a founder-led digital product engineering partner. We design, build, modernise and scale software, cloud infrastructure and data systems for growing enterprises, startups and software vendors.",
  founder: {
    name: "ArunKumar Ganeshmoorthy",
    shortName: "Arun",
    title: "Founder & Managing Director",
    initials: "AG",
    quote:
      "I lead the firm's technical standards, architecture quality and delivery commitments with hands-on oversight. Every engagement is structured around clean schemas, verifiable test gates and full client IP ownership from day one.",
    badges: [
      { label: "Governance", value: "Hands-on architecture" },
      { label: "Security standard", value: "DevSecOps built in" },
    ],
  },
  responseTime: "within 24 business hours",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Accelerators", href: "#accelerators" },
  { label: "Project Rescue", href: "#rescue" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Capability statement & corporate profile",
  title: "Engineering precision. Digital impact.",
  lead:
    "Gavan Infotech is an agile digital product engineering partner. We help growing enterprises, SMEs and digital-first businesses design, build, modernise and scale high-performance software, cloud infrastructure and data systems.",
  competenciesLabel: "Core engineering competencies",
  competencies: [
    "Software & Web",
    "Mobile Apps",
    "UI/UX Architecture",
    "QA & Testing",
    "Cloud & DevOps",
    "Data, AI & APIs",
  ],
  primaryCta: "Book a 45-min architecture call",
  secondaryCta: "Explore services",
  stats: [
    { value: "Day 1", label: "IP ownership", note: "Zero vendor lock-in" },
    { value: "6–8 wks", label: "Production MVP", note: "Two-week agile sprints" },
    { value: "99.9%", label: "Uptime architecture", note: "Terraform IaC & CI/CD" },
  ],
  pipeline: {
    title: "Delivery engine",
    subtitle: "Every release passes four automated gates",
    checks: [
      { step: "01", label: "Schema & OpenAPI validation", status: "Passed" },
      { step: "02", label: "Shift-left Playwright E2E gate", status: "Covered" },
      { step: "03", label: "Terraform multi-AZ deployment", status: "Zero downtime" },
      { step: "04", label: "Private enterprise RAG vector sync", status: "Encrypted" },
    ],
    footer: ["Direct senior engineer access", "Sprint 0 in 10 days"],
  },
} as const;

export const overview = {
  index: "01",
  eyebrow: "Executive overview",
  title: "Direct practitioner collaboration. Zero bureaucratic layers.",
  lead:
    "Traditional IT outsourcing is slowed by heavy management layers, opaque reporting and code that accumulates technical debt. Gavan Infotech was established to give clients direct access to skilled practitioners, complete transparency and modern engineering standards.",
  purpose: {
    eyebrow: "Our purpose",
    title: "Why Gavan Infotech was established",
    paragraphs: [
      "When growing companies hire external vendors, they are often handed to non-technical coordinators while junior developers learn on their budget.",
      "We remove the middlemen. You work directly with senior architects who validate schemas, enforce automated testing and transfer the complete repository and IP to your organisation from day one.",
    ],
    tag: "Open-book Git access",
  },
  segments: [
    {
      index: "Segment 01",
      title: "Mid-market enterprises",
      body: "Businesses modernising legacy systems, automating manual workflows and migrating to the cloud without disrupting daily operations.",
      tag: "Legacy modernisation",
    },
    {
      index: "Segment 02",
      title: "Startups & scale-ups",
      body: "Fast-growing ventures that need senior engineering capacity to turn ambitious roadmaps into production-ready web and mobile platforms.",
      tag: "High-velocity MVP & scale",
    },
    {
      index: "Segment 03",
      title: "Software vendors (ISVs)",
      body: "Technology and SaaS companies that need a co-engineering partner to ship features, integrate third-party APIs and refactor single-tenant architecture.",
      tag: "Multi-tenant SaaS co-development",
    },
  ],
} as const;

export const whyUs = {
  index: "02",
  eyebrow: "The problem & our value proposition",
  title: "Why software initiatives stall, and how we engineer around it",
  lead: "We replace fragile outsourcing practices with defensive architecture, modular code and continuous verification.",
  challengesTitle: "Why traditional vendor projects struggle",
  challenges: [
    {
      title: "Transformations stall on weak foundations",
      body: "Most digital initiatives run into trouble because requirements were rushed and the architecture was never validated up front.",
    },
    {
      title: "AI pilots rarely reach production",
      body: "Enterprise AI experiments stay stuck in pilot when operational data remains fragmented, siloed and uncleaned.",
    },
    {
      title: "Junior resource bait-and-switch",
      body: "Vendors often assign unvetted junior resources to mid-market accounts, producing fragile code and slipping timelines.",
    },
  ],
  solutionTitle: "Disciplined engineering that ships",
  solutions: [
    {
      step: "01",
      title: "Architecture-first planning",
      body: "We validate relational schemas, API data flows and security requirements before application code is written.",
    },
    {
      step: "02",
      title: "Clean, modular codebases",
      body: "Maintainable, containerised applications with clean data pipelines that keep your stack AI-ready and free of vendor lock-in.",
    },
    {
      step: "03",
      title: "Shift-left quality assurance",
      body: "Automated regression and contract tests run on every pull request, so bugs are caught early rather than in production.",
    },
  ],
} as const;

export const values = {
  index: "03",
  eyebrow: "Direction & guiding principles",
  title: "Vision, mission and the values we engineer by",
  vision: {
    label: "Vision",
    title: "Architectural integrity and durable value",
    body: "To be recognised across India and international markets as an exceptional digital engineering partner, respected for architectural integrity, disciplined delivery and durable business value.",
  },
  mission: {
    label: "Mission",
    title: "Resilient products and intelligent systems",
    body: "To empower growing enterprises with resilient digital products, scalable cloud environments and intelligent data systems through collaborative, transparent and disciplined engineering.",
  },
  principles: [
    { index: "01", name: "Engineering rigour", body: "Clean architecture, defensive security and long-term maintainability." },
    { index: "02", name: "Radical transparency", body: "Direct client access to repositories, sprint boards and test metrics." },
    { index: "03", name: "Value pragmatism", body: "Proven, production-grade tools over short-lived hype." },
    { index: "04", name: "Collaborative agility", body: "Fast communication and personal accountability without bureaucratic delay." },
    { index: "05", name: "Reliability by design", body: "Automated testing, continuous integration and peer review from day one." },
  ],
} as const;

export const accelerators = {
  index: "05",
  eyebrow: "Engineering velocity",
  title: "From concept to production in weeks, not quarters",
  lead: "We remove boilerplate setup delays by combining rapid clickable prototyping with pre-engineered service modules.",
  items: [
    {
      badge: "10-day turnaround",
      title: "“See it before you build it” prototyping",
      body: "Interactive Figma prototypes and Storybook component libraries let stakeholders test user flows on screen before committing budget to backend code.",
      points: ["Fixed-scope cost clarity", "No wasted rewrite cycles", "Seamless design-to-code handoff"],
      cta: "Request prototype scope",
      topic: "Rapid prototyping",
    },
    {
      badge: "6–8 week launch",
      title: "Production MVP in six to eight weeks",
      body: "Pre-vetted architectural foundations for authentication, role-based access, billing webhooks, audit logging and CI/CD pipelines accelerate backend delivery.",
      points: ["Scoped milestones, not guesswork", "Web, iOS and Android ready", "Your Git repository from day one"],
      cta: "Launch your MVP",
      topic: "6–8 week MVP",
    },
    {
      badge: "Zero-downtime cutover",
      title: "Parallel modernisation and AI readiness",
      body: "No risky big-bang rewrites. We incrementally strangle legacy monoliths, clean operational schemas and integrate private enterprise RAG search safely.",
      points: ["Phased, rollback-safe releases", "pgvector and private LLM guardrails", "ERP, CRM and legacy wrappers"],
      cta: "Book an assessment",
      topic: "Legacy modernisation",
    },
  ],
} as const;

export const rescue = {
  eyebrow: "Special practice — stalled project recovery",
  title: "Is your current vendor missing deadlines or shipping fragile code?",
  lead:
    "We rescue stalled builds. Instead of forcing a costly rewrite, our senior architects audit your existing repository within 48 hours, isolate the critical bottlenecks, stabilise the deployment pipeline and take over sprint delivery.",
  cta: "Request a 48-hour codebase rescue audit",
  topic: "48-hour project rescue audit",
  steps: [
    { step: "Step 01", when: "48 hours", title: "Forensic repository audit", body: "Static analysis, schema lock inspection and dependency security triage." },
    { step: "Step 02", when: "Days 3–5", title: "Pipeline stabilisation", body: "Containerising broken environments and wrapping core flows in end-to-end tests." },
    { step: "Step 03", when: "Day 6 onward", title: "Go-live takeover", body: "Predictable two-week sprints to clear the remaining backlog and launch safely." },
  ],
} as const;

export const leadership = {
  index: "07",
  eyebrow: "Founder & governance",
  title: "Leadership profile",
} as const;

export const advantage = {
  index: "08",
  eyebrow: "The partnership advantage",
  title: "Why growing enterprises choose Gavan Infotech",
  items: [
    { title: "Direct senior access", body: "Talk to practising engineers, not layers of non-technical account managers." },
    { title: "Total IP transfer", body: "All source code, Figma designs and Terraform scripts belong to you from day one." },
    { title: "Open-book visibility", body: "Continuous real-time access to Git repositories, test dashboards and sprint boards." },
  ],
} as const;

export const getStarted = {
  eyebrow: "How to get started",
  title: "Three simple steps to kick off delivery",
  steps: [
    { step: "01", title: "Initial technical consultation", body: "A confidential 45-minute discussion directly with ArunKumar Ganeshmoorthy to review your project and architecture." },
    { step: "02", title: "Architecture blueprint & proposal", body: "A clear proposal covering stack recommendations, sprint milestones and transparent commercial terms." },
    { step: "03", title: "Sprint zero kickoff", body: "We configure repositories, provision automated cloud environments and start development within ten business days." },
  ],
} as const;

export const contact = {
  eyebrow: "Direct commercial desk",
  title: "Let's build durable software together",
  lead: "Reach out directly for new product engineering, legacy modernisation, QA automation or a confidential project rescue assessment.",
  formTitle: "Request an architecture blueprint & proposal",
  formNote: `Every submission is reviewed personally by the founder ${"within 24 business hours"}.`,
  practiceOptions: [
    "Digital product & web engineering",
    "Mobile app development (iOS & Android)",
    "Experience design & UI/UX",
    "Quality engineering & automated QA",
    "Cloud architecture & DevOps",
    "Data systems, applied AI & APIs",
    "48-hour project rescue audit",
  ],
  successTitle: "Request received",
  successBody: "Thank you. ArunKumar Ganeshmoorthy and the engineering desk will respond with proposed meeting slots within 24 hours.",
} as const;

export const booking = {
  eyebrow: "Confidential engineering review",
  title: "Book a 45-minute architecture call",
  body: "A direct technical review with founder ArunKumar Ganeshmoorthy.",
  cta: "Confirm consultation slot",
  success: "Request logged. A calendar invite will follow within four business hours.",
} as const;

export const footer = {
  tagline: "Engineering precision. Digital impact.",
  links: [
    { label: "Overview", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "Project Rescue", href: "#rescue" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Leadership", href: "#leadership" },
  ],
  badges: ["100% day-one IP ownership", "India HQ, global delivery"],
} as const;
