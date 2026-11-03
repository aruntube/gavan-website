import { Globe, Mail, MapPin } from "lucide-react";
import { contact, getStarted, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { ProposalForm } from "@/components/forms/ProposalForm";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[560px] rounded-full bg-brand-200/40 blur-3xl" aria-hidden />
      <Container className="relative">
        <SectionHeading eyebrow={getStarted.eyebrow} title={getStarted.title} align="center" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {getStarted.steps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80}>
              <div className="card h-full p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white">{s.step}</span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />
            <Reveal delay={100} className="mt-8 space-y-3">
              <div className="card flex items-center gap-4 p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Commercial email</p>
                  <a href={`mailto:${site.email}`} className="block break-all font-semibold text-ink-800 hover:text-brand-700">{site.email}</a>
                </div>
                <CopyButton value={site.email} />
              </div>
              <div className="card flex items-center gap-4 p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Globe className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Official website</p>
                  <a href={site.url} className="font-semibold text-ink-800 hover:text-brand-700">{site.website}</a>
                </div>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Headquarters</p>
                  <p className="font-semibold text-ink-800">{site.hq}</p>
                  <p className="text-xs text-ink-400">{site.hqNote}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="min-w-0 lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-bold">{contact.formTitle}</h3>
              <p className="mt-1.5 text-sm text-ink-500">All submissions are reviewed directly by {site.founder.name}.</p>
              <div className="mt-6">
                <ProposalForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
