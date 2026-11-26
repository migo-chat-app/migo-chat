(function(){
if(window.__notify)return;window.__notify=1;
var base=document.title,last=-1,busy=false;
var st=document.createElement('style');
st.textContent='#tabs button[data-t="m"]{position:relative}#tabs .nbd{position:absolute;top:3px;left:50%;margin-left:6px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#e53935;color:#fff;font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}';
document.head.appendChild(st);
function apply(n){
 document.title=n>0?'('+(n>99?'99+':n)+') '+base:base;
 var b=document.querySelector('#tabs button[data-t="m"]');
 if(b){var d=b.querySelector('.nbd');if(n>0){if(!d){d=document.createElement('span');d.className='nbd';b.appendChild(d)}d.textContent=n>99?'99+':String(n)}else if(d)d.remove()}
 try{if(n>0){if(navigator.setAppBadge)navigator.setAppBadge(n)}else if(navigator.clearAppBadge)navigator.clearAppBadge()}catch(e){}
}
async function upd(){
 if(busy)return;
 try{if(typeof me==='undefined'||!me||typeof sb==='undefined')return}catch(e){return}
 busy=true;
 try{var r=await sb.from('messages').select('id',{count:'exact',head:true}).eq('recipient',me).is('read_at',null);
  if(r.error)return;var n=r.count||0;if(n===last)return;var up=n>last;last=n;apply(n);try{if(typeof friend!=='undefined'&&!friend&&typeof loadRecent==='function')loadRecent()}catch(e){}}catch(e){}finally{busy=false}
}
setInterval(upd,15000);
document.addEventListener('visibilitychange',function(){if(!document.hidden)upd()});
window.addEventListener('focus',upd);
document.addEventListener('click',function(){setTimeout(upd,1500)},true);
setTimeout(upd,3000);
})();
