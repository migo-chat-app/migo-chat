(function(){if(window.__bio)return;window.__bio=1;
const $=id=>document.getElementById(id);let mine='';
function setLine(el,t){if(!el)return;el.textContent=t||'';el.style.display=t?'block':'none'}
function card(){const dn=$('dn');if(!dn||$('mgbio'))return !!$('mgbio');const row=dn.parentNode;const p=document.createElement('p');p.style.cssText='display:flex;gap:8px;align-items:center;flex-wrap:wrap';
p.innerHTML='<input id="mgbio" maxlength="100" placeholder="نبذة عنك (سطر قصير، اختياري)" style="flex:1;min-width:0"><button id="mgbios" type="button" class="alt">حفظ</button><span id="mgbiom" style="font-size:12px;flex-basis:100%;color:#555"></span>';
row.parentNode.insertBefore(p,row.nextSibling);
$('mgbios').onclick=async()=>{const v=$('mgbio').value.trim().slice(0,100);const r=await sb.rpc('set_my_bio',{p_bio:v});$('mgbiom').textContent=r.error?'النبذة ماتحفظتش، حاول تاني':(v?'اتحفظت. بتظهر لأي حد يفتح ملفك الشخصي، إلا اللي حاظرهم.':'اتمسحت النبذة');if(!r.error){mine=v;own()}};
(async()=>{for(let i=0;i<10;i++){const r=await sb.rpc('get_my_bio');if(!r.error){mine=r.data||'';$('mgbio').value=mine;own();return}await new Promise(x=>setTimeout(x,1500))}})();return true}
function own(){let e=$('mgbioo');const c=$('pcd');if(!c)return;if(!e){e=document.createElement('div');e.id='mgbioo';e.style.cssText='font-size:13px;opacity:.9;margin-top:2px;display:none';c.parentNode.insertBefore(e,c.nextSibling)}setLine(e,mine)}
let n=0;const t=setInterval(()=>{if(card()||++n>120)clearInterval(t)},1000);setInterval(own,3000);
const mp=$('mmp');if(mp)mp.addEventListener('click',()=>{const c=$('prfc');if(!c)return;let e=$('mgbiov');if(!e){e=document.createElement('div');e.id='mgbiov';e.style.cssText='font-size:14px;color:#334;margin-top:8px;line-height:1.6;max-width:90%;text-align:center';c.parentNode.insertBefore(e,c.nextSibling)}setLine(e,'');let code='';try{code=friend.code}catch(_){return}
sb.rpc('get_bio',{p_code:code}).then(r=>{try{if(friend&&friend.code===code&&r&&!r.error)setLine(e,r.data)}catch(_){}})});
})();
