// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/pwa-examples/a2hs/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}