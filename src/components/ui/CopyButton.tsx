"use client";

import { Copy } from "lucide-react";
import { useUI } from "./Providers";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const { toast } = useUI();
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      toast("Email address copied");
    } catch {
      toast("Copy failed. Please select the address manually.");
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700"
    >
      <Copy className="size-3.5" aria-hidden />
      {label}
    </button>
  );
}
