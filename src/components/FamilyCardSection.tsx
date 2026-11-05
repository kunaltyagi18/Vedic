import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FamilyCardSection() {
  return (
    <section
      className="family-card-section border-y border-[oklch(0_0_0/8%)] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF6F7 0%, #FFFFFF 100%)',
      }}
      aria-labelledby="family-card-title"
    >
      <div className="site-container py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4 md:gap-5">
            <span
              className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              style={{
                color: '#a82522',
                backgroundColor: 'rgba(168, 37, 34, 0.08)',
                border: '1px solid rgba(168, 37, 34, 0.35)',
              }}
            >
              VGF FAMILY CARD
            </span>

            <h2
              id="family-card-title"
              className="section-title text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground m-0 leading-[1.2]"
              style={{ fontFamily: "var(--font-display, 'Cinzel', Georgia, serif)" }}
            >
              One Family, One Card
            </h2>

              <p className="family-card-description text-muted-foreground text-sm sm:text-[15px] leading-relaxed max-w-xl m-0">
              An initiative of Vedic Global Foundation Charitable Trust that connects families with
              healthcare, education and other support programmes — open to families from every
              economic background.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                className="text-white px-7 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
                style={{
                  backgroundColor: '#a82522',
                  borderColor: '#a82522',
                }}
              >
                <Link href="/family-card">Know more</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer hover:bg-[rgba(168,37,34,0.06)]"
                style={{
                  color: '#a82522',
                  borderColor: '#a82522',
                  backgroundColor: 'transparent',
                }}
              >
                <Link href="/family-card">Frequently asked questions</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: 3D HD Card Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] transition-transform duration-300 hover:scale-[1.015]">
              <img
                src="/images/vgf-family-card-hd.jpg"
                alt="VGF Family Card - One Family, One Card, A Brighter Future"
                className="w-full h-auto object-contain select-none"
                width={865}
                height={643}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
