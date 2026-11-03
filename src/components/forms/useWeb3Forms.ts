"use client";

import { useCallback, useState } from "react";
import { site } from "@/content/site";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
export const formsEnabled = ACCESS_KEY.length > 0;

export type FormStatus = "idle" | "sending" | "success" | "error";

export function mailtoHref(subject: string, fields: Record<string, string | boolean | undefined>) {
  const body = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "" && v !== false)
    .map(([k, v]) => `${k}: ${v === true ? "Yes" : v}`)
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useWeb3Forms() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(async (subject: string, fields: Record<string, string | boolean | undefined>) => {
    if (!formsEnabled) {
      window.location.href = mailtoHref(subject, fields);
      return false;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: `${site.name} website`,
          ...fields,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (res.ok && data.success) {
        setStatus("success");
        return true;
      }
      throw new Error(data.message || "Submission failed");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Submission failed");
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return { status, error, submit, reset };
}
