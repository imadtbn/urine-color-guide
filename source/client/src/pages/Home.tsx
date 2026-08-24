/**
 * Design system reminder — Calm Laboratory: a non-centered editorial health guide using deep navy, warm paper, and aqueous mint.
 */
import { useEffect, useState } from "react";
import { AlertTriangle, ArrowUpRight, ChevronDown, CircleHelp, Droplets, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { AdUnit } from "@/components/AdUnit";
import { ArticleCard } from "@/components/ArticleCard";
import { PageFrame } from "@/components/SiteShell";
import { SpectrumThread } from "@/components/SpectrumThread";
import { articles, sourceLinks, text, urineColors } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  eyebrow: { en: "An evidence-conscious visual reference", ar: "مرجع بصري واعٍ بالأدلة" },
  hero: { en: "Read the signal. Keep the context.", ar: "اقرأ الإشارة. احتفظ بالسياق." },
  heroText: { en: "Urine color may shift for ordinary reasons. This guide helps you notice patterns, understand the common context, and know when a change deserves professional attention.", ar: "قد يتغير لون البول لأسباب يومية معتادة. يساعدك هذا الدليل على ملاحظة الأنماط وفهم السياق الشائع ومعرفة متى يستحق التغير اهتماماً مهنياً." },
  explore: { en: "Explore the color guide", ar: "استكشف دليل الألوان" },
  articles: { en: "Read the articles", ar: "اقرأ المقالات" },
  reviewed: { en: "Educational content · Sources cited", ar: "محتوى تثقيفي · مصادر مذكورة" },
  spectrum: { en: "The color spectrum", ar: "الطيف اللوني" },
  spectrumTitle: { en: "A color is a clue—not the conclusion.", ar: "اللون قرينة، وليس النتيجة." },
  spectrumText: { en: "Look for a pattern, then consider fluid intake, food, medicines, and any symptoms that appear alongside the change.", ar: "ابحث عن نمط، ثم ضع في الاعتبار شرب السوائل والطعام والأدوية وأي أعراض تظهر مع التغير." },
  filterAll: { en: "All", ar: "الكل" },
  typical: { en: "Typical", ar: "اعتيادي" },
  watch: { en: "Notice", ar: "انتبه" },
  care: { en: "Seek care", ar: "اطلب الرعاية" },
  howToRead: { en: "How to read the guide", ar: "كيف تقرأ الدليل" },
  howTitle: { en: "Three small checks before you jump to a conclusion.", ar: "ثلاثة تحققات صغيرة قبل القفز إلى استنتاج." },
  safetyEyebrow: { en: "When to seek care", ar: "متى تطلب الرعاية" },
  safetyTitle: { en: "Color plus symptoms can change the next step.", ar: "قد يغيّر اللون مع الأعراض الخطوة التالية." },
  safetyText: { en: "Seek prompt medical advice for blood in urine, very dark or orange urine with yellowing of the skin or eyes, severe pain, fever, or a marked reduction in urine.", ar: "اطلب نصيحة طبية سريعة عند وجود دم في البول، أو بول داكن جداً أو برتقالي مع اصفرار الجلد أو العينين، أو ألم شديد، أو حمى، أو قلة ملحوظة في البول." },
  learn: { en: "Learn in context", ar: "تعلّم ضمن السياق" },
  learnTitle: { en: "Guides for the questions behind the color.", ar: "أدلة للأسئلة خلف اللون." },
  sources: { en: "Evidence & boundaries", ar: "الأدلة والحدود" },
  sourcesTitle: { en: "Made to clarify, not to diagnose.", ar: "مصمم للتوضيح، لا للتشخيص." },
  faq: { en: "Common questions", ar: "أسئلة شائعة" },
  faqTitle: { en: "A steadier way to look at a change.", ar: "طريقة أكثر اتزاناً للنظر إلى التغير." },
};

const steps = [
  { icon: Droplets, title: { en: "1. Notice the pattern", ar: "١. لاحظ النمط" }, body: { en: "One isolated change may be temporary. Repetition, duration, and symptoms are more informative.", ar: "قد يكون التغير المنفرد مؤقتاً. التكرار والمدة والأعراض أكثر إفادة." } },
  { icon: FlaskConical, title: { en: "2. Check the context", ar: "٢. تحقق من السياق" }, body: { en: "Think about fluids, food, vitamins, and medicines before assigning a meaning to color alone.", ar: "فكر في السوائل والطعام والفيتامينات والأدوية قبل إسناد معنى للون وحده." } },
  { icon: ShieldCheck, title: { en: "3. Escalate safely", ar: "٣. صعّد بأمان" }, body: { en: "Persistent changes or warning symptoms belong in a conversation with a healthcare professional.", ar: "التغيرات المستمرة أو أعراض التحذير تناسب محادثة مع مختص صحي." } },
];

const faqs = [
  { q: { en: "What is a usual urine color?", ar: "ما لون البول المعتاد؟" }, a: { en: "Usual urine color often ranges from clear to pale yellow. It may change with fluid intake, food, vitamins, medicines, and health factors.", ar: "غالباً ما يتراوح لون البول المعتاد من الشفاف إلى الأصفر الفاتح. وقد يتغير مع شرب السوائل والطعام والفيتامينات والأدوية وعوامل صحية." } },
  { q: { en: "Can dehydration make urine darker?", ar: "هل يمكن أن يجعل الجفاف البول أغمق؟" }, a: { en: "More concentrated urine can appear darker. If you have been advised to restrict fluids or have a medical condition, follow your clinician’s guidance rather than using a general target.", ar: "قد يبدو البول الأكثر تركيزاً أغمق. إذا نصحك مختص بتقييد السوائل أو كانت لديك حالة طبية، فاتبع إرشاداته بدلاً من هدف عام." } },
  { q: { en: "When is a color change more urgent?", ar: "متى يكون تغير اللون أكثر إلحاحاً؟" }, a: { en: "Blood in urine, severe pain, fever, yellow skin or eyes, faintness, or inability to urinate need timely medical attention.", ar: "الدم في البول، والألم الشديد، والحمى، واصفرار الجلد أو العينين، والدوخة، أو عدم القدرة على التبول تحتاج إلى عناية طبية في الوقت المناسب." } },
  { q: { en: "Does this guide diagnose a condition?", ar: "هل يشخص هذا الدليل حالة ما؟" }, a: { en: "No. A color guide helps you form better questions; diagnosis relies on professional assessment and, where appropriate, testing.", ar: "لا. يساعدك مخطط الألوان على صياغة أسئلة أفضل؛ ويعتمد التشخيص على التقييم المهني والفحوص عند الحاجة." } },
];

export default function Home() {
  const { language } = useLanguage(); const isAr = language === "ar";
  const [filter, setFilter] = useState("all");
  useEffect(() => { document.title = isAr ? "دليل ألوان البول | قراءة واعية للسياق" : "Urine Color Guide | Read the signal in context"; }, [isAr]);
  const filtered = filter === "all" ? urineColors : urineColors.filter((color) => color.type === filter);
  const filterLabels = [["all", copy.filterAll], ["typical", copy.typical], ["watch", copy.watch], ["care", copy.care]] as const;

  return <PageFrame>
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> {text(copy.eyebrow, language)}</p><h1>{text(copy.hero, language)}</h1><p className="hero-lead">{text(copy.heroText, language)}</p><div className="hero-actions"><a href="#chart" className="solid-button">{text(copy.explore, language)} <ArrowUpRight size={18} /></a><Link href="/articles" className="text-button">{text(copy.articles, language)} <ArrowUpRight size={17} /></Link></div><p className="hero-proof"><ShieldCheck size={16} /> {text(copy.reviewed, language)}</p></div>
        <div className="hero-image-wrap"><div className="hero-image-tint" /><img src="/manus-storage/urine-guide-hero_b820baf4.jpg" alt="" className="hero-image" /><div className="hero-float-card"><span>{isAr ? "ابدأ بالسياق" : "Start with context"}</span><strong>{isAr ? "اللون لا يقف وحده" : "Color never stands alone"}</strong></div></div>
      </div>
      <div className="shell signal-strip"><span>{isAr ? "إشارة بصرية" : "Visual signal"}</span><div className="signal-line">{urineColors.map((color) => <i key={color.tone} style={{ backgroundColor: color.tone }} />)}</div><span>{isAr ? "سياق صحي" : "Health context"}</span></div>
      <SpectrumThread className="spectrum-thread--hero" />
    </section>

    <AdUnit variant="top" />
    <section className="spectrum-section" id="chart"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">{text(copy.spectrum, language)}</p><h2>{text(copy.spectrumTitle, language)}</h2></div><p>{text(copy.spectrumText, language)}</p></div><div className="filter-row" role="group" aria-label={isAr ? "تصفية درجات لون البول" : "Filter urine color shades"}>{filterLabels.map(([value, label]) => <button type="button" key={value} className={filter === value ? "filter-button active" : "filter-button"} onClick={() => setFilter(value)}>{text(label, language)}</button>)}</div><div className="color-track">{filtered.map((color, index) => <article className={`color-card color-card--${color.type}`} key={color.tone}><div className="color-swatch" style={{ backgroundColor: color.tone }}><span>{String(index + 1).padStart(2, "0")}</span></div><div><p className="color-type">{color.type === "typical" ? text(copy.typical, language) : color.type === "watch" ? text(copy.watch, language) : text(copy.care, language)}</p><h3>{text(color.label, language)}</h3><p>{text(color.note, language)}</p><small>{text(color.action, language)}</small></div></article>)}</div></div></section>

    <section className="how-section"><SpectrumThread className="spectrum-thread--pale" /><div className="shell how-layout"><div className="how-intro"><p className="eyebrow">{text(copy.howToRead, language)}</p><h2>{text(copy.howTitle, language)}</h2><div className="water-mark"><Droplets size={32} /></div></div><div className="steps-list">{steps.map((step) => { const Icon = step.icon; return <article key={text(step.title, language)} className="step-card"><span className="step-icon"><Icon size={22} /></span><div><h3>{text(step.title, language)}</h3><p>{text(step.body, language)}</p></div></article>; })}</div></div></section>

    <section className="care-section" id="seek-care"><div className="shell care-layout"><div className="care-symbol"><AlertTriangle size={46} /></div><div><p className="eyebrow">{text(copy.safetyEyebrow, language)}</p><h2>{text(copy.safetyTitle, language)}</h2></div><p>{text(copy.safetyText, language)}</p><a href="https://www.mayoclinic.org/diseases-conditions/urine-color/symptoms-causes/syc-20367333" target="_blank" rel="noreferrer" className="care-link">{isAr ? "اطلع على المرجع" : "Read the source"}<ArrowUpRight size={17} /></a></div></section>

    <section className="articles-section"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">{text(copy.learn, language)}</p><h2>{text(copy.learnTitle, language)}</h2></div><Link href="/articles" className="text-button">{isAr ? "كل المقالات" : "All articles"}<ArrowUpRight size={17} /></Link></div><div className="featured-shelf">{articles.slice(0, 4).map((article, index) => <ArticleCard key={article.slug} article={article} featured={index === 0} />)}</div></div><SpectrumThread className="spectrum-thread--articles" /></section>

    <section className="sources-section"><div className="shell source-layout"><div><p className="eyebrow">{text(copy.sources, language)}</p><h2>{text(copy.sourcesTitle, language)}</h2><p>{isAr ? "يقترح الدليل ملاحظات وأسئلة آمنة، ويعرض مصادر عامة يمكنك العودة إليها. لا يستخدم مخطط الألوان بدل التقييم الطبي أو الفحص." : "The guide suggests safe observations and useful questions, then points to public sources. A color chart never replaces clinical assessment or testing."}</p></div><div className="source-list">{sourceLinks.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.name}</span><ArrowUpRight size={17} /></a>)}</div></div></section>

    <section className="faq-section"><div className="shell faq-layout"><div><p className="eyebrow"><CircleHelp size={15} /> {text(copy.faq, language)}</p><h2>{text(copy.faqTitle, language)}</h2></div><div className="faq-list">{faqs.map((faq) => <details key={text(faq.q, language)}><summary>{text(faq.q, language)}<ChevronDown size={20} /></summary><p>{text(faq.a, language)}</p></details>)}</div></div>    </section>
    <AdUnit variant="bottom" />
  </PageFrame>;
}
