import Link from 'next/link';
import {
  Trophy, Wheat, Recycle, GraduationCap, Droplets, ShieldCheck, Wind, HeartPulse,
  FlaskConical, Leaf, Apple, House, PawPrint, Palette, Wrench, type LucideIcon,
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

export function AreasOfWork() {
  return (
    <section className="work-section section-space" aria-labelledby="work-title">
      <div className="site-container">
        <div className="section-centered">
          <p className="eyebrow">Many causes. One shared purpose.</p>
          <h2 className="section-title" id="work-title">Our areas of <em>work</em></h2>
          <p className="section-description">A holistic approach to change. Building stronger communities, one initiative at a time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {workAreas.map((area, i) => {
            const { icon: Icon, tone } = sectorMeta[area] ?? { icon: Leaf, tone: 'gold' as Tone };
            const photo = workPhotos[area];
            return (
              <Link key={area} href={`/${areaSlug(area)}`} className="work-card" data-tone={tone} data-hover-tone={hoverTones[i % hoverTones.length]}>
                {photo && <img className="work-card-photo" src={photo} alt="" loading="lazy" width={992} height={672}/>}
                <span className="work-card-chip" aria-hidden="true"><Icon size={16} strokeWidth={1.6}/></span>
                <span className="work-card-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="work-card-body">
                  <span className="work-card-title">{area}</span>
                  <span className="work-card-rule" aria-hidden="true"/>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
