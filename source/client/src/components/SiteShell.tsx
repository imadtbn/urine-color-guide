/**
 * Design system reminder — Calm Laboratory: editorial whitespace, aqueous mint signals, no noisy UI.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Droplets, Globe2, Menu, X } from "lucide-react";
import { sourceLinks, text } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

const brandMark = `${import.meta.env.BASE_URL}assets/images/urine-guide-mark.png`;

const labels = {
  explorer: { en: "Explore", ar: "استكشف" },
  colors: { en: "Color guide", ar: "دليل الألوان" },
  articles: { en: "Articles", ar: "المقالات" },
  safety: { en: "When to seek care", ar: "متى تطلب الرعاية" },
  about: { en: "About", ar: "عن الموقع" },
  sources: { en: "Sources", ar: "المصادر" },
  disclaimer: { en: "Educational only — not personal medical advice.", ar: "للتثقيف فقط — وليس نصيحة طبية شخصية." },
  switchLanguage: { en: "العربية", ar: "English" },
  menu: { en: "Open menu", ar: "فتح القائمة" },
  close: { en: "Close menu", ar: "إغلاق القائمة" },
  reviewed: { en: "Reviewed for educational clarity", ar: "مراجع للوضوح التثقيفي" },
  privacy: { en: "Privacy", ar: "الخصوصية" },
};

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = language === "ar";
  const nav = [
    [labels.explorer, "/"],
    [labels.colors, "/#chart"],
    [labels.articles, "/articles"],
    [labels.safety, "/#seek-care"],
    [labels.about, "/about"],
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell header-row">
        <Link href="/" className="brand" aria-label="Urine Color Guide home">
          <img src={brandMark} className="brand-mark" alt="" />
          <span className="brand-copy"><strong>Urine</strong><em>Color Guide</em><span className="brand-measure" aria-hidden="true"><i /><i /><i /></span></span>
        </Link>
        <nav className={`primary-nav ${open ? "primary-nav--open" : ""}`} aria-label={isAr ? "التنقل الأساسي" : "Primary navigation"}>
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{text(label, language)}</Link>)}
          <button className="language-button language-button--mobile" onClick={() => { setLanguage(isAr ? "en" : "ar"); setOpen(false); }}>
            <Globe2 size={16} aria-hidden="true" /> {text(labels.switchLanguage, language)}
          </button>
        </nav>
        <div className="header-controls">
          <button className="language-button" onClick={() => setLanguage(isAr ? "en" : "ar")} aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}>
            <Globe2 size={16} aria-hidden="true" /> <span>{text(labels.switchLanguage, language)}</span>
          </button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={text(open ? labels.close : labels.menu, language)} aria-expanded={open}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <section>
          <div className="footer-brand"><img src={brandMark} alt="" /><span><strong>Urine</strong><em>Color Guide</em></span></div>
          <p>{isAr ? "مرجع بصري هادئ لفهم تغيرات لون البول ضمن سياقها الصحي، دون تشخيص فردي." : "A calm visual reference for understanding urine color changes in their health context—without individual diagnosis."}</p>
          <p className="footer-note">{text(labels.disclaimer, language)}</p>
        </section>
        <section>
          <p className="footer-heading">{isAr ? "التصفح" : "Navigate"}</p>
          <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
          <Link href="/articles">{text(labels.articles, language)}</Link>
          <Link href="/about">{text(labels.about, language)}</Link>
          <Link href="/privacy">{text(labels.privacy, language)}</Link>
        </section>
        <section>
          <p className="footer-heading">{text(labels.sources, language)}</p>
          {sourceLinks.slice(0, 3).map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.name}<ArrowUpRight size={14} /></a>)}
        </section>
        <section className="footer-review">
          <div className="review-icon"><Droplets size={20} aria-hidden="true" /></div>
          <p className="footer-heading">{text(labels.reviewed, language)}</p>
          <p>{isAr ? "نحدّث البنية التحريرية والمصادر لتبقى القراءة واضحة ومسؤولة." : "We keep the editorial structure and cited sources clear, readable, and responsible."}</p>
        </section>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Urine Color Guide</span><span>{text(labels.disclaimer, language)}</span></div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="site-frame"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
