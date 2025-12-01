// تسجيل Service Worker وإدارة التخزين المؤقت

const CACHE_NAME = 'ishraq-step-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/colors.css',
  '/css/buttons.css',
  '/js/effects.js',
  '/icon.jpg'
];

// تثبيت Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('فشل التخزين المؤقت:', err))
  );
});

// تفعيل Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// معالجة الطلبات
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا كان الملف موجود في الذاكرة المؤقتة، اعتمد عليه
        if (response) {
          return response;
        }
        // وإلا، جلب من الإنترنت
        return fetch(event.request);
      })
      .catch(() => {
        // في حالة عدم الاتصال بالإنترنت
        return new Response('لا يوجد اتصال بالإنترنت');
      })
  );
});
