import { useRef, useEffect } from 'react';

/**
 * Magnetic hover hook — element gently follows the cursor while hovered,
 * then springs back elastically on mouse leave.
 *
 * @param strength  How much the element moves (0–1). Default 0.35.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onEnter = () => {
      el.style.transition = 'transform 0.08s linear';
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    };

    const onLeave = () => {
      el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mouseenter', onEnter, { passive: true });
    el.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}
