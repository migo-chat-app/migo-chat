(function(){if(window.__r3)return;window.__r3=1;
const $=id=>document.getElementById(id);
const TOP=[['chat','دردشة'],['music','موسيقى'],['games','ألعاب'],['meet','تعارف'],['study','دراسة'],['sport','رياضة'],['movies','أفلام ومسلسلات']];
const CTR=[['EG','مصر'],['SA','السعودية'],['AE','الإمارات'],['KW','الكويت'],['QA','قطر'],['BH','البحرين'],['OM','عُمان'],['IQ','العراق'],['SY','سوريا'],['LB','لبنان'],['JO','الأردن'],['PS','فلسطين'],['YE','اليمن'],['LY','ليبيا'],['TN','تونس'],['DZ','الجزائر'],['MA','المغرب'],['SD','السودان'],['ZZ','دولة أخرى']];
const TN=Object.fromEntries(TOP),CN=Object.fromEntries(CTR);
const flag=c=>c==='ZZ'?'🌍':String.fromCodePoint(...[...c].map(ch=>127397+ch.charCodeAt(0)));
const norm=s=>String(s||'').toLowerCase().replace(/[\u064B-\u065F\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').trim();
const F=window.__rf={q:'',t:'',c:'',act:false};
const opts=(l,all)=>'<option value="">'+all+'</option>'+l.map(([k,v])=>'<option value="'+k+'">'+(l===CTR?flag(k)+' ':'')+v+'</option>').join('');
const sty=document.createElement('style');sty.textContent='#rfbar{margin:4px 0 10px;display:flex;flex-direction:column;gap:6px;direction:rtl}#rfbar input,#rfbar select{width:100%;box-sizing:border-box;background:#ffffff1f;color:#fff;border:1px solid #ffffff33;border-radius:12px;padding:9px 10px;font-size:14px;margin:0;min-width:0}#rfbar select option{color:#222}#rfbar input::placeholder{color:#ffffffaa}#rfbar .rfr{display:flex;gap:6px}#rfbar .rfr>*{flex:1}#rfbar button{flex:none!important;width:auto!important;background:#ffffff1f;color:#fff;border:1px solid #ffffff33;border-radius:12px;padding:9px 12px;font-size:13px;margin:0}#rfbar button.on{background:#ff9a3c;border-color:#ff9a3c}#rfbar small{color:#ffffffbb;font-size:12px}#rcb #rcft,#rcb #rcfc{width:100%;box-sizing:border-box;padding:13px;border:1.5px solid #d9cdb8;border-radius:14px;font-size:16px;background:#fff;color:#222;margin:0}.rfc{display:inline-block;font-size:11px;background:#00000040;border-radius:8px;padding:2px 8px;margin:2px 3px 2px 0}';document.head.append(sty);
const MAG='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>';
const magBtn=(id,label)=>{const b=document.createElement('button');b.type='button';b.id=id;b.setAttribute('aria-label',label);b.innerHTML=MAG;b.style.cssText='flex:none;width:38px;height:38px;padding:0;margin:0;border:0;border-radius:50%;background:#ffffff26;color:#fff;display:flex;align-items:center;justify-content:center';return b};
function build(){const dir=$('rmdir');if(!dir||$('rfbar'))return;const b=document.createElement('div');b.id='rfbar';b.style.display='none';
b.innerHTML='<input id="rfq" type="search" maxlength="40" placeholder="دوّر على غرفة بالاسم" aria-label="بحث بالاسم">';
dir.parentNode.insertBefore(b,dir);
$('rfq').addEventListener('input',()=>{F.q=$('rfq').value;if(window.dirLoad)window.dirLoad()})}
function addRoomMag(){const nb=$('rmnew');if(!nb||$('rfmag'))return;const m=magBtn('rfmag','بحث عن غرفة');nb.parentNode.insertBefore(m,nb);
 m.onclick=()=>{build();const bar=$('rfbar');const open=bar.style.display==='none';bar.style.display=open?'flex':'none';m.style.background=open?'#ff9a3c':'#ffffff26';if(open)setTimeout(()=>$('rfq').focus(),50);else{$('rfq').value='';F.q='';if(window.dirLoad)window.dirLoad()}}}
setInterval(addRoomMag,800);
// people list search
function addPeople(){const pp=$('pp');if(!pp||$('pfmag'))return;const t=$('ppt');if(!t)return;const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;justify-content:space-between;margin:0 0 10px;direction:rtl';const h=document.createElement('b');h.textContent='الأشخاص';const m=magBtn('pfmag','بحث عن شخص');m.style.background='#1f6f5c1a';m.style.color='#1f6f5c';row.append(h,m);pp.insertBefore(row,pp.firstChild);
 const bar=document.createElement('div');bar.id='pfbar';bar.style.cssText='display:none;margin:0 0 10px';bar.innerHTML='<input id="pfq" type="search" maxlength="40" placeholder="دوّر على شخص بالاسم" aria-label="بحث بالاسم" style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #d9cdb8;border-radius:14px;font-size:16px;background:#fff;color:#222;margin:0">';row.after(bar);
 const l=$('ppl');const note=document.createElement('p');note.id='pfn';note.style.cssText='display:none;font-size:13px;color:#777;margin:6px 2px';note.textContent='مفيش حد بالاسم ده.';l.after(note);
 const apply=()=>{const q=norm(($('pfq')||{}).value||'');let shown=0,all=0;[...l.children].forEach(r=>{all++;const n=r.querySelector('.nm');const key=(n?n.textContent:'')+' '+((n&&n.nextSibling?n.nextSibling.textContent:'').split('·')[1]||'');const ok=!q||norm(key).includes(q);r.style.display=ok?'':'none';if(ok)shown++});note.style.display=(q&&all>0&&!shown)?'block':'none'};
 new MutationObserver(apply).observe(l,{childList:true});$('pfq').addEventListener('input',apply);
 m.onclick=()=>{const open=bar.style.display==='none';bar.style.display=open?'block':'none';m.style.background=open?'#1f6f5c':'#1f6f5c1a';m.style.color=open?'#fff':'#1f6f5c';if(open)setTimeout(()=>$('pfq').focus(),50);else{$('pfq').value='';apply()}}}
setInterval(addPeople,800);
// wrap rpc: list_rooms (filter+sort, keeping rooms2's aligned arrays in sync) and create_room (save topic/country)
const prev=sb.rpc.bind(sb);
sb.rpc=async function(n,a){
 if(n==='create_room'){const t=($('rcft')||{}).value||'',c=($('rcfc')||{}).value||'';const r=await prev(n,a);if(r&&r.data&&r.data.id&&(t||c)){try{await prev('set_room_meta',{p_room:r.data.id,p_topic:t,p_country:c})}catch(e){}}return r}
 const r=await prev(n,a);
 if(n==='list_rooms'&&r&&Array.isArray(r.data)){build();const bg=window.__dirbg||[];const rows=r.data.map((x,i)=>({x,b:bg[i]}));const total=rows.length;
  let L=rows.filter(({x})=>(!F.q||norm(x.name).includes(norm(F.q)))&&(!F.t||x.topic===F.t)&&(!F.c||x.country===F.c)&&(!F.act||(x.score||0)>0));
  L.sort((p,q)=>(q.x.n||0)-(p.x.n||0)||(q.x.score||0)-(p.x.score||0)||String(p.x.name).localeCompare(String(q.x.name),'ar'));
  r.data=L.map(o=>o.x);if(bg.length)window.__dirbg=L.map(o=>o.b);window.__dirmeta=L.map(o=>({t:o.x.topic,c:o.x.country,s:o.x.score||0}));
  
  window.__rfEmpty=total>0&&!L.length}
 return r};
// card chips + filtered-empty text
function applyChips(){const m=window.__dirmeta,box=$('rmdir');if(!box)return;
 if(window.__rfEmpty){const p=box.querySelector('p');if(p&&!p.dataset.rf){p.dataset.rf=1;p.textContent='مفيش غرفة بتطابق البحث أو الفلتر ده.'}}
 if(!m)return;[...box.children].filter(c=>c.tagName==='DIV').forEach((c,i)=>{const x=m[i];if(!x||c.dataset.mc)return;const tb=[...c.querySelectorAll('b')][0];if(!tb)return;c.dataset.mc=1;const w=document.createElement('div');w.style.cssText='display:flex;flex-wrap:wrap;gap:2px;align-self:flex-start';
  const add=t=>{const s=document.createElement('span');s.className='rfc';s.textContent=t;w.append(s)};if(x.t&&TN[x.t])add(TN[x.t]);if(x.c&&CN[x.c])add(flag(x.c)+' '+CN[x.c]);if(x.s>0)add('🔥 نشطة');if(w.children.length)tb.parentNode.insertBefore(w,tb.nextSibling)})}
{const d=$('rmdir');if(d)new MutationObserver(applyChips).observe(d,{childList:true})}
setInterval(applyChips,2000);
// create screen pickers
function addPick(){const v=$('rcvis');if(!v||$('rcft'))return;const w=document.createElement('div');w.innerHTML='<div class="rc-l">موضوع الغرفة (اختياري)</div><select id="rcft" style="width:100%;box-sizing:border-box">'+opts(TOP,'من غير موضوع')+'</select><div class="rc-l">بلد الغرفة (اختياري)</div><select id="rcfc" style="width:100%;box-sizing:border-box">'+opts(CTR,'من غير بلد')+'</select>';v.after(w)}
setInterval(addPick,800);addPick();build();
})();
;(function(){if(window.__r4)return;window.__r4=1;
const $=id=>document.getElementById(id);
const st=document.createElement('style');st.textContent='#rpin{margin:6px 0 8px;background:#0000004d;border:1px solid #ffffff2e;border-radius:14px;padding:10px 12px;color:#fff;direction:rtl;text-align:right;font-size:13px;line-height:1.6;max-height:170px;overflow:auto;white-space:pre-wrap;word-break:break-word}#rpin b{display:block;font-size:12px;color:#ffcf8a;margin-bottom:2px}#rpin .rpw{font-size:14px;font-weight:700;margin-bottom:6px}#rpinov{position:fixed;inset:0;z-index:70;background:#000a;display:flex;align-items:flex-end;justify-content:center}#rpinov>div{background:#fff;color:#222;width:100%;max-width:520px;border-radius:18px 18px 0 0;padding:16px;box-sizing:border-box;max-height:90vh;overflow:auto;direction:rtl}#rpinov label{display:block;font-size:13px;font-weight:700;color:#5b4a3a;margin:10px 2px 4px}#rpinov textarea{width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #d9cdb8;border-radius:14px;font-size:16px;background:#fff;color:#222;font-family:inherit;resize:vertical}#rpinov small{color:#777;font-size:12px}#rpinov .rpb{display:flex;gap:8px;margin-top:12px}#rpinov .rpb button{flex:1;margin:0}';document.head.append(st);
let cur=null,shownFor=null,lastKey='';
function render(d){let c=$('rpin');const ch=$('rmch');if(!ch)return;
 const w=d&&d.welcome,r=d&&d.rules;
 if(!w&&!r){if(c)c.remove();lastKey='';return}
 const key=w+'|'+r;if(c&&key===lastKey&&c.isConnected)return;lastKey=key;
 if(!c){c=document.createElement('div');c.id='rpin';c.setAttribute('role','note')}
 c.innerHTML='';if(w){const e=document.createElement('div');e.className='rpw';e.textContent='📌 '+w;c.append(e)}
 if(r){const h=document.createElement('b');h.textContent='قواعد الغرفة';const e=document.createElement('div');e.textContent=r;c.append(h,e)}
 ch.parentNode.insertBefore(c,ch)}
async function fetchPin(){if(typeof room==='undefined'||!room){cur=null;shownFor=null;lastKey='';const c=$('rpin');if(c)c.remove();return}
 const id=room.id;const r=await sb.rpc('get_room_pin',{p_room:id});if(!room||room.id!==id)return;if(r.error)return;cur=r.data||{};render(cur)}
setInterval(()=>{try{const id=(typeof room!=='undefined'&&room)?room.id:null;if(id!==shownFor){shownFor=id;fetchPin()}}catch(e){}},400);
setInterval(()=>{try{if(typeof room!=='undefined'&&room)fetchPin()}catch(e){}},5000);
function editor(){if($('rpinov'))return;const o=document.createElement('div');o.id='rpinov';const b=document.createElement('div');
 b.innerHTML='<b style="font-size:16px">📌 رسالة الترحيب والقواعد</b><label for="rpw">رسالة الترحيب</label><textarea id="rpw" rows="2" maxlength="120" placeholder="مثال: أهلاً بيك في الروم، اقعد وانبسط"></textarea><small id="rpwc"></small><label for="rpr">قواعد الغرفة</label><textarea id="rpr" rows="5" maxlength="400" placeholder="مثال:&#10;1- احترام الكل&#10;2- ممنوع الإعلانات"></textarea><small id="rprc"></small><p id="rpe" style="color:#c0392b;font-size:13px;margin:6px 0 0"></p><div class="rpb"><button type="button" id="rps">حفظ وتثبيت</button><button type="button" class="alt" id="rpx">إلغاء</button></div><div class="rpb" style="margin-top:6px"><button type="button" class="red" id="rpd">إزالة التثبيت</button></div>';
 o.append(b);document.body.append(o);
 const w=$('rpw'),r=$('rpr');w.value=(cur&&cur.welcome)||'';r.value=(cur&&cur.rules)||'';
 const cnt=()=>{$('rpwc').textContent=w.value.length+'/120';$('rprc').textContent=r.value.length+'/400'};cnt();w.oninput=cnt;r.oninput=cnt;
 const close=()=>o.remove();o.onclick=e=>{if(e.target===o)close()};$('rpx').onclick=close;
 const save=async(a,c)=>{if(!room)return;const x=await sb.rpc('set_room_pin',{p_room:room.id,p_welcome:a,p_rules:c});if(x.error){$('rpe').textContent=/not_host/.test(x.error.message)?'التثبيت للمضيف بس':'مقدرتش أحفظ، جرّب تاني';return}cur={welcome:a.trim()||null,rules:c.trim()||null};lastKey='';render(cur);close()};
 $('rps').onclick=()=>save(w.value,r.value);$('rpd').onclick=()=>save('','')}
const mb=$('rmmore');if(mb)mb.addEventListener('click',()=>{setTimeout(()=>{try{if(!room||room.host!==myCode)return;const g=document.querySelector('#rmovb>div');if(!g||g.querySelector('[data-pin]'))return;const b=document.createElement('button');b.type='button';b.className='alt';b.dataset.pin=1;b.style.cssText='padding:12px 4px;font-size:13px;grid-column:1/-1';b.textContent='📌 رسالة الترحيب والقواعد';b.onclick=()=>{const ov=$('rmov');if(ov)ov.style.display='none';editor()};g.append(b)}catch(e){}},30)});

/* room chat: server-authoritative redraw so blocks hide/restore lines live */
(function(){if(window.__r3c)return;window.__r3c=1;
const $=id=>document.getElementById(id);let last='',lastRid=null,run=0;
const orig=sb.rpc.bind(sb);const chatAdd=m=>{const d=document.createElement('div');const b=document.createElement('b');b.textContent=(m.code===myCode?'أنت':(m.name||m.code))+': ';d.append(b,document.createTextNode(m.body));$('rmch').append(d)};
async function sync(){if(run||!room)return;run=1;try{const id=room.id;const m=await orig('room_msgs_list',{p_room:id,p_after:0});if(m.error||!room||room.id!==id||!Array.isArray(m.data))return;
const arr=m.data,ids=arr.map(x=>x.id),sig=ids.join(','),box=$('rmch');if(!box)return;
const atEnd=box.scrollTop+box.clientHeight>=box.scrollHeight-20;
if(lastRid===id&&sig===last&&box.children.length===arr.length)return;
const prev=last?last.split(','):[];
const append=lastRid===id&&prev.length&&box.children.length===prev.length&&prev.every((v,i)=>String(ids[i])===v);
if(append){for(const x of arr.slice(prev.length))chatAdd(x)}else{box.innerHTML='';for(const x of arr)chatAdd(x)}
last=sig;lastRid=id;if(ids.length)room.lastMsg=ids[ids.length-1];if(atEnd||!append)box.scrollTop=box.scrollHeight}catch(e){}finally{run=0}}
sb.rpc=function(n,a){if(n==='room_msgs_list'){sync();return Promise.resolve({data:[],error:null})}return orig(n,a)};
})();
})();
