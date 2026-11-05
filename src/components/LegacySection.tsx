import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aboutParagraph, photos, visionParagraph } from '@/lib/vgfc-content';

export function LegacySection() {
  return (
    <section className="legacy-section" aria-labelledby="legacy-title">
      <div className="site-container legacy-grid">
        <div className="legacy-media">
          <img src={photos.education} alt="Children learning together in a community classroom" width={1536} height={1024} loading="lazy" />
          <div className="legacy-media-shade" />
          <span className="legacy-badge"><ShieldCheck size={15} /> Rooted in values</span>
          <span className="legacy-media-caption">A brighter Bharat, built together.</span>
        </div>
        <div className="legacy-copy">
          <p className="eyebrow">Our enduring legacy</p>
          <h2 id="legacy-title">Values that move<br /><em>with the times.</em></h2>
          <p className="legacy-lead">{aboutParagraph}</p>
          <p className="legacy-detail">{visionParagraph}</p>
          <div className="legacy-actions">
            <Button variant="gold" asChild>
              <Link href="/history">Explore our history <ArrowUpRight /></Link>
            </Button>
            <Button variant="glass" asChild>
              <Link href="/about">Know the trust <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
