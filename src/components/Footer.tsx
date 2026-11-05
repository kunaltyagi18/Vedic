import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Brand } from './Brand';

const quickLinks = [
  { label: 'Impact stories', page: 'impact-stories' },
  { label: 'Vedic Darpan', page: 'vedic-darpan' },
  { label: 'Our history', page: 'history' },
  { label: 'Our areas of work', page: 'our-work' },
];

const trustLinks = [
  { label: 'Our associates', page: 'associates' },
  { label: 'Our partners', page: 'partners' },
  { label: 'Our branches', page: 'branches' },
  { label: 'Caution notice & disclaimer', page: 'disclaimer' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div>
            <Brand hanging={false}/>
            <p className="section-description mt-4">Together for a healthy, educated<br/>and empowered Bharat.</p>
            <a className="footer-contact" href="mailto:vgfctrust2023@gmail.com"><Mail/>vgfctrust2023@gmail.com</a>
            <a className="footer-contact" href="tel:+919050940609"><Phone/>+91 9050940609</a>
            <div className="flex gap-4 mt-5 text-xs text-muted-foreground" aria-label="Social media">
              <a href="https://www.vgfctrust.org/" aria-label="VGFC official social media links" className="flex items-center gap-1">
                Connect with VGFC<ArrowUpRight size={12}/>
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Explore</h3>
            <div className="footer-links">
              {quickLinks.map(item => (
                <Link key={item.page} href={`/${item.page}`}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-heading">The foundation</h3>
            <div className="footer-links">
              {trustLinks.map(item => (
                <Link key={item.page} href={`/${item.page}`}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Find us</h3>
            <div className="footer-contact mt-0">
              <MapPin/>
              <p>
                <span className="text-foreground">Registered address</span><br/>
                Saini Mohalla, Chandigarh Road Tohana,<br/>
                Distt. Fatehabad Haryana,<br/>
                BHARAT 🇮🇳, 125120
              </p>
            </div>
            <p className="footer-contact"><span>Working office: will be updated soon</span></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2026 All Rights Reserved, VGFC Trust</p>
          <div>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/refunds">Refund policy</Link>
          </div>
          <span>With compassion. For Bharat.</span>
        </div>
      </div>
    </footer>
  );
}

