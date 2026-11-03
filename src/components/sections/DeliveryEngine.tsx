"use client";

import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { hero } from "@/content/site";
import { cn } from "@/lib/cn";

const STEP_MS = 1500;
const HOLD_MS = 4200;

/**
 * Animated "delivery engine" card: runs the four pipeline gates in sequence,
 * holds on all-passed, then starts again. Respects prefers-reduced-motion by
 * showing the finished state only.
 */
export function DeliveryEngine() {
  const total = hero.pipeline.checks.length;
  const [done, setDone] = useState(0); // number of gates completed

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setDone(total);
      return;
    }
    let t: ReturnType<typeof setTimeout>;
    const tick = (n: number) => {
      setDone(n);
      if (n < total) t = setTimeout(() => tick(n + 1), STEP_MS);
      else t = setTimeout(() => tick(0), HOLD_MS);
    };
    t = setTimeout(() => tick(1), 900);
    return () => clearTimeout(t);
  }, [total]);

  const allDone = done >= total;
  const progress = done / total;

  return (
    <div className="hero-float card relative overflow-hidden p-6 sm:p-7">
      {/* Progress rail */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-100" aria-hidden>
        <div
          className="h-full bg-gradient-to-r from-brand-700 to-brand-400 transition-[width] duration-[1200ms] ease-out-expo"
          style={{ width: `${Math.max(progress * 100, 4)}%` }}
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-base font-bold text-ink-800">{hero.pipeline.title}</p>
          <p className="mt-1 text-sm text-ink-500">{hero.pipeline.subtitle}</p>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500",
            allDone ? "bg-brand-50 text-brand-700" : "bg-ink-50 text-ink-600",
          )}
        >
          <span className="relative flex size-2" aria-hidden>
            {!allDone && <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60" />}
            <span className={cn("relative inline-flex size-2 rounded-full", allDone ? "bg-brand-500" : "bg-brand-400")} />
          </span>
          {allDone ? "Verified pipeline" : "Running gates"}
        </span>
      </div>

      <ol className="mt-6 space-y-2.5" aria-live="off">
        {hero.pipeline.checks.map((c, i) => {
          const state = i < done ? "done" : i === done && !allDone ? "active" : "pending";
          return (
            <li
              key={c.step}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-[background-color,border-color,opacity] duration-500",
                state === "done" && "border-brand-200 bg-brand-50/60",
                state === "active" && "border-ink-200 bg-white",
                state === "pending" && "border-ink-100 bg-surface opacity-60",
              )}
            >
              <span className="font-display text-xs font-bold text-ink-400">{c.step}</span>
              <span className="flex-1 text-sm font-medium text-ink-800">{c.label}</span>
              <span
                className={cn(
                  "inline-flex min-w-[6.5rem] items-center justify-end gap-1.5 text-xs font-semibold transition-colors duration-300",
                  state === "done" ? "text-brand-700" : "text-ink-400",
                )}
              >
                {state === "done" && (
                  <span className="inline-flex size-4 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="size-2.5" strokeWidth={3} aria-hidden />
                  </span>
                )}
                {state === "active" && <Loader2 className="size-3.5 animate-spin text-brand-500" aria-hidden />}
                {state === "pending" && <span className="size-1.5 rounded-full bg-ink-300" aria-hidden />}
                {state === "done" ? c.status : state === "active" ? "Running" : "Queued"}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4 text-xs text-ink-500">
        <span>Founder-led · a senior architect on every engagement</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {hero.pipeline.footer.map((f) => (
          <span key={f} className="rounded-md bg-ink-800 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
