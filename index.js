// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/SimpleTrail-OApp/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}