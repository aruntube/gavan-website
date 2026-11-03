"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { contact, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useUI } from "@/components/ui/Providers";
import { Input, Label, Select, Textarea } from "./Field";
import { formsEnabled, useWeb3Forms } from "./useWeb3Forms";

export function ProposalForm() {
  const { status, error, submit } = useWeb3Forms();
  const { toast } = useUI();
  const [nda, setNda] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return;
    const ok = await submit("Architecture blueprint & proposal request", {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      practice: String(fd.get("practice") ?? ""),
      message: String(fd.get("message") ?? ""),
      nda_requested: nda,
    });
    if (ok) toast("Technical proposal request sent");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-6">
        <CheckCircle2 className="size-8 text-brand-600" aria-hidden />
        <h4 className="text-lg font-bold">{contact.successTitle}</h4>
        <p className="text-sm leading-relaxed text-ink-600">{contact.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="pf-name" required>Full name</Label>
          <Input id="pf-name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="pf-email" required>Work email</Label>
          <Input id="pf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="pf-org">Organisation</Label>
          <Input id="pf-org" name="organisation" autoComplete="organization" placeholder="Company name" />
        </div>
        <div>
          <Label htmlFor="pf-practice">Primary practice area</Label>
          <Select id="pf-practice" name="practice" defaultValue={contact.practiceOptions[0]}>
            {contact.practiceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="pf-message" required>Project scope, timeline & objectives</Label>
        <Textarea id="pf-message" name="message" required placeholder="Tell us what you are building, the systems involved and your target timeline." />
      </div>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          checked={nda}
          onChange={(e) => setNda(e.target.checked)}
          className="mt-0.5 size-4 rounded border-ink-300 accent-brand-600"
        />
        Send a mutual non-disclosure agreement (NDA) before our architecture call
      </label>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          Something went wrong ({error}). Please email us directly at{" "}
          <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <Button type="submit" size="lg" className="h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request technical consultation & proposal"}
        {formsEnabled ? <ArrowRight className="size-4" aria-hidden /> : <Mail className="size-4" aria-hidden />}
      </Button>
      <p className="text-xs leading-relaxed text-ink-400">
        {formsEnabled
          ? `Every submission is reviewed personally by our founder ${site.responseTime}.`
          : `This opens your email client with the details prefilled. We reply ${site.responseTime}.`}
      </p>
    </form>
  );
}
