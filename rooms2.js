(function(){const st=document.createElement('style');st.textContent='#rmdir>div[data-pc]{min-height:84px!important;margin-bottom:8px!important;border-radius:14px!important;overflow:hidden}#rmdir>div[data-pc] b{font-size:15px!important;line-height:1.3!important}#rmdir>div[data-pc] button{font-size:12px!important;padding:5px 14px!important;min-height:0!important;margin:0!important}#rmdir>div[data-pc] span,#rmdir>div[data-pc] div{font-size:11px}#rmdir>div[data-pc]>div:not(:last-child){padding-top:6px!important;padding-bottom:6px!important}';document.head.append(st)})();
(function(){
const BG={c0:'#1f6f5c',c1:'#2b2118',c2:'#7a2e8e',c3:'#b3402a',c4:'#1c5d99',c5:'#3a7d44',c6:'#a8741a',c7:'#44494f',g0:'linear-gradient(135deg,#e8590c,#7a2e8e)',g1:'linear-gradient(135deg,#1c5d99,#1f6f5c)',g2:'linear-gradient(135deg,#f08c00,#b3402a)',g3:'linear-gradient(135deg,#2b2118,#7a2e8e)',g4:'linear-gradient(135deg,#3a7d44,#1c5d99)',g5:'linear-gradient(135deg,#b3402a,#2b2118)'};
const keys=Object.keys(BG);
function bgOf(code,bg){if(bg&&BG[bg])return BG[bg];let h=0;for(const ch of (code||'x'))h=(h*31+ch.charCodeAt(0))%360;return 'linear-gradient(120deg,hsl('+h+',45%,24%),hsl('+((h+50)%360)+',50%,32%))'}
const css=`
.rmh{background:#2b2118!important;display:flex;align-items:center;justify-content:space-between;padding:10px 16px}
#rmnew{display:flex;align-items:center;gap:6px;background:linear-gradient(120deg,#e8590c,#f08c00);color:#fff;border:0;border-radius:20px;padding:8px 14px;font-size:14px;font-weight:700}
#rmcr{position:fixed;inset:0;z-index:8;background:#f6f1e7;overflow:auto;display:none;flex-direction:column}
.rc-h{display:flex;align-items:center;gap:10px;padding:12px 14px;background:#2b2118;color:#fff;font-size:18px;font-weight:700}.rc-h button{background:#ffffff22;color:#fff;border:0;border-radius:12px;width:38px;height:38px;font-size:24px;padding:0}
.rc-b{padding:14px;max-width:520px;width:100%;margin:0 auto}
#rcpv{display:flex;border-radius:18px;overflow:hidden;color:#fff;min-height:96px;margin-bottom:4px}#rcpvc{width:96px;flex:none;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:700;background:#ffffff1a;order:2}.rcpt{flex:1;padding:12px;display:flex;flex-direction:column;gap:3px;justify-content:center;min-width:0}.rcpt b{font-size:17px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rcpt small{font-size:12px;opacity:.9}
.rc-l{display:block;font-size:13px;font-weight:700;color:#5b4a3a;margin:14px 2px 6px}#rcb #rmn{width:100%;padding:13px;border:1.5px solid #d9cdb8;border-radius:14px;font-size:16px;background:#fff}
.rc-g{display:grid;grid-template-columns:1fr 1fr;gap:10px}.rc-g button{padding:12px 6px;border:2px solid #d9cdb8;background:#fff;color:#2b2118;border-radius:14px;font-size:16px;font-weight:700;display:flex;flex-direction:column;gap:2px}.rc-g button small{font-size:11px;font-weight:400;color:#7a6a58}.rc-g button.on{border-color:#e8590c;background:#fff1e6;color:#c2410c}
.rc-sw{display:flex;gap:6px;flex-wrap:wrap}.rc-sw button{width:28px;height:28px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1.5px #d9cdb8;padding:0}.rc-sw button.on{box-shadow:0 0 0 2px #e8590c}
#rcb #rmc{width:100%;padding:14px;border:0;border-radius:16px;background:linear-gradient(120deg,#e8590c,#f08c00);color:#fff;font-size:17px;font-weight:700;margin-top:14px}
#rmi{padding-bottom:150px}#rmsg{grid-template-columns:repeat(var(--c,6),minmax(0,1fr))!important}#rmsg .rms{min-width:0}#rmsg .rms .sn{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 2px}
#rmhd{display:flex;align-items:center;gap:12px;padding:6px 2px;color:#fff;margin:0 0 8px}#rmhc{width:58px;height:58px;border-radius:16px;border:2px solid #ffffff99;background:#ffffff26;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;flex:none}#rmhn{flex:1;min-width:0}#rmhn b{display:block;font-size:17px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#rmhn small{font-size:12px;opacity:.92}#rmhn code{background:#ffffff26;padding:1px 6px;border-radius:6px;font-family:inherit}
#rmhd #rmmore{background:#ffffff26;color:#fff;border-radius:12px;padding:8px 12px}
#rmch{max-height:210px!important;min-height:90px;border:1px solid #eadfcb}
#rmbar{position:fixed;left:0;right:0;bottom:64px;z-index:6;background:#fff;border-top:1px solid #eadfcb;display:flex;gap:8px;align-items:center;padding:8px 10px}#rmbar input{flex:1;min-width:0;padding:10px;border:1.5px solid #d9cdb8;border-radius:20px}#rmbar button{border:0;border-radius:50%;width:42px;height:42px;padding:0;font-size:18px;flex:none;background:#1f6f5c;color:#fff}#rmbar #rmmu{background:#eadfcb;color:#2b2118;font-size:12px;width:auto;border-radius:20px;padding:0 12px}
#rmtl{display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-weight:700;font-size:13px;background:#fff;border-radius:12px;padding:10px;border:1px solid #eadfcb}
#rmm.cl{display:none}
#rm.inroom{background:var(--rb,#1f6f5c)!important}#rm.inroom .rmh{display:none}#rm.inroom>.card{background:transparent!important;box-shadow:none!important;margin:0!important;padding:10px 10px 0!important;color:#fff}#rm.inroom>.card>b{display:none}
#rm.inroom .rms{background:#ffffff1f;border-color:#ffffff66;color:#fff}#rm.inroom .rms svg{stroke:#fff}#rm.inroom .rms.oc{background:#ffffff33;border:2px solid #ffd27a}#rm.inroom .rms.lk{background:#00000040;border-color:#ffffff40}#rm.inroom .rms .sn{color:#fff}
#rm.inroom #rmch{background:#00000033;border:0;color:#fff;border-radius:16px;max-height:34vh!important}
#rm.inroom #rmtl{background:#00000033;border:0;color:#fff}#rm.inroom #rmm{background:#00000026;border-radius:12px;padding:6px 10px;color:#fff}
#rm.inroom p,#rm.inroom #rmg{color:#fffc}
#rmsg .pp{position:absolute;bottom:-9px;left:50%;transform:translateX(-50%);background:#e8590c;color:#fff;border-radius:10px;padding:0 6px;font-size:10px;font-weight:700;white-space:nowrap}#rmsg .rms{margin-bottom:8px}#rmact{display:inline-flex;align-items:center;gap:4px;background:#00000040;border-radius:14px;padding:2px 10px;font-size:12px;margin-top:4px}
#rmau{display:flex;align-items:center;gap:6px;margin:8px 0;background:#00000033;border-radius:24px;padding:6px 8px;overflow:hidden}#rmau .av{width:30px;height:30px;flex:none;border:2px solid #ffffff88}#rmaun{flex:none;min-width:38px;height:30px;border-radius:15px;background:#ffffff33;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;padding:0 8px}
#rmbar{background:#00000066!important;border-top:0!important;backdrop-filter:blur(6px)}#rmbar input{background:#ffffff26;border:0!important;color:#fff}#rmbar input::placeholder{color:#fffa}#rmbar #rmgf{background:linear-gradient(120deg,#e8590c,#f08c00)}#rmbar #rmmu{background:#ffffff33;color:#fff}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const E=(t,a,h)=>{const e=document.createElement(t);if(a)Object.assign(e,a);if(h!=null)e.innerHTML=h;return e};
const ask=()=>new Promise(res=>{const o=E('div',{},'<div style="background:#fff;border-radius:18px;padding:18px;width:min(88vw,340px);text-align:right"><b>الغرفه خاصه</b><p style="font-size:13px;color:#666;margin:6px 0">كود الدعوه</p><input id="pcin" dir="ltr" autocapitalize="none" style="width:100%;padding:12px;border:1.5px solid #d9cdb8;border-radius:12px;font-size:16px;text-align:left"><div style="display:flex;gap:8px;margin-top:12px"><button id="pcok" style="flex:1;padding:12px;border:0;border-radius:12px;background:#e8590c;color:#fff;font-weight:700">دخول</button><button id="pcno" style="flex:1;padding:12px;border:0;border-radius:12px;background:#eadfcb">إلغاء</button></div></div>');o.style.cssText='position:fixed;inset:0;z-index:50;background:#0008;display:flex;align-items:center;justify-content:center';document.body.appendChild(o);const f=v=>{o.remove();res(v)};o.querySelector('#pcok').onclick=()=>f((o.querySelector('#pcin').value||'').trim().toLowerCase());o.querySelector('#pcno').onclick=()=>f('');setTimeout(()=>o.querySelector('#pcin').focus(),50)});
const orig=sb.rpc.bind(sb);
sb.rpc=async function(n,a){if(n==='join_room'||n==='create_room')window.__fav=false;
if(n==='create_room'){const r=await orig(n,a);if(r&&r.data&&r.data.id){if(window.__pv)await orig('set_room_private',{p_room:r.data.id,p_private:true});if(window.__bg)await orig('set_room_look',{p_room:r.data.id,p_bg:window.__bg})}window.__pv=0;return r}
if(n==='join_room'&&a&&(a.p_code==null||String(a.p_code).charAt(0)==='~')){const c=await ask();if(!c)return{data:null,error:{message:'cancel'}};return orig(n,{p_code:c})}
const r=await orig(n,a);
if(n==='list_rooms'&&r&&Array.isArray(r.data)){r.data=r.data.map(x=>({...x,code:x.code||('~'+x.name),name:x.name,_bg:x.bg}));window.__dirbg=r.data.map(x=>({n:x.name,bg:x._bg,cv:x.cover||'',pv:!!x.priv,fv:!!x.fav,sc:x.score||0,nn:x.n||0}))}
return r};
// create screen
const rm=$('rm'),cr=E('div',{id:'rmcr'});
cr.innerHTML='<div class="rc-h"><button id="rcback" type="button" aria-label="رجوع">›</button>إنشاء غرفة</div><div class="rc-b" id="rcb"><div id="rcpv"><div id="rcpvc">؟</div><div class="rcpt"><b id="rcpn">اسم غرفتك</b><small id="rcps"></small><small id="rcpt2"></small></div></div><label class="rc-l" for="rmn">اسم الغرفة</label><span id="ph1"></span><div class="rc-l">عدد الأماكن</div><div class="rc-g" id="rcsz"><button type="button" data-n="12" class="on">12 مكان<small>غرفة صغيرة</small></button><button type="button" data-n="18">18 مكان<small>غرفة كبيرة</small></button></div><div class="rc-l">نوع الغرفة</div><div class="rc-g" id="rcvis"><button type="button" data-p="0" class="on">🌐 عامة<small>تدخل من القائمة مباشرة</small></button><button type="button" data-p="1">🔒 خاصة<small>تظهر في القائمة، والدخول بالكود</small></button></div><div class="rc-l">لون الغرفة</div><div class="rc-sw" id="rcsw"></div><p id="rcerr" style="color:#c0392b;min-height:18px;margin:8px 0 0"></p><span id="ph2"></span></div>';
rm.appendChild(cr);
const rmn=$('rmn'),rmc=$('rmc'),rmsz=$('rmsz'),rmpub=$('rmpub');rmsz.style.display='none';rmpub.style.display='none';cr.querySelector('#ph1').replaceWith(rmn);cr.querySelector('#ph2').replaceWith(rmc);cr.querySelector('#rcb').append(rmsz,rmpub);rmc.textContent='إنشاء الغرفة والدخول';rmn.placeholder='مثال: سهرة الجمعة';
const sw=cr.querySelector('#rcsw');window.__bg='';[''].concat(keys).forEach(k=>{const b=E('button',{type:'button'});b.dataset.k=k;b.style.background=k?BG[k]:'repeating-linear-gradient(45deg,#eee,#eee 4px,#ddd 4px,#ddd 8px)';b.title=k?'':'تلقائي';if(!k)b.className='on';b.onclick=()=>{window.__bg=k;sw.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));pv()};sw.append(b)});
function pv(){const n=(rmn.value||'').trim();cr.querySelector('#rcpn').textContent=n||'اسم غرفتك';cr.querySelector('#rcpvc').textContent=(n||'؟').charAt(0).toUpperCase();cr.querySelector('#rcps').textContent='المضيف: أنت · '+rmsz.value+' مكان';cr.querySelector('#rcpt2').textContent=window.__pv?'🔒 خاصة · الدخول بالكود':'🌐 عامة';cr.querySelector('#rcpv').style.background=bgOf(n||'x',window.__bg)}
rmn.oninput=pv;
cr.querySelectorAll('#rcsz button').forEach(b=>b.onclick=()=>{rmsz.value=b.dataset.n;cr.querySelectorAll('#rcsz button').forEach(x=>x.classList.toggle('on',x===b));pv()});
window.__pv=0;cr.querySelectorAll('#rcvis button').forEach(b=>b.onclick=()=>{window.__pv=b.dataset.p==='1'?1:0;cr.querySelectorAll('#rcvis button').forEach(x=>x.classList.toggle('on',x===b));pv()});
const oldc=rmc.onclick;rmc.onclick=()=>{if(window.__rcBusy)return;window.__rcBusy=1;rmc.disabled=true;rmpub.checked=true;cr.querySelector('#rcerr').textContent='';return Promise.resolve(oldc()).then(()=>{try{if(room)cr.style.display='none'}catch(e){}}).finally(()=>{window.__rcBusy=0;rmc.disabled=false})};
new MutationObserver(()=>{cr.querySelector('#rcerr').textContent=$('rme').textContent}).observe($('rme'),{childList:true,characterData:true,subtree:true});
const rmh=document.querySelector('.rmh');const nb=E('button',{id:'rmnew',type:'button'},'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="6"/><path d="M12 8v8M8 12h8"/></svg>إنشاء غرفة');rmh.append(nb);
nb.onclick=()=>{cr.querySelector('#rcerr').textContent='';cr.style.display='flex';pv();setTimeout(()=>rmn.focus(),50)};cr.querySelector('#rcback').onclick=()=>{cr.style.display='none'};
const oro=$('rmo').onclick;$('rmo').onclick=()=>{cr.style.display='none';nb.style.display=window.room?'none':'';return oro()};
// interior
const ri=$('rmi');const hd=E('div',{id:'rmhd'},'<div id="rmhc">؟</div><div id="rmhn"></div>');
const rmt=$('rmt'),rmcnt=$('rmcnt'),rmcode=$('rmcode'),more=$('rmmore');
const hn=hd.querySelector('#rmhn');const l2=E('small',{},'');l2.append('كود الدعوة: ',rmcode,' ',rmcnt);hn.append(rmt,l2);hd.append(more);
const firstP=ri.querySelector('p');ri.insertBefore(hd,ri.firstChild);if(firstP&&firstP.contains(rmcode)===false&&!firstP.textContent.trim())firstP.remove();
for(const p of [...ri.children]){if(p.tagName==='P'&&!p.querySelector('button')&&!p.querySelector('#rmcode')&&p.textContent.indexOf('اضغط «هدية»')>-1)p.style.fontSize='12px'}
for(const p of [...ri.querySelectorAll('p')]){if(!hd.contains(p)&&p.textContent.indexOf('كود الدعوة')>-1&&!p.querySelector('button'))p.remove()}
// remove now-empty original header paragraph
for(const p of [...ri.querySelectorAll('p')]){if(!p.children.length&&!p.textContent.trim()&&p.id==='')p.remove()}
// bottom bar
const bar=E('div',{id:'rmbar'});const ci=$('rmci'),cs=$('rmcs'),mu=$('rmmu');const ciw=ci.parentElement;const gf=E('button',{id:'rmgf',type:'button',title:'هدية'},'🎁');gf.onclick=()=>{if(mm.classList.contains('cl'))mt.click();$('rmn2').textContent='اضغط «هدية» جنب اسم الشخص اللي عايز تبعتله'};bar.append(gf,mu,ci,cs);cs.textContent='➤';ri.append(bar);ciw.remove();
mu.title='المايك';
// members list collapsible
let mt,mm;mt=E('div',{id:'rmtl'},'<span>الموجودين</span><span id="rmtc">عرض ▾</span>');mm=$('rmm');mm.classList.add('cl');ri.insertBefore(mt,mm);const labelB=[...ri.querySelectorAll('b')].find(b=>b.textContent==='الموجودين'&&b!==mt.firstChild);if(labelB)labelB.remove();
mt.onclick=()=>{const c=mm.classList.toggle('cl');mt.querySelector('#rmtc').textContent=c?'عرض ▾':'إخفاء ▴'};
// exit lives in the menu; keep the button node but hide it
const ex=$('rml2');ex.parentElement.style.display='none';
// cover + color in header (and host picker in menu)
let lookFor='';const au=E('div',{id:'rmau'});ri.insertBefore(au,$('rmch'));const act=E('span',{id:'rmact'},'');hn.append(act);let actAt=0;
async function look(){try{const r=await orig('room_look',{p_room:room.id});const bg=r&&r.data&&r.data.bg||'',img=r&&r.data&&r.data.img||'',cov=r&&r.data&&r.data.cover||'';window.__fav=!!(r&&r.data&&r.data.fav);const b=bgOf(room.code,bg);const full=img?'linear-gradient(#0000008c,#0000008c),url("'+img+'") center/cover':b;if(window.__lk!==full+cov){window.__lk=full+cov;rm.style.setProperty('--rb',full);$('rmhc').style.background=cov?'url("'+cov+'") center/cover':b}$('rmhc').textContent=cov?'':(rmt.textContent||'؟').trim().charAt(0).toUpperCase();
if(Date.now()-actAt>8000){actAt=Date.now();pact();const a=await orig('room_activity',{p_room:room.id});if(a&&a.data)act.textContent='🔥 نشاط '+a.data.score;act.title='رسائل وهدايا آخر 30 دقيقة: '+(a&&a.data?a.data.msgs+' رسالة و'+a.data.gifts+' هدية':'')}}catch(e){}}
let pa={};async function pact(){try{const r=await orig('room_member_activity',{p_room:room.id});pa={};((r&&r.data)||[]).forEach(x=>pa[x.code]=x.score);pills()}catch(e){}}
function pills(){const L=room.mlist||[];const nm={};L.forEach(m=>nm[m.name||m.code]=m.code);nm['أنت']=myCode;document.querySelectorAll('#rmsg .rms.oc').forEach(b=>{const sn=b.querySelector('.sn');if(!sn)return;const c=nm[sn.textContent];const v=c&&pa[c]||0;let p=b.querySelector('.pp');if(!p){p=E('span',{className:'pp'});b.append(p)}const t='🔥'+v;if(p.textContent!==t)p.textContent=t;p.title='تفاعله في الغرفة: رسائل وهدايا آخر 30 دقيقة'})}
new MutationObserver(()=>{try{pills()}catch(e){}}).observe($('rmsg'),{childList:true});
function aud(){au.innerHTML='';const L=(room.mlist||[]);for(const m of L.slice(0,7)){const a=E('span',{className:'av'});setAv(a,m.name,m.code);au.append(a)}au.append(E('span',{id:'rmaun'},'الموجودين '+L.length))}
setInterval(()=>{try{if(room){cz.style.display=room.host===myCode?'':'none';cr.style.display='none';const sg=$('rmsg');if(sg)sg.style.setProperty('--c',String(Math.max(1,Math.round(sg.children.length/3))));rm.classList.add('inroom');look();aud();$('rmtc').textContent=mm.classList.contains('cl')?'عرض ▾':'إخفاء ▴';nb.style.display='none'}else{rm.classList.remove('inroom');lookFor='';actAt=0;nb.style.display='';stopMusic()}}catch(e){}},1500);

document.querySelectorAll('#rml label').forEach(l=>{if(l.textContent.indexOf('اعرض الغرفة')>-1&&!l.querySelector('input'))l.remove()});
const cz=E('button',{id:'rmcz',type:'button',title:'تخصيص الغرفة'},'🎨 تخصيص');cz.style.cssText='background:#ffffff26;color:#fff;border:0;border-radius:12px;padding:8px 12px;display:none';hd.append(cz);
let mA=null,mT=null;
function stopMusic(){try{if(mT&&lkr)lkr.localParticipant.unpublishTrack(mT)}catch(e){}try{if(mA){mA.pause();URL.revokeObjectURL(mA.src)}}catch(e){}mA=null;mT=null;window.__music=''}
async function playFile(f){stopMusic();const a=new Audio();a.src=URL.createObjectURL(f);a.loop=true;a.volume=.5;await a.play();const st=a.captureStream?a.captureStream():null;const t=st&&st.getAudioTracks()[0];if(!t){a.pause();throw new Error('nocap')}await lkr.localParticipant.publishTrack(t,{name:'music'});mA=a;mT=t;window.__music=f.name}
function toJpeg(f,sq){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>{if(sq){const c=document.createElement('canvas');c.width=c.height=192;const m=Math.min(im.width,im.height);c.getContext('2d').drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,192,192);const d=c.toDataURL('image/jpeg',.7);return d.length<38000?res(d):rej(new Error('big'))}let w=720,q=.6;for(let i=0;i<7;i++){const c=document.createElement('canvas');const sc=Math.min(1,w/im.width);c.width=Math.round(im.width*sc);c.height=Math.round(im.height*sc);c.getContext('2d').drawImage(im,0,0,c.width,c.height);const d=c.toDataURL('image/jpeg',q);if(d.length<130000)return res(d);w=Math.round(w*.8);q=Math.max(.4,q-.05)}rej(new Error('big'))};im.onerror=rej;im.src=URL.createObjectURL(f)})}
cz.onclick=()=>{if(room.host!==myCode)return;const o=E('div',{},'<div id="czb" style="background:#fff;border-radius:20px 20px 0 0;padding:16px;width:100%;max-width:520px;text-align:right;max-height:80vh;overflow:auto;color:#222"><b>تخصيص الغرفة</b><div class="rc-l">لون الخلفية</div><div class="rc-sw" id="czsw"></div><div class="rc-l">صورة الغرفة (الأيقونة اللي فوق جنب الاسم)</div><div style="display:flex;gap:8px"><label style="flex:1;background:#eadfcb;border-radius:12px;padding:12px;text-align:center">اختار صورة الغرفة<input id="czcv" type="file" accept="image/*" style="display:none"></label><button id="czcr" type="button" style="background:#eee;border:0;border-radius:12px;padding:12px">شيلها</button></div><div class="rc-l">صورة الخلفية (من جهازك)</div><div style="display:flex;gap:8px"><label style="flex:1;background:#eadfcb;border-radius:12px;padding:12px;text-align:center">اختار صورة<input id="czimg" type="file" accept="image/*" style="display:none"></label><button id="czrm" type="button" style="background:#eee;border:0;border-radius:12px;padding:12px">شيل الصورة</button></div><div class="rc-l">موسيقى للغرفة (ملف صوت من جهازك)</div><div style="display:flex;gap:8px"><label style="flex:1;background:#eadfcb;border-radius:12px;padding:12px;text-align:center">اختار ملف صوت<input id="czau" type="file" accept="audio/*" style="display:none"></label><button id="czst" type="button" style="background:#eee;border:0;border-radius:12px;padding:12px">إيقاف</button></div><p style="font-size:12px;color:#777;margin:8px 0">الموسيقى بتتبعت للموجودين من خلال الصوت. لازم تكون قاعد على مكان. استخدم ملفات تملك حق تشغيلها.</p><p id="czmsg" style="color:#c0392b;min-height:18px;margin:4px 0"></p><button id="czx" type="button" style="width:100%;padding:12px;border:0;border-radius:12px;background:#2b2118;color:#fff">تم</button></div>');o.style.cssText='position:fixed;inset:0;z-index:50;background:#0008;display:flex;align-items:flex-end;justify-content:center';document.body.appendChild(o);
const msg=t=>{o.querySelector('#czmsg').textContent=t};const swn=o.querySelector('#czsw');keys.forEach(k=>{const b=E('button',{type:'button'});b.style.background=BG[k];b.onclick=async()=>{await orig('set_room_image',{p_room:room.id,p_img:''});const r=await orig('set_room_look',{p_room:room.id,p_bg:k});if(r.error)msg('معرفتش أغيّر اللون');window.__lk='';look()};swn.append(b)});
o.querySelector('#czimg').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const d=await toJpeg(f);const r=await orig('set_room_image',{p_room:room.id,p_img:d});if(r.error)msg('الصورة مترفضتش: '+(r.error.message||''));else{msg('');window.__lk='';look()}}catch(x){msg('الصورة كبيرة أو مش مدعومة')}};
o.querySelector('#czcv').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const d=await toJpeg(f,1);const r=await orig('set_room_cover',{p_room:room.id,p_img:d});if(r.error)msg('الصورة مترفضتش');else{msg('');window.__lk='';look()}}catch(x){msg('الصورة مش مدعومة')}};o.querySelector('#czcr').onclick=async()=>{await orig('set_room_cover',{p_room:room.id,p_img:''});window.__lk='';look()};o.querySelector('#czrm').onclick=async()=>{await orig('set_room_image',{p_room:room.id,p_img:''});window.__lk='';look()};
o.querySelector('#czau').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{msg('');await playFile(f);msg('')}catch(x){msg(String(x.message).indexOf('nocap')>-1?'المتصفح ده مش بيدعم بث الملف':'اقعد على مكان الأول وتأكد إن المايك مسموح')}};
o.querySelector('#czst').onclick=()=>stopMusic();o.querySelector('#czx').onclick=()=>o.remove();o.onclick=e=>{if(e.target===o)o.remove()}};

setInterval(()=>{const m=window.__dirbg;if(!m||!m.length)return;const cards=[...document.querySelectorAll('#rmdir > div')];const favs=[];cards.forEach((c,i)=>{if(c.dataset.pc)return;const x=m[i];if(!x)return;c.dataset.pc=1;c.style.background=bgOf(x.n,x.bg);c.style.color='#fff';c.style.border='0';const tb=[...c.querySelectorAll('b')].find(y=>y.textContent.trim()===x.n);if(tb){if(x.fv){tb.textContent='⭐ '+tb.textContent;favs.push(c)}const sp=document.createElement('span');sp.textContent=x.pv?'🔒 خاصة':'🌐 عامة';sp.style.cssText='display:inline-block;align-self:flex-start;font-size:11px;background:#00000040;border-radius:8px;padding:2px 8px;margin:2px 0';tb.after(sp)}c.style.flexDirection='row-reverse';c.style.minHeight='84px';c.style.boxShadow='0 4px 14px #0006';const oc=[...c.querySelectorAll('div,span')].find(y=>y.children.length===0&&/موجودين/.test(y.textContent));if(oc){oc.textContent='👤 '+x.nn}if(oc&&oc.parentElement){oc.parentElement.style.flexWrap='wrap';oc.parentElement.style.gap='6px'}if(oc){const ap=document.createElement('span');ap.textContent='🔥 نشاط '+x.sc;ap.style.cssText='display:inline-block;font-size:12px;background:#00000050;border-radius:12px;padding:6px 10px;margin-inline-start:6px;white-space:nowrap';oc.after(ap)}const tl=[...c.children].find(y=>y.textContent.trim().length<=2||y.style.background.indexOf('url(')>-1);if(tl){tl.style.flex='0 0 84px'}if(x.cv){const t=[...c.children].find(y=>y.textContent.trim().length<=2);if(t){t.style.background='url("'+x.cv+'") center/cover';t.textContent=''}}});const h=document.querySelector('#rmdir > b');if(h)favs.reverse().forEach(c=>h.after(c))},800);

(function(){let last='',t=0;setInterval(()=>{const e=document.getElementById('rmn2');if(!e)return;const x=e.textContent;if(x!==last){last=x;t=Date.now()}else if(x&&Date.now()-t>4000){e.textContent='';last=''}},500)})();

(function(){const hd=document.getElementById('rmhd'),mo=document.getElementById('rmmore');if(!hd)return;const b=document.createElement('button');b.id='rmfav';b.type='button';b.title='إضافة الغرفة للمفضلة';b.style.cssText='background:#ffffff26;color:#fff;border:0;border-radius:12px;padding:6px 9px;font-size:18px;line-height:1';hd.insertBefore(b,mo);
const paint=()=>{const f=!!window.__fav;b.textContent=f?'★':'☆';b.style.color=f?'#ffd54a':'#fff';b.setAttribute('aria-pressed',f)};
b.onclick=async()=>{if(typeof room==='undefined'||!room)return;b.disabled=true;const r=await sb.rpc('toggle_room_fav',{p_room:room.id});b.disabled=false;if(!r.error){window.__fav=!!r.data}paint()};setInterval(paint,700);paint()})();

(function(){setInterval(()=>{const d=document.getElementById('rmdir');if(!d)return;document.querySelectorAll('#rm > .card *').forEach(e=>{if(e.children.length===0&&e.textContent.indexOf('الدخول بالكود')>-1&&!e.dataset.t){e.dataset.t=1;e.textContent='اختار غرفة من القائمة. الغرف الخاصة بتطلب كود الدعوة.';e.style.color='#d6ccf2'}});if(!document.getElementById('rmchg')){const c=document.createElement('div');c.id='rmchg';c.style.cssText='margin:0 0 8px;padding:6px 12px;border-radius:12px;background:linear-gradient(135deg,#3a2a12,#1f1638);color:#ffe3a3;border:1px solid #ffffff22;text-align:right;display:flex;align-items:center;gap:8px';c.innerHTML='<b style="color:#ffd54a;font-size:13px;white-space:nowrap">🏆 قايمة الشحن</b><span id="rmchm" style="font-size:11px;color:#cdbf9f;flex:1">فاضية لسه. الشحن مش شغال.</span><span id="rmchv" style="display:flex;gap:6px"></span>';d.parentElement.insertBefore(c,d);window.__rchT=0}const now=Date.now();if(document.getElementById('rmchv')&&now-(window.__rchT||0)>20000){window.__rchT=now;sb.rpc('recharge_top').then(r=>{const L=Array.isArray(r.data)?r.data.slice(0,4):[];const v=document.getElementById('rmchv'),m=document.getElementById('rmchm');if(!v||!m)return;v.innerHTML='';L.forEach(x=>{const e=document.createElement('span');e.title=x.name;e.style.cssText='width:30px;height:30px;border-radius:50%;background:#7a3fb0;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #ffd54a';e.textContent=String(x.name||'?').trim().charAt(0).toUpperCase();v.append(e)});m.style.display=L.length?'none':''}).catch(()=>{})}},800)})();
window.__roomColors=BG;window.__bgOf=bgOf;
})();
(function(){const st=document.createElement('style');st.textContent='#rmsg{gap:6px!important}#rmsg .rms{max-width:62px;width:100%;justify-self:center}#rmhc{width:44px!important;height:44px!important;border-radius:12px!important}#rmhn small{display:block;font-size:10px!important;opacity:.8}#rmhn code{font-size:10px!important;padding:0 4px!important;letter-spacing:0!important}#rmhn b{font-size:15px!important}#rmcz{font-size:0!important;padding:6px 8px!important}#rmcz:before{content:"🎨";font-size:16px}#rmhd{gap:8px!important;margin:0!important}#rmi{padding-bottom:150px!important}#rm:not(.inroom){background:#140d2b!important}#rm:not(.inroom) > .card{background:transparent!important;box-shadow:none!important;color:#d9d0f5!important;padding:0!important}#rm:not(.inroom) > .card b{color:#fff}#rmj,#rmjb{display:none!important}#rmx{display:none!important}#rm.inroom #rmn2{position:fixed;left:14px;right:14px;bottom:128px;z-index:30;background:#000000cc;color:#ffd1c9!important;border-radius:10px;padding:6px 10px;font-size:12px;text-align:center}#rm.inroom #rmn2:empty{display:none}#rmau{padding:4px 8px!important}#rmm{max-height:none}.rmhint{display:none!important}';document.head.appendChild(st);
setInterval(()=>{document.querySelectorAll('#rmi p').forEach(p=>{if(p.textContent.indexOf('اضغط «هدية»')>-1)p.classList.add('rmhint')})},700)})();
(function(){const st=document.createElement('style');st.textContent=`
#rm.inroom #rmsg{row-gap:6px;margin-top:6px}
#rm.inroom #rmsg .rms{position:relative;aspect-ratio:1/1;height:auto;margin-bottom:24px;border-radius:50%}
#rm.inroom #rmsg .rms.oc{border:2px solid #ffffffcc;background:#ffffff26;box-shadow:0 2px 8px #0004}
#rm.inroom #rmsg .rms.oc.me{border-color:#ffd27a}
#rm.inroom #rmsg .rms .av{position:absolute;inset:2px;width:auto;height:auto;border-radius:50%;background-size:cover!important;background-position:center!important}
#rm.inroom #rmsg .rms .sn{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:3px;max-width:120%;font-size:11px;line-height:1.2;text-align:center}
#rm.inroom #rmsg .pp{bottom:2px;left:2px;transform:none;background:#000000a0;color:#ffd27a;font-size:10px;padding:0 5px;border:1px solid #ffffff33}
#rm.inroom #rmsg .rms:not(.oc) svg{width:18px;height:18px;opacity:.7}
#rm.inroom #rmch{font-size:13px;line-height:1.4;padding:6px;min-height:120px}
#rm.inroom #rmch>div{background:#ffffff17;border-radius:12px;padding:3px 10px;margin:0 0 4px;width:fit-content;max-width:100%;word-break:break-word}
#rm.inroom #rmch>div>b{color:#ffd27a}
#rm.inroom #rmhc{cursor:pointer}
#rminf{display:none;position:fixed;inset:0;z-index:40;background:#0008;align-items:flex-end}#rminf>div{background:#fff;color:#2b2118;border-radius:18px 18px 0 0;padding:16px;width:100%;max-height:80vh;overflow:auto;text-align:right}#rminf .ir{display:flex;justify-content:space-between;padding:9px 2px;border-bottom:1px solid #eee;font-size:14px}#rminf .ir b{color:#7a6a58;font-weight:600}#rminf button{width:100%;margin-top:10px;padding:12px;border:0;border-radius:14px;font-size:15px;font-weight:700}
`;document.head.appendChild(st);
const q=id=>document.getElementById(id);
document.addEventListener('click',e=>{const h=e.target.closest&&e.target.closest('#rmhc');if(!h)return;
let o=q('rminf');if(!o){o=document.createElement('div');o.id='rminf';o.onclick=ev=>{if(ev.target===o)o.style.display='none'};document.body.append(o)}
const t=(q('rmt')||{}).textContent||'',cnt=((q('rmcnt')||{}).textContent||'').replace(/[()]/g,''),act=((q('rmact')||{}).textContent||'').replace('🔥','').trim(),code=(q('rmcode')||{}).textContent||'';
const fav=q('rmfav'),on=fav&&fav.getAttribute('aria-pressed')==='true';
const cv=(q('rmhc')||{}).style?q('rmhc').style.background:'';
o.innerHTML='<div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><div style="width:64px;height:64px;border-radius:16px;flex:none;background:'+(cv||'#7a2e8e').replace(/"/g,"'")+'"></div><b style="font-size:18px"></b></div><div class="ir"><span id="ii1"></span><b>الموجودين / الأماكن</b></div><div class="ir"><span id="ii2"></span><b>النشاط</b></div><div class="ir"><span id="ii3"></span><b>كود الدعوة</b></div><button id="iifav" style="background:#fff1e6;color:#c2410c"></button><button id="iix" style="background:#eee;color:#2b2118">إغلاق</button></div>';
o.querySelector('b').textContent=t;o.querySelector('#ii1').textContent=cnt;o.querySelector('#ii2').textContent=act;o.querySelector('#ii3').textContent=code;
const fb=o.querySelector('#iifav');fb.textContent=on?'★ في المفضلة (اضغط للإزالة)':'☆ إضافة للمفضلة';fb.onclick=()=>{fav&&fav.click();o.style.display='none'};o.querySelector('#iix').onclick=()=>{o.style.display='none'};o.style.display='flex'});
})();
(function(){const st=document.createElement('style');st.textContent=`
#rm.inroom>.card{padding:6px 8px 0!important}
#rm.inroom #rmhd{gap:8px;padding:2px 0;margin:0 0 4px;flex-wrap:nowrap}
#rm.inroom #rmhc{width:50px;height:50px;border-radius:12px;font-size:20px}
#rm.inroom #rmhn b{font-size:15px}
#rm.inroom #rmhn small{font-size:11px;display:inline}
#rm.inroom #rmact{display:inline-flex;margin:0 6px 0 0;padding:0 8px;font-size:11px;background:#0000004d}
#rm.inroom #rmhd button{padding:5px 8px!important;font-size:15px!important;border-radius:10px!important;line-height:1!important;min-width:32px}
#rm.inroom #rmhd #rmcz{font-size:0!important;padding:6px 8px!important}#rm.inroom #rmsg{row-gap:2px!important;margin:4px 0 0!important}
#rm.inroom #rmsg .rms{width:min(60px,100%)!important;height:auto!important;aspect-ratio:1/1;justify-self:center;margin-bottom:21px!important}
#rm.inroom #rmsg .pp{left:50%!important;bottom:-8px!important;transform:translateX(-50%)!important;background:#fff!important;color:#c2410c!important;border:0!important;font-size:10px;padding:0 7px;line-height:15px}
#rm.inroom #rmsg .rms .sn{margin-top:8px!important;font-size:10.5px!important}
#rm.inroom #rmsg .rms:not(.oc) svg{width:16px;height:16px}
#rm.inroom #rmau{margin:2px 0 4px!important;padding:4px 6px!important}
#rm.inroom #rmau .av{width:26px;height:26px}
#rm.inroom #rmaun{height:26px;min-width:34px}
#rm.inroom #rmch{background:transparent!important;border:0!important;max-height:none!important;height:33dvh;min-height:200px;padding:2px 2px!important;font-size:14px}
#rm.inroom #rmch>div.cm{display:flex;gap:8px;align-items:flex-start;background:transparent!important;padding:0!important;margin:0 0 8px!important;width:auto!important;border-radius:0}
#rm.inroom #rmch .cav{width:34px;height:34px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#fff;border:2px solid #ffffffaa}
#rm.inroom #rmch .cc{min-width:0}
#rm.inroom #rmch .cn{font-size:12px;color:#ffd27a;font-weight:700;margin-bottom:2px}
#rm.inroom #rmch .cb{display:inline-block;background:#0000005c;border-radius:14px;padding:6px 12px;font-size:15px;line-height:1.35;word-break:break-word;max-width:100%}
#rm.inroom #rmbar{direction:ltr;bottom:64px;padding:8px 10px;gap:8px}
#rm.inroom #rmbar input{direction:rtl;border-radius:22px;height:42px;background:#ffffff26}
`;document.head.appendChild(st);
const hue=s=>{let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))%360;return h};
function fix(){const ch=document.getElementById('rmch');if(!ch)return;
let chg=0;[...ch.children].forEach(d=>{if(d.tagName!=='DIV'||d.classList.contains('cm'))return;chg=1;const b=d.querySelector(':scope>b');if(!b)return;const nm=b.textContent.replace(/[:：]\s*$/,'').trim();b.remove();const body=d.textContent.trim();d.classList.add('cm');d.innerHTML='';const a=document.createElement('div');a.className='cav';try{const L=(typeof room!=='undefined'&&room&&room.mlist)||[];let cd=null;if(nm==='أنت')cd=myCode;else{const m=L.find(x=>(x.name||x.code)===nm);if(m)cd=m.code}if(cd&&typeof setAv==='function')setAv(a,nm==='أنت'?'':nm,cd);else{a.style.background='hsl('+hue(nm)+',45%,38%)';a.textContent=nm.charAt(0).toUpperCase()}}catch(e){a.style.background='hsl('+hue(nm)+',45%,38%)';a.textContent=nm.charAt(0).toUpperCase()}const c=document.createElement('div');c.className='cc';const n=document.createElement('div');n.className='cn';n.textContent=nm;const bb=document.createElement('div');bb.className='cb';bb.textContent=body;c.append(n,bb);d.append(a,c)});if(chg)ch.scrollTop=ch.scrollHeight;
const mo=document.getElementById('rmmore');if(mo&&/القائمة/.test(mo.textContent))mo.textContent='⋯';
const au=document.getElementById('rmaun');if(au&&/الموجودين/.test(au.textContent))au.textContent='👥 '+(au.textContent.match(/\d+/)||[''])[0]}
setInterval(fix,500);
document.addEventListener('click',e=>{const h=e.target.closest&&e.target.closest('#rmhc');if(!h)return;setTimeout(()=>{const t=document.querySelector('#rminf>div>div>div');const src=document.getElementById('rmhc');if(t&&src&&!src.style.background.includes('url')){t.textContent=src.textContent;t.style.cssText+=';display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px;font-weight:700'}},50)},true);
})();
(function(){const st=document.createElement('style');st.textContent=`
@keyframes frp{0%,100%{filter:brightness(1)}50%{filter:brightness(1.35)}}
#rm.inroom #rmsg .rms.fr-f1{border-color:#ffd54a!important;box-shadow:0 0 0 2px #b8860b,0 0 10px #ffd54a!important}
#rm.inroom #rmsg .rms.fr-f2{border-color:#4dd0e1!important;box-shadow:0 0 0 3px #7a2e8e,0 0 12px #4dd0e1!important}
#rm.inroom #rmsg .rms.fr-f3{border-color:#f08c00!important;box-shadow:0 0 0 3px #e8590c,0 0 14px #f08c00!important;animation:frp 1.6s infinite}
#rm.inroom #rmsg .rms.fr-f4{border-color:#b8f2c0!important;box-shadow:0 0 0 3px #3a7d44,0 0 10px #b8f2c0!important}
@keyframes entin{0%{transform:translateX(120%);opacity:0}15%{transform:translateX(0);opacity:1}85%{transform:translateX(0);opacity:1}100%{transform:translateX(-120%);opacity:0}}
@keyframes spk{0%{transform:translateY(0) scale(.4);opacity:0}20%{opacity:1}100%{transform:translateY(-140px) scale(1.2);opacity:0}}
#rment{position:fixed;left:0;right:0;top:34%;z-index:35;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:6px}
#rment .eb{padding:8px 20px;border-radius:24px;font-weight:700;font-size:15px;color:#2b2118;background:linear-gradient(120deg,#ffe08a,#f6a623);box-shadow:0 4px 18px #0006;animation:entin 3s ease both}
#rment .e2b{background:linear-gradient(120deg,#d9b3ff,#7a2e8e);color:#fff}#rment .e3b{background:linear-gradient(120deg,#8ff0c0,#1f6f5c);color:#fff}
#rment .sp{position:absolute;font-size:22px;animation:spk 2.4s ease-out both}
.cpk{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0}.cpk button{width:auto!important;margin:0!important;padding:8px 12px!important;border-radius:12px!important;font-size:13px!important;background:#f3ece0;color:#2b2118;border:2px solid transparent!important}.cpk button.on{border-color:#e8590c!important;background:#fff1e6}
`;document.head.appendChild(st);
const FR={'':'بدون',f1:'ذهبي',f2:'بنفسجي',f3:'ناري',f4:'أخضر'},EN={'':'بدون',e1:'لافتة ذهبية',e2:'لافتة بنفسجي',e3:'لافتة خضراء'};
let cos={},seen=null,mine={frame:'',ent:''},lastRoom=null,t0=0;
function play(name,ent){let h=document.getElementById('rment');if(!h){h=document.createElement('div');h.id='rment';document.body.append(h)}
const b=document.createElement('div');b.className='eb '+(ent==='e2'?'e2b':ent==='e3'?'e3b':'');b.textContent=(ent==='e1'?'👑 ':ent==='e2'?'✨ ':'🌿 ')+name+' دخل الغرفة';h.append(b);
for(let i=0;i<6;i++){const s=document.createElement('span');s.className='sp';s.textContent=ent==='e3'?'🌿':'✨';s.style.left=(15+Math.random()*70)+'%';s.style.top='40px';s.style.animationDelay=(i*0.2)+'s';h.append(s);setTimeout(()=>s.remove(),3200)}
setTimeout(()=>b.remove(),3200)}
async function poll(){try{const r=(typeof room!=='undefined'?room:null);if(!r||!r.id){lastRoom=null;seen=null;return}
if(lastRoom!==r.id){lastRoom=r.id;seen=null;t0=Date.now()}
const d=await sb.rpc('room_cosmetics',{p_room:r.id});if(!d||d.error)return;const L=d.data||[];cos={};L.forEach(x=>cos[x.code]=x);
const names={};(r.mlist||[]).forEach(m=>names[m.code]=m.name||m.code);
const codes=(r.mlist||[]).map(m=>m.code);
if(seen===null){seen=new Set(codes);const me=cos[myCode];if(me&&me.ent)play('أنت',me.ent)}
else codes.forEach(c=>{if(!seen.has(c)){seen.add(c);const x=cos[c];if(x&&x.ent)play(names[c]||c,x.ent)}})}catch(e){}}
setInterval(poll,4000);
function applyFr(){try{const r=(typeof room!=='undefined'?room:null);if(!r)return;const L=r.mlist||[];const nm={};L.forEach(m=>nm[m.name||m.code]=m.code);nm['أنت']=myCode;document.querySelectorAll('#rmsg .rms.oc').forEach(b=>{const sn=b.querySelector('.sn');if(!sn)return;const c=nm[sn.textContent];const f=c&&cos[c]&&cos[c].frame;['f1','f2','f3','f4'].forEach(k=>b.classList.toggle('fr-'+k,f===k))})}catch(e){}}
setInterval(applyFr,800);const _mo=new MutationObserver(applyFr);setInterval(()=>{const g=document.getElementById('rmsg');if(g&&!g.dataset.mo){g.dataset.mo=1;_mo.observe(g,{childList:true,subtree:true})}},500);
document.addEventListener('click',e=>{const h=e.target.closest&&e.target.closest('#rmhc');if(!h)return;setTimeout(async()=>{const o=document.querySelector('#rminf>div');if(!o||o.querySelector('.cpk'))return;
try{const m=await sb.rpc('my_cosmetics');if(m&&m.data)mine={frame:m.data.frame||'',ent:m.data.ent||''}}catch(e){}
const sec=document.createElement('div');sec.innerHTML='<div class="ir"><b>إطار صورتي</b><span></span></div><div class="cpk" id="cpf"></div><div class="ir"><b>احتفال دخولي</b><span></span></div><div class="cpk" id="cpe"></div>';
const mk=(box,map,key)=>{Object.keys(map).forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=map[k];if(mine[key]===k)b.className='on';b.onclick=async()=>{mine[key]=k;box.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.className='on';await sb.rpc('set_cosmetics',{p_frame:mine.frame,p_ent:mine.ent});poll()};box.append(b)})};
mk(sec.querySelector('#cpf'),FR,'frame');mk(sec.querySelector('#cpe'),EN,'ent');
const x=o.querySelector('#iifav');o.insertBefore(sec,x)},120)},true);
})();

(function(){const st=document.createElement('style');st.textContent=`
#rm.inroom #rmch>div.cm{gap:6px!important;margin:0 0 4px!important;align-items:center!important}
#rm.inroom #rmch .cav{width:24px!important;height:24px!important;font-size:11px!important;border-width:1.5px!important}
#rm.inroom #rmch .cc{display:flex;flex-wrap:wrap;align-items:center;gap:2px 6px}
#rm.inroom #rmch .cn{font-size:11px!important;margin:0!important}
#rm.inroom #rmch .cb{font-size:14px!important;padding:3px 10px!important;border-radius:12px!important;line-height:1.3!important}
#rm.inroom #rmch{padding-bottom:6px!important}
#rminf>div{max-height:78dvh!important;overflow:auto!important}
`;document.head.appendChild(st)})();
