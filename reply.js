(function(){if(window.__rp)return;window.__rp=1;
const $=id=>document.getElementById(id);
let pend=null;const extra=[];window.__mgPopExtra=extra;
const lab=b=>/^VN:/.test(b)?'🎤 فويس':/^IMG:/.test(b)?'📷 صورة':/^GIFT:/.test(b)?'🎁 هدية':String(b||'');
const cut=s=>{s=lab(s);return s.length>70?s.slice(0,70)+'…':s};
const ctxNow=k=>{try{return k==='m'?(friend&&friend.id):(room&&room.id)}catch(e){return null}};
function bar(k){let b=$('mgrpb'+k);if(b)return b;b=document.createElement('div');b.id='mgrpb'+k;b.dir='rtl';b.style.cssText='display:none;align-items:center;gap:8px;padding:6px 12px;background:#eef5f2;border-top:1px solid #0001;font-size:13px';
const t=document.createElement('div');t.style.cssText='flex:1;min-width:0;border-right:3px solid #1f6f5c;padding-right:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis';t.className='rpt';
const x=document.createElement('button');x.type='button';x.textContent='✕';x.className='alt';x.style.cssText='padding:2px 10px;flex:none';x.onclick=()=>clear();b.append(t,x);
const host=k==='m'?$('bar'):($('rmci')&&$('rmci').parentNode);if(!host||!host.parentNode)return null;host.parentNode.insertBefore(b,host);return b}
function clear(){pend=null;for(const k of['m','r']){const b=$('mgrpb'+k);if(b)b.style.display='none'}}
function setReply(k,id,who,text){pend={kind:k,id:Number(id),ctx:ctxNow(k)};const b=bar(k);if(!b)return;b.querySelector('.rpt').textContent='رد على '+who+': '+cut(text);b.style.display='flex';const i=k==='m'?$('txt'):$('rmci');try{i.focus()}catch(e){}}
setInterval(()=>{if(pend&&pend.ctx!==ctxNow(pend.kind))clear()},800);
const of=sb.from.bind(sb);sb.from=function(t){const q=of(t);if(t==='messages'&&q.insert){const oi=q.insert.bind(q);q.insert=function(v,...a){if(pend&&pend.kind==='m'&&pend.ctx===ctxNow('m')&&v&&!Array.isArray(v)&&typeof v.body==='string'&&!/^(VN|GIFT|IMG):/.test(v.body)){v=Object.assign({},v,{reply_to:pend.id});clear()}return oi(v,...a)}}return q};
const orpc=sb.rpc.bind(sb);sb.rpc=function(n,a,...r){if(n==='send_room_msg'&&pend&&pend.kind==='r'&&pend.ctx===ctxNow('r')&&a){a=Object.assign({},a,{p_reply:pend.id});clear()}
return orpc(n,a,...r)};
function pop(k,id,who,text){let o=$('mgrppop');if(o)o.remove();o=document.createElement('div');o.id='mgrppop';o.dir='rtl';o.style.cssText='position:fixed;left:10px;right:10px;bottom:150px;z-index:96;background:#fff;border-radius:16px;box-shadow:0 6px 24px #0005;padding:10px;font-size:14px';
const q=document.createElement('div');q.style.cssText='font-size:12px;color:#556;margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis';q.textContent=who+': '+cut(text);o.appendChild(q);
const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;flex-wrap:wrap;align-items:center';o.appendChild(row);
const done=()=>o.remove();
for(const f of extra){try{f(row,{kind:k,id:Number(id),close:done})}catch(e){}}
const rb=document.createElement('button');rb.type='button';rb.id='mgrpbtn';rb.className='alt';rb.style.cssText='padding:8px 14px';rb.textContent='↩ رد';rb.onclick=()=>{done();setReply(k,id,who,text)};row.appendChild(rb);
document.body.appendChild(o);setTimeout(()=>document.addEventListener('click',function h(e){if(!o.contains(e.target)){o.remove();document.removeEventListener('click',h)}},true),0)}
document.addEventListener('click',e=>{if(e.target.closest('button,a,img,input,textarea,.rpq'))return;
const m=e.target.closest('#log .msg');if(m&&m.dataset.id){const t=m.firstElementChild&&m.querySelector(':scope > div:not(.tm):not(.rpq)');const mine=m.classList.contains('me');
let name='أنت';if(!mine){try{name=friend.display_name||friend.code}catch(_){name='هو'}}pop('m',m.dataset.id,name,m.dataset.body||(t?t.textContent:''));return}
const rc=e.target.closest('#rmch > .cm');if(rc&&rc.dataset.id){const bb=rc.querySelector('.cn');const who=bb?bb.textContent:'';pop('r',rc.dataset.id,who,rc.dataset.body||'')}});
const qd=(who,text,jump)=>{const q=document.createElement('div');q.className='rpq';q.style.cssText='display:block;border-right:3px solid #1f6f5c;background:#0000000d;border-radius:6px;padding:2px 8px;margin-bottom:4px;font-size:12px;opacity:.85;max-height:2.8em;overflow:hidden;cursor:pointer';q.textContent=(who?who+': ':'')+text;if(jump)q.onclick=()=>{const t=document.querySelector(jump);if(t){t.scrollIntoView({block:'center'});t.style.outline='2px solid #1f6f5c';setTimeout(()=>t.style.outline='',1200)}};return q};
let pendNodes=new Set(),tm=null;
async function priv(){const ns=[...pendNodes];pendNodes.clear();const ids=ns.map(n=>Number(n.dataset.id)).filter(Boolean);if(!ids.length)return;
const r=await sb.from('messages').select('id,reply_to,body').in('id',ids);if(r.error||!r.data)return;
const by={};for(const x of r.data)by[x.id]=x;for(const n of ns){if(by[n.dataset.id])n.dataset.body=by[n.dataset.id].body}
const rp=[...new Set(r.data.map(x=>x.reply_to).filter(Boolean))];let q={};if(rp.length){const z=await sb.from('messages').select('id,body,sender').in('id',rp);for(const x of (z.data||[]))q[x.id]=x}
for(const n of ns){const x=by[n.dataset.id];if(!x||!x.reply_to||n.querySelector('.rpq'))continue;const o=q[x.reply_to];let who='',txt='رسالة مش متاحة';if(o){txt=cut(o.body);try{who=o.sender===me?'أنت':(friend.display_name||friend.code)}catch(_){}}
n.insertBefore(qd(who,txt,o?'#log .msg[data-id="'+x.reply_to+'"]':null),n.firstChild)}}
const lg=$('log');if(lg)new MutationObserver(ms=>{for(const m of ms)for(const n of m.addedNodes)if(n.nodeType===1&&n.classList&&n.classList.contains('msg')&&n.dataset.id)pendNodes.add(n);clearTimeout(tm);tm=setTimeout(priv,150)}).observe(lg,{childList:true});
const rawRpc=Object.getPrototypeOf(sb).rpc;let rbusy=0,rtm=null;
async function rdec(){if(rbusy)return;let rid=null;try{rid=room&&room.id}catch(e){}const box=$('rmch');if(!rid||!box||!box.children.length)return;rbusy=1;try{const x=await rawRpc.call(sb,'room_msgs_list',{p_room:rid,p_after:0});const arr=x&&x.data;if(!Array.isArray(arr)||arr.length!==box.children.length)return;
arr.forEach((m,i)=>{const n=box.children[i];if(!n||!n.classList.contains('cm'))return;n.dataset.id=m.id;n.dataset.body=m.body;if(m.reply_to&&!n.querySelector('.rpq')){const cc=n.querySelector('.cc'),cb=n.querySelector('.cb');if(cc&&cb){const mine=m.reply_code===(typeof myCode!=='undefined'?myCode:'');cc.insertBefore(qd(mine?'أنت':(m.reply_name||m.reply_code||''),m.reply_body==null?'رسالة مش متاحة':m.reply_body,'#rmch > .cm[data-id="'+m.reply_to+'"]'),cb)}}})}catch(e){}finally{rbusy=0}}
const rm=$('rmch');if(rm)new MutationObserver(()=>{clearTimeout(rtm);rtm=setTimeout(rdec,250)}).observe(rm,{childList:true});
setInterval(rdec,4000);
})();
