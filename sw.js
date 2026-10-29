// Service worker simples — cache do "shell" e das imagens pra abrir rápido e funcionar offline
const CACHE = "armlock-v1";
const ASSETS = [
  "./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "./img/hero.webp", "./img/corte-fade.webp", "./img/corte-social.webp", "./img/corte-infantil.webp",
  "./img/barba.webp", "./img/combo.webp", "./img/platinado.webp", "./img/hidratacao.webp"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
