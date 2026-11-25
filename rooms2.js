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
.rc-sw{display:flex;gap:8px;flex-wrap:wrap}.rc-sw button{width:38px;height:38px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px #d9cdb8;padding:0}.rc-sw button.on{box-shadow:0 0 0 3px #e8590c}
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
const ask=()=>new Promise(res=>{const o=E('div',{},'<div style="background:#fff;border-radius:18px;padding:18px;width:min(88vw,340px);text-align:right"><b>الغرفة دي خاصة</b><p style="font-size:13px;color:#666;margin:6px 0">اكتب كود الدعوة اللي صاحب الغرفة بعتهولك.</p><input id="pcin" dir="ltr" autocapitalize="none" style="width:100%;padding:12px;border:1.5px solid #d9cdb8;border-radius:12px;font-size:16px;text-align:left"><div style="display:flex;gap:8px;margin-top:12px"><button id="pcok" style="flex:1;padding:12px;border:0;border-radius:12px;background:#e8590c;color:#fff;font-weight:700">دخول</button><button id="pcno" style="flex:1;padding:12px;border:0;border-radius:12px;background:#eadfcb">إلغاء</button></div></div>');o.style.cssText='position:fixed;inset:0;z-index:50;background:#0008;display:flex;align-items:center;justify-content:center';document.body.appendChild(o);const f=v=>{o.remove();res(v)};o.querySelector('#pcok').onclick=()=>f((o.querySelector('#pcin').value||'').trim().toLowerCase());o.querySelector('#pcno').onclick=()=>f('');setTimeout(()=>o.querySelector('#pcin').focus(),50)});
const orig=sb.rpc.bind(sb);
sb.rpc=async function(n,a){
if(n==='create_room'){const r=await orig(n,a);if(r&&r.data&&r.data.id){if(window.__pv)await orig('set_room_private',{p_room:r.data.id,p_private:true});if(window.__bg)await orig('set_room_look',{p_room:r.data.id,p_bg:window.__bg})}window.__pv=0;return r}
if(n==='join_room'&&a&&(a.p_code==null||String(a.p_code).charAt(0)==='~')){const c=await ask();if(!c)return{data:null,error:{message:'cancel'}};return orig(n,{p_code:c})}
const r=await orig(n,a);
if(n==='list_rooms'&&r&&Array.isArray(r.data))r.data=r.data.map(x=>({...x,code:x.code||('~'+x.name),name:(x.priv?'🔒 ':'')+x.name,_bg:x.bg}));
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
const oldc=rmc.onclick;rmc.onclick=()=>{rmpub.checked=true;cr.querySelector('#rcerr').textContent='';return Promise.resolve(oldc()).then(()=>{try{if(room)cr.style.display='none'}catch(e){}})};
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
async function look(){try{if(lookFor!==room.id+'|'+rmt.textContent){lookFor=room.id+'|'+rmt.textContent;const r=await orig('room_look',{p_room:room.id});const bg=r&&r.data&&r.data.bg||'';const b=bgOf(room.code,bg);rm.style.setProperty('--rb',b);$('rmhc').textContent=(rmt.textContent||'؟').trim().charAt(0).toUpperCase();$('rmhc').style.background=b}
if(Date.now()-actAt>8000){actAt=Date.now();pact();const a=await orig('room_activity',{p_room:room.id});if(a&&a.data)act.textContent='🔥 نشاط '+a.data.score;act.title='رسائل وهدايا آخر 30 دقيقة: '+(a&&a.data?a.data.msgs+' رسالة و'+a.data.gifts+' هدية':'')}}catch(e){}}
let pa={};async function pact(){try{const r=await orig('room_member_activity',{p_room:room.id});pa={};((r&&r.data)||[]).forEach(x=>pa[x.code]=x.score);pills()}catch(e){}}
function pills(){const L=room.mlist||[];const nm={};L.forEach(m=>nm[m.name||m.code]=m.code);nm['أنت']=myCode;document.querySelectorAll('#rmsg .rms.oc').forEach(b=>{const sn=b.querySelector('.sn');if(!sn)return;const c=nm[sn.textContent];const v=c&&pa[c]||0;let p=b.querySelector('.pp');if(!p){p=E('span',{className:'pp'});b.append(p)}const t='🔥'+v;if(p.textContent!==t)p.textContent=t;p.title='تفاعله في الغرفة: رسائل وهدايا آخر 30 دقيقة'})}
new MutationObserver(()=>{try{pills()}catch(e){}}).observe($('rmsg'),{childList:true});
function aud(){au.innerHTML='';const L=(room.mlist||[]);for(const m of L.slice(0,7)){const a=E('span',{className:'av'});setAv(a,m.name,m.code);au.append(a)}au.append(E('span',{id:'rmaun'},'الموجودين '+L.length))}
setInterval(()=>{try{if(room){cr.style.display='none';const sg=$('rmsg');if(sg)sg.style.setProperty('--c',String(Math.max(1,Math.round(sg.children.length/3))));rm.classList.add('inroom');look();aud();$('rmtc').textContent=mm.classList.contains('cl')?'عرض ▾':'إخفاء ▴';nb.style.display='none'}else{rm.classList.remove('inroom');lookFor='';actAt=0;nb.style.display=''}}catch(e){}},1500);
window.__roomColors=BG;window.__bgOf=bgOf;
})();
