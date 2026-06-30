'use client';

type CounterProps = {
  to: number;
  format?: (n: number) => string;
  className?: string;
};

/**
 * Static number display.
 * (The animated counter was creating Framer Motion RAF callbacks on every
 * Counter mount × 4 stats → measurable jank. Showing the final number is fine.)
 */
export function Counter({
  to,
  format = (n) => Math.round(n).toLocaleString(),
  className = '',
}: CounterProps) {
  return <span className={className}>{format(to)}</span>;
}
