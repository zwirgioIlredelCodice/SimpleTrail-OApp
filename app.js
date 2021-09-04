if ('ServiceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log("SW Registered");
    console.log(registration);
  }).catch(error => {
    console.log("SW regisdtration failed");
    console.log(error);
  });
}