import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_COLOR = 'var(--accent)';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

const generateSparkle = (color: string): Sparkle => ({
  id: `${random(10000, 99999)}-${Date.now()}`,
  createdAt: Date.now(),
  color,
  size: random(10, 18),
  style: {
    top: `${random(-15, 88)}%`,
    left: `${random(-10, 92)}%`,
  },
});

interface SparklesProps {
  color?: string;
  children: React.ReactNode;
  hoverOnly?: boolean;
  className?: string;
}

export default function Sparkles({
  color = DEFAULT_COLOR,
  children,
  hoverOnly = false,
  className = '',
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const shouldRun = !hoverOnly || isHovered;
    if (!shouldRun) {
      setSparkles([]);
      return;
    }

    const scheduleNext = () => {
      const delay = random(400, 850);
      timeoutRef.current = window.setTimeout(() => {
        const now = Date.now();
        const sparkle = generateSparkle(color);
        // Keep at most 2 previous unexpired sparkles + the new one
        setSparkles(prev => [...prev.filter(s => now - s.createdAt < 800).slice(-2), sparkle]);
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [color, hoverOnly, isHovered]);

  return (
    <span
      className={`sparkle-wrapper ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          className="sparkle-single"
          style={{
            top: sparkle.style.top,
            left: sparkle.style.left,
            width: sparkle.size,
            height: sparkle.size,
          }}
          aria-hidden="true"
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-full"
          >
            <path
              d="M80 0C80 44.1828 44.1828 80 0 80C44.1828 80 80 115.817 80 160C80 115.817 115.817 80 160 80C115.817 80 80 44.1828 80 0Z"
              fill={sparkle.color}
            />
          </svg>
        </span>
      ))}
      <span className="sparkle-child">{children}</span>
    </span>
  );
}
