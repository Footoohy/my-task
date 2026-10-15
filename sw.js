self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('taskflow-v1').then((cache) => {
      return cache.addAll(['/my-task/', '/my-task/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});