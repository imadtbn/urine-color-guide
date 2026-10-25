import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ADSENSE_CLIENT = "ca-pub-5656416032906373";

const ADSENSE_SLOTS = {
  top: {
    slot: "7867079394",
    format: "fluid",
    layoutKey: "-fr+57+4a-dc+8g",
    responsive: undefined,
  },
  bottom: {
    slot: "3143411927",
    format: "auto",
    layoutKey: undefined,
    responsive: "true",
  },
  // Backward compatibility fallback for any inline usage
  inline: {
    slot: "3143411927",
    format: "auto",
    layoutKey: undefined,
    responsive: "true",
  },
} as const;

type AdVariant = keyof typeof ADSENSE_SLOTS;

type AdUnitProps = {
  variant?: AdVariant;
  label?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdUnit({ variant = "top", label, className = "" }: AdUnitProps) {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const defaultLabel = label || (isAr ? "إعلان" : "Advertisement");

  const pushed = useRef(false);
  const insRef = useRef<HTMLModElement>(null);
  const [isUnfilled, setIsUnfilled] = useState(false);

  const config = ADSENSE_SLOTS[variant] || ADSENSE_SLOTS.bottom;

  useEffect(() => {
    if (!insRef.current) return;

    // MutationObserver to detect when AdSense sets data-ad-status="unfilled" or modifies the container
    const observer = new MutationObserver(() => {
      const ins = insRef.current;
      if (!ins) return;

      const status = ins.getAttribute("data-ad-status");
      if (status === "unfilled") {
        setIsUnfilled(true);
      }
    });

    observer.observe(insRef.current, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });

    if (!pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch {
        // Ad blockers or script failure - do not break page
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (isUnfilled) {
    return null;
  }

  return (
    <aside
      className={`ad-wrap ad-wrap--${variant} ${className}`}
      aria-label={defaultLabel}
    >
      <div className="ad-label">{defaultLabel}</div>
      <div className="ad-container">
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={config.slot}
          data-ad-format={config.format}
          {...(config.layoutKey ? { "data-ad-layout-key": config.layoutKey } : {})}
          {...(config.responsive ? { "data-full-width-responsive": config.responsive } : {})}
        />
      </div>
    </aside>
  );
}

export { ADSENSE_CLIENT, ADSENSE_SLOTS };
