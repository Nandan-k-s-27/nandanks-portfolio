import { useEffect, useRef } from 'react';

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  shape: 'rect' | 'circle';
  rotation: number;
  vRot: number;
  alpha: number;
}

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
  className?: string;
}

const COLORS = [
  '#3b82f6', // blue
  '#60a5fa', // sky
  '#f59e0b', // amber
  '#10b981', // emerald
  '#8b5cf6', // purple
  '#f43f5e', // rose
];

export default function Confetti({ trigger, onComplete, className = '' }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 220);
    const height = (canvas.height = 160);
    const originX = width / 2;
    const originY = height - 20;

    // Spawn 22 crisp celebratory particles
    const particles: ConfettiParticle[] = Array.from({ length: 22 }, () => {
      const angle = (Math.random() * 80 + 50) * (Math.PI / 180); // upward fan
      const speed = Math.random() * 9 + 7;
      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * (Math.random() > 0.5 ? 1 : -1) * speed,
        vy: -Math.sin(angle) * speed,
        size: Math.random() * 4 + 3.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.25,
        alpha: 1,
      };
    });

    let animId: number;
    const gravity = 0.38;
    const friction = 0.985;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let aliveCount = 0;
      for (const p of particles) {
        if (p.alpha <= 0.02) continue;
        aliveCount++;

        p.vx *= friction;
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.alpha -= 0.022;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (aliveCount > 0) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        if (onComplete) onComplete();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [trigger, onComplete]);

  if (!trigger) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 z-50 ${className}`}
      width={220}
      height={160}
      aria-hidden="true"
    />
  );
}
