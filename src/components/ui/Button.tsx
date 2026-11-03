import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkOutline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-[0_8px_24px_-10px_rgba(53,106,105,0.6)] hover:bg-brand-700 active:bg-brand-800",
  secondary: "bg-white text-ink-800 border border-ink-200 hover:border-brand-400 hover:text-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
  onDark: "bg-white text-ink-900 hover:bg-brand-50",
  onDarkOutline: "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };
type AnchorProps = Common & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  const { type = "button", ...btn } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...btn}>
      {children}
    </button>
  );
}
