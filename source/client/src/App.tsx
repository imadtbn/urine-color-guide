/** Design system reminder — Calm Laboratory builds a bilingual, educational health experience; theme is intentionally light and editorial. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Route, Router, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import ArticleDetail from "@/pages/ArticleDetail";
import NotFound from "@/pages/NotFound";
import { AboutPage, PrivacyPage } from "@/pages/InfoPage";

function AnalyticsTracker() {
  const [location] = useLocation();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location,
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [location]);
  return null;
}

function AppRoutes() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/articles" component={Articles} />
    <Route path="/articles/:slug" component={ArticleDetail} />
    <Route path="/about" component={AboutPage} />
    <Route path="/privacy" component={PrivacyPage} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  return <ErrorBoundary><LanguageProvider><TooltipProvider><Toaster /><Router base={base}><AnalyticsTracker /><AppRoutes /></Router></TooltipProvider></LanguageProvider></ErrorBoundary>;
}
