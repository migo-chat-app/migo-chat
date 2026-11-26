(function(){if(window.__da)return;window.__da=1;
const $=id=>document.getElementById(id);
function bar(d){let b=$('delbar');if(!d){if(b)b.remove();return}
if(!b){b=document.createElement('div');b.id='delbar';b.style.cssText='position:fixed;left:0;right:0;top:0;z-index:20;background:#b00020;color:#fff;padding:8px 12px;font-size:13px;line-height:1.6;direction:rtl;text-align:center';document.body.appendChild(b)}
const dt=new Date(d).toLocaleDateString('ar-EG',{day:'numeric',month:'long'});
b.innerHTML='';const s=document.createElement('span');s.id='delbart';s.textContent='حسابك هيتحذف نهائيًا يوم '+dt+'. لحد وقتها هو مخفي عن الناس ومش هتقدر تبعت رسايل. ';const k=document.createElement('button');k.id='delcancel';k.type='button';k.textContent='إلغاء الحذف';k.style.cssText='background:#fff;color:#b00020;border:0;border-radius:8px;padding:4px 10px;font-weight:700;font-family:inherit';
k.onclick=async()=>{k.disabled=true;const r=await sb.rpc('cancel_account_deletion');if(r.error){k.disabled=false;s.textContent='الإلغاء ماتمش، حاول تاني. ';return}bar(null)};b.append(s,k)}
async function check(){try{if(typeof sb==='undefined')return;const r=await sb.rpc('my_deletion_status');if(!r.error)bar(r.data)}catch(e){}}
function init(){const b=$('del'),p=$('delp'),ok=$('delok'),no=$('delno');if(!b||!p||!ok||!no)return false;
b.textContent='حذف حسابي وبياناتي';
p.innerHTML='<b>الحذف بيتم بعد 7 أيام.</b> خلال الأسبوع ده حسابك بيتخبّى عن الناس ومش هتقدر تبعت رسايل، ولو رجعت وضغطت «إلغاء الحذف» الحساب بيرجع زي ما هو.<br><b>بعد الأسبوع بيتحذف نهائيًا:</b> حسابك واسمك وكودك وصورتك، كل رسايلك والهدايا اللي بعتّها أو استلمتها (بتختفي عند الطرف التاني كمان)، منشوراتك وتعليقاتك وإعجاباتك، الغرف اللي إنت فاتحها، المتابعات والحظر، أغراضك ومهامك وإعداداتك، وكمان أي بلاغات للإدارة قدمتها أو اتقدمت عنك. مفيش تراجع بعد كده.<br>اكتب كلمة <b>حذف</b> للتأكيد:<br><input id="delcf" autocomplete="off" style="margin:6px 0;width:120px;text-align:center"><br><span id="delmsg" style="color:#b00020"></span>';
p.appendChild(ok);p.appendChild(no);
ok.textContent='ابدأ مهلة الحذف (7 أيام)';ok.disabled=true;
const cf=$('delcf');cf.oninput=()=>{ok.disabled=cf.value.trim()!=='حذف'};
no.onclick=()=>{p.style.display='none';cf.value='';ok.disabled=true;$('delmsg').textContent=''};
ok.onclick=async()=>{if(cf.value.trim()!=='حذف')return;ok.disabled=true;$('delmsg').textContent='';
try{const rg=await navigator.serviceWorker.getRegistration('./');const s0=rg&&await rg.pushManager.getSubscription();if(s0)await s0.unsubscribe()}catch(e){}
const r=await sb.rpc('request_account_deletion',{p_confirm:'حذف'});
if(r.error){$('delmsg').textContent='ماتمش، حاول تاني';ok.disabled=false;return}
p.style.display='none';cf.value='';bar(r.data)};
check();return true}
if(!init()){let n=0;const t=setInterval(()=>{if(init()||++n>40)clearInterval(t)},500)}
window.addEventListener("focus",check);setTimeout(check,3000);setTimeout(check,8000);
})();
