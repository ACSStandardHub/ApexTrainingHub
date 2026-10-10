/* Apex Desk Checklist — offline support.
   Network first: agents always get the latest version when online,
   and the last saved copy when the desk Wi-Fi drops.
   Bump VERSION whenever you edit checklist.js or index.html. */
var VERSION = 'apex-desk-v1.0';
var SHELL = ['./', 'index.html', 'checklist.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-180.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf('apex-desk-') === 0 && k !== VERSION; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(function(res){
    var copy = res.clone();
    caches.open(VERSION).then(function(c){ c.put(req, copy); });
    return res;
  }).catch(function(){
    return caches.match(req).then(function(hit){ return hit || caches.match('index.html'); });
  }));
});
