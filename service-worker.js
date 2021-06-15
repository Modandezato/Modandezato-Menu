// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
// const precacheResources = [ '/service-worker.js', '/images', '/fonts', '/plugins', '/index.html', '/styles.css', '/script.js',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_fill,h_896,w_672/v1623309591/REESES_x14qbz.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_scale,w_672/v1623304509/HERSHEYS_SPECIAL_DARK-1_r3orzh.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_scale,w_672/v1623304509/GHIRARDELLI_WHITE-1_wpnghl.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_fill,h_896,w_672/v1623304508/DELUXE_SAMPLER_-1_g8rzxv.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_scale,w_672/v1623134568/BROOKIES_coyw3n.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_crop,g_south,q_80,y_0/v1623137025/IMG_2119_zzpfps.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_scale,q_80,w_672/v1623134569/BITE-SIZED_ue9ouf.webp',
// 'https://res.cloudinary.com/robin-optimizations/image/upload/c_scale,q_80,w_672/v1623134568/COOKIE_CAKE_fitois.webp'];

const precacheResources = ['/','index.html'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});