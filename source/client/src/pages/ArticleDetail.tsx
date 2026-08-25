/** Design system reminder — Calm Laboratory article pages prioritize calm, evidence-conscious reading and visible safety context. */
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, BookOpenCheck, CheckCircle2, Clock3 } from "lucide-react";
import { Link, useRoute } from "wouter";
import { ArticleCard } from "@/components/ArticleCard";
import { PageFrame } from "@/components/SiteShell";
import { articles, text } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";
import NotFound from "@/pages/NotFound";

export default function ArticleDetail() {
  const [, params] = useRoute("/articles/:slug");
  const article = articles.find((item) => item.slug === params?.slug);
  const { language } = useLanguage();
  const isAr = language === "ar";
  useEffect(() => { if (article) document.title = `${text(article.title, language)} | Urine Color Guide`; }, [article, language]);
  if (!article) return <NotFound />;
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  return <PageFrame>
    <article className="article-detail">
      <div className="shell">
        <Link href="/articles" className="back-link"><ArrowLeft size={16} /> {isAr ? "العودة إلى المقالات" : "All articles"}</Link>
        <div className="article-detail-head">
          <div>
            <div className="article-meta"><span>{text(article.category, language)}</span><span><Clock3 size={13} /> {text(article.readingTime, language)}</span></div>
            <h1>{text(article.title, language)}</h1>
            <p>{text(article.description, language)}</p>
          </div>
          <div className="article-read-label"><BookOpenCheck size={23} /><span>{isAr ? "قراءة تثقيفية" : "Educational reading"}</span></div>
        </div>
      </div>
      <div className="shell article-feature-image"><img src={article.image} alt="" /></div>

      <div className="shell article-content-layout">
        <div className="article-copy">
          {article.body.map((paragraph, index) => <p key={index}>{text(paragraph, language)}</p>)}
          <section className="observe-panel">
            <p className="panel-kicker">{isAr ? "ما يمكنك ملاحظته" : "What you may notice"}</p>
            <h2>{isAr ? "ضع الإشارة في سياقها." : "Put the signal in context."}</h2>
            <ul>{article.observe.map((item) => <li key={text(item, language)}><CheckCircle2 size={18} />{text(item, language)}</li>)}</ul>
          </section>
          <section className="care-panel">
            <AlertTriangle size={22} aria-hidden="true" /><div><p className="panel-kicker">{isAr ? "متى تطلب الرعاية" : "When to seek care"}</p><p>{text(article.care, language)}</p></div>
          </section>
          <p className="article-disclaimer">{isAr ? "المعلومات هنا للتثقيف العام ولا تغني عن تقييم مختص. إذا كانت الأعراض شديدة أو متفاقمة، تواصل مع خدمة طبية عاجلة." : "This information is for general education and does not replace professional assessment. If symptoms are severe or worsening, contact urgent medical services."}</p>
        </div>
        <aside className="article-aside">
          <span className="aside-label">{isAr ? "تذكر" : "Keep in mind"}</span>
          <p>{isAr ? "لون البول أداة ملاحظة، وليس نتيجة اختبار. الأعراض والسياق والفحوص تكمل الصورة." : "Urine color is an observation, not a test result. Symptoms, context, and testing complete the picture."}</p>
          <a href="https://www.mayoclinic.org/diseases-conditions/urine-color/symptoms-causes/syc-20367333" target="_blank" rel="noreferrer">{isAr ? "راجع المصدر الطبي" : "Read a medical source"}</a>
        </aside>
      </div>
    </article>

    <section className="related-section"><div className="shell"><p className="eyebrow">{isAr ? "قراءة ذات صلة" : "Related reading"}</p><h2>{isAr ? "تابع من الإشارة إلى السياق." : "Move from a signal to its context."}</h2><div className="related-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>
  </PageFrame>;
}
