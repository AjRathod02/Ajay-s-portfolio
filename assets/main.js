(() => {
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const hasG = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
if (hasG) gsap.registerPlugin(ScrollTrigger);
document.getElementById('yr').textContent = new Date().getFullYear();
const esc = s => s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

// marquee duplicate
const mt = document.querySelector('.marquee-track'); mt.textContent += mt.textContent;

// --- render skills chart
const max = Math.max(...SKILLS.map(s => s.items.length));
const chart = document.getElementById('chart'), det = document.getElementById('skillDetail');
const showSkill = i => {
  chart.querySelectorAll('.bar').forEach((b, j) => b.classList.toggle('on', i === j));
  det.innerHTML = `<p class="mono" style="color:var(--a)">${SKILLS[i].items.length} tools</p><h3>${esc(SKILLS[i].k)}</h3><div class="tags">${SKILLS[i].items.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
  if (hasG && !RM) gsap.from(det.querySelectorAll('.tag'), {y: 14, opacity: 0, stagger: .03, duration: .4});
};
SKILLS.forEach((s, i) => {
  const b = document.createElement('button'); b.className = 'bar';
  b.innerHTML = `<span class="lbl">${esc(s.k)}</span><span class="track"><span class="fill" data-w="${(s.items.length / max * 100).toFixed(1)}"></span></span><span class="n">${s.items.length}</span>`;
  b.addEventListener('mouseenter', () => showSkill(i)); b.addEventListener('click', () => showSkill(i)); b.addEventListener('focus', () => showSkill(i));
  chart.appendChild(b);
});
showSkill(0);

// --- projects
const cards = document.getElementById('cards'), placeholders = [];
PROJECTS.forEach((p, i) => {
  const el = document.createElement('article'); el.className = 'card'; el.dataset.tag = p.tag;
  const link = p.link === null ? '<span class="lnk" style="color:var(--mut)">internal / proprietary</span>' : `<a class="lnk" href="${p.link}">view project ↗</a>`;
  if (p.link === '#') placeholders.push(p.t);
  el.innerHTML = `<div class="glare"></div><span class="kind">${p.tag === 'data' ? 'DATA · ML' : 'FULL STACK'}</span><div class="num">${String(i + 1).padStart(2, '0')}</div><h3>${esc(p.t)}</h3><div class="ctx">${esc(p.ctx)}</div><p>${esc(p.d)}</p><div class="tags">${p.s.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>${link}`;
  cards.appendChild(el);
  if (!RM && fine) {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `rotateY(${(x - .5) * 16}deg) rotateX(${(.5 - y) * 16}deg) translateZ(10px)`;
      el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%');
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  }
});
window.__placeholders = placeholders;
document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === c));
  cards.querySelectorAll('.card').forEach(k => k.classList.toggle('hide', c.dataset.f !== 'all' && k.dataset.tag !== c.dataset.f));
  if (hasG) ScrollTrigger.refresh();
}));

// --- timeline
document.getElementById('tl').innerHTML = EXPERIENCE.map(e => `<div class="tl-item reveal"><div class="p mono">${e.p}</div><h3>${esc(e.r)}</h3><h4>${esc(e.c)}</h4><ul>${e.b.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');

// --- scroll progress
const prog = document.querySelector('.progress');
addEventListener('scroll', () => { prog.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%'; }, {passive: true});

// --- text scramble
const chars = '01<>/{}[]#$%&*+=ΣΔπ';
function scramble(el) {
  const final = el.dataset.text; let f = 0; const total = 28;
  const tick = () => {
    el.textContent = final.split('').map((ch, i) => f / total > i / final.length ? ch : chars[Math.random() * chars.length | 0]).join('');
    if (++f <= total) requestAnimationFrame(tick); else el.textContent = final;
  }; tick();
}
// --- typing
const typed = document.querySelector('.typed'), words = typed.dataset.words.split('|');
function typeLoop() {
  if (RM) { typed.textContent = words[0]; return; }
  let w = 0, c = 0, del = false;
  (function step() {
    const word = words[w]; typed.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(step, 1600); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1; setTimeout(step, del ? 35 : 70);
  })();
}
// --- counters
function counters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const n = +el.dataset.count;
    if (RM || !hasG) { el.textContent = n; return; }
    const o = {v: 0}; gsap.to(o, {v: n, duration: 2, ease: 'power2.out', delay: .6, onUpdate: () => el.textContent = Math.round(o.v)});
  });
}
if (!RM) document.querySelectorAll('.scramble').forEach(scramble);
typeLoop(); counters();

// --- reveal / 3D section transitions
const fills = document.querySelectorAll('.fill');
if (hasG && !RM) {
  gsap.from('.hero-inner > *', {y: 40, opacity: 0, stagger: .12, duration: 1, ease: 'power3.out'});
  gsap.utils.toArray('.reveal').forEach(el => gsap.from(el, {y: 60, opacity: 0, rotateX: 12, transformPerspective: 900, transformOrigin: '50% 100%', duration: 1, ease: 'power3.out', scrollTrigger: {trigger: el, start: 'top 88%'}}));
  gsap.utils.toArray('.card').forEach((el, i) => gsap.from(el, {y: 90, opacity: 0, rotateY: i % 2 ? -25 : 25, rotateX: 10, z: -200, transformPerspective: 1200, duration: 1.1, ease: 'power3.out', scrollTrigger: {trigger: el, start: 'top 92%'}, clearProps: 'transform'}));
  gsap.utils.toArray('.sec-head h2').forEach(h => gsap.fromTo(h, {xPercent: -6}, {xPercent: 6, ease: 'none', scrollTrigger: {trigger: h, scrub: true}}));
  gsap.utils.toArray('.section').forEach(s => gsap.fromTo(s, {rotateX: 6, transformPerspective: 1600, transformOrigin: '50% 0%'}, {rotateX: 0, ease: 'none', scrollTrigger: {trigger: s, start: 'top bottom', end: 'top 40%', scrub: true}}));
  gsap.to('.hero-inner', {yPercent: 35, opacity: .2, ease: 'none', scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true}});
  gsap.to('.hero-stats', {yPercent: 60, ease: 'none', scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true}});
  gsap.to('.hero-grad', {yPercent: 25, ease: 'none', scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true}});
  fills.forEach(f => gsap.to(f, {width: f.dataset.w + '%', duration: 1.4, ease: 'power3.out', scrollTrigger: {trigger: '#chart', start: 'top 85%'}}));
  gsap.to('.tl-fill', {height: '100%', ease: 'none', scrollTrigger: {trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: true}});
} else {
  fills.forEach(f => f.style.width = f.dataset.w + '%');
  document.querySelector('.tl-fill').style.height = '100%';
}

// --- custom cursor + magnetic
if (fine && !RM) {
  const cur = document.querySelector('.cursor'), dot = document.querySelector('.cursor-dot');
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; });
  (function loop() { cx += (x - cx) * .18; cy += (y - cy) * .18; cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.addEventListener('mouseover', e => cur.classList.toggle('hover', !!e.target.closest('a,button,.card')));
  document.querySelectorAll('.magnetic').forEach(m => {
    m.addEventListener('mousemove', e => { const r = m.getBoundingClientRect(); const dx = e.clientX - r.left - r.width / 2, dy = e.clientY - r.top - r.height / 2; m.style.transform = `translate(${dx * .3}px,${dy * .4}px)`; const s = m.querySelector('span'); if (s) s.style.transform = `translate(${dx * .15}px,${dy * .15}px)`; });
    m.addEventListener('mouseleave', () => { m.style.transform = ''; const s = m.querySelector('span'); if (s) s.style.transform = ''; });
  });
} else { document.querySelectorAll('.cursor,.cursor-dot').forEach(c => c.remove()); }
})();
