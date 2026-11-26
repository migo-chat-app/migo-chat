(function(){
const C=[['😀','وجوه','😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😜 🤪 😝 🤗 🤭 🤔 🤐 😐 😑 😶 😏 😒 🙄 😬 😴 😪 😷 🤒 🤕 🤢 🥵 🥶 🥴 😵 🤯 🤠 🥳 😎 🤓 😕 😟 🙁 😮 😲 😳 🥺 😦 😨 😰 😢 😭 😱 😖 😣 😞 😓 😩 😫 🥱 😤 😡 😠 🤬 😈 💀 💩 🤡 👻 👽 🤖'],
['👍','إيدين','👍 👎 👌 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤝 👏 🙌 👐 🤲 🙏 ✍️ 💪 🦾 🖕 🤏 🤌'],
['❤️','قلوب','❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ♥️ 💋 🌹 🥀 🌸 💐'],
['🐶','حيوانات','🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🙈 🙉 🙊 🐔 🐧 🐦 🦅 🦉 🐺 🐴 🦄 🐝 🦋 🐢 🐍 🐙 🐬 🐳 🦈 🐘 🐪 🐫 🦒'],
['🍕','أكل','🍎 🍌 🍉 🍇 🍓 🍒 🍑 🥭 🍍 🥥 🥑 🍆 🥕 🌽 🍞 🧀 🍗 🍖 🍔 🍟 🍕 🌭 🌮 🥙 🍳 🍜 🍝 🍣 🍩 🍪 🎂 🍰 🍫 🍬 🍭 ☕ 🍵 🥤 🍺'],
['⚽','حاجات','⚽ 🏀 🏈 🎾 🏐 🎱 🏓 🎮 🎲 🎯 🎵 🎶 🎤 🎧 🎸 🎬 📷 📱 💻 🚗 ✈️ 🚀 🏠 ⏰ 🎁 🎉 🎊 🎈 🔥 ✨ ⭐ 🌟 💯 ✅ ❌ ⚡ 🌙 ☀️ 🌈 ⛅ 💎 👑']];
const K='mg_recent_emoji';
function rec(){try{return JSON.parse(localStorage.getItem(K)||'[]')}catch(e){return[]}}
function addRec(e){let r=rec().filter(x=>x!==e);r.unshift(e);r=r.slice(0,24);try{localStorage.setItem(K,JSON.stringify(r))}catch(x){}}
const st=document.createElement('style');
st.textContent='#mgem{display:none;background:#fff;border-top:1px solid #e3ece8;padding:6px 8px 8px}#mgem .t{display:flex;gap:4px;overflow-x:auto;padding-bottom:6px}#mgem .t button{flex:none;border:0;background:#eef4f1;border-radius:12px;padding:4px 10px;font-size:18px;line-height:1.2;color:#1f6f54;font-family:inherit}#mgem .t button.on{background:#1f6f54;color:#fff}#mgem .t button span{font-size:12px;margin-inline-start:4px;font-weight:700}#mgem .g{display:grid;grid-template-columns:repeat(8,1fr);gap:2px;height:150px;overflow-y:auto}#mgem .g button{border:0;background:none;font-size:24px;padding:4px 0;border-radius:8px;line-height:1.2}#mgem .g button:active{background:#e3efe9}#mgem .e{grid-column:1/-1;text-align:center;color:#777;font-size:13px;padding:30px 0}#mgeb{background:#eef4f1!important}#mgeb svg{stroke:#1f6f54!important}#pkav.mgon::after{content:"";position:absolute;right:-1px;bottom:-1px;width:12px;height:12px;border-radius:50%;background:#2fbf71;border:2px solid #fff}#pkav{position:relative;overflow:visible}html.mgd #mgem .g button,html.mgd #mgem .t i{filter:invert(1) hue-rotate(180deg)}#mgem .t i{font-style:normal}.rci .od{left:auto!important;right:-1px!important;bottom:-1px!important}';
document.head.appendChild(st);
function init(){
const txt=document.getElementById('txt');if(!txt||document.getElementById('mgeb'))return;
const row=txt.parentNode,bar=document.getElementById('bar');
const b=document.createElement('button');b.type='button';b.id='mgeb';b.className='rb';b.setAttribute('aria-label','إيموجي');
b.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2"/><circle cx="9" cy="10" r=".6"/><circle cx="15" cy="10" r=".6"/></svg>';
const p=document.createElement('div');p.id='mgem';p.dir='rtl';
const t=document.createElement('div');t.className='t';const g=document.createElement('div');g.className='g';p.append(t,g);
bar.insertBefore(p,row);row.insertBefore(b,txt);
let cur=0;
function show(i){cur=i;[...t.children].forEach((x,j)=>x.classList.toggle('on',j===i));g.innerHTML='';
 const list=i===0?rec():C[i-1][2].split(' ');
 if(!list.length){const e=document.createElement('div');e.className='e';e.textContent='لسه مفيش إيموجي مستخدم';g.appendChild(e);return}
 for(const e of list){const x=document.createElement('button');x.type='button';x.textContent=e;x.onclick=()=>ins(e);g.appendChild(x)}}
function ins(e){addRec(e);const s=txt.selectionStart==null?txt.value.length:txt.selectionStart,en=txt.selectionEnd==null?s:txt.selectionEnd;txt.value=txt.value.slice(0,s)+e+txt.value.slice(en);const n=s+e.length;try{txt.setSelectionRange(n,n)}catch(x){}txt.dispatchEvent(new Event('input',{bubbles:true}));if(cur===0)show(0)}
const tabs=[['🕘','الأخيرة']].concat(C.map(c=>[c[0],c[1]]));
tabs.forEach((c,i)=>{const x=document.createElement('button');x.type='button';x.innerHTML='<i>'+c[0]+'</i><span>'+c[1]+'</span>';x.onclick=()=>show(i);t.appendChild(x)});
b.onclick=()=>{const o=p.style.display==='block';p.style.display=o?'none':'block';if(!o)show(rec().length?0:1)};
}
init();
setInterval(()=>{try{init();const k=document.getElementById('pkav'),f=window.friend||(typeof friend!=='undefined'?friend:null);const on=!!(f&&typeof online!=='undefined'&&online.has(f.code));if(k)k.classList.toggle('mgon',on);const p=document.getElementById('mgem'),bar=document.getElementById('bar');if(p&&bar&&bar.style.display==='none')p.style.display='none'}catch(e){}},1000);
})();
