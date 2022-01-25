console.log("running sw.js");

var CACHE_NAME = 'v1';
var urlsToCache = [
  '/service-worker/',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});