import { Check } from "lucide-react";
import { accelerators } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { BookingButton } from "@/components/ui/BookingButton";

export function Accelerators() {
  return (
    <section id="accelerators" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading index={accelerators.index} eyebrow={accelerators.eyebrow} title={accelerators.title} lead={accelerators.lead} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {accelerators.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="card card-hover flex h-full flex-col p-7">
                <Badge tone="brand" className="self-start">{a.badge}</Badge>
                <h3 className="mt-4 text-xl font-bold leading-snug">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{a.body}</p>
                <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink-700">
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <Check className="size-3" aria-hidden />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <BookingButton topic={a.topic} variant="secondary" className="w-full">
                    {a.cta}
                  </BookingButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
