self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('static').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './icon.png',
          './mainfest.json',
          './sw.js',
          './app.js',
          './images/icon1.png',
          './pages/p1.html',
          './pages/p2.html',
          './pages/p3.html',
          './pages/p4.html',
          './scripts/s1.html',
          './scripts/s2.html',
          './scripts/s3.html',
          './scripts/s4.html',
        ]);
      })
    );
  });

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
})