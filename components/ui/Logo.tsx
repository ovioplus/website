'use client';

import { useId } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  size?: number;
  variant?: 'inline' | 'icon' | 'stacked';
  showWordmark?: boolean;
  className?: string;
};

/**
 * Logo
 * - variant="icon"    → uses /public/icon.png (the real OvioPlus mark)
 * - variant="inline"  → SVG infinity-plus mark (fallback / favicon use)
 * - variant="stacked" → uses /public/logo-stacked.svg
 *
 * `icon` is the default everywhere because that's the real brand mark.
 */
export function Logo({
  size = 36,
  variant = 'icon',
  showWordmark = true,
  className = '',
}: LogoProps) {
  if (variant === 'icon') {
    return (
      <span className={cn('inline-flex items-center gap-3', className)}>
        <Image
          src="/icon.png"
          alt="OvioPlus"
          width={size}
          height={size}
          priority
          className="object-contain"
        />
        {showWordmark && (
          <span
            className="font-display font-semibold tracking-[0.08em] text-text-primary"
            style={{ fontSize: size * 0.62 }}
          >
            Ovio<span className="text-gradient">Plus</span>
          </span>
        )}
      </span>
    );
  }

  if (variant === 'stacked') {
    return (
      <Image
        src="/logo-stacked.svg"
        alt="OvioPlus"
        width={size}
        height={size * 1.3}
        priority
        className={className}
      />
    );
  }

  // Inline SVG fallback — infinity with embedded plus
  const rawId = useId();
  const id = `og-${rawId.replace(/:/g, '')}`;
  const w = size;
  const h = size * 0.55;

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 100 55"
        fill="none"
        aria-label="OvioPlus logo"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6833A9" />
            <stop offset="100%" stopColor="#2CABE6" />
          </linearGradient>
        </defs>
        {/* Infinity loop — two interlocking circles */}
        <path
          d="M 25 27 C 25 14, 5 14, 5 27 C 5 40, 25 40, 35 27 C 45 14, 65 14, 75 27 C 85 40, 65 40, 65 27 C 65 14, 85 14, 95 27 C 85 40, 65 40, 55 27 C 45 14, 25 14, 15 27 C 5 40, 25 40, 25 27 Z"
          stroke={`url(#${id})`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Plus sign — at the crossing point */}
        <line x1="50" y1="14" x2="50" y2="40" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
        <line x1="37" y1="27" x2="63" y2="27" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
      </svg>
      {showWordmark && (
        <span
          className="font-display font-semibold tracking-[0.08em] text-text-primary"
          style={{ fontSize: size * 0.62 }}
        >
          Ovio<span className="text-gradient">Plus</span>
        </span>
      )}
    </span>
  );
}
