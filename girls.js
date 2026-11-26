(function(){
const $=id=>document.getElementById(id);
const st=document.createElement('style');
st.textContent='#mgpres{display:none!important}#bar.mgE #send{display:none!important}#bar:not(.mgE) #mic{display:none!important}#bar.mgE #mic{background:#1f6f54!important}#bar.mgE #mic svg{stroke:#fff!important;fill:none}#mgbo{display:none;margin:8px 0}#mgbo b{display:block;margin-bottom:6px}#mgbo .r{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #e3ece8;border-radius:16px;padding:8px 10px;margin-bottom:6px}#mgbo .r .n{flex:1;min-width:0;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#mgbo .r button{border:0;border-radius:50%;width:38px;height:38px;background:#e3efe9;display:flex;align-items:center;justify-content:center;padding:0}#mgbo .r button.h{width:auto;border-radius:19px;padding:0 10px;background:#1f6f54;color:#fff;font-weight:700;font-size:14px;font-family:inherit}#mgbo .r button svg{width:19px;height:19px;stroke:#1f6f54;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}#mgbo .e{font-size:13px;color:#555;padding:6px 0}';
document.head.appendChild(st);
// mic/send merge
function sync(){try{const t=$('txt'),m=$('mic'),b=$('bar');if(!t||!m||!b)return;const micOk=m.style.display!=='none';const empty=!t.value.trim();const mode=micOk&&empty;b.classList.toggle('mgE',mode)}catch(e){}}
setInterval(sync,250);document.addEventListener('input',sync,true);
// girls list
let fem=null,rows=[],box=null;
function mk(){if(box)return box;const x=$('ppx');if(!x||!x.parentNode)return null;box=document.createElement('div');box.id='mgbo';box.dir='rtl';const t=x.previousElementSibling;x.parentNode.insertBefore(box,t&&t.tagName==='B'?t:x);return box}
function ic(p){return '<svg viewBox="0 0 24 24">'+p+'</svg>'}
async function open(code){try{const t=[...document.querySelectorAll('#tabs button')].find(b=>b.innerText.includes('الرسايل'));if(t)t.click();await new Promise(r=>setTimeout(r,500));await openChat(code);return true}catch(e){return false}}
function render(){const b=mk();if(!b)return;if(!fem){b.style.display='none';return}b.style.display='block';b.innerHTML='<b>'+(fem==='female'?'الأولاد':'البنات')+' الفاتحين دلوقتي</b>';
 if(!rows.length){const e=document.createElement('div');e.className='e';e.textContent=(fem==='female'?'مفيش أولاد':'مفيش بنات')+' فاتحين وظاهرين دلوقتي.';b.appendChild(e);return}
 for(const m of rows){const r=document.createElement('div');r.className='r';const av=document.createElement('span');av.className='av';try{setAv(av,m.display_name,m.code)}catch(e){}
  const n=document.createElement('span');n.className='n';n.textContent=(m.display_name||'').trim()||m.code;
  const h=document.createElement('button');h.type='button';h.className='h';h.textContent='👋 تحية';h.onclick=async()=>{h.disabled=true;if(await open(m.code)){setTimeout(()=>{const t=$('txt');t.value='أهلاً 👋';$('send').click()},700)}};
  const ms=document.createElement('button');ms.type='button';ms.setAttribute('aria-label','رسالة');ms.innerHTML=ic('<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/>');ms.onclick=async()=>{if(await open(m.code))setTimeout(()=>{const t=$('txt');if(t)t.focus()},600)};
  const c=document.createElement('button');c.type='button';c.setAttribute('aria-label','اتصال');c.innerHTML=ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>');c.onclick=async()=>{if(await open(m.code))setTimeout(()=>{const v=$('vc');if(v&&v.offsetParent)v.click()},1500)};
  r.append(av,n,h,ms,c);b.appendChild(r)}}
async function poll(){try{if(window.__tab!=='p'||typeof sb==='undefined')return;
 if(fem===null){const r=await sb.rpc('my_gender');if(r.error||!r.data)return;fem=r.data;window.__mgg=fem}
 if(fem!=='female'&&fem!=='male'){render();return}
 const r=await sb.rpc('discover_opposite');if(!r.error){rows=(r.data||[]).filter(x=>typeof blockedCodes==='undefined'||!blockedCodes.has(x.code));}render()}catch(e){}}
setInterval(poll,6000);setTimeout(poll,1500);
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('#tabs button'))setTimeout(poll,1200)},true);
})();
