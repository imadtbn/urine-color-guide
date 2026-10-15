/**
 * Enhances the already-published static bundle. The TypeScript SiteShell renders
 * these icons natively on the next build; this script skips icons already present.
 * Works with wouter navigation, Arabic/English direction and the existing mobile menu.
 */
(function () {
  "use strict";

  var svgNS = "http://www.w3.org/2000/svg";
  var paths = {
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.4 3-3.1 3H17c-1.1 0-1.6 1.2-1 2.1.3.6.5 1.2.5 1.9 0 1.7-1.4 3-3 3H12Z"/>',
    book: '<path d="M12 7v14"/><path d="M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2h-3a4 4 0 0 0-4 4 4 4 0 0 0-4-4H5a2 2 0 0 0-2 2Z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/><path d="M3.5 12h4l2-3 3 6 2-3h6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    house: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M9 22V12h6v10"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    stethoscope: '<path d="M6 3v5a6 6 0 0 0 12 0V3"/><path d="M6 3H4v3h2M18 3h2v3h-2"/><path d="M12 14v2a4 4 0 0 0 8 0v-2"/><circle cx="20" cy="12" r="2"/>',
    activity: '<path d="M22 12h-4l-3 7L9 5l-3 7H2"/>'
  };

  var styles = `
.site-header .primary-nav { gap:clamp(5px,1.1vw,16px); }
.site-header .primary-nav > a { display:inline-flex; align-items:center; gap:8px; padding:9px 5px; border-radius:10px; white-space:nowrap; }
.site-header .primary-nav > a .nav-link-icon { width:16px; height:16px; flex:none; color:#168e8a; }
.site-header .primary-nav > a:hover { background:rgba(22,163,160,.07); color:#123d5a; }
.site-header .primary-nav > a:hover .nav-link-icon { color:#0a7f7c; }
.site-header .primary-nav > a:focus-visible,.site-footer .footer-grid a:focus-visible { outline:2px solid #16a3a0; outline-offset:3px; }
.site-footer .footer-grid section:not(:first-child) a { display:flex; align-items:flex-start; gap:9px; min-height:30px; line-height:1.55; border-radius:7px; }
.site-footer .footer-link-icon { width:16px; height:16px; flex:0 0 16px; margin-top:2px; color:#79d5ce; }
.site-footer .footer-link-label { flex:1; min-width:0; overflow-wrap:anywhere; }
.site-footer .footer-external-icon { flex:0 0 14px; margin-inline-start:auto; margin-top:2px; opacity:.72; }
@media (max-width:1020px) {
  .site-header .header-row { min-height:68px; }
  .site-header .primary-nav { display:none; position:absolute; z-index:42; top:100%; inset-inline:16px; margin:0; padding:14px; background:#fbfaf5; border:1px solid rgba(18,61,90,.14); box-shadow:0 19px 40px rgba(18,61,90,.16); border-radius:0 0 18px 18px; flex-direction:column; align-items:stretch; gap:4px; max-height:calc(100dvh - 82px); overflow-y:auto; overscroll-behavior:contain; }
  .site-header .primary-nav--open { display:flex; }
  .site-header .primary-nav > a { min-height:44px; padding:10px 13px; font-size:14px; white-space:normal; }
  .site-header .primary-nav .nav-link-icon { width:18px; height:18px; }
  .site-header .language-button--mobile { display:inline-flex; min-height:44px; justify-content:center; margin-top:5px; }
  .site-header .header-controls .language-button { display:none; }
  .site-header .menu-button { display:inline-flex; flex:none; }
}
@media (max-width:420px) {
  .site-header .primary-nav { inset-inline:12px; }
  .site-footer .footer-grid section:not(:first-child) a { min-height:36px; }
}`;

  function iconFor(link, section) {
    var url;
    try { url = new URL(link.getAttribute("href") || "", document.baseURI); }
    catch (_) { return null; }
    if (section === "sources") {
      if (url.hostname.indexOf("mayoclinic.org") !== -1) return "stethoscope";
      if (url.hostname.indexOf("medlineplus.gov") !== -1) return "heart";
      return "activity";
    }
    if (section === "header" && url.hash === "#chart") return "palette";
    if (section === "header" && url.hash === "#seek-care") return "heart";
    var pathname = url.pathname.replace(/\\/+$/, "");
    if (pathname.endsWith("/articles")) return "book";
    if (pathname.endsWith("/about")) return "info";
    if (pathname.endsWith("/privacy")) return "shield";
    return section === "header" ? "compass" : "house";
  }

  function makeIcon(name, className) {
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.9");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.innerHTML = paths[name];
    return svg;
  }

  function enhanceLinks(selector, section) {
    document.querySelectorAll(selector).forEach(function (link) {
      if (link.querySelector(".nav-link-icon, .footer-link-icon")) return;
      var name = iconFor(link, section);
      if (!name) return;
      link.insertBefore(makeIcon(name, section === "header" ? "nav-link-icon" : "footer-link-icon"), link.firstChild);
      if (section === "sources" && !link.querySelector(".footer-link-label")) {
        // Group the existing label so long source titles can wrap without moving icons.
        Array.from(link.childNodes).forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            var label = document.createElement("span");
            label.className = "footer-link-label";
            node.replaceWith(label);
            label.textContent = node.textContent;
          }
        });
        var external = link.querySelector("svg:not(.footer-link-icon)");
        if (external) external.classList.add("footer-external-icon");
      }
    });
  }

  var scheduled = false;
  function enhanceAll() {
    enhanceLinks(".site-header .primary-nav > a", "header");
    enhanceLinks(".site-footer .footer-grid > section:nth-child(2) > a", "footer");
    enhanceLinks(".site-footer .footer-grid > section:nth-child(3) > a", "sources");
  }
  function scheduleEnhancement() {
    if (scheduled) return;
    scheduled = true;
    Promise.resolve().then(function () { scheduled = false; enhanceAll(); });
  }

  function init() {
    if (!document.getElementById("ucg-nav-icons-style")) {
      var style = document.createElement("style");
      style.id = "ucg-nav-icons-style";
      style.textContent = styles;
      document.head.appendChild(style);
    }
    enhanceAll();
    if (window.MutationObserver) {
      var observer = new MutationObserver(scheduleEnhancement);
      observer.observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
