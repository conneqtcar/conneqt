/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'conneqtcar-v2';
const OFFLINE_URL = '/offline';

// Assets para pré-cachear na instalação
const PRECACHE_URLS = [OFFLINE_URL];

// ─── Install ─────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

// ─── Activate ────────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// ─── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-GET
  if (request.method !== 'GET') return;

  // Ignorar extensões do browser / chrome-extension
  if (!url.protocol.startsWith('http')) return;

  // ── API calls: network-only, fallback JSON offline ──────────────────────────
  if (url.pathname.startsWith('/api/') || url.port === '3001') {
    event.respondWith(
      fetch(request).catch(
        () =>
          new Response(JSON.stringify({ error: 'Sem conexão com o servidor', offline: true }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' },
          }),
      ),
    );
    return;
  }

  // ── Next.js/_next/static: network-first para JS/CSS, cache-first para fontes ──
  if (url.pathname.startsWith('/_next/static/')) {
    // Chunks JS e CSS mudam a cada build — buscar sempre da rede primeiro
    if (request.destination === 'script' || request.destination === 'style') {
      event.respondWith(
        fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        }).catch(() => caches.match(request)),
      );
      return;
    }
    // Demais assets (imagens, fontes no static): cache-first
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            return response;
          }),
      ),
    );
    return;
  }

  // ── Imagens e fontes: cache-first com revalidação em background ──────────────
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.startsWith('/icons/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
        return cached || networkFetch;
      }),
    );
    return;
  }

  // ── Navegação (páginas HTML): network-first, fallback offline ─────────────────
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        }),
    );
    return;
  }

  // ── Demais recursos: stale-while-revalidate ───────────────────────────────────
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
      return cached || networkFetch;
    }),
  );
});

// ─── Push Notifications (preparação futura) ───────────────────────────────────
self.addEventListener('push', (event) => {
  if (!event.data) return;
  let data;
  try {
    data = event.data.json();
  } catch {
    data = { title: 'Conneqt', body: event.data.text() };
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Conneqt', {
      body: data.body || '',
      icon: '/icons/icon-192.svg',
      badge: '/icons/icon-192.svg',
      data: { url: data.url || '/' },
      vibrate: [200, 100, 200],
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        const targetUrl = event.notification.data?.url || '/';
        for (const client of clientList) {
          if (client.url === targetUrl && 'focus' in client) {
            return client.focus();
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(targetUrl);
        }
      }),
  );
});
