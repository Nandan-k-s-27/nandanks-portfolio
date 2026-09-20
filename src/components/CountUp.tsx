import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  end,
  start = 0,
  decimals = 0,
  duration = 1200,
  delay = 350,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    // easeOutExpo for natural spring-like deceleration
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = start + (end - start) * eased;

      setValue(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    const timer = setTimeout(() => {
      frameRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, start, duration, delay]);

  const displayValue =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value);

  // If there is a suffix like "st" and value is 0, display 0 cleanly without awkward "0st"
  const renderedSuffix = suffix && Math.round(value) === 0 ? '' : suffix;

  return (
    <span className={className}>
      {prefix}
      {displayValue}
      {renderedSuffix}
    </span>
  );
}
