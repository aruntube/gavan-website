import { cn } from "@/lib/cn";

export function Badge({ children, tone = "neutral", className }: { children: React.ReactNode; tone?: "neutral" | "brand" | "onDark"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        tone === "neutral" && "border-ink-200 bg-ink-50 text-ink-700",
        tone === "brand" && "border-brand-200 bg-brand-50 text-brand-700",
        tone === "onDark" && "border-white/15 bg-white/10 text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-lg border border-ink-200/80 bg-white px-2.5 py-1 text-xs font-medium text-ink-700", className)}>
      {children}
    </span>
  );
}
