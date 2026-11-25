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
function build(){const dir=$('rmdir');if(!dir||$('rfbar'))return;const b=document.createElement('div');b.id='rfbar';
b.innerHTML='<input id="rfq" type="search" maxlength="40" placeholder="دوّر على غرفة بالاسم" aria-label="بحث بالاسم"><div class="rfr"><select id="rft" aria-label="الموضوع">'+opts(TOP,'كل المواضيع')+'</select><select id="rfc" aria-label="البلد">'+opts(CTR,'كل البلاد')+'</select></div><div class="rfr" style="align-items:center"><button type="button" id="rfa">🔥 النشطة دلوقتي</button><small id="rfn"></small></div>';
dir.parentNode.insertBefore(b,dir);
const go=()=>{F.q=$('rfq').value;F.t=$('rft').value;F.c=$('rfc').value;if(window.dirLoad)window.dirLoad()};
$('rfq').addEventListener('input',go);$('rft').onchange=go;$('rfc').onchange=go;
$('rfa').onclick=()=>{F.act=!F.act;$('rfa').classList.toggle('on',F.act);go()}}
// wrap rpc: list_rooms (filter+sort, keeping rooms2's aligned arrays in sync) and create_room (save topic/country)
const prev=sb.rpc.bind(sb);
sb.rpc=async function(n,a){
 if(n==='create_room'){const t=($('rcft')||{}).value||'',c=($('rcfc')||{}).value||'';const r=await prev(n,a);if(r&&r.data&&r.data.id&&(t||c)){try{await prev('set_room_meta',{p_room:r.data.id,p_topic:t,p_country:c})}catch(e){}}return r}
 const r=await prev(n,a);
 if(n==='list_rooms'&&r&&Array.isArray(r.data)){build();const bg=window.__dirbg||[];const rows=r.data.map((x,i)=>({x,b:bg[i]}));const total=rows.length;
  let L=rows.filter(({x})=>(!F.q||norm(x.name).includes(norm(F.q)))&&(!F.t||x.topic===F.t)&&(!F.c||x.country===F.c)&&(!F.act||(x.score||0)>0));
  L.sort((p,q)=>(q.x.n||0)-(p.x.n||0)||(q.x.score||0)-(p.x.score||0)||String(p.x.name).localeCompare(String(q.x.name),'ar'));
  r.data=L.map(o=>o.x);if(bg.length)window.__dirbg=L.map(o=>o.b);window.__dirmeta=L.map(o=>({t:o.x.topic,c:o.x.country,s:o.x.score||0}));
  const nn=$('rfn');if(nn)nn.textContent=(F.q||F.t||F.c||F.act)?(L.length+' من '+total+' غرفة'):'';
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
