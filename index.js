/* cursor */
const cur = document.getElementById('cur');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a,.proj-card,.exp-card,.pill,.sg,.btn,.pc-link').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('big'));
  el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});

/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* doodle parallax */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.dd').forEach((d, i) => {
    const spd = (i % 3 + 1) * 0.03;
    d.style.transform = `translateY(${y * spd * (i % 2 === 0 ? 1 : -1)}px)`;
  });
});

/* fade in */
window.addEventListener('load', () => { document.body.style.opacity = '1'; });
