// ====== Year ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== AOS Init ======
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 60
});

// ====== Rotator (typed role) ======
(function () {
  const roles = [
    "Full-Stack Developer.",
    "System Tinkerer.",
    "Indie Builder.",
    "Web Animator.",
    "Cloud Native."
  ];
  const el = document.getElementById("rotator");
  if (!el) return;
  let i = 0, j = 0, deleting = false;
  const tick = () => {
    const word = roles[i];
    if (!deleting) {
      el.textContent = word.slice(0, ++j);
      if (j === word.length) { deleting = true; return setTimeout(tick, 1400); }
    } else {
      el.textContent = word.slice(0, --j);
      if (j === 0) { deleting = false; i = (i + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 40 : 70);
  };
  tick();
})();

// ====== Skill counters + bars ======
(function () {
  const counters = document.querySelectorAll(".counter");
  const bars = document.querySelectorAll(".bar i");
  const animate = (el, to) => {
    const start = performance.now();
    const dur = 1400;
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const v = Math.round(to * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3))));
      el.textContent = v;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = to;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const card = e.target;
      const c = card.querySelector(".counter");
      const b = card.querySelector(".bar i");
      if (c && !c.dataset.done) { c.dataset.done = "1"; animate(c, +c.dataset.target); }
      if (b && !b.dataset.done) { b.dataset.done = "1"; b.style.width = b.dataset.target + "%"; }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".skill-card").forEach((c) => io.observe(c));
})();

// ====== Nav scroll state + mobile menu ======
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// ====== To-top show on scroll ======
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  toTop.style.opacity = window.scrollY > 600 ? "1" : "0";
  toTop.style.pointerEvents = window.scrollY > 600 ? "auto" : "none";
}, { passive: true });

// ====== GSAP: hero entrance + mouse parallax ======
window.addEventListener("load", () => {
  if (!window.gsap) return;
  gsap.from(".kicker", { y: 12, opacity: 0, duration: 0.6, delay: 0.1 });
  gsap.from(".title .word", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" });
  gsap.from(".subtitle", { y: 14, opacity: 0, duration: 0.6, delay: 0.6 });
  gsap.from(".hero-desc", { y: 14, opacity: 0, duration: 0.6, delay: 0.8 });
  gsap.from(".hero-cta .btn", { y: 14, opacity: 0, duration: 0.5, stagger: 0.1, delay: 1.0 });

  // Mouse parallax for hero content
  const heroInner = document.querySelector(".hero-inner");
  if (heroInner && window.matchMedia("(min-width: 820px)").matches) {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      gsap.to(heroInner, { x, y, duration: 0.6, ease: "power2.out" });
    });
  }
});

// ====== Particle background (lightweight) ======
(function () {
  const canvas = document.getElementById("bg-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, particles;
  const COUNT = 60;
  const resize = () => {
    dpr = window.devicePixelRatio || 1;
    w = canvas.clientWidth = window.innerWidth;
    h = canvas.clientHeight = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const init = () => {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4
    }));
  };
  const step = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(124,92,255,.6)";
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    // connecting lines
    ctx.strokeStyle = "rgba(124,92,255,.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          ctx.globalAlpha = 1 - d2 / 14000;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  };
  resize(); init(); step();
  window.addEventListener("resize", () => { resize(); init(); });
})();
