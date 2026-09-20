import type { ReactNode } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  as?: 'article' | 'div';
  id?: string;
}

/**
 * Wraps children in a 3D perspective tilt container.
 * Apply .tilt-card CSS class to get the specular gloss overlay.
 */
export default function TiltCard({
  children,
  className = '',
  as: Tag = 'article',
  id,
}: TiltCardProps) {
  const ref = useTilt<HTMLElement>();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      className={`tilt-card${className ? ` ${className}` : ''}`}
      id={id}
    >
      {/* Specular gloss overlay — follows cursor position via CSS vars */}
      <span className="tilt-gloss" aria-hidden="true" />
      {children}
    </Tag>
  );
}
