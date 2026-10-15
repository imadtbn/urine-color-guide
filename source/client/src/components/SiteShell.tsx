/**
 * Design system reminder — Calm Laboratory: editorial whitespace, aqueous mint signals, no noisy UI.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  Activity, ArrowUpRight, BookOpen, Compass, Droplets, Globe2,
  HeartPulse, House, Info, Menu, Palette, ShieldCheck, Stethoscope, X,
} from "lucide-react";
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

const navigation = [
  { label: labels.explorer, href: "/", Icon: Compass },
  { label: labels.colors, href: "/#chart", Icon: Palette },
  { label: labels.articles, href: "/articles", Icon: BookOpen },
  { label: labels.safety, href: "/#seek-care", Icon: HeartPulse },
  { label: labels.about, href: "/about", Icon: Info },
] as const;

const footerNavigation = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/", Icon: House },
  { label: labels.articles, href: "/articles", Icon: BookOpen },
  { label: labels.about, href: "/about", Icon: Info },
  { label: labels.privacy, href: "/privacy", Icon: ShieldCheck },
] as const;

function sourceIcon(url: string) {
  if (url.includes("mayoclinic.org")) return Stethoscope;
  if (url.includes("medlineplus.gov")) return HeartPulse;
  return Activity;
}

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = language === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="shell header-row">
        <Link href="/" className="brand" aria-label="Urine Color Guide home">
          <img src={brandMark} className="brand-mark" alt="" />
          <span className="brand-copy"><strong>Urine</strong><em>Color Guide</em><span className="brand-measure" aria-hidden="true"><i /><i /><i /></span></span>
        </Link>
        <nav id="site-primary-nav" className={`primary-nav ${open ? "primary-nav--open" : ""}`} aria-label={isAr ? "التنقل الأساسي" : "Primary navigation"}>
          {navigation.map(({ label, href, Icon }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <Icon className="nav-link-icon" size={16} strokeWidth={1.9} aria-hidden="true" />
              <span>{text(label, language)}</span>
            </Link>
          ))}
          <button className="language-button language-button--mobile" onClick={() => { setLanguage(isAr ? "en" : "ar"); setOpen(false); }}>
            <Globe2 size={16} aria-hidden="true" /> {text(labels.switchLanguage, language)}
          </button>
        </nav>
        <div className="header-controls">
          <button className="language-button" onClick={() => setLanguage(isAr ? "en" : "ar")} aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}>
            <Globe2 size={16} aria-hidden="true" /> <span>{text(labels.switchLanguage, language)}</span>
          </button>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={text(open ? labels.close : labels.menu, language)} aria-controls="site-primary-nav" aria-expanded={open}>
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
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
          {footerNavigation.map(({ label, href, Icon }) => (
            <Link href={href} key={href}>
              <Icon className="footer-link-icon" size={16} strokeWidth={1.9} aria-hidden="true" />
              <span>{text(label, language)}</span>
            </Link>
          ))}
        </section>
        <section>
          <p className="footer-heading">{text(labels.sources, language)}</p>
          {sourceLinks.slice(0, 3).map((source) => {
            const SourceIcon = sourceIcon(source.url);
            return (
              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">
                <SourceIcon className="footer-link-icon" size={16} strokeWidth={1.9} aria-hidden="true" />
                <span className="footer-link-label">{source.name}</span>
                <ArrowUpRight className="footer-external-icon" size={14} aria-hidden="true" />
              </a>
            );
          })}
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
