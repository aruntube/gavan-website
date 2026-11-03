"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqSection, faqs } from "@/content/faq";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={faqSection.eyebrow} title={faqSection.title} />
          </div>
          <Reveal className="lg:col-span-8">
            <div className="divide-y divide-ink-100 rounded-2xl border border-ink-200/70 bg-white shadow-ambient">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-ink-800 transition-colors hover:text-brand-700 sm:px-7"
                      >
                        <span className="flex items-start gap-3">
                          <span className="font-display text-xs font-bold text-brand-600 pt-1">{String(i + 1).padStart(2, "0")}</span>
                          {f.q}
                        </span>
                        <ChevronDown className={cn("size-5 shrink-0 text-ink-400 transition-transform duration-300", isOpen && "rotate-180 text-brand-600")} aria-hidden />
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className={cn("grid transition-[grid-template-rows] duration-300 ease-out-expo", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pl-[3.6rem] text-[15px] leading-relaxed text-ink-500 sm:px-7 sm:pl-[3.85rem]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
