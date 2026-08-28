(function () {
  "use strict";

  var config = {
    ga4Id: "G-GDKZ91CQQ9",
    adsenseClient: "ca-pub-5656416032906373",
    gtmId: "GTM-P6ZPW7KL",
    clarityId: "xxxxxxxx", // ضع هنا معرف Microsoft Clarity
    adsenseSlots: {
      top: "7867079394",
      inline: "3143411927",
      bottom: "6528123169"
    }
  };

  var PLACEHOLDER_ID = "xxxxxxxx";
  var loaded = {};
  var pageViewKey = "__siteTagsLastPageView";

  window.__siteTagConfig = config;

  function hasRealId(value, prefix) {
    return typeof value === "string" && value !== PLACEHOLDER_ID && (!prefix || value.indexOf(prefix) === 0);
  }

  function hasScript(matcher) {
    return Array.prototype.some.call(document.scripts, function (script) {
      return matcher(script.src || "");
    });
  }

  function loadScript(key, src, attributes) {
    if (loaded[key] || hasScript(function (currentSrc) { return currentSrc.indexOf(src) !== -1; })) {
      loaded[key] = true;
      return;
    }

    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    Object.keys(attributes || {}).forEach(function (attribute) {
      script.setAttribute(attribute, attributes[attribute]);
    });
    document.head.appendChild(script);
    loaded[key] = true;
  }

  function getPageData() {
    return {
      page_path: window.location.pathname + window.location.search + window.location.hash,
      page_location: window.location.href,
      page_title: document.title
    };
  }

  function sendPageView() {
    var pageData = getPageData();
    var pageKey = pageData.page_path;
    if (window[pageViewKey] === pageKey) return;
    window[pageViewKey] = pageKey;

    if (hasRealId(config.gtmId, "GTM-")) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "page_view", page_path: pageData.page_path, page_location: pageData.page_location, page_title: pageData.page_title });
      return;
    }

    if (typeof window.gtag === "function" && hasRealId(config.ga4Id, "G-")) {
      window.gtag("event", "page_view", pageData);
    }
  }

  function schedulePageView() {
    window.setTimeout(sendPageView, 100);
  }

  function setupAnalytics() {
    if (hasRealId(config.gtmId, "GTM-")) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      loadScript("gtm", "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(config.gtmId));
      return;
    }

    if (hasRealId(config.ga4Id, "G-")) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", config.ga4Id, { anonymize_ip: true, send_page_view: false });
      loadScript("ga4", "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.ga4Id));
    }
  }

  function setupClarity() {
    if (!hasRealId(config.clarityId) || hasRealId(config.gtmId, "GTM-")) return;
    loadScript("clarity", "https://www.clarity.ms/tag/" + encodeURIComponent(config.clarityId));
  }

  function loadAdSenseWhenNeeded() {
    if (!document.querySelector("ins.adsbygoogle") || !hasRealId(config.adsenseClient, "ca-pub-")) return;
    loadScript("adsense", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(config.adsenseClient), { crossorigin: "anonymous" });
  }

  function setupAdSenseObserver() {
    loadAdSenseWhenNeeded();
    if (!window.MutationObserver) return;
    var observer = new MutationObserver(function () {
      if (document.querySelector("ins.adsbygoogle")) {
        loadAdSenseWhenNeeded();
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  function setupRouteTracking() {
    ["pushState", "replaceState"].forEach(function (method) {
      var original = window.history[method];
      if (typeof original !== "function") return;
      window.history[method] = function () {
        var result = original.apply(this, arguments);
        schedulePageView();
        return result;
      };
    });
    window.addEventListener("popstate", schedulePageView);
    window.addEventListener("hashchange", schedulePageView);
    schedulePageView();
  }

  setupAnalytics();
  setupClarity();
  setupAdSenseObserver();
  setupRouteTracking();
})();
