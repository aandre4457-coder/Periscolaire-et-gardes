
const CACHE_NAME = 'planning-periscolaire-v3';

const BASE_PATH = '/Periscolaire-et-gardes/';

const ASSETS = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icons/icon-192.png',
  BASE_PATH + 'icons/icon-512.png'
];

// Installation du nouveau service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.allSettled(
        ASSETS.map(url => cache.add(url))
      );
    })
  );

  self.skipWaiting();
});

// Activation et suppression des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(key =>
            key.startsWith('planning-periscolaire-') &&
            key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

// Chargement des fichiers
self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Ne jamais intercepter les requêtes Firebase
  // ni les autres services externes.
  if (url.origin !== self.location.origin) return;

  // Pour les pages : priorité à la version en ligne.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);

        return (
          await cache.match(BASE_PATH + 'index.html')
        ) || Response.error();
      })
    );

    return;
  }

  // Pour les autres fichiers : cache avec
  // actualisation en arrière-plan.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);

      const network = fetch(request)
        .then(response => {
          if (response.ok) {
            cache.put(request, response.clone());
          }

          return response;
        });

      if (cached) {
        event.waitUntil(network.catch(() => {}));
        return cached;
      }

      return network.catch(() => Response.error());
    })()
  );
});
