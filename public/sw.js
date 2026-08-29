// Service worker minimal — syarat wajib agar Chrome/Android menganggap
// situs ini sebagai PWA yang bisa di-install (bukan sekadar bookmark).
const CACHE_NAME = "buku-tagihan-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Passthrough sederhana — tidak melakukan caching agresif,
// cukup untuk memenuhi syarat installability.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
