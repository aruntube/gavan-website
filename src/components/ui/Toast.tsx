"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4 transition-all duration-300",
        message ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      {message && (
        <div className="flex items-center gap-2.5 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-medium text-white shadow-lift">
          <CheckCircle2 className="size-4 text-brand-300" aria-hidden />
          {message}
        </div>
      )}
    </div>
  );
}
