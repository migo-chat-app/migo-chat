(function(){if(window.__pin)return;window.__pin=1;
const $=id=>document.getElementById(id);let P=[],ok=false,busy=false;
async function load(){try{const r=await sb.rpc('my_pins');if(r.data){P=r.data;ok=true;deco()}}catch(e){}}
function rowsNow(){try{const rows=rcCache&&rcCache.rows||[];return rows.filter(x=>rcFilter==='all'||(rcFilter==='unread'&&x.un>0)||(rcFilter==='online'&&onlineSet.has(x.p.code)))}catch(e){return null}}
function deco(){if(busy)return;const R=$('recent');if(!R)return;const rows=rowsNow();const btns=[...R.querySelectorAll(':scope > .rci')];if(!rows||rows.length!==btns.length||!btns.length)return;busy=true;
try{const pairs=btns.map((b,i)=>({b,x:rows[i]}));const pin=pairs.filter(p=>P.includes(p.x.p.id)).sort((a,c)=>P.indexOf(a.x.p.id)-P.indexOf(c.x.p.id));const rest=pairs.filter(p=>!P.includes(p.x.p.id));
const anchor=btns[0];const order=[...pin,...rest];
const same=order.every((p,i)=>btns[i]===p.b);if(!same){for(const p of order)R.appendChild(p.b)}
for(const p of order){const on=P.includes(p.x.p.id);let s=p.b.querySelector('.mgpin');if(!s){s=document.createElement('span');s.className='mgpin';s.setAttribute('role','button');s.style.cssText='font-size:15px;padding:0 6px;cursor:pointer;flex:none';p.b.appendChild(s);s.onclick=async ev=>{ev.stopPropagation();ev.preventDefault();const id=p.x.p.id,want=!P.includes(id);const r=await sb.rpc('set_pin',{p_target:id,p_on:want});if(r.error){try{note(/max_pins/.test(r.error.message)?'تقدر تثبّت 3 محادثات بس':'التثبيت ماتحفظش')}catch(_){}return}await load()}}
s.textContent=on?'📌':'📍';s.style.opacity=on?'1':'.35';s.title=on?'إلغاء التثبيت':'تثبيت'}}finally{setTimeout(()=>{busy=false},0)}}
const R=$('recent');if(R)new MutationObserver(()=>{if(!busy)setTimeout(deco,50)}).observe(R,{childList:true});
load();setInterval(load,60000);setInterval(deco,2500);
})();
