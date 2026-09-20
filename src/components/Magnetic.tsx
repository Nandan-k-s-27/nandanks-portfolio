import type { ReactNode } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps children in a magnetic container that gently attracts toward the
 * cursor on hover and springs back elastically on leave.
 */
export default function Magnetic({ children, strength = 0.35, className = '' }: MagneticProps) {
  const ref = useMagnetic<HTMLSpanElement>(strength);
  return (
    <span ref={ref} className={`inline-block${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  );
}
