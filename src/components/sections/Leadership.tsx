import { Quote, ShieldCheck, Eye, KeyRound, Star, UserRound } from "lucide-react";
import { advantage, leadership, site } from "@/content/site";
import { engagementModels, engagementSection } from "@/content/engagement";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

const advantageIcons = [ShieldCheck, KeyRound, Eye];

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading index={leadership.index} eyebrow={leadership.eyebrow} title={leadership.title} />
            <Reveal delay={80} className="mt-8">
              <div className="card p-7 sm:p-8">
                <div className="flex items-center gap-5">
                  <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-ink-800 text-white">
                    <UserRound className="size-7" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{site.founder.title}</h3>
                    <p className="text-sm font-medium text-brand-700">{site.founder.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-600">{site.founder.summary}</p>
                <blockquote className="relative mt-5 border-l-2 border-brand-300 pl-5 text-[15px] leading-relaxed text-ink-600">
                  <Quote className="absolute -left-3 -top-3 size-5 rounded-full bg-white text-brand-300" aria-hidden />
                  {site.founder.quote}
                </blockquote>
                <dl className="mt-6 grid grid-cols-2 gap-3">
                  {site.founder.badges.map((b) => (
                    <div key={b.label} className="rounded-xl bg-surface p-3">
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">{b.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-ink-800">{b.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <SectionHeading index={advantage.index} eyebrow={advantage.eyebrow} title={advantage.title} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {advantage.items.map((a, i) => {
                const Icon = advantageIcons[i];
                return (
                  <Reveal as="li" key={a.title} delay={i * 80}>
                    <div className="h-full rounded-2xl border border-ink-100 bg-white p-5">
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h4 className="mt-4 font-semibold text-ink-800">{a.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{a.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow={engagementSection.eyebrow} title={engagementSection.title} lead={engagementSection.lead} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-7 transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1",
                    m.popular ? "border-brand-600 bg-ink-800 text-white shadow-lift" : "card",
                  )}
                >
                  {m.popular && (
                    <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      <Star className="size-3" aria-hidden />
                      Most popular
                    </span>
                  )}
                  <span className={cn("font-display text-xs font-bold uppercase tracking-wider", m.popular ? "text-brand-300" : "text-ink-400")}>{m.index}</span>
                  <h3 className={cn("mt-3 text-xl font-bold", m.popular && "text-white")}>{m.title}</h3>
                  <p className={cn("mt-3 flex-1 text-[15px] leading-relaxed", m.popular ? "text-ink-200" : "text-ink-500")}>{m.body}</p>
                  <p className={cn("mt-5 text-sm font-semibold", m.popular ? "text-brand-200" : "text-brand-700")}>{m.terms}</p>
                  <BookingButton topic={m.topic} variant={m.popular ? "onDark" : "secondary"} className="mt-5 w-full">
                    Select this model
                  </BookingButton>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
