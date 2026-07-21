/**
 * service-worker.js — تخزين مؤقت بسيط للملفات الأساسية لتحسين الأداء
 * وإتاحة تصفح محدود دون اتصال (Offline-first shell).
 */
const CACHE_NAME = "urine-guide-v1";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/css/responsive.css",
  "/assets/js/data.js",
  "/assets/js/faq-data.js",
  "/assets/js/app.js",
  "/manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => null)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
