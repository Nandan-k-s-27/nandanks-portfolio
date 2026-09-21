import { useEffect, useRef } from 'react';

interface Particle {
  baseX: number;
  baseY: number;
  r: number;
  speed: number;
  phase: number;
  amplitude: number;
  colorType: number; // 0, 1, or 2 for palette variation
  curX: number;
  curY: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates relative to hero
    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Resize handler with devicePixelRatio support
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (parent) resizeObserver.observe(parent);

    // Initialize particles
    const count = Math.min(48, Math.max(24, Math.floor(width / 26)));
    const particles: Particle[] = Array.from({ length: count }, () => {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      return {
        baseX,
        baseY,
        curX: baseX,
        curY: baseY,
        r: 2.2 + Math.random() * 2.6,
        speed: 0.35 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        amplitude: 14 + Math.random() * 22,
        colorType: Math.floor(Math.random() * 3),
      };
    });

    const isDarkMode = () =>
      document.documentElement.getAttribute('data-theme') === 'dark' ||
      document.documentElement.classList.contains('dark');

    // Render loop
    const render = (time: number) => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      const dark = isDarkMode();
      // Palette definitions: [Accent Blue, Secondary Violet/Indigo, Soft Slate/Cyan]
      const colors = dark
        ? [
            'rgba(96, 165, 250, 0.32)', // sky/blue
            'rgba(129, 140, 248, 0.28)', // indigo
            'rgba(56, 189, 248, 0.25)', // cyan
          ]
        : [
            'rgba(37, 99, 235, 0.24)', // primary blue
            'rgba(99, 102, 241, 0.20)', // indigo
            'rgba(100, 116, 139, 0.22)', // warm slate
          ];

      const linkColor = dark
        ? 'rgba(147, 197, 253, '
        : 'rgba(59, 130, 246, ';

      // Update positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic oscillation
        let targetX = p.baseX + Math.sin(time * 0.001 * p.speed + p.phase) * p.amplitude;
        let targetY =
          p.baseY + Math.cos(time * 0.0008 * p.speed + p.phase * 1.3) * (p.amplitude * 0.7);

        // Interactive mouse deflection
        if (mouseX > 0 && mouseY > 0) {
          const dx = targetX - mouseX;
          const dy = targetY - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 22;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        // Smooth position spring
        p.curX += (targetX - p.curX) * 0.1;
        p.curY += (targetY - p.curY) * 0.1;
      }

      // Draw faint constellation links between nearby dots
      const maxLinkDist = 80;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.curX - p2.curX;
          const dy = p1.curY - p2.curY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p1.curX, p1.curY);
            ctx.lineTo(p2.curX, p2.curY);
            ctx.strokeStyle = `${linkColor}${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.curX, p.curY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = colors[p.colorType];
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    // Pause animation when scrolled out of viewport to save CPU & battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !prefersReducedMotion) {
          if (!animId) animId = requestAnimationFrame(render);
        } else if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { threshold: 0.05 }
    );

    if (canvas) observer.observe(canvas);

    // Initial frame
    if (prefersReducedMotion) {
      render(0);
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
}
