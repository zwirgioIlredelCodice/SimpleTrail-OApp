const staticCacheName = 'v2';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll([
      '/mobileTempO/',
      '/mobileTempO/index.html',
      '/mobileTempO/index.js',
      '/mobileTempO/pages/p1.html',
      '/mobileTempO/pages/p2.html',
      '/mobileTempO/pages/p3.html',
      '/mobileTempO/pages/p4.html',
      '/mobileTempO/scripts/s1.js',
      '/mobileTempO/scripts/s2.js',
      '/mobileTempO/scripts/s3.js',
      '/mobileTempO/scripts/s4.js',
    ])),
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
        .map(key => caches.delate(key))
        );
    })
  );
});