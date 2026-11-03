import { values } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Values() {
  return (
    <section id="values" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading index={values.index} eyebrow={values.eyebrow} title={values.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[values.vision, values.mission].map((v, i) => (
            <Reveal key={v.label} delay={i * 80}>
              <div className="card h-full p-7 sm:p-9">
                <p className="eyebrow">{v.label}</p>
                <h3 className="mt-3 text-2xl font-bold">{v.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.principles.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-ink-100 bg-surface p-5">
                <span className="font-display text-xs font-bold text-brand-600">{p.index}</span>
                <h4 className="mt-2 font-semibold text-ink-800">{p.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
