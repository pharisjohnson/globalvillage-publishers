'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const bokCovers = [
  { src: '/Best-of-kenya-cover-min.jpg', alt: 'Best of Kenya', label: 'Volume 1-4 Series' },
  { src: '/Best of Kenya Volume 4 - Beyond 60.png', alt: 'Best of Kenya Vol 4', label: 'Kenya Beyond 60' },
  { src: '/BOK COOPERATIVES  cover.jpg', alt: 'Best of Kenya Cooperatives', label: '2025 Special Edition' },
];

const diploCovers = [
  { src: '/Diplomat-18.png', alt: 'Diplomat East Africa', label: 'Vol 18' },
  { src: '/Diplomat-6-01.jpg', alt: 'Diplomat Vol 6', label: 'East Africa Edition' },
  { src: '/Diploat19-2-01.jpg', alt: 'Diplomat Vol 19', label: 'Latest Edition' },
  { src: '/Diplomat-Obama.jpg', alt: 'Diplomat Special Edition', label: 'Obama Edition' },
  { src: '/diplomatt-min.jpg', alt: 'Diplomat Collection', label: 'Multiple Editions' },
];

interface GridPub {
  src: string;
  alt: string;
  title: string;
  series: string;
  href: string;
}

const gridPubs: GridPub[] = [
  {
    src: '/Best-of-kenya-cover-min.jpg',
    alt: 'Best of Kenya',
    title: 'Best of Kenya',
    series: 'Volume 1-4 Series',
    href: '/Best of Kenya Vol 4 - Beyond 60.pdf.pdf',
  },
  {
    src: '/Best of Kenya Volume 4 - Beyond 60.png',
    alt: 'Best of Kenya Vol 4',
    title: 'Best of Kenya Vol. 4',
    series: 'Kenya Beyond 60',
    href: '/Best of Kenya Vol 4 - Beyond 60.pdf.pdf',
  },
  {
    src: '/BOK COOPERATIVES  cover.jpg',
    alt: 'Best of Kenya Cooperatives',
    title: 'Best of Kenya Cooperatives',
    series: '2025 Special Edition',
    href: '/BOK COOPERATIVES - FINAL.pdf.pdf',
  },
  {
    src: '/Diplomat-18.png',
    alt: 'Diplomat East Africa',
    title: 'Diplomat East Africa',
    series: 'Volume 1-19 Series',
    href: '/contact',
  },
  {
    src: '/Diplomat-Obama.jpg',
    alt: 'Diplomat East Africa Special Edition',
    title: 'Diplomat Special Edition',
    series: 'Obama Edition',
    href: '/contact',
  },
  {
    src: '/sokoni-min-1.jpg',
    alt: 'Sokoni Magazine',
    title: 'Sokoni',
    series: 'Business Magazine',
    href: '/contact',
  },
  {
    src: '/Diplomat-6-01.jpg',
    alt: 'Diplomat East Africa Vol 6',
    title: 'Diplomat Vol. 6',
    series: 'East Africa Edition',
    href: '/contact',
  },
  {
    src: '/Diploat19-2-01.jpg',
    alt: 'Diplomat East Africa Vol 19',
    title: 'Diplomat Vol. 19',
    series: 'Latest Edition',
    href: '/contact',
  },
  {
    src: '/tsc-image-vol35.jpg',
    alt: "Teachers' Image Vol 35",
    title: "Teachers' Image",
    series: 'Volume 35 (Jan-Jun 2026)',
    href: '/Teachers-Image-Vol35.pdf',
  },
  {
    src: '/diplomatt-min.jpg',
    alt: 'Diplomat Magazine Collection',
    title: 'Diplomat Collection',
    series: 'Multiple Editions',
    href: '/contact',
  },
];

function CoverCarousel({ covers }: { covers: typeof bokCovers }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % covers.length), [covers.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + covers.length) % covers.length), [covers.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {covers.map((cover, i) => (
          <div key={i} className="carousel-slide">
            <img src={cover.src} alt={cover.alt} />
            <span className="carousel-label">{cover.label}</span>
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button className="carousel-btn carousel-next" onClick={next} aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="carousel-dots">
        {covers.map((_, i) => (
          <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function OurPublications() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">Our Work</div>
          <h1 className="section-title">Featured Publications</h1>
          <p className="section-desc">Premium commemorative books and magazines crafted with care and precision.</p>
        </div>
      </header>

      {/* Publications Detail */}
      <section className="section">
        <div className="section-inner">
          {/* Best of Kenya */}
          <div className="pub-detail">
            <div className="pub-detail-content">
              <h3>Best of Kenya</h3>
              <p>A prestigious coffee table book celebrating the rich culture, breathtaking landscapes, and vibrant people of Kenya. Published in four volumes plus a special Cooperatives edition, this series captures the essence of what makes Kenya truly exceptional — from its wildlife reserves to its thriving urban centers.</p>
              <ul className="pub-features">
                <li>Volume 1-4 Series + Cooperatives Edition</li>
                <li>High-quality photography and design</li>
                <li>In-depth cultural and historical features</li>
                <li>Premium hardcover printing</li>
              </ul>
              <div className="pub-actions">
                <a href="/Best of Kenya Vol 4 - Beyond 60.pdf.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Download Vol. 4
                </a>
                <a href="/BOK COOPERATIVES - FINAL.pdf.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Download Cooperatives
                </a>
              </div>
            </div>
            <div className="pub-visual">
              <CoverCarousel covers={bokCovers} />
            </div>
          </div>

          {/* Diplomat East Africa */}
          <div className="pub-detail reverse">
            <div className="pub-detail-content">
              <h3>Diplomat East Africa</h3>
              <p>East Africa's leading diplomatic and business intelligence publication. With 19 volumes to date, Diplomat East Africa provides comprehensive coverage of diplomatic affairs, trade relations, and key developments shaping the East African region.</p>
              <ul className="pub-features">
                <li>Volume 1-19 Series</li>
                <li>Diplomatic and business intelligence</li>
                <li>Exclusive interviews with key leaders</li>
                <li>Distributed across East African embassies</li>
              </ul>
              <a href="/contact" className="btn btn-primary">
                Request a Copy
              </a>
            </div>
            <div className="pub-visual">
              <CoverCarousel covers={diploCovers} />
            </div>
          </div>

          {/* Teachers' Image */}
          <div className="pub-detail">
            <div className="pub-detail-content">
              <h3>Teachers' Image</h3>
              <p>The official magazine of the Teachers Service Commission (TSC) of Kenya. Now in its 35th volume, Teachers' Image serves as a vital communication platform for educators across the nation, featuring policy updates, success stories, and professional development content for the teaching community.</p>
              <ul className="pub-features">
                <li>TSC Official Magazine — Volume 35 (Jan-Jun 2026)</li>
                <li>National reach to all teachers</li>
                <li>Policy updates and professional development</li>
                <li>Stories of educational excellence</li>
              </ul>
              <a href="/Teachers-Image-Vol35.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Download Vol. 35
              </a>
            </div>
            <div className="pub-visual">
              <img src="/tsc-image-vol35.jpg" alt="Teachers' Image Vol 35 Cover" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
          </div>

          {/* Sokoni */}
          <div className="pub-detail reverse">
            <div className="pub-detail-content">
              <h3>Sokoni</h3>
              <p>East Africa's premier business magazine covering trade, commerce, and economic development. Sokoni provides insightful analysis and reporting on the business landscape, entrepreneurship, and market trends across the region.</p>
              <ul className="pub-features">
                <li>Business and trade magazine</li>
                <li>Market analysis and industry insights</li>
                <li>Entrepreneur profiles and success stories</li>
                <li>Regional economic coverage</li>
              </ul>
              <a href="/contact" className="btn btn-primary">
                Request a Copy
              </a>
            </div>
            <div className="pub-visual">
              <img src="/sokoni-min-1.jpg" alt="Sokoni Business Magazine" style={{ width: '100%', borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* All Publications Grid */}
      <section className="section" style={{ background: '#FAFAFA' }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Full Catalog</div>
            <h2 className="section-title">All Publications</h2>
            <p className="section-desc">Browse our complete collection of publications and magazines.</p>
          </div>
          
          <div className="publications-grid">
            {gridPubs.map((pub, i) => (
              <a
                key={i}
                href={pub.href}
                target={pub.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={pub.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className="publication-card"
              >
                <div className="publication-img-wrap">
                  <img src={pub.src} alt={pub.alt} className="publication-img" />
                  <span className="publication-dl-overlay">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Download
                  </span>
                </div>
                <div className="publication-info">
                  <h3 className="publication-title">{pub.title}</h3>
                  <p className="publication-series">{pub.series}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="section-inner cta-content">
          <h2 className="cta-title">Ready to Share Your Story?</h2>
          <p className="cta-desc">Let's guide you every step of the way and actualize your vision into reality.</p>
          <Link href="/contact" className="btn btn-primary">
            Commission a Book
          </Link>
        </div>
      </section>
    </>
  );
}
