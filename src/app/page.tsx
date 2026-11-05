import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { FamilyCardSection } from '@/components/FamilyCardSection';
import { Announcements } from '@/components/Announcements';
import { ImpactStories } from '@/components/ImpactStories';
import { ImpactStats } from '@/components/ImpactStats';
import { LegacySection } from '@/components/LegacySection';
import { AreasOfWork } from '@/components/AreasOfWork';
import { AboutSection } from '@/components/AboutSection';
import { VolunteerBanner } from '@/components/VolunteerBanner';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VGFC Trust | Together for a brighter Bharat',
  description:
    'Discover Vedic Global Foundation Charitable Trust: empowering communities through education, healthcare, nutrition and sustainable development.',
  openGraph: {
    title: 'VGFC Trust | Together for a brighter Bharat',
    description:
      'Rooted in values. Driven by compassion. Join our journey towards a healthy, educated and empowered Bharat.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <HeroSlider />
        <FamilyCardSection />
        <ImpactStories />
        <Announcements />
        <ImpactStats />
        <LegacySection />
        <AreasOfWork />
        <AboutSection />
        <VolunteerBanner />
      </main>
      <Footer />
    </>
  );
}
