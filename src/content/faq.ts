export const faqSection = {
  eyebrow: "Due diligence & governance",
  title: "Enterprise procurement FAQs",
} as const;

export const faqs = [
  {
    q: "Who owns the source code, designs and cloud infrastructure scripts?",
    a: "You own 100% of all intellectual property, including source code, Figma design systems, OpenAPI specifications and Terraform scripts, from day one. We commit directly into your organisation's private GitHub or GitLab repositories.",
  },
  {
    q: "How do you ensure security and data privacy in applied AI (RAG) projects?",
    a: "We practise strict DevSecOps and data isolation. Your proprietary documents and operational databases are indexed in private vector stores, such as pgvector inside your own VPC, with role-based access control and no training leakage to public models.",
  },
  {
    q: "How quickly can Gavan Infotech kick off a new project?",
    a: "After an initial 45-minute technical consultation and an architecture blueprint proposal, we configure repositories, provision CI/CD staging environments and start Sprint Zero within ten business days.",
  },
] as const;
