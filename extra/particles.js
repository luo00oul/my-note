(() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  Object.assign(canvas.style, {
    position: "fixed",
    inset: 0,
    zIndex: "0",          // 在背景之上，正文之下
    pointerEvents: "none"
  });

  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const PARTICLE_COUNT = 160;   // ✨ 数量（可以再加）
  const SPEED = 0.15;           // ✨ 非常慢
  const SIZE = [0.6, 1.8];      // ✨ 光尘大小

  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: SIZE[0] + Math.random() * (SIZE[1] - SIZE[0]),
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    alpha: 0.15 + Math.random() * 0.25
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -50) p.x = w + 50;
      if (p.x > w + 50) p.x = -50;
      if (p.y < -50) p.y = h + 50;
      if (p.y > h + 50) p.y = -50;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 230, 255, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
})();
