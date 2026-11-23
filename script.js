/* =========================================================
   Scrapbook engine. Content lives in config.js — edit there.
   ========================================================= */
const C = CONFIG;
const $ = (s, r = document) => r.querySelector(s);
const fill = t => String(t).replace(/\{her\}/g, C.herName).replace(/\{me\}/g, C.myName);
const ROT = [-4, 3, -2, 5, -5, 2, 4, -3];
const rot = i => ROT[i % ROT.length];

/* ---------- Building blocks ---------- */
function photo(i, cls = '', r = rot(i), dateOverride) {
  const p = C.photos[i] || { src: '', caption: '' };
  const date = dateOverride || p.date || '';
  return `<figure class="polaroid ${cls}" style="--r:${r}deg"><span class="tape"></span>
    <div class="frame"><img src="${p.src}" alt="${p.caption || ''}" data-n="${i + 1}"></div>
    <figcaption>${date ? `<small>${date}</small>` : ''}${p.caption || ''}</figcaption></figure>`;
}
const photos = (arr, cls = '') => arr.map((i, k) => photo(i, cls, rot(k + 1))).join('');
const envelope = (id, msg) => `<div class="envwrap"><div class="env" id="${id}" role="button" tabindex="0" aria-label="Open envelope"><div class="flap"></div><div class="seal">💌</div></div>${msg}</div>`;

/* ---------- Pages (each returns HTML + optional init) ---------- */
const pages = [
  // Cover
  { cls: 'cover', nav: false, html: () => `
    <span class="sticker" style="top:30px;left:40px">🌸</span><span class="sticker" style="bottom:40px;right:50px">💗</span>
    <span class="sticker" style="top:40px;right:60px;animation-delay:1s">✿</span><span class="sticker" style="bottom:50px;left:60px;animation-delay:2s">♡</span>
    <h1>${fill(C.cover.title)}</h1>
    ${photo(C.coverPhoto, 'wide', -3)}
    <div class="stamp">${C.anniversary}</div>
    <p class="sub">${fill(C.cover.subtitle)}</p>
    <button id="openBtn">${C.cover.button}</button>`,
    init: () => $('#openBtn').onclick = () => { startMusic(); go(1); } },

  { html: () => `<h2>${C.story.title}</h2><div class="row">
      <div class="col">${C.story.text.map(t => `<p>${fill(t)}</p>`).join('')}<p class="hand">${fill(C.story.caption)}</p></div>
      <div class="col row">${photos(C.story.photos)}</div></div>` },

  { html: () => `<h2>${C.firstMemories.title}</h2><div class="row">
      ${C.firstMemories.items.map((it, k) => photo(it.photo, '', rot(k + 2), it.date)).join('')}</div>
      <p class="hand" style="text-align:center;margin-top:18px">♡ ♡ ♡</p>` },

  { html: () => `<h2>${C.favoriteMoments.title}</h2><div class="row">
      ${C.favoriteMoments.photos.map((i, k) => photo(i, k % 3 === 0 ? 'wide' : k % 3 === 1 ? '' : 'sm', rot(k + 3))).join('')}</div>` },

  { html: () => `<h2>${C.littleThings.title}</h2><p class="hand">${fill(C.littleThings.intro)}</p>
      ${C.littleThings.items.map((t, k) => `<div class="note" style="--r:${rot(k) / 3}deg">${fill(t)}</div>`).join('')}
      <button class="secret" id="sec1" aria-label="Secret message">💌</button>`,
    init: () => $('#sec1').onclick = () => toast(fill(C.littleThings.secret || C.secretMessage)) },

  { html: () => `<h2>${C.adventures.title}</h2><div class="row">${photos(C.adventures.photos)}</div>
      <div class="mini">${C.adventures.timeline.map((t, k) => `<span>${k + 1}. ${t}</span>`).join('')}</div>` },

  { html: () => `<h2>${C.thinkOfYou.title}</h2><div class="tags">
      ${C.thinkOfYou.items.map((it, k) => `<div class="tag" style="--r:${rot(k)}deg"><span>${it.icon}</span>${fill(it.text)}</div>`).join('')}</div>` },

  { cls: 'funny', html: () => `<h2>${C.funny.title}</h2><div class="row"><div class="col">
      ${C.funny.notes.map((n, k) => `<div class="note" style="--r:${rot(k)}deg">${fill(n)}</div>`).join('')}
      <span class="stamp">LOL</span></div><div class="col row">${photos(C.funny.photos)}</div></div>` },

  { html: () => `<h2>${C.favoritesOfHer.title}</h2><div class="row">${C.favoritesOfHer.photos.map((i, k) => photo(i, 'wide', rot(k + 4))).join('')}</div>
      <p class="hand" style="text-align:center;margin-top:14px">${fill(C.favoritesOfHer.caption)}</p>` },

  { html: () => `<h2>${C.timelineTitle}</h2><div class="tl">
      ${C.milestones.map((m, k) => `<button class="dot${k ? '' : ' on'}" data-k="${k}"><i></i>${fill(m.date)}</button>`).join('')}</div>
      <div class="tlbox hand" id="tlbox">${fill(C.milestones[0].text)}</div>`,
    init: () => document.querySelectorAll('.dot').forEach(d => d.onclick = () => {
      document.querySelectorAll('.dot').forEach(x => x.classList.remove('on')); d.classList.add('on');
      const b = $('#tlbox'); b.style.animation = 'none'; b.offsetWidth; b.style.animation = '';
      b.textContent = fill(C.milestones[d.dataset.k].text); }) },

  { html: () => `<h2>${C.reasons.length >= 100 ? '100' : C.reasons.length} ${C.reasonsTitle}</h2>
      <p class="hand">Tap a note to open it. <span id="rcount"></span></p><div class="grid">
      ${C.reasons.map((r, k) => `<button class="slip" style="--r:${rot(k) / 2}deg" data-r="${k}">Reason #${k + 1} ♥</button>`).join('')}</div>`,
    init: () => {
      const upd = () => $('#rcount').textContent = `(${document.querySelectorAll('.slip.open').length}/${C.reasons.length} opened)`; upd();
      document.querySelectorAll('.slip').forEach(s => s.onclick = () => {
        s.classList.add('open'); s.textContent = fill(C.reasons[s.dataset.r]); upd(); }); } },

  { html: () => `<h2>${C.future.title}</h2><div class="cols">
      ${C.future.columns.map(c => `<div><h3>${c.heading}</h3><ul>${c.items.map(i => `<li>${fill(i)}</li>`).join('')}</ul></div>`).join('')}</div>
      <p class="hand" style="text-align:center;margin-top:18px">…and a whole lot more we haven't dreamed up yet ✨</p>` },

  { html: () => `<h2>${C.letterPage.title}</h2>${envelope('env1', `<div class="reveal" id="lt1"><div class="letter">
      ${C.letterPage.paragraphs.map(p => `<p>${fill(p)}</p>`).join('')}</div></div>`)}`,
    init: () => { const e = $('#env1'); e.onclick = () => { e.classList.add('open'); $('#lt1').classList.add('show'); }; } },

  // Final
  { cls: 'final', html: () => `${photo(C.coverPhoto, '', -2)}
      <div class="fade"><p class="hand">${fill(C.final.message)}</p></div>
      <div class="fade2"><button id="readBtn" class="stamp" style="background:none;cursor:pointer">${C.final.button}</button></div>
      <div class="reveal" id="finalLetter"><div class="letter">${C.final.letter.map(p => `<p>${fill(p)}</p>`).join('')}</div>
        <div class="endmsg"><h2>${fill(C.final.closing)}</h2><p class="hand">${fill(C.final.closing2)}</p><button id="replay">↺ Replay our scrapbook</button></div></div>`,
    init: () => {
      $('#readBtn').onclick = e => { $('#finalLetter').classList.add('show'); e.target.style.display = 'none'; burst(); setTimeout(() => $('#finalLetter').scrollIntoView({ behavior: 'smooth' }), 400); };
      $('#replay').onclick = () => go(0); } }
];

/* ---------- Navigation & page turn ---------- */
const stage = $('#stage'); let cur = 0, busy = false;
function build(n) {
  const p = pages[n], el = document.createElement('section');
  el.className = 'page ' + (p.cls || ''); el.innerHTML = p.html() + `<span class="pgno">${n ? n : ''}</span>`;
  if (p.init) setTimeout(p.init, 0); // run after insertion
  return el;
}
function go(n) {
  if (busy || n < 0 || n >= pages.length || n === cur) return;
  busy = true; const old = stage.querySelector('.page'), nw = build(n), fwd = n > cur;
  if (fwd) { stage.insertBefore(nw, old); old.classList.add('turn-fwd'); }
  else { nw.classList.add('turn-back'); stage.appendChild(nw); }
  cur = n; update();
  setTimeout(() => { old.remove(); nw.classList.remove('turn-back'); busy = false; }, 1150);
}
function update() {
  $('#bar').style.width = (cur / (pages.length - 1) * 100) + '%';
  $('#pageNum').textContent = cur ? `Page ${cur} of ${pages.length - 1}` : '';
  $('#nav').classList.toggle('hide', cur === 0);
  $('#next').style.visibility = cur === pages.length - 1 ? 'hidden' : 'visible';
  $('#prev').disabled = cur === 0;
}
$('#next').onclick = () => go(cur + 1);
$('#prev').onclick = () => go(cur - 1);
$('#restart').onclick = () => go(0);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && cur > 0) go(cur + 1);
  if (e.key === 'ArrowLeft') go(cur - 1);
  if (e.key === 'Escape') $('#lightbox').classList.remove('show');
});

/* ---------- Photos: placeholder fallback + lightbox ---------- */
document.addEventListener('error', e => {
  const t = e.target;
  if (t.tagName === 'IMG' && t.dataset.n) {
    const d = document.createElement('div'); d.className = 'ph';
    d.innerHTML = `♥<br>photo${t.dataset.n}.jpg`; t.replaceWith(d);
  }
}, true);
document.addEventListener('click', e => {
  const f = e.target.closest('.polaroid .frame'); if (!f) return;
  $('#lbContent').innerHTML = f.innerHTML; $('#lightbox').classList.add('show');
});
$('#lightbox').onclick = () => $('#lightbox').classList.remove('show');

/* ---------- Toast + Surprise ---------- */
let tt; function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 4200); }
$('#surprise').onclick = () => {
  const pool = [...C.reasons.map(r => 'Reason I love you: ' + r), ...C.photos.map(p => `${p.date}: ${p.caption}`), ...C.milestones.map(m => `${m.date}: ${m.text}`)];
  toast(fill(pool[Math.floor(Math.random() * pool.length)]));
};

/* ---------- Floating hearts ---------- */
function heart() {
  const h = document.createElement('span'); h.className = 'float'; h.textContent = ['♥', '♡', '✿'][Math.floor(Math.random() * 3)];
  h.style.left = Math.random() * 100 + 'vw'; h.style.fontSize = 14 + Math.random() * 18 + 'px'; h.style.animationDuration = 6 + Math.random() * 5 + 's';
  document.body.appendChild(h); setTimeout(() => h.remove(), 11000);
}
setInterval(() => { if (!document.hidden) heart(); }, 3500);
const burst = () => { for (let i = 0; i < 14; i++) setTimeout(heart, i * 150); };

/* ---------- Music (never restarts on page turn: one persistent Audio) ---------- */
const audio = new Audio(C.music.file); audio.loop = true; audio.volume = 0; audio.preload = 'auto';
let fadeT, missing = false;
$('#songTitle').textContent = C.music.title;
audio.addEventListener('error', () => { missing = true; $('#songTitle').textContent = 'Add assets/music.mp3 to play music'; $('#player').classList.remove('on'); });
function fadeTo(v) { clearInterval(fadeT); fadeT = setInterval(() => {
  const d = v - audio.volume; if (Math.abs(d) < .03) { audio.volume = v; clearInterval(fadeT); } else audio.volume = Math.min(1, Math.max(0, audio.volume + Math.sign(d) * .03)); }, 120); }
function startMusic() { audio.play().then(() => { $('#player').classList.add('on'); fadeTo(C.music.volume); }).catch(() => {}); }
$('#playBtn').onclick = () => {
  if (missing) return toast('Add your song as assets/music.mp3');
  if (audio.paused) { startMusic(); } else { audio.pause(); $('#player').classList.remove('on'); }
};
$('#muteBtn').onclick = () => { audio.muted = !audio.muted; $('#muteBtn').textContent = audio.muted ? '🔇' : '🔊'; };

/* ---------- Start ---------- */
stage.appendChild(build(0)); update();

/* Try to autoplay on load; if blocked, start on first interaction */
let musicStarted = false;
function tryAutoplay() {
  if (musicStarted) return;
  audio.play().then(() => {
    musicStarted = true;
    $('#player').classList.add('on');
    fadeTo(C.music.volume);
  }).catch(() => {});
}
tryAutoplay();
['click', 'keydown', 'touchstart'].forEach(evt =>
  document.addEventListener(evt, tryAutoplay, { once: true })
);
