const staticCacheName = 'v8.2';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(
        [
          '/SimpleTrail-OApp/',
          '/SimpleTrail-OApp/index.html',
          '/SimpleTrail-OApp/index.js',
          '/SimpleTrail-OApp/pages/p1.html',
          '/SimpleTrail-OApp/pages/p2.html',
          '/SimpleTrail-OApp/pages/p3.html',
          '/SimpleTrail-OApp/pages/p4.html',
          '/SimpleTrail-OApp/scripts/s1.js',
          '/SimpleTrail-OApp/scripts/s2.js',
          '/SimpleTrail-OApp/scripts/s3.js',
          '/SimpleTrail-OApp/scripts/s4.js',
          '/SimpleTrail-OApp/styles/style1.css',
          '/SimpleTrail-OApp/images/icon.png'
        ]
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.
        filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
        );
    })
  );
});