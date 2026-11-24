'use client';

import { useState } from 'react';
import PdfViewer from '@/components/PdfViewer';

interface Edition {
  vol: number;
  period: string;
  file: string;
  latest?: boolean;
}

const editions: Edition[] = [
  { vol: 36, period: 'Jul – Dec 2026', file: '/teachers-image/vol-36-jul-dec-2026.pdf', latest: true },
  { vol: 35, period: 'Jan – Jun 2026', file: '/teachers-image/vol-35-jan-jun-2026.pdf' },
  { vol: 34, period: 'Jul – Dec 2025', file: '/teachers-image/vol-34-jul-dec-2025.pdf' },
  { vol: 33, period: 'Jan – Jun 2025', file: '/teachers-image/vol-33-jan-jun-2025.pdf' },
  { vol: 31, period: 'Aug – Dec 2024', file: '/teachers-image/vol-31-aug-dec-2024.pdf' },
  { vol: 30, period: 'Jan – Apr 2024', file: '/teachers-image/vol-30-jan-apr-2024.pdf' },
  { vol: 29, period: 'May – Aug 2023', file: '/teachers-image/vol-29-may-aug-2023.pdf' },
];

export default function TeachersImageArchive() {
  const [selected, setSelected] = useState<Edition | null>(null);

  return (
    <>
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">Teachers&apos; Image</div>
          <h1 className="section-title">Read Online Archive</h1>
          <p className="section-desc">
            Browse past editions of the Teachers Service Commission&apos;s official magazine,
            published by Global Village Publishers. Read online — downloads are disabled.
          </p>
        </div>
      </header>

      {!selected ? (
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="section-tag">All Editions</div>
              <h2 className="section-title">Choose an Edition</h2>
              <p className="section-desc">
                Select a volume below to read it in your browser.
              </p>
            </div>

            <div className="editions-grid">
              {editions.map((e) => (
                <button
                  key={e.vol}
                  type="button"
                  className="edition-card"
                  onClick={() => {
                    setSelected(e);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {e.latest && <span className="edition-badge">Latest</span>}
                  <div className="edition-vol">Vol {e.vol}</div>
                  <div className="edition-period">{e.period}</div>
                  <div className="edition-read">
                    Read Online
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            <p className="read-only-note">
              These editions are provided for on-screen reading. They cannot be downloaded or saved from this page.
            </p>
          </div>
        </section>
      ) : (
        <section className="section reader-section">
          <div className="section-inner">
            <div className="reader-header">
              <button type="button" className="btn btn-outline" onClick={() => setSelected(null)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5m0 0l6 6m-6-6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All Editions
              </button>
              <h2 className="reader-title">
                Teachers&apos; Image Vol {selected.vol}{' '}
                <span className="reader-period">{selected.period}</span>
              </h2>
            </div>
            <PdfViewer src={selected.file} title={`Teachers' Image Vol ${selected.vol}`} />
          </div>
        </section>
      )}
    </>
  );
}
