(function(){if(window.__pv)return;window.__pv=1;
const $=id=>document.getElementById(id);
function card(){const d=$('del');if(!d||$('pvc'))return !!$('pvc');const host=d.parentNode;
const c=document.createElement('div');c.id='pvc';c.style.cssText='background:#f3f7f5;border-radius:10px;padding:10px;margin:8px 0;font-size:13px;line-height:1.7';
c.innerHTML='<b>الخصوصية</b><label style="display:flex;gap:8px;align-items:center;margin-top:6px"><input type="checkbox" id="pvpres" style="width:auto"> أظهر إني متصل (نقطة خضرا). لو قفلتها بيظهر «غير متصل» ومفيش آخر ظهور.</label><label style="display:flex;gap:8px;align-items:center;margin-top:6px"><input type="checkbox" id="pvdisc" style="width:auto"> خلّي الناس تلاقيني بالاسم في «الأشخاص». لو قفلتها محدش يوصلك غير بالكود.</label><span id="pvmsg" style="font-size:12px;color:#b00020"></span>';
host.parentNode.insertBefore(c,host);
const pr=$('pvpres'),di=$('pvdisc');
pr.onchange=async()=>{const r=await sb.rpc('set_my_presence',{p_on:pr.checked});$('pvmsg').textContent=r.error?'ماتحفظش، حاول تاني':'';if(r.error)pr.checked=!pr.checked};
di.onchange=()=>{try{if(di.checked!==!!discOn)$('ppb').click()}catch(e){}};
return true}
let ldOk=false;async function load(){try{const r=await sb.rpc('get_my_privacy');const x=r.data&&r.data[0];if(x&&$('pvpres')){$('pvpres').checked=x.show_presence;ldOk=true}}catch(e){}
try{if($('pvdisc'))$('pvdisc').checked=!!discOn}catch(e){}}
function head(){let f;try{f=friend}catch(e){}let p=$('mgpres');
const lg=$('log');if(!lg)return;if(!p){p=document.createElement('div');p.id='mgpres';p.style.cssText='display:none;font-size:12px;padding:3px 14px;color:#445;background:#fff;border-bottom:1px solid #0001;direction:rtl';lg.parentNode.insertBefore(p,lg)}
let nc=false,on=false,open=false;try{open=!!f&&lg.offsetParent!==null;nc=NOCALL.includes(f.code);on=online.has(f.code)}catch(e){}
if(!open||nc){p.style.display='none';return}
p.style.display='block';p.innerHTML='';if(on){const s=document.createElement('span');s.className='hon';s.style.cssText='display:inline-block;width:9px;height:9px;border-radius:50%;background:#2ecc71;margin-left:6px;vertical-align:middle';p.appendChild(s);p.appendChild(document.createTextNode('متصل'))}else p.textContent='غير متصل'}
const st=$('st');if(st)new MutationObserver(head).observe(st,{childList:true,characterData:true,subtree:true});
let n=0;const t=setInterval(()=>{if(card()){clearInterval(t);load()}else if(++n>40)clearInterval(t)},500);
setInterval(head,2000);setInterval(()=>{try{if($('pvdisc'))$('pvdisc').checked=!!discOn}catch(e){}},3000);
let k2=0;const t2=setInterval(()=>{if(ldOk||++k2>30)clearInterval(t2);else load()},2000);
})();
