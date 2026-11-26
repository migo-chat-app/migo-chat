(function(){if(window.__rx)return;window.__rx=1;
const $=id=>document.getElementById(id);const EM=['👍','❤️','😂','😮','😢','🙏'];
async function toggle(k,id,e){const r=await sb.rpc('set_reaction',{p_kind:k,p_id:id,p_emoji:e});if(r.error){try{note('التفاعل ماتحفظش')}catch(_){}}refresh()}
const ex=window.__mgPopExtra;if(ex)ex.push((row,c)=>{for(const e of EM){const b=document.createElement('button');b.type='button';b.className='alt mgrx';b.textContent=e;b.style.cssText='padding:6px 9px;font-size:20px;line-height:1';b.onclick=()=>{c.close();toggle(c.kind,c.id,e)};row.appendChild(b)}});
function paint(node,k,id,list){let o=node.querySelector(':scope .rxr');if(!list.length){if(o)o.remove();return}
const sig=JSON.stringify(list);if(o&&o.dataset.sig===sig)return;if(o)o.remove();o=document.createElement('div');o.className='rxr';o.dataset.sig=sig;o.style.cssText='display:flex;gap:4px;flex-wrap:wrap;margin-top:4px';
for(const x of list){const c=document.createElement('button');c.type='button';c.className='rxc';c.textContent=x.emoji+(x.n>1?' '+x.n:'');c.style.cssText='border:1px solid '+(x.mine?'#1f6f5c':'#0002')+';background:'+(x.mine?'#d8efe6':'#ffffffb0')+';color:#223;border-radius:12px;padding:1px 8px;font-size:13px;cursor:pointer;min-height:0';c.onclick=ev=>{ev.stopPropagation();toggle(k,id,x.emoji)};o.appendChild(c)}
const host=k==='m'?node:node.querySelector('.cc')||node;host.appendChild(o)}
let busy=0;async function pass(k,sel){const ns=[...document.querySelectorAll(sel)].filter(n=>n.dataset.id&&n.offsetParent!==null);if(!ns.length)return;const ids=ns.map(n=>Number(n.dataset.id));const r=await sb.rpc('get_reactions',{p_kind:k,p_ids:ids});if(r.error||!Array.isArray(r.data))return;const by={};for(const x of r.data)(by[x.id]=by[x.id]||[]).push(x);for(const n of ns)paint(n,k,Number(n.dataset.id),by[n.dataset.id]||[])}
async function refresh(){if(busy)return;busy=1;try{await pass('m','#log .msg');await pass('r','#rmch > .cm')}catch(e){}finally{busy=0}}
window.__rxRefresh=refresh;setInterval(refresh,3500);setTimeout(refresh,1500);
})();
