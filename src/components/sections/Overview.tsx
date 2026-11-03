import { GitBranch } from "lucide-react";
import { overview } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Overview() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading index={overview.index} eyebrow={overview.eyebrow} title={overview.title} lead={overview.lead} />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl bg-ink-800 p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-600/40 blur-2xl" aria-hidden />
              <p className="eyebrow text-brand-300">{overview.purpose.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{overview.purpose.title}</h3>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-200">
                {overview.purpose.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide">
                <GitBranch className="size-3.5 text-brand-300" aria-hidden />
                {overview.purpose.tag}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7">
            {overview.segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card card-hover flex h-full flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-7">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-ink-400 sm:w-24 sm:shrink-0 sm:pt-1">{s.index}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.body}</p>
                    <Badge tone="brand" className="mt-4">{s.tag}</Badge>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
