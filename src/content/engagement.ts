export const engagementSection = {
  eyebrow: "Commercial flexibility",
  title: "Engagement models",
  lead: "Three ways to work with us, matched to how your roadmap is funded and governed.",
} as const;

export const engagementModels = [
  {
    index: "Model 01",
    title: "Dedicated engineering pods",
    body: "Cross-functional teams of senior developers, a QA automation engineer and an architect, integrated into your long-term product roadmap.",
    terms: "Monthly pod retainer",
    popular: false,
    topic: "Dedicated engineering pod",
  },
  {
    index: "Model 02",
    title: "Milestone-based fixed delivery",
    body: "Well-defined projects with fixed scope, clear bi-weekly milestones, verifiable acceptance criteria and a defined commercial budget.",
    terms: "Guaranteed budget certainty",
    popular: true,
    topic: "Milestone-based fixed delivery",
  },
  {
    index: "Model 03",
    title: "Time & materials sprints",
    body: "Flexible sprint-by-sprint billing, ideal for exploratory discovery, legacy refactoring or rapidly evolving product requirements.",
    terms: "Bi-weekly sprint agility",
    popular: false,
    topic: "Time & materials sprints",
  },
] as const;
