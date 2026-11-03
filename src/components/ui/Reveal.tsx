"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface Props extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
  as?: "div" | "li" | "article";
}

export function Reveal({ delay = 0, className, children, as = "div", style, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const Comp: React.ElementType = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Comp
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      className={cn("reveal", className)} style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }} {...rest}>
      {children}
    </Comp>
  );
}
