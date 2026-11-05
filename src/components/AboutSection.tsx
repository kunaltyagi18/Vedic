import Link from 'next/link';
import { ArrowUpRight, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { photos, aboutParagraph, visionParagraph } from '@/lib/vgfc-content';

export function AboutSection() {
  return (
    <section className="site-container section-space about-grid" aria-labelledby="about-title">
      <div className="about-image">
        <img
          src={photos.environment}
          alt="Community volunteers creating a greener future together"
          width={1536}
          height={1024}
          loading="lazy"
        />
        <div className="about-stamp">
          <HandHeart size={40} strokeWidth={1}/>
          <span>Rooted in service.<br/>United for Bharat.</span>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">About VGFC Trust</p>
        <h2 className="section-title" id="about-title">A shared vision.<br/><em>A brighter Bharat.</em></h2>
        <p className="section-description">{aboutParagraph}</p>
        <h3>A vision that continues to grow</h3>
        <p className="section-description">{visionParagraph}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Button variant="gold" asChild className="text-xs">
            <Link href="/about">Know more<ArrowUpRight/></Link>
          </Button>
          <Button variant="glass" asChild className="text-xs">
            <Link href="/history">VGFC Trust history<ArrowUpRight/></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

