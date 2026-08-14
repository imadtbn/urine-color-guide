/**
 * app.js — منطق التفاعل الرئيسي للموقع
 * لا يعتمد على أي إطار عمل خارجي (Vanilla JS فقط)
 */
(function () {
  "use strict";

  /* ---------- عناصر عامة ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- الوضع الليلي ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const savedTheme = safeGet("theme");
  if (savedTheme === "dark") root.setAttribute("data-theme", "dark");

  themeToggle?.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      safeSet("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      safeSet("theme", "dark");
    }
  });

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  function safeSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      /* تجاهل في حال تعطيل التخزين */
    }
  }

  /* ---------- قائمة الجوال ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navOverlay = document.getElementById("navOverlay");
  function setNavState(open) {
    if (!mainNav || !navToggle) return;
    mainNav.classList.toggle("mobile-open", open);
    navOverlay?.classList.toggle("active", open);
    navOverlay?.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    navToggle.setAttribute("title", open ? "إغلاق القائمة" : "القائمة");
    navToggle.textContent = open ? "×" : "☰";
  }
  navToggle?.addEventListener("click", () => {
    setNavState(!mainNav.classList.contains("mobile-open"));
  });
  mainNav?.addEventListener("click", (e) => {
    if (e.target.closest("a")) setNavState(false);
  });
  navOverlay?.addEventListener("click", () => setNavState(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavState(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setNavState(false);
  });

  /* ---------- رسم بطاقات الألوان ---------- */
  const grid = document.getElementById("colorGrid");
  const severityLabelMap = { normal: "طبيعي", watch: "انتبه", urgent: "طارئ" };

    /* ---------- Scroll Reveal ---------- */
  let observer;
  function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.in-view)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in-view"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    items.forEach((i) => observer.observe(i));
  }
  observeReveal();
  

  function renderCards(filter) {
    if (!grid) return;
    grid.innerHTML = "";
    const list = filter && filter !== "all" ? URINE_COLORS.filter((c) => c.severity === filter) : URINE_COLORS;

    list.forEach((c) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "color-card reveal";
      card.setAttribute("data-id", c.id);
      card.setAttribute("aria-haspopup", "dialog");
      card.innerHTML = `
        <div class="color-swatch" style="background:${shade(c.hex)}">
          <span class="badge ${c.severity}">${severityLabelMap[c.severity]}</span>
          <span class="vial-mini" style="background:${c.hex}"></span>
        </div>
        <div class="color-body">
          <h3>${c.name}</h3>
          <div class="name-en">${c.nameEn}</div>
          <p>${c.summary}</p>
          <span class="card-more">عرض التفاصيل الكاملة ←</span>
        </div>
      `;
      card.addEventListener("click", () => openDetail(c.id));
      grid.appendChild(card);
    });
    observeReveal();
  }

  function shade(hex) {
    // خلفية فاتحة متدرجة من لون العينة لإطار البطاقة
    return `linear-gradient(160deg, ${hex}33, ${hex}11)`;
  }

  /* ---------- الفلاتر ---------- */
  const chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      renderCards(chip.getAttribute("data-filter"));
    });
  });

  renderCards("all");

  /* ---------- نافذة تفاصيل اللون ---------- */
  const overlay = document.getElementById("detailOverlay");
  const detailPanel = document.getElementById("detailPanel");
  let lastFocused = null;

  function openDetail(id) {
    const c = URINE_COLORS.find((x) => x.id === id);
    if (!c || !overlay || !detailPanel) return;
    lastFocused = document.activeElement;

    detailPanel.innerHTML = `
      <div class="detail-head" style="background:linear-gradient(135deg, ${c.hex}, ${darken(c.hex)})">
        <button class="detail-close" id="detailClose" aria-label="إغلاق">✕</button>
        <span class="vial-mini-lg" style="background:${c.hex}"></span>
        <div>
          <h3>${c.name}</h3>
          <div class="name-en">${c.nameEn} — ${severityLabelMap[c.severity]}: ${c.severityLabel}</div>
        </div>
      </div>
      <div class="detail-body">
        <p>${c.summary}</p>

        <h4>الأسباب المحتملة</h4>
        ${listOrEmpty(c.causes)}

        <h4>أدوية قد تسبب هذا اللون</h4>
        ${listOrEmpty(c.medications)}

        <h4>أطعمة مرتبطة بهذا اللون</h4>
        ${listOrEmpty(c.foods)}

        <h4>حالات مرضية محتملة</h4>
        ${listOrEmpty(c.conditions)}

        <h4>إجراءات منزلية أولية</h4>
        ${listOrEmpty(c.homeCare)}

        <div class="emergency-box">
          <div>
            <strong>متى تراجع الطوارئ أو الطبيب؟</strong>
            ${c.emergency}
          </div>
        </div>

        <div class="source-tag">
          المصادر الطبية:
          ${c.sources.map((s) => `<span>${s}</span>`).join(" ")}
        </div>
      </div>
    `;

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("detailClose")?.addEventListener("click", closeDetail);
    detailPanel.querySelector(".detail-close")?.focus();
    history.replaceState(null, "", `#${id}`);
  }

  function closeDetail() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
    history.replaceState(null, "", location.pathname);
  }

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay?.classList.contains("open")) closeDetail();
  });

  function listOrEmpty(arr) {
    if (!arr || arr.length === 0) {
      return `<p class="detail-empty">لا توجد بيانات إضافية لهذا التصنيف.</p>`;
    }
    return `<ul>${arr.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  }

  function darken(hex) {
    // تغميق بسيط للون Hex لعمل تدرج في رأس النافذة
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) - 40;
    let g = ((num >> 8) & 0x00ff) - 40;
    let b = (num & 0x0000ff) - 40;
    r = Math.max(0, r);
    g = Math.max(0, g);
    b = Math.max(0, b);
    return `rgb(${r},${g},${b})`;
  }

  // فتح تفاصيل مباشرة إذا كان هناك hash في الرابط
  window.addEventListener("DOMContentLoaded", () => {
    const hash = location.hash.replace("#", "");
    if (hash && URINE_COLORS.some((c) => c.id === hash)) {
      setTimeout(() => openDetail(hash), 300);
    }
  });

  /* ---------- جدول المقارنة ---------- */
  const compareBody = document.getElementById("compareBody");
  if (compareBody) {
    compareBody.innerHTML = URINE_COLORS.map((c) => {
      const urgencyStars = { normal: "●", watch: "●●", urgent: "●●●" }[c.severity];
      return `
        <tr>
          <td><span class="dot" style="background:${c.hex}"></span>${c.name}</td>
          <td>${severityLabelMap[c.severity]}</td>
          <td>${c.severityLabel}</td>
          <td>${urgencyStars}</td>
          <td>${c.causes[0] || "—"}</td>
        </tr>
      `;
    }).join("");
  }

  /* ---------- حاسبة الترطيب ---------- */
  const hydrationForm = document.getElementById("hydrationForm");
  const weightInput = document.getElementById("weightInput");
  const weightValue = document.getElementById("weightValue");
  const activityInput = document.getElementById("activityInput");
  const climateInput = document.getElementById("climateInput");
  const hydrationReset = document.getElementById("hydrationReset");
  const amountOut = document.getElementById("hydrationAmount");
  const hydrationMl = document.getElementById("hydrationMl");
  const hydrationCups = document.getElementById("hydrationCups");
  const hydrationServing = document.getElementById("hydrationServing");
  const hydrationGlasses = document.getElementById("hydrationGlasses");
  const hydrationBadge = document.getElementById("hydrationBadge");
  const meterFill = document.getElementById("hydrationMeterFill");
  const hydrationMeter = document.querySelector(".hydration-meter[role=progressbar]");
  const meterVial = document.getElementById("hydrationVial");
  const hydrationResult = document.getElementById("hydrationResult");

  function calcHydration() {
    if (!weightInput) return;
    const rawWeight = Number(weightInput.value);
    const validWeight = Number.isFinite(rawWeight) && rawWeight >= 30 && rawWeight <= 200;
    if (!validWeight) {
      weightInput.setAttribute("aria-invalid", "true");
      weightValue && (weightValue.textContent = "30–200 كجم");
      hydrationResult?.classList.add("is-invalid");
      hydrationBadge && (hydrationBadge.textContent = "أكمل البيانات");
      amountOut && (amountOut.textContent = "—");
      hydrationMl && (hydrationMl.textContent = "—");
      hydrationCups && (hydrationCups.textContent = "—");
      hydrationServing && (hydrationServing.textContent = "—");
      hydrationGlasses && (hydrationGlasses.textContent = "—");
      meterFill && (meterFill.style.width = "0%");
      meterVial && (meterVial.textContent = "أدخل وزناً بين 30 و200 كجم لعرض تقدير تثقيفي.");
      return;
    }
    weightInput.removeAttribute("aria-invalid");
    hydrationResult?.classList.remove("is-invalid");
    const weight = rawWeight;
    const activity = Number(activityInput?.value) || 0;
    const climate = Number(climateInput?.value) || 0;

    // معادلة تقديرية تثقيفية داخل الموقع: 33 مل لكل كجم + إضافات النشاط والمناخ.
    let ml = weight * 33 + activity * 350 + climate * 300;
    ml = Math.round(ml / 50) * 50;
    const liters = (ml / 1000).toFixed(1);
    const cups = Math.round(ml / 250);
    const serving = Math.round((ml / 8) / 10) * 10;
    const glasses = Math.max(1, Math.round((ml / 8) / 250));
    const pct = Math.min(100, Math.max(15, (ml / 4000) * 100));

    if (weightValue) weightValue.textContent = `${weight} كجم`;
    if (amountOut) amountOut.textContent = `${liters} لتر`;
    if (hydrationMl) hydrationMl.textContent = String(ml);
    if (hydrationCups) hydrationCups.textContent = String(cups);
    if (hydrationServing) hydrationServing.textContent = `${serving} مل`;
    if (hydrationGlasses) hydrationGlasses.textContent = `${Math.max(1, glasses - 1)}–${glasses + 1}`;
    if (meterFill) meterFill.style.width = `${pct}%`;
    hydrationMeter?.setAttribute("aria-valuenow", String(ml));

    const isHighEstimate = ml > 3500;
    if (hydrationBadge) {
      hydrationBadge.textContent = isHighEstimate ? "تقدير مرتفع نسبياً" : "تقدير عام";
      hydrationBadge.classList.toggle("is-caution", isHighEstimate);
    }
    if (hydrationResult) hydrationResult.classList.toggle("is-caution", isHighEstimate);
    if (meterVial) meterVial.textContent = isHighEstimate
      ? "ارتفع التقدير بسبب الوزن أو النشاط أو الحرارة؛ وزّع السوائل ولا تتجاوز تعليمات طبيبك."
      : "وزّع الكمية على اليوم، وتذكّر أن هذا تقدير تثقيفي عام وليس توصية طبية شخصية.";
  }

  ["input", "change"].forEach((evt) => {
    weightInput?.addEventListener(evt, calcHydration);
    activityInput?.addEventListener(evt, calcHydration);
    climateInput?.addEventListener(evt, calcHydration);
  });
  hydrationForm?.addEventListener("submit", (event) => event.preventDefault());
  hydrationReset?.addEventListener("click", () => {
    if (weightInput) weightInput.value = "70";
    if (activityInput) activityInput.value = "0";
    if (climateInput) climateInput.value = "0";
    calcHydration();
  });
  calcHydration();

  /* ---------- الأسئلة الشائعة ---------- */
  const faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.innerHTML = FAQ_ITEMS.map(
      (item, i) => `
      <div class="faq-item" data-open="false">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
          <span>${item.q}</span>
          <span class="chev" aria-hidden="true">⌄</span>
        </button>
        <div class="faq-a" role="region" id="faq-a-${i}" aria-labelledby="faq-q-${i}">
          <p>${item.a}</p>
        </div>
      </div>
    `
    ).join("");

    faqList.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-q");
      const ans = item.querySelector(".faq-a");
      btn.addEventListener("click", () => {
        const isOpen = item.getAttribute("data-open") === "true";
        item.setAttribute("data-open", String(!isOpen));
        btn.setAttribute("aria-expanded", String(!isOpen));
        ans.style.maxHeight = !isOpen ? ans.scrollHeight + "px" : "0";
      });
    });
  }

  /* ---------- تكبير الخط (إمكانية الوصول) ---------- */
  const incFont = document.getElementById("fontInc");
  const decFont = document.getElementById("fontDec");
  let fontScale = Number(safeGet("fontScale")) || 100;
  applyFontScale();

  incFont?.addEventListener("click", () => {
    fontScale = Math.min(130, fontScale + 10);
    applyFontScale();
  });
  decFont?.addEventListener("click", () => {
    fontScale = Math.max(90, fontScale - 10);
    applyFontScale();
  });
  function applyFontScale() {
    document.documentElement.style.fontSize = fontScale + "%";
    safeSet("fontScale", String(fontScale));
  }

  /* ---------- زر العودة للأعلى ---------- */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) backToTop?.classList.add("show");
    else backToTop?.classList.remove("show");
  });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- عداد الترقيم (Counter animation) ---------- */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.getAttribute("data-count"));
    let current = 0;
    const step = Math.max(1, Math.round(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 30);
  });



  /* ---------- بحث سريع ضمن الصفحة ---------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");

  searchToggle?.addEventListener("click", () => {
    searchBar?.classList.toggle("open");
    if (searchBar?.classList.contains("open")) searchInput?.focus();
  });

  searchInput?.addEventListener("input", () => {
    const q = searchInput.value.trim();
    if (!q) {
      renderCards("all");
      document.querySelector('.chip[data-filter="all"]')?.setAttribute("aria-pressed", "true");
      return;
    }
    const filtered = URINE_COLORS.filter(
      (c) => c.name.includes(q) || c.nameEn.toLowerCase().includes(q.toLowerCase())
    );
    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.innerHTML = `<p class="detail-empty">لا توجد نتائج مطابقة لـ "${q}"</p>`;
      return;
    }
    filtered.forEach((c) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "color-card";
      card.innerHTML = `
        <div class="color-swatch" style="background:${shade(c.hex)}">
          <span class="badge ${c.severity}">${severityLabelMap[c.severity]}</span>
          <span class="vial-mini" style="background:${c.hex}"></span>
        </div>
        <div class="color-body">
          <h3>${c.name}</h3>
          <div class="name-en">${c.nameEn}</div>
          <p>${c.summary}</p>
          <span class="card-more">عرض التفاصيل الكاملة ←</span>
        </div>`;
      card.addEventListener("click", () => openDetail(c.id));
      grid.appendChild(card);
    });
  });

  /* ---------- Lightbox بسيط لصور المقالات (إن وجدت) ---------- */
  document.querySelectorAll("[data-lightbox]").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const lb = document.createElement("div");
      lb.className = "detail-overlay open";
      lb.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="max-width:90vw;max-height:85vh;border-radius:16px;margin:auto;">`;
      lb.addEventListener("click", () => lb.remove());
      document.body.appendChild(lb);
    });
  });
})();
