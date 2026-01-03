// Конфетти эффект
(function setupConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const pieces = [];
  const colors = ['#FFD700', '#ffffff', '#8ef6d4', '#f9a825'];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function spawn(n = 160) {
    for (let i = 0; i < n; i++) {
      pieces.push({
        x: Math.random() * W,
        y: -20,
        w: 6 + Math.random() * 10,
        h: 3 + Math.random() * 6,
        vy: 2 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 2,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (const p of pieces) {
      p.life += 1;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    for (let i = pieces.length - 1; i >= 0; i--) {
      if (pieces[i].y > H + 50 || pieces[i].life > 700) {
        pieces.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  draw(); // 👈 Конфеттини баштайт

  // Кнопка басылганда конфетти кошумча чыгат
  const btn = document.getElementById('celebrateBtn');
  if (btn) {
    btn.addEventListener('click', () => spawn(220));
  }

  spawn(100); // Баштапкы конфетти
})(); // 👈 Бул жабуучу кашаа — бүт функцияны жаап турат

   // Конфетти эффект
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    let W, H; const pieces = [];
    const colors = ['#FFD700', '#ffffff', '#8ef6d4', '#f9a825'];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function spawn(n = 160) {
      for (let i = 0; i < n; i++) {
        pieces.push({
          x: Math.random() * W,
          y: -20,
          w: 6 + Math.random() * 10,
          h: 3 + Math.random() * 6,
          vy: 2 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 2,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pieces) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].y > H + 50 || pieces[i].life > 700) pieces.splice(i, 1);
      }
      requestAnimationFrame(draw);
    }
    draw();

    function celebrate() {
      spawn(200);
    }

