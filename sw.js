self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));await self.clients.claim();const list=await self.clients.matchAll({type:'window'});list.forEach(c=>c.navigate(c.url.split('?')[0]+'?v=field'));})());});
self.addEventListener('fetch',event=>{event.respondWith(fetch(event.request,{cache:'no-store'}));});
