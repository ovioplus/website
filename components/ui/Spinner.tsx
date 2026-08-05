import { cn } from '@/lib/utils';

/**
 * Branded arc spinner — a rounded ~75% arc over a faint track, spinning.
 * Inherits colour via `currentColor` (e.g. add `text-brand-cyan`).
 */
export function Spinner({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      role="status"
      aria-label="Loading"
      className={cn('animate-spin', className)}
    >
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="5" />
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="95 130" />
    </svg>
  );
}
