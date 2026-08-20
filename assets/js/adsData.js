/*
 * مدير إعلانات AdSense موحّد للموقع.
 * يهدف إلى إبقاء تحميل الصفحة أولوية، ثم تهيئة الوحدات القريبة من viewport
 * مرة واحدة فقط مع التعامل الهادئ مع غياب الشبكة أو حجب الإعلانات.
 */
(function (window, document) {
  "use strict";

  var ADS_SELECTOR = "ins.adsbygoogle";
  var WRAPPER_SELECTOR = ".ad-container";
  var initialized = new WeakSet();
  var observer = null;
  var idleHandle = null;
  var idleTimeout = 2500;
  var fallbackDelay = 900;

  function getAdsenseQueue() {
    window.adsbygoogle = window.adsbygoogle || [];
    return window.adsbygoogle;
  }

  function markWrapper(ad, state) {
    var wrapper = ad.closest(WRAPPER_SELECTOR);
    if (!wrapper) return;
    wrapper.classList.remove("is-loading", "is-empty", "is-unavailable");
    if (state) wrapper.classList.add(state);
  }

  function hasBeenProcessed(ad) {
    return initialized.has(ad) || ad.getAttribute("data-adsbygoogle-status") || ad.getAttribute("data-ad-initialized") === "true";
  }

  function initializeAd(ad) {
    if (!ad || hasBeenProcessed(ad)) return false;
    initialized.add(ad);
    ad.setAttribute("data-ad-initialized", "true");
    markWrapper(ad, "is-loading");

    try {
      getAdsenseQueue().push({});
      return true;
    } catch (error) {
      initialized.delete(ad);
      ad.removeAttribute("data-ad-initialized");
      markWrapper(ad, "is-unavailable");
      return false;
    }
  }

  function inspectAd(ad) {
    if (!ad) return;
    var wrapper = ad.closest(WRAPPER_SELECTOR);
    if (!wrapper) return;

    if (ad.getAttribute("data-adsbygoogle-status") === "done" || ad.querySelector("iframe")) {
      markWrapper(ad, "is-ready");
      return;
    }

    // إذا بقيت الوحدة فارغة بعد مهلة معقولة، لا نحجز فراغاً كبيراً في الصفحة.
    window.setTimeout(function () {
      if (!ad.getAttribute("data-adsbygoogle-status") && !ad.querySelector("iframe")) {
        markWrapper(ad, "is-empty");
      }
    }, 7000);
  }

  function initializeVisibleAds(ads) {
    ads.forEach(function (ad) {
      initializeAd(ad);
      inspectAd(ad);
    });
  }

  function scheduleAds() {
    var ads = Array.prototype.slice.call(document.querySelectorAll(ADS_SELECTOR));
    if (!ads.length) return;

    var run = function () {
      idleHandle = null;
      var viewportBottom = (window.innerHeight || document.documentElement.clientHeight) + 420;
      var nearViewport = ads.filter(function (ad) {
        var rect = ad.getBoundingClientRect();
        return rect.top <= viewportBottom && rect.bottom >= -120;
      });
      initializeVisibleAds(nearViewport);
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(run, { timeout: idleTimeout });
    } else {
      idleHandle = window.setTimeout(run, fallbackDelay);
    }
  }

  function observeAds() {
    if (!("IntersectionObserver" in window)) {
      scheduleAds();
      return;
    }

    var pending = [];
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        pending.push(entry.target);
        observer.unobserve(entry.target);
      });
      if (pending.length) {
        var visible = pending.slice();
        pending.length = 0;
        window.setTimeout(function () {
          initializeVisibleAds(visible);
        }, 80);
      }
    }, { rootMargin: "420px 0px" });

    document.querySelectorAll(ADS_SELECTOR).forEach(function (ad) {
      observer.observe(ad);
    });

    // لا نؤخر أول الوحدات القريبة من المحتوى الأساسي إلى ما بعد التصفح.
    window.setTimeout(scheduleAds, fallbackDelay);
  }

  function start() {
    if (!document.querySelector(ADS_SELECTOR)) return;
    observeAds();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }

  window.addEventListener("pagehide", function () {
    if (observer) observer.disconnect();
    if (idleHandle !== null && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleHandle);
    }
  }, { once: true });
})(window, document);
