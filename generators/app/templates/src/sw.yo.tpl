self.addEventListener('install', function(e) {
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open("<%= packageName %>").then(function(cache) {
            return cache.addAll([
                `/`,
                `/index.html?timestamp=${timeStamp}`,
                `/styles.css?timestamp=${timeStamp}`,
                `/vendor.bundle.js?timestamp=${timeStamp}`,
                `/app.bundle.js?timestamp=${timeStamp}`
            ])
                .then(function(){ 
                  self.skipWaiting();
                });
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request, { ignoreSearch: true }).then(function(response) {
            return response || fetch(e.request);
        })
    );
});