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
        {/* Row 1: leadership — text on the left, statement card on the right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading index={leadership.index} eyebrow={leadership.eyebrow} title={leadership.title} />
            <Reveal delay={80}>
              <p className="mt-6 text-lg leading-relaxed text-ink-500">{site.founder.summary}</p>
              <dl className="mt-8 grid grid-cols-2 gap-3">
                {site.founder.badges.map((b) => (
                  <div key={b.label} className="rounded-xl border border-ink-200/70 bg-white p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">{b.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink-800">{b.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140} className="min-w-0 lg:col-span-7">
            <figure className="relative overflow-hidden rounded-3xl bg-ink-800 p-8 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand-600/40 blur-3xl" aria-hidden />
              <Quote className="relative size-10 text-brand-300" aria-hidden />
              <blockquote className="relative mt-6 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                {site.founder.quote}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                  <UserRound className="size-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-white">{site.founder.title}</span>
                  <span className="block text-sm text-ink-300">{site.founder.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Row 2: partnership advantage — full-width row of three */}
        <div className="mt-24">
          <SectionHeading index={advantage.index} eyebrow={advantage.eyebrow} title={advantage.title} />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {advantage.items.map((a, i) => {
              const Icon = advantageIcons[i];
              return (
                <Reveal as="li" key={a.title} delay={i * 80}>
                  <div className="card card-hover h-full p-7">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{a.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
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
