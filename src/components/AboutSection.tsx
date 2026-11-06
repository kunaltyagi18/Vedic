'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Heart, Target, UsersRound } from 'lucide-react';
import { photos, aboutParagraph, visionParagraph } from '@/lib/vgfc-content';

const aboutTabs = [
  {
    label: 'Our Mission',
    icon: Target,
    text: 'To empower individuals and communities through education, healthcare, and sustainable development initiatives that transform lives and build a brighter future for all.',
  },
  { label: 'Our Vision', icon: Eye, text: visionParagraph },
  { label: 'Who We Are', icon: UsersRound, text: aboutParagraph },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = aboutTabs[activeTab] ?? aboutTabs[0];
  const TabIcon = tab.icon;

  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="site-container about-layout">
        <div className="about-collage" aria-label="VGFC Trust community initiatives">
          <div className="about-collage-orbit" aria-hidden="true" />
          <div className="about-collage-leaf" aria-hidden="true">⌁</div>
          <div className="about-photo about-photo-primary">
            <img src="/images/work-education.jpg" alt="Students learning together in a classroom" width={992} height={672} loading="lazy" />
          </div>
          <div className="about-photo about-photo-secondary">
            <img src={photos.healthcare} alt="A child receiving community healthcare" width={992} height={672} loading="lazy" />
          </div>
          <div className="about-years"><strong>3+</strong><span>Years of<br />Dedication</span></div>
          <Heart className="about-heart" size={30} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <div className="about-content">
          <p className="about-kicker"><span />ABOUT VGFC TRUST</p>
          <h2 id="about-title">Building a Healthier,<br /><em>Educated</em> &amp; Empowered Bharat</h2>
          <p className="about-intro">In a country that is home to the world&apos;s second-largest population, VGFC Trust has been working tirelessly to create lasting impact in communities across the region.</p>

          <div className="about-tabs" role="tablist" aria-label="About VGFC Trust">
            {aboutTabs.map(({ label, icon: Icon }, index) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={`about-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="about-tab-panel" role="tabpanel" aria-live="polite">
            <TabIcon size={22} strokeWidth={1.8} aria-hidden="true" />
            <p>{tab.text}</p>
          </div>

          <div className="about-values" aria-label="VGFC Trust values">
            <span><Target size={18} />Rog Mukt Bharat</span>
            <span><Target size={18} />Gyan Yukt Bharat</span>
            <span><Heart size={18} />Swasth Bharat</span>
          </div>
          <Link className="about-cta" href="/about">Explore More<ArrowRight size={19} /></Link>
        </div>
      </div>
    </section>
  );
}
