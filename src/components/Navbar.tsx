'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Heart, Menu, X, HeartHandshake, UsersRound, ShieldCheck, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from './Brand';

const navigation = [
  { label: 'About us', page: 'about', children: [{ label: 'Our foundation', page: 'about' }, { label: 'Our history', page: 'history' }] },
  { label: 'Our work', page: 'our-work', children: [{ label: 'Areas of work', page: 'our-work' }, { label: 'Our partners', page: 'partners' }] },
  { label: 'Insights', page: 'insights', children: [{ label: 'Vedic Darpan', page: 'vedic-darpan' }, { label: 'Announcements', page: 'announcements' }] },
  { label: 'Impact stories', page: 'impact-stories', children: [] },
  { label: 'Media', page: 'media', children: [{ label: 'News & updates', page: 'media' }] },
  { label: 'Contact VGFC', page: 'contact', children: [{ label: 'Get in touch', page: 'contact' }, { label: 'Our branches', page: 'branches' }] },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="site-container top-strip-inner">
          <span className="top-strip-item"><HeartHandshake size={14}/>Act Today, Change Tomorrow</span>
          <span className="top-strip-item"><UsersRound size={14}/>25,000+ Lives Touched</span>
          <span className="top-strip-item"><ShieldCheck size={14}/>Transparency &amp; Impact</span>
          <a className="top-strip-help" href="tel:+919050940609"><PhoneCall size={14}/>Need Help? +91 90509 40609</a>
        </div>
      </div>
      <div className="site-container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => (
            <div className="nav-group" key={item.page}>
              <Link className="nav-link" href={`/${item.page}`}>
                {item.label}
                {item.children.length > 0 && <ChevronDown size={10}/>}
              </Link>
              {item.children.length > 0 && (
                <div className="nav-dropdown">
                  {item.children.map(child => (
                    <Link key={child.page} href={`/${child.page}`}>{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions flex items-center gap-3">
          <Button asChild variant="glass" size="sm" className="header-register">
            <Link href="/register">Register</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="header-donate">
            <Link href="/donate"><Heart size={13}/>Donate</Link>
          </Button>
          <Button
            className="mobile-menu-button"
            variant="ghost"
            size="icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X/> : <Menu/>}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(item => (
            <Link key={item.page} href={`/${item.page}`} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
        </nav>
      )}
    </header>
  );
}
