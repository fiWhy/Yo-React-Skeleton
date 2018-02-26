self.addEventListener('install', e => {
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open("<%= packageName %>").then(cache => {
            return cache.addAll([
                `/`,
                `/index.html?timestamp=${timeStamp}`,
                `/styles.css?timestamp=${timeStamp}`,
                `/vendor.bundle.js?timestamp=${timeStamp}`,
                `/app.bundle.js?timestamp=${timeStamp}`
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});