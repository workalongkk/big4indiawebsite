"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { LeadFormFields } from "./lead-form-fields";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type LeadFormContextValue = {
  open: (source?: string) => void;
  close: () => void;
  isOpen: boolean;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

/** Open the global lead form from any client component. */
export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx)
    throw new Error("useLeadForm must be used within <LeadFormProvider>");
  return ctx;
}

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("website");
  const [isDesktop, setIsDesktop] = useState(true);

  const open = useCallback((s?: string) => {
    if (s) setSource(s);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Choose slide-over (desktop) vs. bottom-sheet (mobile)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Esc to close + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  const panelVariants = isDesktop
    ? { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } }
    : { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } };

  return (
    <LeadFormContext.Provider value={value}>
      {children}

      <FloatingLaunchers onOpen={() => open("floating")} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-obsidian/45 backdrop-blur-sm"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
              }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Get a free consultation"
              variants={panelVariants}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className={cn(
                "absolute bg-white shadow-float",
                isDesktop
                  ? "right-0 top-0 h-full w-full max-w-[440px] border-l border-border"
                  : "bottom-0 left-0 right-0 max-h-[92vh] overflow-y-auto rounded-t-3xl border-t border-border",
              )}
            >
              <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Talk to a Big4India expert
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Share your details — we&apos;ll call you back within
                    business hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="-mr-1 -mt-1 shrink-0 cursor-pointer rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="p-6">
                <LeadFormFields
                  source={source}
                  onSuccess={() => setTimeout(close, 1300)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadFormContext.Provider>
  );
}

/** Always-visible launchers so the lead path exists on every page. */
function FloatingLaunchers({ onOpen }: { onOpen: () => void }) {
  return (
    <>
      {/* Desktop: WhatsApp FAB */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform duration-200 hover:scale-105 sm:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* Mobile: sticky bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-white/90 p-3 backdrop-blur sm:hidden">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
        <button
          type="button"
          onClick={onOpen}
          className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          <PhoneCall className="size-4" /> Get Callback
        </button>
      </div>
    </>
  );
}
