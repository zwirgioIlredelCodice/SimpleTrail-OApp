self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
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

  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/icon.jpg');
        });
      }
    }));
  });

  self.addEventListener('activate', (event) => {
    var cacheKeeplist = ['v2'];
  
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });