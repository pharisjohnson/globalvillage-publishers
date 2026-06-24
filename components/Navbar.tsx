'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/our-services', label: 'What We Do' },
    { href: '/our-publications', label: 'Our Work' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img 
            src="/GVP logo 2.png" 
            alt="Global Village Publishers"
          />
          <span className="logo-text">
            Global Village<br />Publishers
          </span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={link.href === '/' ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
