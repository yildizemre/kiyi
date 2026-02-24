import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  formatThousands?: boolean;
  className?: string;
}

export default function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 1200,
  decimals = 0,
  formatThousands = false,
  className = '',
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let rafId: number;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2.5);
      const current = value * eased;
      setDisplay(current);
      if (progress < 1) rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [value, duration]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : formatThousands
      ? Math.round(display).toLocaleString('tr-TR')
      : String(Math.round(display));

  return (
    <span className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
