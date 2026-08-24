/** Design system reminder — Calm Laboratory empty states stay helpful, quiet, and give a clear path back. */
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteShell";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage(); const isAr = language === "ar";
  return <PageFrame><section className="not-found shell"><p className="eyebrow">404</p><h1>{isAr ? "لم نعثر على هذه الصفحة." : "We could not find that page."}</h1><p>{isAr ? "قد يكون الرابط تغير. عُد إلى الدليل لمتابعة القراءة." : "The link may have changed. Return to the guide to keep reading."}</p><Link href="/" className="solid-button">{isAr ? "العودة للرئيسية" : "Return home"}</Link></section></PageFrame>;
}
