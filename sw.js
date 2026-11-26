self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={k:'msg'};try{d=e.data.json()}catch(x){}const k=d.k;const call=k==='call';try{if(navigator.setAppBadge)e.waitUntil(navigator.setAppBadge())}catch(x){}
if(k==='room'){const a=String(d.a||'').slice(0,30)||'حد';e.waitUntil(self.registration.showNotification('ميجو شات',{body:a+' فتح غرفة صوت دلوقتي',tag:'migo-room',renotify:true,icon:'icon.svg',data:{n:Number(d.n)||0},actions:[{action:'join',title:'انضم'}]}));return}
e.waitUntil(self.registration.showNotification((!call&&typeof d.nm==='string'&&d.nm)?String(d.nm).slice(0,30):'ميجو شات',call?{body:'في حد بيكلمك. افتح التطبيق دلوقتي',tag:'migo-call',renotify:true,requireInteraction:true}:{body:'عندك رسالة جديدة',tag:'migo-msg',renotify:true,icon:(typeof d.av==='string'&&d.av.indexOf('data:image/')===0)?d.av:'icon.svg'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const n=e.notification.data&&e.notification.data.n;
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if(c.url.indexOf('/migo-chat/')>=0&&'focus' in c){if(n)c.postMessage({joinNotice:n});return c.focus()}}return self.clients.openWindow('/migo-chat/'+(n?'?joinn='+n:''))}))});
