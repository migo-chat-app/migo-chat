(function(){if(window.__rc)return;window.__rc=1;
const $=id=>document.getElementById(id);let seenSet=new Set();
function tick(n){const tm=n.querySelector(':scope > .tm');if(!tm||tm.querySelector('.tk'))return;const s=document.createElement('span');s.className='tk';s.textContent=' ✓';s.style.cssText='margin-inline-start:4px;font-weight:700;color:#7a8a85';tm.appendChild(s)}
function mark(n){const s=n.querySelector('.tk');if(s){s.textContent=' ✓✓';s.style.color='#1e88e5'}n.dataset.seen='1'}
async function pass(){const ns=[...document.querySelectorAll('#log .msg.me')];if(!ns.length)return;for(const n of ns)tick(n);
const ids=ns.filter(n=>n.dataset.id&&!n.dataset.seen).map(n=>Number(n.dataset.id));if(!ids.length)return;
const r=await sb.rpc('get_receipts',{p_ids:ids});if(r.error||!Array.isArray(r.data))return;const s=new Set(r.data.map(Number));for(const n of ns)if(s.has(Number(n.dataset.id)))mark(n)}
let busy=0;const run=async()=>{if(busy)return;busy=1;try{await pass()}catch(e){}finally{busy=0}};
const lg=$('log');if(lg)new MutationObserver(()=>setTimeout(run,300)).observe(lg,{childList:true});
setInterval(run,3000);
function card(){const c=$('pvc');if(!c||$('mgrcpt'))return !!$('mgrcpt');const l=document.createElement('label');l.style.cssText='display:flex;gap:8px;align-items:center;margin-top:6px';
l.innerHTML='<input type="checkbox" id="mgrcpt" style="width:auto"> علامة القراءة (✓✓): بتظهر لما حد يقرا رسالتك، وانت كمان بتظهرله. لو قفلتها مبتشوفش علامات حد ومحدش يشوف علامتك.';c.insertBefore(l,$('pvmsg')||null);
const cb=l.querySelector('input');cb.onchange=async()=>{const r=await sb.rpc('set_my_receipts',{p_on:cb.checked});if(r.error)cb.checked=!cb.checked};
(async()=>{for(let i=0;i<10;i++){const r=await sb.rpc('get_my_receipts');if(!r.error){cb.checked=r.data!==false;return}await new Promise(x=>setTimeout(x,1500))}})();return true}
let n=0;const t=setInterval(()=>{if(card()||++n>120)clearInterval(t)},1000);
})();
