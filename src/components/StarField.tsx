import { useEffect, useRef } from "react";

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stars: { x: number; y: number; z: number; r: number }[] = [];
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    let w = 0, h = 0;
    let mx = 0, my = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      stars.length = 0;
      const count = Math.floor((w * h) / 6000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.8 + 0.2,
          r: Math.random() * 1.4 + 0.2,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (Math.random() < 0.4) {
        particles.push({
          x: mx, y: my,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          life: 1,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      // stars
      for (const s of stars) {
        const dx = s.x - mx, dy = s.y - my;
        const dist = Math.hypot(dx, dy);
        const push = Math.max(0, 1 - dist / 220) * 14;
        const px = s.x + (dx / (dist || 1)) * push;
        const py = s.y + (dy / (dist || 1)) * push;
        ctx.beginPath();
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.z * 0.95})`;
        ctx.fill();
      }
      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= 0.012;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.life})`;
        ctx.shadowColor = "rgba(212, 175, 55, 0.9)";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-screen w-screen"
      style={{ zIndex: 0 }}
    />
  );
}
