import { FileCheck2, GitPullRequest, RefreshCw, ScrollText, ShieldCheck, Sparkles } from "lucide-react";
import { adlcCta, adlcGuardrails, adlcOutcomes, adlcSection, adlcStages } from "@/content/adlc";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

const guardrailIcons = [ShieldCheck, GitPullRequest, ScrollText];

export function Adlc() {
  return (
    <section id="adlc" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={adlcSection.index} eyebrow={adlcSection.eyebrow} title={adlcSection.title} lead={adlcSection.lead} />
          <Reveal delay={100} className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              <RefreshCw className="size-4" aria-hidden />
              A continuous loop, not a one-way pipeline
            </span>
          </Reveal>
        </div>

        {/* Six-stage loop */}
        <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {adlcStages.map((s, i) => {
            const last = i === adlcStages.length - 1;
            return (
              <Reveal as="li" key={s.step} delay={i * 70}>
                <article className="card card-hover relative flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-600 font-display text-xs font-bold text-white">
                      {s.step}
                    </span>
                    {last ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                        <RefreshCw className="size-3.5" aria-hidden />
                        Back to 01
                      </span>
                    ) : (
                      <span className="font-display text-xs font-bold text-ink-300">Stage {s.step}</span>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{s.body}</p>
                  <p className="mt-5 inline-flex items-center gap-2 self-start rounded-lg bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700">
                    <FileCheck2 className="size-3.5 text-brand-600" aria-hidden />
                    Artifact: {s.artifact}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ol>

        {/* Guardrails */}
        <Reveal delay={80} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-ink-800 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div>
                <p className="eyebrow text-brand-300">Non-negotiable guardrails</p>
                <h3 className="mt-3 text-2xl font-bold text-white">Agents work for the architecture, not the other way round</h3>
              </div>
              <ul className="grid gap-4 sm:grid-cols-3">
                {adlcGuardrails.map((g, i) => {
                  const Icon = guardrailIcons[i];
                  return (
                    <li key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <Icon className="size-5 text-brand-300" aria-hidden />
                      <h4 className="mt-3 font-semibold text-white">{g.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-200">{g.body}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Outcomes + CTA */}
        <div className="mt-10 grid gap-5 lg:grid-cols-4 lg:items-stretch">
          {adlcOutcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-ink-100 bg-surface p-6">
                <Sparkles className="size-5 text-brand-600" aria-hidden />
                <h4 className="mt-3 font-semibold text-ink-800">{o.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{o.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <p className="text-sm leading-relaxed text-ink-700">{adlcCta.note}</p>
              <BookingButton topic={adlcCta.topic} className="mt-5 h-auto min-h-11 w-full whitespace-normal py-2.5 text-center">
                {adlcCta.label}
              </BookingButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
