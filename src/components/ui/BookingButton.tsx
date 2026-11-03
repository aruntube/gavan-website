"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { useUI } from "./Providers";

type Props = Omit<React.ComponentProps<typeof Button>, "href" | "onClick"> & { topic?: string; arrow?: boolean };

export function BookingButton({ topic, arrow = true, children, ...rest }: Props) {
  const { openBooking } = useUI();
  return (
    <Button {...(rest as React.ComponentProps<typeof Button>)} onClick={() => openBooking(topic)}>
      {children}
      {arrow && <ArrowRight className="size-4 shrink-0" aria-hidden />}
    </Button>
  );
}
