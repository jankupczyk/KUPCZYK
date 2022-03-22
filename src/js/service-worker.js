try {
    const OFFLINE_VERSION = 1;
    const CACHE_NAME = 'page-offline';
    const OFFLINE_URL = '/public/err/www/offline.html';

    self.addEventListener('install', (event) => {
        event.waitUntil((async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
        })());
    });

    self.addEventListener('activate', (event) => {
        event.waitUntil((async () => {
            if ('navigationPreload' in self.registration) {
                await self.registration.navigationPreload.enable();
            }
        })());
        self.clients.claim();
    });

    self.addEventListener('fetch', (event) => {
        if (event.request.mode === 'navigate') {
            event.respondWith((async () => {
                try {
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }
                    const networkResponse = await fetch(event.request);
                    return networkResponse;
                } catch (error) {
                    console.log(`Fetch failed - redirecting to the offline page - ${CACHE_NAME}`, error);

                    const cache = await caches.open(CACHE_NAME);
                    const cachedResponse = await cache.match(OFFLINE_URL);
                    return cachedResponse;
                }
            })());
        }
    });
    console.log('%c SW: Service-Worker successfully loaded ->', 'color: #8fe38f', CACHE_NAME)
}
catch {
    console.log('%c SW: Service-Worker cannot load ->', 'color: #EE4B2B', CACHE_NAME)
}
