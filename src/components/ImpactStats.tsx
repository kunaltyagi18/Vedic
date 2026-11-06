'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Medal, ShieldCheck, Target, UsersRound, type LucideIcon } from 'lucide-react';

export type FootprintStat = {
  id: string;
  icon: LucideIcon;
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
};

const defaultStats: FootprintStat[] = [
  { id: 'areas-of-work', value: 15, suffix: '+', icon: Target, label: 'Areas of Work' },
  { id: 'lives-touched', value: 25, suffix: 'K+', icon: UsersRound, label: 'Lives Touched' },
  { id: 'national-visions', value: 3, icon: Medal, label: 'National Visions' },
  { id: 'transparency', value: 100, suffix: '%', icon: ShieldCheck, label: 'Transparency' },
];

const formatNumber = (value: number) => new Intl.NumberFormat('en-IN').format(value);

function CountUpValue({ value, prefix = '', suffix = '' }: Pick<FootprintStat, 'value' | 'prefix' | 'suffix'>) {
  const target = typeof value === 'number' ? value : null;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null) return;

    const duration = 1200;
    const startedAt = performance.now();
    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [target]);

  const displayValue = target === null ? String(value) : formatNumber(count);

  return (
    <motion.strong
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
        <div className="impact-stats-mini-heading">
          <div>
            <span>OUR FOOTPRINT</span>
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
