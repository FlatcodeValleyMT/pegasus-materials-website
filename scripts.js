/* ═══════════════════════════════════════════════
   SHARED SCRIPTS — Pegasus Materials
═══════════════════════════════════════════════ */

/* ── Nav scroll effect ── */
;(function () {
  const nav = document.getElementById('nav');
  if (!nav || nav.classList.contains('solid')) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile nav toggle ── */
;(function () {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i === 0) s.style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (i === 1) s.style.opacity   = '0';
        if (i === 2) s.style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        s.style.transform = ''; s.style.opacity = '';
      }
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#nav')) links.classList.remove('mobile-open');
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('mobile-open'))
  );
})();

/* ── Scroll reveal ── */
;(function () {
  const els = document.querySelectorAll('.rev');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

/* ── Count-up animation ── */
window.countUp = function (el) {
  const raw    = el.dataset.count;
  const target = parseFloat(raw);
  const isFloat = raw.includes('.');
  const prefix  = el.dataset.prefix  || '';
  const suffix  = el.dataset.suffix  || '';
  const dur     = 1800;
  const t0      = performance.now();
  const tick    = now => {
    const p    = Math.min((now - t0) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val  = target * ease;
    el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* ── Init counters when visible ── */
;(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { window.countUp(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => io.observe(el));
})();
