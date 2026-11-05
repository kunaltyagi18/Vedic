'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, Sprout, ShieldCheck, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { photos, pages, vedicWisdomImage } from '@/lib/vgfc-content';

const slides = [
  {
    eyebrow: 'Rooted in values. Driven by compassion.',
    title: '"History timeline"',
    accent: 'of VGFC Trust',
    page: 'history',
    description: 'Be a part of something great. We are utterly dedicated to giving hope to those in need, creating a lasting impact for them.',
    badges: ['Healthcare', 'Community'],
    image: photos.education,
  },
  {
    eyebrow: 'Ancient wisdom. A modern perspective.',
    title: '"Vedic Darpan"',
    accent: 'A modern language book with ancient knowledge',
    page: 'vedic-darpan',
    description: pages['vedic-darpan']?.description ?? '',
    badges: ['ANCIENT', 'MODERN'],
    image: vedicWisdomImage,
  },
  {
    eyebrow: 'Made in Bharat. Made for Bharat.',
    title: '"Atmanirbhar Bharat"',
    accent: 'Vocal for local',
    page: 'atmanirbhar-bharat',
    description: pages['atmanirbhar-bharat']?.description ?? '',
    badges: ['Bharat First', 'Vocal for Local'],
    image: photos.environment,
  },
  {
    eyebrow: 'Rogmukt Bharat | GyanYukt Bharat | Sashakt Bharat',
    title: 'A movement that will transform Bharat',
    accent: '"Let\'s Do It"',
    page: 'lets-do-it',
    description: pages['lets-do-it']?.description.split('\n\n')[1] ?? '',
    badges: ['Strong Bharat', 'Strong Society'],
    image: photos.nutrition,
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const slide = slides[index] ?? slides[0];

  const goTo = (nextIndex: number) => {
    if (nextIndex === index) return;
    setPreviousIndex(index);
    setIndex(nextIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;

    const endX = event.changedTouches[0]?.clientX ?? startX;
    const distance = endX - startX;
    if (Math.abs(distance) < 48) return;

    const nextIndex = distance < 0
      ? (index + 1) % slides.length
      : (index - 1 + slides.length) % slides.length;
    goTo(nextIndex);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(current => {
        setPreviousIndex(current);
        return (current + 1) % slides.length;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [index]);

  if (!slide) return null;

  const altTexts = [
    'A teacher helping children learn in a community classroom',
    'An Indian scholar studying ancient Vedic manuscripts',
    'Community members planting a tree together',
    'Volunteers serving nutritious meals to children',
  ];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="VGFC Trust initiatives"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {previousIndex !== null && (
        <img
          className="hero-image hero-image-previous"
          src={slides[previousIndex]?.image}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1024}
        />
      )}
      <img
        key={slide.image + index}
        className="hero-image hero-image-current"
        src={slide.image}
        alt={altTexts[index] ?? altTexts[0]}
        width={1920}
        height={1024}
        fetchPriority="high"
      />
      <div className="site-container hero-inner">
        <div key={slide.page} className="hero-copy" aria-live="polite">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1 className={index === 1 || index === 3 ? 'compact-title' : ''}>
            {slide.title}<br/><span>{slide.accent}</span>
          </h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-badges">
            {slide.badges.map((badge, i) => (
              <span key={badge}>
                {i === 0 ? <BookOpen size={11}/> : <Sprout size={11}/>} {badge}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <Button variant="gold" size="lg" className="hero-primary-action" asChild>
              <Link href={`/${slide.page}`}>Explore our journey<ArrowUpRight/></Link>
            </Button>
            <Button variant="glass" size="lg" className="hero-secondary-action" asChild>
              <Link href="/donate"><Heart/>Make a difference</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="site-container hero-bottom">
        <div className="slide-tabs">
          {slides.map((s, i) => (
            <Button
              key={s.page}
              variant="ghost"
              className="h-7 px-0"
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={index === i}
              onClick={() => goTo(i)}
            >
              <span className={`slide-dot ${index === i ? 'active' : ''}`}/>
            </Button>
          ))}
          <span className="hero-number">0{index + 1} / 04</span>
        </div>
        <span className="hero-footnote">
          <ShieldCheck size={13}/>Together for a healthy, educated &amp; empowered Bharat
        </span>
      </div>
    </section>
  );
}
