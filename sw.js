self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("timer-v1").then(function (cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./bell-98033.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
