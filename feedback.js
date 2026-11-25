(function(){if(window.__fb)return;window.__fb=1;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const st=document.createElement('style');st.textContent='#fbm{display:none;position:fixed;inset:0;background:#0007;z-index:9;align-items:flex-end;justify-content:center}#fbm.on{display:flex}#fbc{background:#fff;color:#222;width:100%;max-width:520px;border-radius:18px 18px 0 0;padding:16px;direction:rtl;max-height:92dvh;overflow:auto}#fbc textarea{width:100%;min-height:120px;border:1px solid #ccc;border-radius:10px;padding:10px;font:inherit;font-size:16px;resize:vertical;direction:rtl}#fbk{display:flex;gap:8px;margin:8px 0}#fbk button{flex:1}#fbk button:not(.on){background:#e4ddcc;color:#222}#fbn{font-size:12px;color:#777;margin:4px 0}#fbs{font-size:14px;min-height:20px;margin:6px 0}#fbr{display:flex;gap:8px}#fbr button{flex:1}.fbi{border-top:1px solid #ddd;padding:8px 0;line-height:1.6}.fbi small{color:#777}.fbi .t{display:inline-block;border-radius:10px;padding:0 8px;font-size:12px;color:#fff;background:#c0392b}.fbi .t.i{background:#1f6f5c}.fbi.dn{opacity:.55}';document.head.appendChild(st);
const m=document.createElement('div');m.id='fbm';m.innerHTML='<div id="fbc"><b>قولنا رأيك</b><div id="fbk"><button type="button" data-k="problem" class="on">مشكلة</button><button type="button" data-k="idea">اقتراح</button></div><textarea id="fbt" maxlength="800" placeholder="اكتب المشكلة أو الاقتراح بالتفصيل"></textarea><div id="fbn">0 / 800</div><div id="fbs"></div><div id="fbr"><button type="button" id="fbsend">إرسال</button><button type="button" class="alt" id="fbx">إلغاء</button></div></div>';document.body.appendChild(m);
let kind='problem';
const open=()=>{$('fbt').value='';$('fbs').textContent='';$('fbn').textContent='0 / 800';$('fbsend').disabled=false;m.classList.add('on')};
const close=()=>m.classList.remove('on');
m.querySelectorAll('#fbk button').forEach(b=>b.onclick=()=>{kind=b.dataset.k;m.querySelectorAll('#fbk button').forEach(x=>x.classList.toggle('on',x===b))});
$('fbt').oninput=()=>{$('fbn').textContent=$('fbt').value.length+' / 800'};
$('fbx').onclick=close;m.onclick=e=>{if(e.target===m)close()};
$('fbsend').onclick=async()=>{const v=$('fbt').value.trim(),s=$('fbs');if(v.length<3){s.style.color='#c0392b';s.textContent='اكتب كام كلمة على الأقل.';return}
 $('fbsend').disabled=true;s.style.color='#555';s.textContent='بيتبعت…';
 const r=await sb.rpc('submit_feedback',{p_kind:kind,p_body:v,p_ctx:'app'});
 if(r.error){$('fbsend').disabled=false;s.style.color='#c0392b';s.textContent=/too many/.test(r.error.message)?'بعتّ كتير في ساعة، جرّب بعدين.':'ماتبعتش، جرّب تاني.';return}
 s.style.color='#1f6f5c';s.textContent='وصلت لميجو، شكرًا ليك 🌹';setTimeout(close,1600)};
const put=()=>{const pm=$('pmenu');if(!pm||$('fbopen'))return;const g=document.createElement('div');g.className='pmg';g.innerHTML='<button type="button" class="pmr" id="fbopen"><span class="pmi"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><span>قولنا رأيك</span><span class="pmc">\u2039</span></button>';pm.appendChild(g);$('fbopen').onclick=open};
put();new MutationObserver(put).observe(document.body,{childList:true,subtree:true});
// owner review: appended under the existing owner-only reports screen
const orig=window.adminLoad;
if(orig)window.adminLoad=async function(){await orig.apply(this,arguments);
 const box=$('adr');if(!box||box.style.display==='none')return;
 const r=await asb.rpc('admin_list_feedback');if(r.error)return;
 let h=$('fbadm');if(!h){h=document.createElement('div');h.id='fbadm';box.appendChild(h)}
 const rows=r.data||[];h.innerHTML='<p style="margin-top:14px"><b>آراء المستخدمين ('+rows.length+')</b></p>'+(rows.length?'':'<p style="color:#777">لسه مفيش آراء.</p>');
 for(const x of rows){const d=document.createElement('div');d.className='fbi'+(x.status==='done'?' dn':'');
  d.innerHTML='<span class="t'+(x.kind==='idea'?' i':'')+'">'+(x.kind==='idea'?'اقتراح':'مشكلة')+'</span> <small>'+esc(x.code||'—')+' · '+new Date(x.created_at).toLocaleString('ar-EG',{dateStyle:'short',timeStyle:'short'})+'</small><div style="white-space:pre-wrap;margin:4px 0">'+esc(x.body)+'</div>';
  const b=document.createElement('button');b.className='alt';b.style.cssText='padding:5px 12px;font-size:13px';b.textContent=x.status==='done'?'رجّعه جديد':'تم';
  b.onclick=async()=>{await asb.rpc('admin_set_feedback_status',{p_id:x.id,p_status:x.status==='done'?'new':'done'});window.adminLoad()};d.appendChild(b);h.appendChild(d)}};
if(location.hash==='#admin')setTimeout(()=>{if($('adm').style.display==='block'&&window.adminLoad)window.adminLoad()},400);
})();
