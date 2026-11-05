import Link from 'next/link';
import { HandHeart, ArrowUpRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VolunteerBanner() {
  return (
    <section className="volunteer-section">
      <div className="site-container volunteer-inner">
        <div className="volunteer-copy">
          <HandHeart className="volunteer-icon"/>
          <div>
            <h2 className="volunteer-title">Are you ready to <span className="text-primary">volunteer?</span></h2>
            <p className="text-xs text-muted-foreground">Give your heart. Be the reason someone&apos;s life changes.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="glass" asChild className="text-xs">
            <Link href="/contact">Contact now<ArrowUpRight/></Link>
          </Button>
          <Button variant="gold" asChild className="text-xs">
          <Link href="/donate"><Heart/>Make a donation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
