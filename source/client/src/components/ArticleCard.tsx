/** Design system reminder — Calm Laboratory article cards use distinct editorial imagery and restrained hover depth. */
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "wouter";
import { type Article, text } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const { language } = useLanguage();
  return (
    <Link href={`/articles/${article.slug}`} className={`article-card ${featured ? "article-card--featured" : ""}`}>
      <div className="article-image-wrap"><img src={article.image} alt="" className="article-image" loading="lazy" /></div>
      <div className="article-card-body">
        <div className="clinical-label"><i />{language === "ar" ? "تثقيفي · سياقي" : "Educational · Contextual"}</div>
        <div className="article-meta"><span>{text(article.category, language)}</span><span><Clock3 size={13} /> {text(article.readingTime, language)}</span></div>
        <h3>{text(article.title, language)}</h3>
        <p>{text(article.excerpt, language)}</p>
        <span className="article-link">{language === "ar" ? "اقرأ الدليل" : "Read the guide"}<ArrowUpRight size={17} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
