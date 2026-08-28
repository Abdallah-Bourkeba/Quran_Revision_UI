importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_NAME = "quran-pwa-v1";
const urlsToCache = ["./", "./index.html", "./manifest.json", "./icon.png"];

// تثبيت ملفات الكاش
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

// استرجاع الملفات من الكاش ليعمل بدون إنترنت (لواجهة التطبيق)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
