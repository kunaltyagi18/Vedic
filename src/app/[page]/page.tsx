import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { VolunteerBanner } from '@/components/VolunteerBanner';
import { AreasOfWork } from '@/components/AreasOfWork';
import { ImpactStories } from '@/components/ImpactStories';
import { DonatePage, RegisterPage } from '@/components/ActionPages';
import { pages, officialUrl } from '@/lib/vgfc-content';

interface Props {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ amount?: string | string[] }>;
}

export async function generateStaticParams() {
  return Object.keys(pages).map((page) => ({
    page,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page: slug } = await params;
  const content = pages[slug];
  if (!content) return {};
  const title = `${content.title} | VGFC Trust`;
  const description = content.description.slice(0, 160);
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function ContentPage({ params, searchParams }: Props) {
  const { page: slug } = await params;
  const query = await searchParams;
  const content = pages[slug];
  if (!content) notFound();

  if (slug === 'register' || slug === 'donate') {
    const amountParam = Array.isArray(query.amount) ? query.amount[0] : query.amount;
    const parsedAmount = amountParam && /^\d+$/.test(amountParam) ? Number(amountParam) : undefined;

    return (
      <>
        <Navbar />
        <main className="main-content">
          {slug === 'register' ? <RegisterPage /> : <DonatePage initialAmount={parsedAmount} />}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        <section className="site-container detail-main">
          <Button variant="link" asChild className="px-0 mb-8 text-xs">
            <Link href="/"><ArrowLeft />Back to home</Link>
          </Button>
          <p className="eyebrow">Vedic Global Foundation Charitable Trust</p>
          <h1 className="section-title">{content.title}</h1>
          {content.image && (
            <img
              className="detail-image"
              src={content.image}
              alt={content.title}
              width={992}
              height={672}
            />
          )}
          <div className="detail-copy">
            {content.description.split('\n\n').map((p) => (
              <p className="mb-5" key={p}>{p}</p>
            ))}
          </div>
          {slug === 'contact' ? (
            <div className="contact-block">
              <Button asChild variant="gold" size="lg">
                <a href="mailto:vgfctrust2023@gmail.com"><Mail />vgfctrust2023@gmail.com</a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="tel:+919050940609"><Phone />+91 9050940609</a>
              </Button>
              <p className="footer-contact">
                <MapPin />Saini Mohalla, Chandigarh Road Tohana, Distt. Fatehabad Haryana, BHARAT, 125120
              </p>
            </div>
          ) : content.officialPath ? (
            <Button className="mt-5" asChild variant="gold">
              <a href={`${officialUrl}${content.officialPath}`}>Visit official VGFC page<ArrowUpRight /></a>
            </Button>
          ) : (
            <Button className="mt-5" asChild variant="gold">
              <Link href="/contact">Connect with the trust<ArrowUpRight /></Link>
            </Button>
          )}
        </section>
        {slug === 'our-work' && <AreasOfWork />}
        {slug === 'impact-stories' && <ImpactStories />}
        <VolunteerBanner />
      </main>
      <Footer />
    </>
  );
}
