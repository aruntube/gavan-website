import { FileCheck2 } from "lucide-react";
import { lifecycle, lifecycleSection } from "@/content/lifecycle";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Lifecycle() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading index={lifecycleSection.index} eyebrow={lifecycleSection.eyebrow} title={lifecycleSection.title} lead={lifecycleSection.lead} align="center" />

        <ol className="relative mt-16 space-y-8 lg:space-y-0">
          <div className="absolute inset-y-0 left-5 w-px bg-ink-200 lg:left-1/2 lg:-translate-x-1/2" aria-hidden />
          {lifecycle.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal as="li" key={s.step} delay={60} className={cn("relative pl-14 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0", i > 0 && "lg:-mt-14")}>
                <span
                  className="absolute left-5 top-6 inline-flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-600 font-display text-xs font-bold text-white shadow-ambient lg:left-1/2 lg:top-8"
                  aria-hidden
                >
                  {s.step}
                </span>
                <div className={cn("card p-6 sm:p-7", right ? "lg:col-start-2" : "lg:col-start-1")}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow">{s.when}</span>
                    <span className="font-display text-xs font-bold text-ink-300 lg:hidden">Stage {s.step}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.body}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700">
                    <FileCheck2 className="size-3.5 text-brand-600" aria-hidden />
                    Artifact: {s.artifact}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
