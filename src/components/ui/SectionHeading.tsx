import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface Props {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({ index, eyebrow, title, lead, align = "left", onDark, className }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", onDark && "text-brand-300")}>
        {index && <span className={cn("font-display text-sm tracking-normal", onDark ? "text-brand-300/70" : "text-ink-400")}>{index}</span>}
        {index && <span className={cn("h-px w-6", onDark ? "bg-brand-300/50" : "bg-brand-300")} aria-hidden />}
        {eyebrow}
      </p>
      <h2 className={cn("mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]", onDark && "text-white")}>{title}</h2>
      {lead && <p className={cn("mt-5 text-lg leading-relaxed", onDark ? "text-ink-200" : "text-ink-500")}>{lead}</p>}
    </Reveal>
  );
}
