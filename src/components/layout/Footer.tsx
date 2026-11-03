import Image from "next/image";
import { footer, site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-ink-200">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/mark.png" alt="" width={512} height={512} className="size-11" />
              <div className="leading-none">
                <p className="font-display text-xl font-extrabold tracking-tight text-white">{site.name}</p>
                <p className="mt-1 text-xs tracking-[0.12em] text-brand-300">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">{site.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {footer.badges.map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand-300">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-300 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-brand-300">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-ink-300 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.url} className="text-ink-300 transition-colors hover:text-white">
                  {site.website}
                </a>
              </li>
              <li className="text-ink-400">
                {site.hq} HQ · {site.hqNote}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Founded by {site.founder.name}. All rights reserved.
          </p>
          <p className="font-display text-ink-300">{footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
