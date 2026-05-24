
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
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  setTimeout(startTyping, 600);
});

/* profile.json typing animation */
(function() {
  const lines = [
    { text: '// Sai Amulya Pingili',          html: '<span class="t-cmnt">// Sai Amulya Pingili</span>' },
    { text: '{',                                html: '{' },
    { text: '  "role": "AI Data Scientist",',  html: '  <span class="t-key">"role"</span>: <span class="t-str">"AI Data Scientist"</span>,' },
    { text: '  "school": "Arizona State University",', html: '  <span class="t-key">"school"</span>: <span class="t-str">"Arizona State University"</span>,' },
    { text: '  "gpa": 3.97,',                  html: '  <span class="t-key">"gpa"</span>: <span class="t-num">3.97</span>,' },
    { text: '  "hackathons": 4,',              html: '  <span class="t-key">"hackathons"</span>: <span class="t-num">4</span>,' },
    { text: '  "open_to": "full-time roles"',  html: '  <span class="t-key">"open_to"</span>: <span class="t-str">"full-time roles"</span>' },
    { text: '}',                                html: '}' },
  ];

  const block = document.getElementById('profile-json');
  let done = [];
  let lineIdx = 0;
  let charIdx = 0;

  function render(partial) {
    const finished = done.map(h => `<div>${h}</div>`).join('');
    const active = partial !== undefined
      ? `<div>${partial}<span class="t-cursor">▋</span></div>`
      : '';
    block.innerHTML = finished + active;
  }

  function tick() {
    if (lineIdx >= lines.length) { render(); return; }
    const line = lines[lineIdx];
    if (charIdx <= line.text.length) {
      render(line.text.slice(0, charIdx));
      charIdx++;
      setTimeout(tick, 38);
    } else {
      done.push(line.html);
      lineIdx++; charIdx = 0;
      setTimeout(tick, 160);
    }
  }

  window.startTyping = tick;
})();

/* theme toggle */
const themeBtn = document.getElementById('theme-toggle');
const icon = themeBtn.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  // Icon swap
  if (isLight) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});
