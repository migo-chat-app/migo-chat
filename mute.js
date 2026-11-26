(function(){if(window.__mu)return;window.__mu=1;
const $=id=>document.getElementById(id);let S=new Set(),ok=false;
async function load(){try{const r=await sb.rpc('my_mutes');if(r.data){S=new Set(r.data.map(x=>x.kind+':'+x.target));ok=true;paint()}}catch(e){}}
async function setM(k,id,on){const r=await sb.rpc('set_mute',{p_kind:k,p_target:id,p_on:on});if(r.error){try{note('الكتم ماتحفظش')}catch(_){}return false}if(on)S.add(k+':'+id);else S.delete(k+':'+id);paint();return true}
function paint(){try{const b=$('mgmute');if(b&&friend){b.textContent=S.has('p:'+friend.id)?'🔔 إلغاء الكتم':'🔕 كتم'}}catch(e){}}
function mk(){const bl=$('mmb');if(!bl||$('mgmute'))return;const b=document.createElement('button');b.type='button';b.id='mgmute';b.className=bl.className;b.style.cssText=bl.style.cssText;b.textContent='🔕 كتم';
b.onclick=async()=>{if(!friend)return;const on=!S.has('p:'+friend.id);$('mmenu').style.display='none';if(await setM('p',friend.id,on)){try{note(on?'اتكتمت المحادثة: من غير إشعارات':'اتفعلت الإشعارات تاني')}catch(_){}}};bl.parentNode.insertBefore(b,bl)}
mk();setInterval(()=>{mk();paint()},1500);load();setInterval(load,60000);setTimeout(load,3000);
const rmb=$('rmmore');if(rmb)rmb.addEventListener('click',()=>{setTimeout(()=>{try{const w=$('rmovb').firstElementChild;if(!w||$('mgrmute')||!room)return;const id=room.id;const b=document.createElement('button');b.type='button';b.className='alt';b.id='mgrmute';b.style.cssText='padding:12px 4px;font-size:13px';b.textContent=S.has('r:'+id)?'إلغاء الكتم':'كتم';b.onclick=async()=>{const on=!S.has('r:'+id);if(await setM('r',id,on))b.textContent=on?'إلغاء الكتم':'كتم'};w.appendChild(b)}catch(e){}},50)});
})();
