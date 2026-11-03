import { ArrowRight, CheckCircle2 } from "lucide-react";
import { hero, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[640px] rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Engineering precision.
                <br />
                <span className="text-brand-600">Digital impact.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">{hero.lead}</p>
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{hero.competenciesLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {hero.competencies.map((c) => (
                  <li key={c}>
                    <a
                      href="#services"
                      className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700"
                    >
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BookingButton size="lg">{hero.primaryCta}</BookingButton>
              <Button href="#services" variant="secondary" size="lg">
                {hero.secondaryCta}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-5">
            <div className="card relative overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-200" aria-hidden />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-base font-bold text-ink-800">{hero.pipeline.title}</p>
                  <p className="mt-1 text-sm text-ink-500">{hero.pipeline.subtitle}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                  <span className="size-1.5 rounded-full bg-brand-500" aria-hidden />
                  Verified pipeline
                </span>
              </div>
              <ol className="mt-6 space-y-3">
                {hero.pipeline.checks.map((c) => (
                  <li key={c.step} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-surface px-3.5 py-3">
                    <span className="font-display text-xs font-bold text-ink-400">{c.step}</span>
                    <span className="flex-1 text-sm font-medium text-ink-800">{c.label}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                      <CheckCircle2 className="size-3.5" aria-hidden />
                      {c.status}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-500">
                <span>Founder-led · a senior architect on every engagement</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {hero.pipeline.footer.map((f) => (
                  <span key={f} className="rounded-md bg-ink-800 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-16 grid gap-4 sm:grid-cols-3">
          {hero.stats.map((s) => (
            <div key={s.label} className="card flex items-baseline gap-4 px-6 py-5">
              <span className="font-display text-3xl font-extrabold text-brand-600">{s.value}</span>
              <span>
                <span className="block text-sm font-semibold text-ink-800">{s.label}</span>
                <span className="block text-xs text-ink-400">{s.note}</span>
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
