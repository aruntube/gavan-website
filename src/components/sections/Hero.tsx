import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";
import { DeliveryEngine } from "./DeliveryEngine";

/** Staggered entrance: each block fades up and sharpens, delays via --d. */
const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Atmosphere: grid + two slowly drifting light fields */}
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-orb hero-orb-a pointer-events-none absolute -top-48 right-[-12%] size-[680px] rounded-full bg-brand-200/50 blur-3xl" aria-hidden />
      <div className="hero-orb hero-orb-b pointer-events-none absolute -bottom-56 left-[-14%] size-[560px] rounded-full bg-brand-100/70 blur-3xl" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="hero-in eyebrow flex items-center gap-3" style={d(0)}>
              <span className="h-px w-8 bg-brand-400" aria-hidden />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              <span className="hero-in block" style={d(90)}>
                Engineering precision.
              </span>
              <span className="hero-in relative mt-1 inline-block text-brand-600" style={d(200)}>
                Digital impact.
                <span className="hero-underline absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-brand-300/70" aria-hidden />
              </span>
            </h1>

            <p className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-ink-500" style={d(320)}>
              {hero.lead}
            </p>

            <div className="hero-in mt-8" style={d(420)}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">{hero.competenciesLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {hero.competencies.map((c, i) => (
                  <li key={c} className="hero-in" style={d(480 + i * 50)}>
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-ink-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 hover:shadow-ambient"
                    >
                      <span className="size-1.5 rounded-full bg-brand-400 transition-transform duration-300 group-hover:scale-150" aria-hidden />
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={d(640)}>
              <BookingButton size="lg" className="btn-shine">
                {hero.primaryCta}
              </BookingButton>
              <Button href="#services" variant="secondary" size="lg" className="group">
                {hero.secondaryCta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </Button>
            </div>
          </div>

          <div className="hero-in lg:col-span-5" style={d(380)}>
            <DeliveryEngine />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {hero.stats.map((s, i) => (
            <div key={s.label} className="hero-in card relative overflow-hidden px-6 py-5" style={d(760 + i * 110)}>
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-500 to-brand-300" aria-hidden />
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl font-extrabold tracking-tight text-brand-600">{s.value}</span>
                <span>
                  <span className="block text-sm font-semibold text-ink-800">{s.label}</span>
                  <span className="block text-xs text-ink-400">{s.note}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
