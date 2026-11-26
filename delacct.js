(function(){if(window.__da)return;window.__da=1;
const $=id=>document.getElementById(id);
function init(){const b=$('del'),p=$('delp'),ok=$('delok'),no=$('delno');if(!b||!p||!ok||!no)return false;
b.textContent='حذف حسابي وبياناتي';
p.innerHTML='<b>هتتحذف نهائيًا:</b> حسابك واسمك وكودك وصورتك، كل رسايلك والهدايا اللي بعتّها أو استلمتها (بتختفي عند الطرف التاني كمان)، منشوراتك وتعليقاتك وإعجاباتك، الغرف اللي إنت فاتحها، المتابعات والحظر، وأغراضك ومهامك وإعداداتك.<br><b>اللي هيفضل:</b> بلاغات الإدارة اللي إنت قدمتها أو اتقدمت عنك، عشان الإدارة تراجعها (من غير حسابك). مفيش تراجع.<br>اكتب كلمة <b>حذف</b> للتأكيد:<br><input id="delcf" autocomplete="off" style="margin:6px 0;width:120px;text-align:center"><br><span id="delmsg" style="color:#b00020"></span>';
p.appendChild(ok);p.appendChild(no);
ok.textContent='احذف حسابي نهائيًا';ok.disabled=true;
const cf=$('delcf');cf.oninput=()=>{ok.disabled=cf.value.trim()!=='حذف'};
no.onclick=()=>{p.style.display='none';cf.value='';ok.disabled=true;$('delmsg').textContent=''};
ok.onclick=async()=>{if(cf.value.trim()!=='حذف')return;ok.disabled=true;$('delmsg').textContent='';
try{const rg=await navigator.serviceWorker.getRegistration('./');const s0=rg&&await rg.pushManager.getSubscription();if(s0){await sb.rpc('push_unsubscribe',{p_endpoint:s0.endpoint});await s0.unsubscribe()}}catch(e){}
const r=await sb.rpc('delete_my_account',{p_confirm:'حذف'});
if(r.error){$('delmsg').textContent='الحذف ماتمش، حاول تاني';ok.disabled=false;return}
try{await sb.auth.signOut()}catch(e){}try{localStorage.clear()}catch(e){}location.reload()};
return true}
if(!init()){let n=0;const t=setInterval(()=>{if(init()||++n>40)clearInterval(t)},500)}
})();
