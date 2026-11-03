import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { whyUs } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <Container>
        <SectionHeading index={whyUs.index} eyebrow={whyUs.eyebrow} title={whyUs.title} lead={whyUs.lead} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7 sm:p-9">
              <p className="eyebrow text-ink-400">Market challenges</p>
              <h3 className="mt-3 text-2xl font-bold">{whyUs.challengesTitle}</h3>
              <ul className="mt-7 space-y-6">
                {whyUs.challenges.map((c) => (
                  <li key={c.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-500">
                      <AlertTriangle className="size-4" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-semibold text-ink-800">{c.title}</h4>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{c.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:p-9">
              <p className="eyebrow">The Gavan Infotech solution</p>
              <h3 className="mt-3 text-2xl font-bold">{whyUs.solutionTitle}</h3>
              <ol className="mt-7 space-y-6">
                {whyUs.solutions.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <CheckCircle2 className="size-4" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-semibold text-ink-800">
                        <span className="mr-2 font-display text-xs text-brand-600">{s.step}</span>
                        {s.title}
                      </h4>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink-600">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
