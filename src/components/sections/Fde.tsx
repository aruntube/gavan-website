import { CheckCircle2, Handshake, Rocket, Route, UserRoundCheck } from "lucide-react";
import { fdeCta, fdeHow, fdeSection, fdeTerms, fdeWhen } from "@/content/fde";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

const howIcons = [UserRoundCheck, Route, Rocket, Handshake];

export function Fde() {
  return (
    <section id="fde" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: pitch, terms, CTA */}
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading index={fdeSection.index} eyebrow={fdeSection.eyebrow} title={fdeSection.title} lead={fdeSection.lead} />
            <Reveal delay={100} className="mt-8">
              <dl className="space-y-3">
                {fdeTerms.map((t) => (
                  <div key={t.label} className="flex items-start gap-4 rounded-xl border border-ink-200/70 bg-white p-4">
                    <dt className="w-24 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink-400">{t.label}</dt>
                    <dd className="text-sm font-semibold text-ink-800">{t.value}</dd>
                  </div>
                ))}
              </dl>
              <BookingButton topic={fdeCta.topic} size="lg" className="mt-7">
                {fdeCta.label}
              </BookingButton>
            </Reveal>
          </div>

          {/* Right: how it works + when to use */}
          <div className="min-w-0 space-y-6 lg:col-span-7">
            <Reveal delay={120}>
              <div className="card p-7 sm:p-8">
                <p className="eyebrow">How an embed works</p>
                <ol className="mt-6 grid gap-6 sm:grid-cols-2">
                  {fdeHow.map((h, i) => {
                    const Icon = howIcons[i];
                    return (
                      <li key={h.step} className="flex gap-4">
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-xs font-bold text-brand-600">{h.step}</span>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">{h.when}</span>
                          </div>
                          <h3 className="mt-1 font-semibold text-ink-800">{h.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-ink-500">{h.body}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:p-8">
                <p className="eyebrow">When to bring in a forward deployed engineer</p>
                <ul className="mt-5 space-y-3">
                  {fdeWhen.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-700">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-600" aria-hidden />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
