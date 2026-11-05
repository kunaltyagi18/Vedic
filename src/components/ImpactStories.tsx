import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { stories, impactParagraph } from '@/lib/vgfc-content';

const [education, healthcare, environment, nutrition] = stories;
const storyImages: Record<string, string> = {
  education: '/images/work-education.jpg',
  healthcare: '/images/work-healthcare.jpg',
  'environment-and-energy': '/images/work-environment.jpg',
  nutrition: '/images/work-nutrition.jpg',
};

function StoryCard({
  story,
  index,
  image,
  featured = false,
}: {
  story: (typeof stories)[number];
  index: number;
  image: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/${story.slug}`}
      className={`impact-story-card ${featured ? 'impact-story-card-featured' : ''}`}
    >
      <img src={image} alt={story.title} width={1000} height={650} loading={featured ? 'eager' : 'lazy'} />
      <span className="impact-story-category">{String(index).padStart(2, '0')} / {story.title === 'Environment & energy' ? 'ENVIRONMENT AND ENERGY' : story.title.toUpperCase()}</span>
      <div className="impact-story-overlay" />
      <div className="impact-story-content">
        <h3>{story.title === 'Environment & energy' ? 'Environment and energy' : story.title}</h3>
        <p>{story.description}</p>
        <span className="impact-story-action">Explore story <ArrowUpRight size={15} strokeWidth={1.8} /></span>
      </div>
    </Link>
  );
}

export function ImpactStories() {
  return (
    <section className="impact-stories-section" aria-labelledby="impact-title">
      <div className="impact-stories-container">
        <div className="impact-stories-heading">
          <div className="impact-stories-heading-copy">
            <p className="impact-stories-eyebrow">Stories from the field</p>
            <h2 id="impact-title">Impact Stories</h2>
            <span className="impact-stories-heading-rule" aria-hidden="true" />
            <p>One Donation<br />Infinite Rewards</p>
          </div>
          <div className="impact-stories-intro">
            <p>{impactParagraph}</p>
            <Button variant="outline" asChild className="impact-learn-more">
              <Link href="/impact-stories">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="impact-stories-grid">
          <StoryCard story={education} index={1} image={storyImages.education} featured />
          <StoryCard story={healthcare} index={2} image={storyImages.healthcare} />
          <StoryCard story={environment} index={3} image={storyImages['environment-and-energy']} />
          <StoryCard story={nutrition} index={4} image={storyImages.nutrition} />
        </div>
      </div>
    </section>
  );
}
