"use client";

import { useState } from "react";
import { BrainCircuit, CheckCircle2, CloudCog, Code, PenTool, ShieldCheck, Smartphone, type LucideIcon } from "lucide-react";
import { services, servicesSection, type IconName } from "@/content/services";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Badge";
import { BookingButton } from "@/components/ui/BookingButton";

const icons: Record<IconName, LucideIcon> = {
  code: Code,
  mobile: Smartphone,
  design: PenTool,
  quality: ShieldCheck,
  cloud: CloudCog,
  data: BrainCircuit,
};

export function Services() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"explorer" | "matrix">("explorer");
  const item = services[active];
  const Icon = icons[item.icon];

  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={servicesSection.index} eyebrow={servicesSection.eyebrow} title={servicesSection.title} lead={servicesSection.lead} />
          <Reveal delay={100} className="shrink-0">
            <div role="tablist" aria-label="View mode" className="inline-flex rounded-full border border-ink-200 bg-white p-1">
              {(["explorer", "matrix"] as const).map((v) => (
                <button
                  key={v}
                  role="tab"
                  type="button"
                  aria-selected={view === v}
                  onClick={() => setView(v)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors",
                    view === v ? "bg-ink-800 text-white" : "text-ink-600 hover:text-ink-900",
                  )}
                >
                  {v === "explorer" ? "Interactive explorer" : "Capability matrix"}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {view === "explorer" ? (
          <Reveal className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-4">
              <div role="tablist" aria-label="Service practices" aria-orientation="vertical" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
                {services.map((s, i) => {
                  const TabIcon = icons[s.icon];
                  const selected = i === active;
                  return (
                    <button
                      key={s.id}
                      role="tab"
                      type="button"
                      id={`service-tab-${s.id}`}
                      aria-selected={selected}
                      aria-controls="service-panel"
                      onClick={() => setActive(i)}
                      className={cn(
                        "flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 lg:w-full",
                        selected
                          ? "border-brand-600 bg-brand-600 text-white shadow-[0_12px_28px_-14px_rgba(53,106,105,0.7)]"
                          : "border-ink-200 bg-white text-ink-700 hover:border-brand-300",
                      )}
                    >
                      <span className={cn("inline-flex size-9 shrink-0 items-center justify-center rounded-xl", selected ? "bg-white/15" : "bg-brand-50 text-brand-700")}>
                        <TabIcon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className={cn("block font-display text-[11px] font-bold", selected ? "text-brand-100" : "text-ink-400")}>{s.id}</span>
                        <span className="block truncate text-sm font-semibold">{s.short}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${item.id}`}
              className="card min-w-0 p-6 sm:p-8 lg:col-span-8"
            >
              <div key={item.id} className="animate-[fade_0.4s_ease-out]">
                <div className="flex items-start justify-between gap-4 border-b border-ink-100 pb-5">
                  <div>
                    <p className="eyebrow">{item.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{item.title}</h3>
                  </div>
                  <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-brand-700 sm:inline-flex">
                    <Icon className="size-6" aria-hidden />
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-600 sm:text-base">{item.covers}</p>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Key deliverables</p>
                    <ul className="mt-3 space-y-2.5">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Production stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Direct business value</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">{item.value}</p>
                  </div>
                  <BookingButton topic={item.short} className="shrink-0">
                    Discuss this practice
                  </BookingButton>
                </div>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => {
              const CardIcon = icons[s.icon];
              return (
                <Reveal key={s.id} delay={i * 60}>
                  <article className="card card-hover flex h-full flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <CardIcon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-xs font-bold text-ink-300">{s.id}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug">{s.title}</h3>
                    <p className="mt-1 text-xs font-medium text-brand-700">{s.summary}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{s.covers}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.stack.slice(0, 5).map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                      {s.stack.length > 5 && <Chip>+{s.stack.length - 5}</Chip>}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
