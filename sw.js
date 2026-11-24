self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{e.waitUntil(self.registration.showNotification('ميجو شات',{body:'عندك رسالة جديدة',tag:'migo-msg',renotify:true}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if(c.url.indexOf('/migo-chat/')>=0&&'focus' in c)return c.focus()}return self.clients.openWindow('/migo-chat/')}))});
