'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight, Trophy, Wheat, Recycle, GraduationCap, Droplets, ShieldCheck, Wind, HeartPulse,
  FlaskConical, Leaf, Apple, House, PawPrint, Palette, Wrench, LayoutGrid, HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { workAreas, areaSlug, workPhotos } from '@/lib/vgfc-content';

type Tone = 'gold' | 'green' | 'blue' | 'rose';
const hoverTones = ['gold', 'blue', 'teal', 'green', 'violet', 'rose', 'amber', 'cyan', 'orange', 'indigo', 'lime', 'coral', 'pink', 'sky', 'slate'] as const;

const sectorMeta: Record<string, { icon: LucideIcon; tone: Tone }> = {
  Sports: { icon: Trophy, tone: 'gold' },
  Agriculture: { icon: Wheat, tone: 'green' },
  'Waste Management': { icon: Recycle, tone: 'green' },
  Education: { icon: GraduationCap, tone: 'blue' },
  'Water & Water Harvesting': { icon: Droplets, tone: 'blue' },
  'Food Adulteration': { icon: ShieldCheck, tone: 'rose' },
  'Pollution(s)': { icon: Wind, tone: 'rose' },
  Healthcare: { icon: HeartPulse, tone: 'rose' },
  'Science & Innovations': { icon: FlaskConical, tone: 'blue' },
  'Environment and Energy': { icon: Leaf, tone: 'green' },
  Nutrition: { icon: Apple, tone: 'green' },
  'Living Houses (SUSTAINABLE)': { icon: House, tone: 'gold' },
  'Animal rights': { icon: PawPrint, tone: 'green' },
  'Arts and Culture (BHARAT)': { icon: Palette, tone: 'gold' },
  'Skill Development & Progress': { icon: Wrench, tone: 'blue' },
};

const areaDescriptions: Record<string, string> = {
  Education: 'Empowering minds for a brighter future.',
  Healthcare: 'Care that reaches every community.',
  Nutrition: 'Good nutrition for stronger tomorrows.',
  'Environment and Energy': 'A greener planet for future generations.',
  Sports: 'Building confidence, health and teamwork.',
  Agriculture: 'Supporting sustainable livelihoods and food security.',
  'Waste Management': 'Cleaner communities through responsible action.',
  'Water & Water Harvesting': 'Protecting every drop for tomorrow.',
  'Food Adulteration': 'Promoting safer food and healthier lives.',
  'Pollution(s)': 'Creating cleaner air and healthier surroundings.',
  'Science & Innovations': 'Ideas that turn community challenges into progress.',
  'Living Houses (SUSTAINABLE)': 'Sustainable homes for dignified living.',
  'Animal rights': 'Compassion and care for every living being.',
  'Arts and Culture (BHARAT)': 'Keeping Bharat culture alive.',
  'Skill Development & Progress': 'Skills and opportunities for lasting progress.',
};

const categoryTabs: { label: string; icon: LucideIcon; areas?: string[] }[] = [
  { label: 'All Programmes', icon: LayoutGrid },
  { label: 'Social Welfare', icon: HeartHandshake, areas: ['Sports', 'Agriculture', 'Waste Management', 'Living Houses (SUSTAINABLE)', 'Animal rights', 'Skill Development & Progress'] },
  { label: 'Healthcare', icon: HeartPulse, areas: ['Healthcare', 'Nutrition', 'Food Adulteration', 'Pollution(s)'] },
  { label: 'Education', icon: GraduationCap, areas: ['Education', 'Science & Innovations', 'Skill Development & Progress', 'Arts and Culture (BHARAT)'] },
  { label: 'Environment', icon: Leaf, areas: ['Environment and Energy', 'Water & Water Harvesting', 'Waste Management', 'Agriculture', 'Pollution(s)'] },
];

export function AreasOfWork() {
  const [activeCategory, setActiveCategory] = useState('All Programmes');
  const activeTab = categoryTabs.find(tab => tab.label === activeCategory) ?? categoryTabs[0];
  const visibleAreas = useMemo(
    () => activeTab.areas ? workAreas.filter(area => activeTab.areas?.includes(area)) : workAreas,
    [activeTab],
  );

  return (
    <section className="work-section section-space" aria-labelledby="work-title">
      <div className="site-container">
        <div className="section-centered">
          <p className="eyebrow">Many causes. One shared purpose.</p>
          <h2 className="section-title" id="work-title">Our areas of <em>work</em></h2>
          <p className="section-description">A holistic approach to change. Building stronger communities, one initiative at a time.</p>
        </div>
        <div className="work-filter" role="tablist" aria-label="Filter areas of work">
          {categoryTabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className={`work-filter-button ${activeCategory === label ? 'active' : ''}`}
              role="tab"
              aria-selected={activeCategory === label}
              onClick={() => setActiveCategory(label)}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="work-grid" role="tabpanel" aria-live="polite">
          {visibleAreas.map((area, i) => {
            const { icon: Icon, tone } = sectorMeta[area] ?? { icon: Leaf, tone: 'gold' as Tone };
            const photo = workPhotos[area];
            return (
              <Link key={area} href={`/${areaSlug(area)}`} className="work-card" data-tone={tone} data-hover-tone={hoverTones[i % hoverTones.length]}>
                {photo && (
                  <img className="work-card-photo" src={photo} alt="" loading="lazy" width={992} height={672}/>
                )}
                <span className="work-card-chip" aria-hidden="true"><Icon size={16} strokeWidth={1.6}/></span>
                <span className="work-card-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="work-card-body">
                  <span className="work-card-title">{area}</span>
                  <span className="work-card-description">{areaDescriptions[area] ?? 'Building stronger communities through action.'}</span>
                  <span className="work-card-rule" aria-hidden="true"/>
                </span>
                <span className="work-card-arrow" aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.8}/></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
