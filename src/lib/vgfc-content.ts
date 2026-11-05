// Images served from /public/images/ — no imports needed
export const photos = {
  education: '/images/community-education.jpg',
  healthcare: '/images/community-healthcare.jpg',
  environment: '/images/community-environment.jpg',
  nutrition: '/images/community-nutrition.jpg',
};

export const officialUrl = 'https://www.vgfctrust.org';
export const vedicWisdomImage = '/images/vedic-wisdom.jpg';

export const stories = [
  { slug: 'education', title: 'Education', label: 'Empowering young minds', image: photos.education, summary: 'Opening doors to knowledge, equal opportunities and a brighter future for every child.', description: 'Education empowers individuals by building knowledge, skills, and values, creating equal opportunities, fostering innovation, and enabling lifelong learning that strengthens communities, supports social progress, and shapes a confident, informed, and inclusive society for the future.' },
  { slug: 'healthcare', title: 'Healthcare', label: 'Care without boundaries', image: photos.healthcare, summary: 'Bringing essential healthcare closer to the communities that need it most.', description: 'Bringing essential healthcare services to remote areas through mobile clinics and community health programs.' },
  { slug: 'environment-and-energy', title: 'Environment & energy', label: 'Growing a greener tomorrow', image: photos.environment, summary: 'Protecting our planet through sustainable practices and community-led action.', description: 'Building sustainable environmental solutions by promoting clean energy, conserving natural resources, encouraging responsible practices, and empowering communities to protect ecosystems while ensuring long-term ecological balance and climate resilience for future generations.' },
  { slug: 'nutrition', title: 'Nutrition', label: 'Nourishing lives', image: photos.nutrition, summary: 'Healthy meals. Stronger communities. A life of dignity for everyone.', description: 'Promoting balanced nutrition to improve health, strengthen immunity, prevent disease, and empower communities to live active, dignified lives.' },
];

export const workAreas = ['Sports', 'Agriculture', 'Waste Management', 'Education', 'Water & Water Harvesting', 'Food Adulteration', 'Pollution(s)', 'Healthcare', 'Science & Innovations', 'Environment and Energy', 'Nutrition', 'Living Houses (SUSTAINABLE)', 'Animal rights', 'Arts and Culture (BHARAT)', 'Skill Development & Progress'];

export const workPhotos: Record<string, string> = {
  Sports: '/images/work-sports.jpg',
  Agriculture: '/images/work-agriculture.jpg',
  'Waste Management': '/images/work-waste.jpg',
  Education: '/images/work-education.jpg',
  'Water & Water Harvesting': '/images/work-water.jpg',
  'Food Adulteration': '/images/work-food.jpg',
  'Pollution(s)': '/images/work-pollution.jpg',
  Healthcare: '/images/work-healthcare.jpg',
  'Science & Innovations': '/images/work-science.jpg',
  'Environment and Energy': '/images/work-environment.jpg',
  Nutrition: '/images/work-nutrition.jpg',
  'Living Houses (SUSTAINABLE)': '/images/work-housing.jpg',
  'Animal rights': '/images/work-animals.jpg',
  'Arts and Culture (BHARAT)': '/images/work-culture.jpg',
  'Skill Development & Progress': '/images/work-skills.jpg',
};

export const areaSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');

export const aboutParagraph =
  "In a country that is home to the world's second-largest population, VGFC Trust has been working tirelessly to create lasting impact in communities across the region. Our mission is to empower individuals and communities through education, healthcare, and sustainable development initiatives that transform lives and build a brighter future for all.";
export const visionParagraph =
  'The journey of positive change began with our founding vision to create a more equitable society where every individual has access to quality education, healthcare, and opportunities for growth. Through our comprehensive programs and community partnerships, we continue to make a meaningful difference in the lives of thousands.';
export const impactParagraph =
  'VGFC Trust is a modern faith-driven charity platform dedicated to empowering communities and uplifting the Ummah. From emergency relief to long-term development, we strive to bring hope, dignity, and support to those most in need.';

export type ContentPage = { title: string; description: string; image?: string; officialPath?: string };
export const pages: Record<string, ContentPage> = {
  about: { title: 'About VGFC Trust', description: aboutParagraph + '\n\n' + visionParagraph, image: photos.environment, officialPath: '/about' },
  history: { title: 'History of VGFC Trust', description: 'Be a part of something great. We are utterly dedicated to giving hope to those in need, creating a lasting impact for them.\n\n' + visionParagraph, image: photos.education, officialPath: '/history' },
  'our-work': { title: 'Our work', description: 'Together for a healthy, educated and empowered Bharat. Explore our work across education, healthcare, nutrition, environment and our wider areas of community development.', image: photos.environment, officialPath: '/our-work' },
  'impact-stories': { title: 'Impact stories', description: impactParagraph, image: photos.education },
  insights: { title: 'Insights', description: 'Discover the ideas and initiatives shaping our journey towards a stronger Bharat.', officialPath: '/insights' },
  media: { title: 'Media', description: 'Explore news, events and updates from Vedic Global Foundation Charitable Trust.', officialPath: '/media' },
  contact: { title: 'Contact VGFC', description: 'Every meaningful change begins with a conversation. Connect with our team to volunteer, partner with us or support our initiatives.' },
  register: { title: 'Become part of the VGF family card network', description: 'Share a few identity and contact details so our onboarding team can reach you. Your registration will be reviewed and you will be notified once approved.', image: '/images/vgf-family-banner.jpg' },
  donate: { title: 'Donate & Make an Impact', description: 'Join the movement of giving. Your contribution helps bring education, healthcare, nutrition and dignity closer to the communities we serve.', image: photos.healthcare },
  announcements: { title: 'Announcements', description: 'Important Announcement: Stay updated with our latest programs and initiatives here.', officialPath: '/initiatives' },
  'vedic-darpan': { title: 'Vedic Darpan', description: 'Vedic Darpan is our dedicated platform where we bring you the wisdom of ancient texts, Vedic literature, and soon, our magazine. As an institution, we warmly invite you on this journey of timeless knowledge connecting with modern life.', officialPath: '/insights' },
  'family-card': { title: 'VGF Family Card — One Family, One Card', description: 'An initiative of Vedic Global Foundation Charitable Trust that connects families with healthcare, education and other support programmes — open to families from every economic background.\n\nEmpowering every household with essential medical aid, subsidized treatments, student scholarships, vocational skill training, and nutrition support. Join hands with us to build a healthy, educated, and self-reliant Bharat.', image: '/images/vgf-family-banner.jpg', officialPath: '/initiatives' },
  'atmanirbhar-bharat': { title: 'Atmanirbhar Bharat – Vocal for Local', description: 'The Vedic Global Foundation Charitable Trust is devoted to building an Atmanirbhar Bharat by promoting Indian materials, local manufacturing, and empowering our people.', image: photos.environment },
  'lets-do-it': { title: "A movement that will transform Bharat: Let's Do It", description: "Rogmukt Bharat | GyanYukt Bharat | Sashakt Bharat\n\nDisease-Free India, Knowledge-Driven India, and Empowered India is a nationwide public awareness and nation-building campaign aimed at creating an India where every citizen is healthy, educated, informed, self-reliant, and guided by strong moral values.", image: photos.nutrition },
  associates: { title: 'Our associates', description: 'Connect with VGFC Trust to learn about our associates and opportunities to work together.' },
  partners: { title: 'Our partners', description: 'Community partnerships are at the heart of lasting change. Contact the trust to explore partnership opportunities.' },
  branches: { title: 'Our branches', description: 'Registered Address: Saini Mohalla, Chandigarh Road Tohana, Distt. Fatehabad Haryana, BHARAT, 125120.\n\nWorking Office: will be updated soon.' },
  disclaimer: { title: 'Caution notice and disclaimer', description: 'For official notices and verified information, please contact VGFC Trust directly.', officialPath: '/contact' },
  terms: { title: 'Terms & Conditions', description: 'Please consult VGFC Trust for the current official terms and conditions before making a contribution.', officialPath: '/donate' },
  privacy: { title: 'Privacy policy', description: 'Contact VGFC Trust to request the current official privacy policy and information about how your personal data is handled.', officialPath: '/contact' },
  refunds: { title: 'Refund policy', description: 'For donation-related questions or a refund request, please contact VGFC Trust directly.', officialPath: '/donate' },
};

for (const area of workAreas) {
  const photo = workPhotos[area];
  pages[areaSlug(area)] = {
    title: area,
    description: `Discover VGFC Trust's work in ${area.toLowerCase()}. Contact our team for current programs, participation and opportunities to support this area of work.`,
    ...(photo ? { image: photo } : {}),
  };
}

for (const story of stories) {
  pages[story.slug] = { title: story.title, description: story.description, image: story.image };
}
