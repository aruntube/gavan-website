import { LifeBuoy } from "lucide-react";
import { rescue } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

export function Rescue() {
  return (
    <section id="rescue" className="relative overflow-hidden bg-ink-800 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-2 text-brand-300">
              <LifeBuoy className="size-4" aria-hidden />
              {rescue.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">{rescue.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">{rescue.lead}</p>
            <BookingButton topic={rescue.topic} variant="onDark" size="lg" className="mt-8">
              {rescue.cta}
            </BookingButton>
          </Reveal>

          <ol className="space-y-4 lg:col-span-6">
            {rescue.steps.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 90}>
                <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="shrink-0 text-right">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-brand-300">{s.step}</span>
                    <span className="block text-xs text-ink-300">{s.when}</span>
                  </div>
                  <div className="border-l border-white/10 pl-5">
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-200">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
