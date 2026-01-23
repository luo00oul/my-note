(() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = "-1";
  canvas.style.pointerEvents = "none";

  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  /* ===== 参数区 ===== */
  const POINT_NUM = 180;        // 点很多
  const SPEED = 0.25;           // 慢速漂浮
  const LINK_DIST = 120;        // 点-点连线距离
  const MOUSE_DIST = 220;       // 鼠标影响范围
  /* ================= */

  const mouse = { x: -9999, y: -9999 };
  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = mouse.y = -9999;
  });

  const points = Array.from({ length: POINT_NUM }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);

    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist > LINK_DIST) continue;

        // 只有靠近鼠标区域，线才明显
        const mx = (a.x + b.x) / 2 - mouse.x;
        const my = (a.y + b.y) / 2 - mouse.y;
        const md = Math.hypot(mx, my);

        if (md > MOUSE_DIST) continue;

        const alpha =
          (1 - dist / LINK_DIST) *
          (1 - md / MOUSE_DIST);

        ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
})();
