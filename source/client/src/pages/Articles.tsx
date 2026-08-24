/** Design system reminder — Calm Laboratory article index is a spacious editorial shelf, not a uniform card wall. */
import { useEffect } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { PageFrame } from "@/components/SiteShell";
import { SpectrumThread } from "@/components/SpectrumThread";
import { articles } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Articles() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  useEffect(() => { document.title = isAr ? "المقالات | دليل ألوان البول" : "Articles | Urine Color Guide"; }, [isAr]);
  return <PageFrame>
    <section className="article-index-hero">
      <div className="shell">
        <p className="eyebrow">{isAr ? "مكتبة التثقيف الصحي" : "Health education library"}</p>
        <h1>{isAr ? "سياق أوضح للإشارات التي تلاحظها." : "Clearer context for the signals you notice."}</h1>
        <p className="page-lead">{isAr ? "أدلة قصيرة لفهم موضوعات الكلى والمسالك وما يمكن أن يعنيه مظهر البول ضمن أعراضك وسياقك الصحي." : "Concise guides to kidney and urinary topics—and how urine appearance fits alongside symptoms and your wider health context."}</p>
      </div>
      <SpectrumThread className="spectrum-thread--index" />
    </section>
    <section className="shell article-index-layout" aria-label={isAr ? "المقالات" : "Articles"}>
      <div className="editorial-note"><span>{isAr ? "نقطة بداية" : "Start here"}</span><p>{isAr ? "لا تصف الصور أو المقالات حالة فردية. استخدمها لتحديد الأسئلة المهمة ثم اطلب المشورة المهنية عند الحاجة." : "Images and articles do not diagnose an individual condition. Use them to identify the important questions, then seek professional advice when needed."}</p><strong>{isAr ? "قراءة تثقيفية" : "Educational reading"}</strong></div>
      <div className="article-shelf">
        {articles.map((article, index) => <ArticleCard article={article} key={article.slug} featured={index === 0} />)}
      </div>
    </section>
  </PageFrame>;
}
