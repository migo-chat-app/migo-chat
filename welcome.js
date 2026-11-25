(function(){
var e=document.getElementById('entry');if(!e)return;
var hero=e.firstElementChild;if(!hero||document.getElementById('wlc'))return;
var st=document.createElement('style');st.textContent='#wlc{position:relative;width:100%;max-width:340px;margin:0 auto}#wlc svg{width:100%;height:auto;display:block;overflow:visible}#wlc .bob{animation:wb 3.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}#wlc .bob2{animation-delay:-1.6s}#wlc .wv{animation:ww 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:10% 90%}#wlc .bl{animation:wbl 4s ease-in-out infinite;opacity:0;transform-box:fill-box;transform-origin:50% 100%}#wlc .bl2{animation-delay:2s}#wlc .dt{animation:wd 1s infinite}#wlc .eye{animation:we 4.5s infinite;transform-box:fill-box;transform-origin:50% 50%}#wlc .hrt{animation:wh 4s ease-in infinite;opacity:0}@keyframes wb{50%{transform:translateY(-4px)}}@keyframes ww{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(22deg)}}@keyframes wbl{0%{opacity:0;transform:scale(.5)}10%,42%{opacity:1;transform:scale(1)}52%,100%{opacity:0;transform:scale(.9)}}@keyframes wd{50%{opacity:.25}}@keyframes we{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}@keyframes wh{0%{opacity:0;transform:translateY(0)}20%{opacity:1}100%{opacity:0;transform:translateY(-34px)}}@media(prefers-reduced-motion:reduce){#wlc *{animation:none!important}#wlc .bl{opacity:1}}';
document.head.appendChild(st);
var svg='<svg viewBox="0 0 320 200" role="img" aria-label="شاب وبنت بيتكلموا في ميجو شات">'
+'<ellipse cx="160" cy="188" rx="140" ry="8" fill="#000" opacity=".18"/>'
// woman (left)
+'<g class="bob"><path d="M60 188v-52q0-22 24-22t24 22v52z" fill="#ff7a9c"/><rect x="76" y="100" width="16" height="16" rx="6" fill="#f2c3a0"/>'
+'<path d="M58 78q0-34 26-34t26 34v36q-6-8-8-30-18 6-36-6-4 22-8 36z" fill="#2b1a14"/><circle cx="84" cy="76" r="22" fill="#f6cfae"/>'
+'<path d="M62 70q6-24 24-22 14 0 20 18-14-8-26-6-10 2-18 10z" fill="#2b1a14"/>'
+'<ellipse class="eye" cx="76" cy="78" rx="2.6" ry="3.2" fill="#2b1a14"/><ellipse class="eye" cx="92" cy="78" rx="2.6" ry="3.2" fill="#2b1a14"/><path d="M77 88q7 6 14 0" stroke="#b4535f" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="70" cy="85" r="3.5" fill="#ff9aa8" opacity=".55"/><circle cx="98" cy="85" r="3.5" fill="#ff9aa8" opacity=".55"/>'
+'<g class="wv"><path d="M108 128q22-6 30-34" stroke="#f6cfae" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="139" cy="90" r="7" fill="#f6cfae"/></g></g>'
// man (right)
+'<g class="bob bob2"><path d="M212 188v-54q0-22 24-22t24 22v54z" fill="#2f7dd1"/><rect x="228" y="98" width="16" height="16" rx="6" fill="#d9a67f"/>'
+'<circle cx="236" cy="76" r="22" fill="#e3b28b"/><path d="M213 72q0-26 23-26t23 26q-8-12-23-12t-23 12z" fill="#1d1612"/>'
+'<ellipse class="eye" cx="228" cy="78" rx="2.6" ry="3.2" fill="#1d1612"/><ellipse class="eye" cx="244" cy="78" rx="2.6" ry="3.2" fill="#1d1612"/><path d="M229 88q7 6 14 0" stroke="#8d4b3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>'
+'<path d="M212 128q-30 6-38 28" stroke="#e3b28b" stroke-width="9" fill="none" stroke-linecap="round"/><rect x="154" y="146" width="22" height="38" rx="5" fill="#222" transform="rotate(-12 165 165)"/><rect x="157" y="150" width="16" height="28" rx="3" fill="#6fe0b0" transform="rotate(-12 165 165)"/></g>'
// bubbles
+'<g class="bl"><rect x="96" y="6" width="96" height="34" rx="16" fill="#fff"/><path d="M110 40l-6 12 18-12z" fill="#fff"/><text x="144" y="29" text-anchor="middle" font-size="16" font-weight="700" fill="#1f6f54">أهلاً بيك</text></g>'
+'<g class="bl bl2"><rect x="148" y="14" width="96" height="34" rx="16" fill="#d9fdd3"/><path d="M226 48l8 12-20-12z" fill="#d9fdd3"/><text x="196" y="37" text-anchor="middle" font-size="16" font-weight="700" fill="#1f6f54">نورتنا!</text></g>'
+'<g class="hrt"><path d="M160 84c-8-10-22 0-12 10l12 10 12-10c10-10-4-20-12-10z" fill="#ff5c7c"/></g>'
+'</svg>';
var d=document.createElement('div');d.id='wlc';d.innerHTML=svg;
var img=hero.querySelector('img');if(img)img.style.display='none';
hero.insertBefore(d,hero.children[1]);
var ia=document.getElementById('aga'),ie=document.getElementById('age_e');if(ia&&ie)ia.addEventListener('input',function(){ie.textContent=''});
})();
(function(){if(window.__ng)return;window.__ng=1;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bar=document.createElement('div');bar.id='ngbar';bar.setAttribute('role','status');bar.style.cssText='position:fixed;top:0;left:0;right:0;z-index:99;text-align:center;font-weight:700;font-size:13px;line-height:1.4;padding:6px 10px;color:#fff;background:#c0392b;display:none;direction:rtl';document.body.append(bar);
let hideT=null,recovering=false;
const show=(t,c)=>{clearTimeout(hideT);bar.textContent=t;bar.style.background=c||'#c0392b';bar.style.display='block'};
const ok=t=>{show(t,'#1f6f5c');hideT=setTimeout(()=>{bar.style.display='none'},2500)};
addEventListener('offline',()=>show('النت قاطع، بنستنى يرجع…'));
addEventListener('online',()=>{if(!recovering)ok('النت رجع')});
if(navigator.onLine===false)show('النت قاطع، بنستنى يرجع…');
let watched=null,wasMic=false;
function attach(r){try{const E=window.LivekitClient.RoomEvent;r.on(E.Reconnecting,()=>show('الاتصال ضعيف، بنحاول نرجّع الصوت…'));r.on(E.Reconnected,()=>ok('رجع الاتصال'));r.on(E.Disconnected,async()=>{await sleep(2500);if(room&&lkr===r&&r.state==='disconnected'&&!recovering)recover()})}catch(e){}}
setInterval(()=>{try{if(typeof lkr!=='undefined'&&lkr){if(lkr!==watched){watched=lkr;attach(lkr)}if(lkr.localParticipant)wasMic=!!lkr.localParticipant.isMicrophoneEnabled}}catch(e){}},1000);
const orig=window.roomOut;
async function recover(){recovering=true;const r=lkr,id=room.id,mic=wasMic;show('الاتصال قطع، بنرجّعك للغرفة…');
for(const d of [1500,3000,5000,8000,12000,15000,15000,15000]){await sleep(d);if(!room||room.id!==id||lkr!==r){recovering=false;return}
if(navigator.onLine===false){show('النت قاطع، بنستنى يرجع…');continue}
try{const t=await roomFn({action:'token',room:id});if(!t.ok)continue;await r.connect(t.j.url,t.j.token);try{await r.startAudio()}catch(e){}
if(mic&&r.localParticipant.permissions&&r.localParticipant.permissions.canPublish){try{await r.localParticipant.setMicrophoneEnabled(true)}catch(e){}}
recovering=false;ok('رجعت للغرفة');return}catch(e){show('بنحاول نرجّعك للغرفة…')}}
recovering=false;bar.style.display='none';orig('الاتصال قطع ومقدرناش نرجّعك، ادخل الغرفة تاني')}
if(typeof orig==='function')window.roomOut=function(m){if(m==='الغرفة اتقفلت أو خرجت منها'&&room&&lkr&&!recovering){recover();return}return orig.apply(this,arguments)};
})();
