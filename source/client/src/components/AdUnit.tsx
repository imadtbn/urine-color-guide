import { useEffect, useRef } from "react";

const ADSENSE_CLIENT = "ca-pub-5656416032906373";
const ADSENSE_SLOTS = {
  top: "7867079394",
  inline: "3143411927",
  bottom: "6528123169",
} as const;

type AdVariant = keyof typeof ADSENSE_SLOTS;

type AdUnitProps = {
  variant?: AdVariant;
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdUnit({ variant = "inline", label = "Advertisement" }: AdUnitProps) {
  const pushed = useRef(false);
  const slot = ADSENSE_SLOTS[variant];

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers and delayed AdSense loading should never break the page.
    }
  }, []);

  return (
    <aside className={`ad-wrap ad-wrap--${variant}`} aria-label={label}>
      <div className="ad-label">{label}</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

export { ADSENSE_CLIENT, ADSENSE_SLOTS };
