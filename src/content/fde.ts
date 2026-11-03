export const fdeSection = {
  index: "06",
  eyebrow: "Forward Deployed Engineer (FDE)",
  title: "A senior engineer embedded in your team, shipping in your environment",
  lead: "Most software initiatives fail in the gap between the vendor and the people who use the system. A forward deployed engineer closes that gap by working inside your repositories, your tooling, your rituals and your time zone until the outcome is live.",
} as const;

export const fdeHow = [
  {
    step: "01",
    when: "Week 1",
    title: "Embed",
    body: "Access, stand-ups and a system map. The engineer joins your channels and reads your code before proposing anything.",
  },
  {
    step: "02",
    when: "Weeks 1–2",
    title: "Map the real workflow",
    body: "Shadowing the operators and users of the system to find where the actual friction is, not where the ticket says it is.",
  },
  {
    step: "03",
    when: "Weekly",
    title: "Ship in production",
    body: "Small, frequent releases into your environment, using agentic delivery where it speeds things up and your conventions everywhere.",
  },
  {
    step: "04",
    when: "Final fortnight",
    title: "Hand over",
    body: "Documentation, runbooks and paired sessions so your internal team owns and extends the work after the embed ends.",
  },
] as const;

export const fdeWhen = [
  "A platform or AI initiative is stuck between teams and nobody owns the last mile.",
  "Your internal team is strong but short on senior capacity for a critical quarter.",
  "A vendor delivered a system that never quite landed with the people who use it.",
  "A modernisation needs someone on the ground who can read the legacy code and the business.",
  "A pilot has to reach production, not another slide deck.",
] as const;

export const fdeTerms = [
  { label: "Duration", value: "Two-week to six-month embeds" },
  { label: "Location", value: "Remote-first in your time zone, on-site by arrangement" },
  { label: "Ownership", value: "Your repositories, your tooling, your IP" },
] as const;

export const fdeCta = {
  label: "Request a forward deployed engineer",
  topic: "Forward deployed engineer (FDE)",
} as const;
