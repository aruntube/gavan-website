"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { booking, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { Input, Label } from "./Field";
import { formsEnabled, useWeb3Forms } from "./useWeb3Forms";

interface Props {
  open: boolean;
  topic?: string;
  onClose: () => void;
}

export function BookingModal({ open, topic, onClose }: Props) {
  const { status, error, submit, reset } = useWeb3Forms();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastActive = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      (lastActive.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(reset, 300);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    await submit("45-minute architecture call request", {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      topic: String(fd.get("topic") ?? ""),
    });
  }

  return (
    <div
      className={cn("fixed inset-0 z-[95] flex items-end justify-center sm:items-center", open ? "pointer-events-auto visible" : "pointer-events-none invisible")}
      style={{ transitionProperty: "visibility", transitionDuration: open ? "0s" : "400ms" }}
      aria-hidden={!open}
    >
      <div
        className={cn("absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className={cn(
          "relative w-full max-w-md rounded-t-3xl bg-white p-6 shadow-lift transition-[transform,opacity] duration-400 ease-out-expo sm:rounded-3xl sm:p-8",
          open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full text-ink-500 hover:bg-ink-50 hover:text-ink-800"
        >
          <X className="size-5" aria-hidden />
        </button>

        <p className="eyebrow">{booking.eyebrow}</p>
        <h3 id="booking-title" className="mt-2 text-2xl font-bold">{booking.title}</h3>
        <p className="mt-2 text-sm text-ink-500">{booking.body}</p>

        {status === "success" ? (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
            <p className="text-sm text-ink-700">{booking.success}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div>
              <Label htmlFor="bk-name" required>Your name</Label>
              <Input ref={firstFieldRef} id="bk-name" name="name" required autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="bk-email" required>Work email</Label>
              <Input id="bk-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div>
              <Label htmlFor="bk-topic">Topic / service focus</Label>
              <Input id="bk-topic" name="topic" key={topic ?? "blank"} defaultValue={topic ?? ""} placeholder="e.g. Legacy modernisation" />
            </div>
            {status === "error" && (
              <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                Something went wrong ({error}). Please email <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : booking.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            {!formsEnabled && <p className="text-center text-xs text-ink-400">Opens your email client with the details prefilled.</p>}
          </form>
        )}
      </div>
    </div>
  );
}
