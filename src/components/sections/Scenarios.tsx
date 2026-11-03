import { ArrowUpRight } from "lucide-react";
import { scenarios, scenariosSection } from "@/content/scenarios";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Badge";

export function Scenarios() {
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <Container>
        <SectionHeading index={scenariosSection.index} eyebrow={scenariosSection.eyebrow} title={scenariosSection.title} lead={scenariosSection.lead} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover flex h-full flex-col p-7">
                <p className="eyebrow">{s.industry}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug">{s.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <p className="mt-5 inline-flex items-center gap-1.5 border-t border-ink-100 pt-4 text-sm font-semibold text-brand-700">
                  <ArrowUpRight className="size-4" aria-hidden />
                  {s.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
