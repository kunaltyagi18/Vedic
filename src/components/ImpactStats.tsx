'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coins, FileCheck2, HandCoins, Map, MapPinned, type LucideIcon } from 'lucide-react';

export type FootprintStat = {
  id: string;
  icon: LucideIcon;
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
};

const defaultStats: FootprintStat[] = [
  { id: 'states-uts', value: 36, icon: MapPinned, label: 'States & UTs' },
  { id: 'districts', value: 338, icon: Map, label: 'Districts' },
  { id: 'grantees', value: 300, icon: HandCoins, label: 'Grantees' },
  { id: 'active-grants', value: 413, icon: FileCheck2, label: 'Active Grants' },
  { id: 'disbursed', value: 1556, prefix: '₹', suffix: 'Cr', icon: Coins, label: 'Disbursed' },
];

const formatNumber = (value: number) => new Intl.NumberFormat('en-IN').format(value);

function CountUpValue({ value, prefix = '', suffix = '' }: Pick<FootprintStat, 'value' | 'prefix' | 'suffix'>) {
  const valueRef = useRef<HTMLElement | null>(null);
  const isVisible = useInView(valueRef, { once: true, amount: 0.45 });
  const numericValue = typeof value === 'number' ? value : Number(value);
  const isNumeric = Number.isFinite(numericValue);
  const [displayValue, setDisplayValue] = useState(isNumeric ? '0' : String(value));

  useEffect(() => {
    if (!isVisible || !isNumeric) return;

    const duration = 1400;
    const startTime = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(formatNumber(Math.round(numericValue * easedProgress)));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isNumeric, isVisible, numericValue]);

  return (
    <motion.strong
      ref={valueRef}
      initial={{ opacity: 0, y: 8 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix && <small>{prefix}</small>}
      {displayValue}
      {suffix && <small>{suffix}</small>}
    </motion.strong>
  );
}

export function ImpactStats({ stats = defaultStats }: { stats?: FootprintStat[] }) {
  return (
    <section className="impact-stats-section" aria-labelledby="impact-stats-title">
      <div className="impact-stats-container">
        <div className="impact-stats-heading">
          <div className="impact-stats-title">
            <span className="impact-stats-watermark" aria-hidden="true">Footprint</span>
            <h2 id="impact-stats-title">Footprint</h2>
          </div>
          <p>Every programme is a step towards a healthier, educated and empowered Bharat.</p>
        </div>
        <div className="impact-stats-grid">
          {stats.map(({ id, value, prefix, suffix, label, icon: Icon }) => (
            <motion.div
              className="impact-stat group"
              key={id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <span className="impact-stat-icon group-hover:scale-110 transition-transform duration-300">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <CountUpValue value={value} prefix={prefix} suffix={suffix} />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="impact-stats-period">*FY 2025-26</p>
      </div>
    </section>
  );
}
