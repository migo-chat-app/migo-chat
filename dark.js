(function(){if(window.__dk)return;window.__dk=1;
const K='mg_dark';const h=document.documentElement;
const s=document.createElement('style');s.textContent='html.mgd{filter:invert(.92) hue-rotate(180deg);background:#fff}html.mgd img,html.mgd video,html.mgd canvas,html.mgd .av,html.mgd #pkav,html.mgd #prfa,html.mgd #pav,html.mgd .mgc i,html.mgd .mgpk .o b,html.mgd .mglb,html.mgd [data-ink]{filter:invert(1) hue-rotate(180deg)}html.mgd #call{filter:invert(1) hue-rotate(180deg)}';document.head.appendChild(s);
function get(){try{return localStorage.getItem(K)==='1'}catch(_){return false}}
function set(v){try{localStorage.setItem(K,v?'1':'0')}catch(_){}h.classList.toggle('mgd',v);const m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',v?'#0f2a24':'#1f6f5c')}
set(get());
function row(){const c=document.getElementById('pvc');if(!c||document.getElementById('mgdark'))return;const l=document.createElement('label');l.style.cssText='display:flex;gap:8px;align-items:center';l.innerHTML='<input type="checkbox" id="mgdark"> <span>الوضع الداكن (على الجهاز ده بس)</span>';c.insertBefore(l,document.getElementById('pvmsg')||null);const cb=l.querySelector('input');cb.checked=get();cb.onchange=()=>set(cb.checked)}
const seen=new WeakSet();
function lum(str){const m=str.match(/rgba?\([^)]*\)/g);if(!m)return null;let sum=0,n=0;for(const c of m){const p=c.match(/[\d.]+/g).map(Number);if(p.length>=4&&p[3]<0.3)continue;sum+=(0.299*p[0]+0.587*p[1]+0.114*p[2])/255;n++}return n?sum/n:null}
function ink(){if(!h.classList.contains('mgd'))return;const all=document.body.querySelectorAll('*');for(const e of all){if(seen.has(e))continue;if(e.closest('[data-ink]')){continue}const w=e.offsetWidth,hh=e.offsetHeight;if(w<120||hh<40)continue;seen.add(e);const cs=getComputedStyle(e);let l=null;if(cs.backgroundImage&&cs.backgroundImage.indexOf('gradient')>=0)l=lum(cs.backgroundImage);else if(cs.backgroundColor)l=lum(cs.backgroundColor);if(l!==null&&l<0.3)e.dataset.ink='1'}}
setInterval(()=>{row();ink()},1500);
})();
