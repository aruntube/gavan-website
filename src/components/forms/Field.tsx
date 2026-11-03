import { cn } from "@/lib/cn";

const base =
  "w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[15px] text-ink-800 placeholder:text-ink-300 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

export function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-700">
      {children}
      {required && <span className="text-brand-600"> *</span>}
    </label>
  );
}

export function Input(props: React.ComponentProps<"input">) {
  return <input {...props} className={cn(base, props.className)} />;
}

export function Textarea(props: React.ComponentProps<"textarea">) {
  return <textarea {...props} className={cn(base, "min-h-[120px] resize-y", props.className)} />;
}

export function Select(props: React.ComponentProps<"select">) {
  return <select {...props} className={cn(base, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%235a6873%22 stroke-width=%222%22><path d=%22M4 6l4 4 4-4%22/></svg>')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10", props.className)} />;
}
