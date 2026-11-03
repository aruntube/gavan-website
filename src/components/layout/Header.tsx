"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useUI } from "@/components/ui/Providers";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[70] border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-ink-200/70 bg-white/85 shadow-[0_8px_30px_-18px_rgba(49,59,68,0.35)] backdrop-blur-xl"
            : "border-transparent bg-surface/70 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/mark.png"
              alt=""
              width={512}
              height={512}
              priority
              className="size-10 sm:size-11"
            />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-extrabold tracking-tight text-ink-800 sm:text-lg">
                {site.name}
              </span>
              <span className="mt-1 hidden whitespace-nowrap text-[10.5px] font-medium tracking-[0.12em] text-ink-400 sm:block ">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => openBooking()}
              className="hidden shrink-0 sm:inline-flex"
            >
              Book a call
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800 lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer (sibling of the header: backdrop-filter would otherwise trap a fixed child) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-0 z-[85] overflow-hidden lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none invisible",
        )}
        style={{
          transitionProperty: "visibility",
          transitionDuration: open ? "0s" : "400ms",
        }}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(88vw,360px)] flex-col bg-white shadow-lift transition-transform duration-400 ease-out-expo",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-ink-100 px-5">
            <span className="flex items-center gap-2.5">
              <Image
                src="/mark.png"
                alt=""
                width={512}
                height={512}
                className="size-9"
              />
              <span className="font-display text-base font-extrabold tracking-tight text-ink-800">
                {site.name}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 text-ink-800"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
                <span className="font-display text-xs text-ink-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
          <div className="border-t border-ink-100 p-5">
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
            >
              Book a 45-min architecture call
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <p className="mt-3 text-center text-xs text-ink-400">
              {site.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
