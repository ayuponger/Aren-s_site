/* =========================================================
   Happy Birthday Sentiren— interactions
   ========================================================= */

// ---------- Falling petals ----------
(function petals(){
  const layer = document.getElementById('petals');
  if(!layer) return;
  const count = 24;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random()*100 + 'vw';
    p.style.animationDuration = (8 + Math.random()*10) + 's';
    p.style.animationDelay = (-Math.random()*15) + 's';
    p.style.opacity = (.3 + Math.random()*.5).toFixed(2);
    layer.appendChild(p);
  }
})();

// ---------- Scroll progress + reveal ----------
(function scrollFx(){
  const bar = document.getElementById('scrollProgress');
  const reveals = document.querySelectorAll('.reveal, .reveal-img');

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const delay = parseInt(en.target.dataset.delay || '0', 10);
        setTimeout(()=>en.target.classList.add('in'), delay);
        io.unobserve(en.target);
      }
    });
  }, {threshold: .15, rootMargin:'0px 0px -60px 0px'});

  reveals.forEach(el=>io.observe(el));

  window.addEventListener('scroll', ()=>{
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if(bar) bar.style.width = pct + '%';
  }, {passive:true});
})();

// ---------- Parallax banner ----------
(function parallax(){
  const el = document.querySelector('.parallax-image');
  if(!el) return;
  const speed = parseFloat(el.dataset.speed || '0.3');
  const section = el.closest('.parallax');
  window.addEventListener('scroll', ()=>{
    const rect = section.getBoundingClientRect();
    if(rect.bottom < 0 || rect.top > window.innerHeight) return;
    const offset = (window.innerHeight - rect.top) * speed;
    el.style.transform = `translateY(${-offset * .15}px)`;
  }, {passive:true});
})();

// ---------- Cake candles ----------
(function cake(){
  const candles = document.querySelectorAll('.candle');
  const status = document.getElementById('wishStatus');
  let blown = 0;
  candles.forEach(c=>{
    c.addEventListener('click', ()=>{
      if(c.classList.contains('out')) return;
      c.classList.add('out');
      blown++;
      if(blown < candles.length){
        status.textContent = `${candles.length - blown} more to go…`;
      } else {
        status.innerHTML = '🎂 Wish made. May it all come true, Sentiren💜';
        setTimeout(launchConfetti, 300);
      }
    });
  });
})();

// ---------- Confetti ----------
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let confettiPieces = [];
let confettiActive = false;

function resizeCanvas(){
  if(!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchConfetti(){
  if(!ctx) return;
  const colors = ['#f8e8ee','#e8c5d0','#c9a0dc','#9b72cf','#d4a574','#ffffff'];
  for(let i=0;i<140;i++){
    confettiPieces.push({
      x: Math.random()*canvas.width,
      y: -20 - Math.random()*200,
      r: 4 + Math.random()*6,
      c: colors[Math.floor(Math.random()*colors.length)],
      vy: 2 + Math.random()*3,
      vx: -2 + Math.random()*4,
      rot: Math.random()*Math.PI,
      vr: -.1 + Math.random()*.2,
    });
  }
  if(!confettiActive){ confettiActive = true; tickConfetti(); }
}

function tickConfetti(){
  if(!ctx) return;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiPieces.forEach(p=>{
    p.x += p.vx; p.y += p.vy; p.rot += p.vr;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.c;
    ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r*1.6);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.y < canvas.height + 30);
  if(confettiPieces.length){
    requestAnimationFrame(tickConfetti);
  } else {
    confettiActive = false;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
}

const cBtn = document.getElementById('confettiBtn');
if(cBtn) cBtn.addEventListener('click', launchConfetti);

// ---------- Music toggle (custom audio file) ----------
(function music(){
  const btn = document.getElementById('musicToggle');
  const audio = document.getElementById('bgMusic');
  if(!btn || !audio) return;
  audio.volume = 0.55;
  let on = false;
  btn.addEventListener('click', ()=>{
    on = !on;
    btn.classList.toggle('on', on);
    btn.querySelector('.mt-label').textContent = on ? 'music on' : 'music off';
    if(on){
      audio.play().catch(()=>{
        btn.classList.remove('on');
        btn.querySelector('.mt-label').textContent = 'music off';
        on = false;
      });
    } else {
      audio.pause();
    }
  });
})();
