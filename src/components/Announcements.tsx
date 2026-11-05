'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Update = {
  category: string;
  title: string;
  copy: string;
  date: string;
  page: string;
};

const updates: Update[] = [
  {
    category: 'NOTICE-1',
    title: 'Public Notice',
    copy: 'This notice explains the refund process for the VGF Family Card registration fee or voluntary donation. Eligible applicants may request a refund within 4 months from the date of registration, subject to the Trust’s Refund Policy and applicable terms.',
    date: 'Jul 27, 2026',
    page: 'announcements',
  },
  {
    category: 'NOTICE-2',
    title: 'Public Notice',
    copy: 'we announce that boys aged 15 and above are now eligible to apply individually for the VGF Family Card. All families are encouraged to take advantage of this new provision. For further details, please contact your local VGFC Trust representative.',
    date: 'Jun 12, 2026',
    page: 'family-card',
  },
  {
    category: 'CAMPAIGN',
    title: 'Local Business Guardians!',
    copy: 'To save our local shopkeepers, limit online shopping and make most purchases from your local stores. The government hasn’t taken sufficient steps, so we must step up. It’s our responsibility to preserve local markets, Indian goods, and our heritage!',
    date: '',
    page: 'lets-do-it',
  },
  {
    category: 'EVENT (PC)',
    title: 'Media Dialogue',
    copy: 'Media Samvaad is a VGF Trust event that brings together media professionals, community leaders, and citizens to discuss health, education, and social well-being, while supporting the vision of a disease-free, knowledge-enriched, and empowered Bharat.',
    date: 'Mar 19, 2026',
    page: 'media',
  },
  {
    category: 'INITIATIVE',
    title: 'VGF Family Card!',
    copy: '“The VGF Family Card is a social security initiative providing free education, healthcare, and other assistance to your family. It’s a strong, trustworthy bridge between you and our community.”',
    date: 'Mar 4, 2026',
    page: 'family-card',
  },
  {
    category: 'VANDE BHARAT PAD YATRA',
    title: 'Vande Bharat Pad Yatra',
    copy: 'In today’s fast-paced world, where most people focus on personal success and career growth, Ashutosh Pandey from Sultanpur, Uttar Pradesh, has set an extraordinary example of dedication and sacrifice for the protection of nature.',
    date: 'Dec 4, 2022',
    page: 'our-work',
  },
  {
    category: 'SCIENCE AND INNOVATIONS',
    title: 'India Advances In Second Stage Of Its Nuclear Programme',
    copy: '“This advanced reactor, capable of producing more fuel than it consumes, reflects the depth of our scientific capability and the strength of our engineering enterprise. It is a decisive step towards harnessing our vast thorium reserves in the third stage…”',
    date: '',
    page: 'our-work',
  },
  {
    category: 'CAMPAIGN',
    title: 'Disease-Free India, Knowledge-Rich India, Empowered India.',
    copy: 'ROGMUKT BHARAT, GYAN YUKT BHARAT, SASHAKT BHARAT—Building a healthier, more knowledgeable, and empowered India through healthcare, education, innovation, and social welfare.',
    date: 'Sep 21, 2026',
    page: 'lets-do-it',
  },
  {
    category: 'HISTORY',
    title: 'VGFC Trust Foundation Story !',
    copy: 'Learn about our founding principles and the vision that drives our commitment to community development and social impact.',
    date: '',
    page: 'history',
  },
];

const updateCardMotion: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -10,
    scale: 1.008,
    transition: { duration: 0.38, ease: [0.22, 0.61, 0.36, 1] },
  },
  tap: { scale: 0.995 },
};

const updateCardVeilMotion: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.38, ease: 'easeOut' } },
};

const updateCardContentMotion: Variants = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: 0.38, ease: [0.22, 0.61, 0.36, 1] } },
};

function UpdateCard({ update }: { update: Update }) {
  return (
    <motion.article
      className="update-card update-card--interactive group"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={updateCardMotion}
    >
      <motion.div
        className="update-card-veil pointer-events-none absolute inset-0"
        aria-hidden="true"
        variants={updateCardVeilMotion}
      />

      <motion.div className="update-card-content" variants={updateCardContentMotion}>
        <span className="update-category">{update.category}</span>
        <h3>{update.title}</h3>
        <span className="update-rule" aria-hidden="true" />
        <p>{update.copy}</p>

        <div className="update-card-footer">
          {update.date ? (
            <span className="update-date">
              <CalendarDays size={20} />
              {update.date}
            </span>
          ) : <span aria-hidden="true" />}
          <Button asChild className="update-more">
            <Link href={`/${update.page}`}>
              Know more <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Announcements() {
  const [index, setIndex] = useState(0);
  const visibleUpdates = [updates[index], updates[(index + 1) % updates.length]];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % updates.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const change = (direction: number) => {
    setIndex(current => (current + direction + updates.length) % updates.length);
  };

  return (
    <section className="latest-updates" aria-labelledby="latest-updates-title">
      <div className="site-container latest-updates-header">
        <div className="latest-updates-title-block">
          <p className="latest-updates-eyebrow"><span />Stay informed<span /></p>
          <h2 id="latest-updates-title">Latest Updates</h2>
          <span className="latest-updates-rule" aria-hidden="true" />
        </div>
        <div className="latest-updates-intro">
          <p>Stay connected with the latest announcements and stories from our ongoing initiatives.</p>
          <span className="latest-updates-count">{String(index + 1).padStart(2, '0')} <i>/</i> {String(updates.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="latest-updates-carousel">
        <Button
          variant="ghost"
          size="icon"
          className="updates-arrow updates-arrow-left"
          aria-label="Previous update"
          onClick={() => change(-1)}
        >
          <ChevronLeft size={34} />
        </Button>

        <div className="site-container updates-grid" aria-live="polite">
          {visibleUpdates.map((update, offset) => (
            <UpdateCard key={`${update.title}-${index + offset}`} update={update} />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="updates-arrow updates-arrow-right"
          aria-label="Next update"
          onClick={() => change(1)}
        >
          <ChevronRight size={34} />
        </Button>
      </div>

      <div className="updates-dots" aria-label="Update slides">
        {updates.map((update, dotIndex) => (
          <button
            key={`${update.category}-${dotIndex}`}
            type="button"
            className={`updates-dot ${index === dotIndex ? 'active' : ''}`}
            aria-label={`Go to update slide ${dotIndex + 1}`}
            aria-pressed={index === dotIndex}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
}
