import { useRef, useEffect } from 'react';

const MAX_TILT = 8;      // max degrees of tilt
const PERSPECTIVE = 900; // px perspective depth

/**
 * 3D perspective tilt hook for project cards.
 * Tracks cursor position within the element and applies rotateX/rotateY transforms.
 * Also exposes CSS vars --gloss-x/--gloss-y for a specular gloss overlay.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number | null = null;

    const onEnter = () => {
      el.style.transition = 'transform 0.12s linear, box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.willChange = 'transform';
    };

    const onMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        // Normalised position: -0.5 .. +0.5 from center
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateX = (-ny * MAX_TILT).toFixed(2);
        const rotateY = (nx * MAX_TILT).toFixed(2);

        el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;

        // Gloss overlay position (0%–100%)
        const gx = ((nx + 0.5) * 100).toFixed(1);
        const gy = ((ny + 0.5) * 100).toFixed(1);
        el.style.setProperty('--gloss-x', `${gx}%`);
        el.style.setProperty('--gloss-y', `${gy}%`);
      });
    };

    const onLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
      el.style.setProperty('--gloss-x', '50%');
      el.style.setProperty('--gloss-y', '50%');
      setTimeout(() => { el.style.willChange = ''; }, 600);
    };

    el.addEventListener('mouseenter', onEnter, { passive: true });
    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}
