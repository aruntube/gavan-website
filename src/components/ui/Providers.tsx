"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { BookingModal } from "@/components/forms/BookingModal";
import { Toast } from "./Toast";

interface UIContextValue {
  openBooking: (topic?: string) => void;
  closeBooking: () => void;
  toast: (message: string) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within <Providers>");
  return ctx;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState<string | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback((message: string) => {
    setToastMessage(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastMessage(null), 3200);
  }, []);

  const openBooking = useCallback((topic?: string) => {
    setBookingTopic(topic);
    setBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => setBookingOpen(false), []);

  const value = useMemo(() => ({ openBooking, closeBooking, toast }), [openBooking, closeBooking, toast]);

  return (
    <UIContext.Provider value={value}>
      {children}
      <BookingModal open={bookingOpen} topic={bookingTopic} onClose={closeBooking} />
      <Toast message={toastMessage} />
    </UIContext.Provider>
  );
}
