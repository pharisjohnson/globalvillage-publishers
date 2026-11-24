'use client';

import { useCallback, useEffect, useState } from 'react';
import PdfViewer from '@/components/PdfViewer';

interface Edition {
  vol: number;
  period: string;
  file: string;
  cover: string;
  latest?: boolean;
}

const editions: Edition[] = [
  { vol: 36, period: 'Jul – Dec 2026', file: '/teachers-image/vol-36-jul-dec-2026.pdf', cover: '/teachers-image/vol-36-cover.jpg', latest: true },
  { vol: 35, period: 'Jan – Jun 2026', file: '/teachers-image/vol-35-jan-jun-2026.pdf', cover: '/teachers-image/vol-35-cover.jpg' },
  { vol: 34, period: 'Jul – Dec 2025', file: '/teachers-image/vol-34-jul-dec-2025.pdf', cover: '/teachers-image/vol-34-cover.jpg' },
  { vol: 33, period: 'Jan – Jun 2025', file: '/teachers-image/vol-33-jan-jun-2025.pdf', cover: '/teachers-image/vol-33-cover.jpg' },
  { vol: 31, period: 'Aug – Dec 2024', file: '/teachers-image/vol-31-aug-dec-2024.pdf', cover: '/teachers-image/vol-31-cover.jpg' },
  { vol: 30, period: 'Jan – Apr 2024', file: '/teachers-image/vol-30-jan-apr-2024.pdf', cover: '/teachers-image/vol-30-cover.jpg' },
  { vol: 29, period: 'May – Aug 2023', file: '/teachers-image/vol-29-may-aug-2023.pdf', cover: '/teachers-image/vol-29-cover.jpg' },
];

function readHash(): { vol?: number; page?: number } {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const vol = Number(params.get('vol'));
  const page = Number(params.get('page'));
  return {
    vol: Number.isFinite(vol) && vol > 0 ? vol : undefined,
    page: Number.isFinite(page) && page > 0 ? page : undefined,
  };
}

export default function TeachersImageArchive() {
  const [selected, setSelected] = useState<Edition | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialPage, setInitialPage] = useState<number | undefined>(undefined);
  const [origin, setOrigin] = useState('');
  const [shareOpen, setShareOpen] = useState(false);
  const [shareSel, setShareSel] = useState('');
  const [copied, setCopied] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  const applyHash = useCallback(() => {
    const { vol, page } = readHash();
    if (vol) {
      const ed = editions.find((e) => e.vol === vol);
      if (ed) {
        setSelected(ed);
        setInitialPage(page || 1);
        setCurrentPage(page || 1);
      }
    } else {
      setSelected(null);
      setInitialPage(undefined);
    }
  }, []);

  useEffect(() => {
    setOrigin(window.location.origin);
    applyHash();
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', applyHash);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', applyHash);
    };
  }, [applyHash]);

  const openEdition = (e: Edition) => {
    setSelected(e);
    setCurrentPage(1);
    setInitialPage(undefined);
    setShareOpen(false);
    window.history.replaceState(null, '', `#vol=${e.vol}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToEditions = () => {
    setSelected(null);
    setShareOpen(false);
    window.history.replaceState(null, '', window.location.pathname);
  };

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      if (selected) {
        window.history.replaceState(null, '', `#vol=${selected.vol}&page=${page}`);
      }
    },
    [selected],
  );

  const openShare = () => {
    const sel = window.getSelection()?.toString().trim() || '';
    setShareSel(sel);
    setCopied(false);
    setShareOpen((v) => !v);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const shareUrl = selected && origin ? `${origin}/teachers-image#vol=${selected.vol}&page=${currentPage}` : '';
  const shareTitle = selected ? `Teachers' Image Vol ${selected.vol} (page ${currentPage})` : '';
  const shareBody = shareSel ? `${shareTitle}\n\n“${shareSel}”` : shareTitle;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareBody}\n${shareUrl}`)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareBody)}`;

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
              <p className="section-desc">Select a volume below to read it in your browser.</p>
            </div>

            <div className="editions-grid">
              {editions.map((e) => (
                <button key={e.vol} type="button" className="edition-card" onClick={() => openEdition(e)}>
                  {e.latest && <span className="edition-badge">Latest</span>}
                  <div className="edition-cover" style={{ backgroundImage: `url(${e.cover})` }} />
                  <div className="edition-cover-overlay">
                    <div className="edition-vol">Vol {e.vol}</div>
                    <div className="edition-period">{e.period}</div>
                    <div className="edition-read">
                      Read Online
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
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
              <button type="button" className="btn btn-outline" onClick={backToEditions}>
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
            <PdfViewer
              src={selected.file}
              title={`Teachers' Image Vol ${selected.vol}`}
              initialPage={initialPage}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      )}

      {/* Floating actions */}
      <div className="reader-actions">
        {selected && (
          <>
            {shareOpen && (
              <div className="share-popover">
                <a className="share-option" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24z"/></svg>
                  WhatsApp
                </a>
                <a className="share-option" href={facebookHref} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z"/></svg>
                  Facebook
                </a>
                <a className="share-option" href={xHref} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#111" d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93z"/></svg>
                  X (Twitter)
                </a>
                <button type="button" className="share-option" onClick={copyLink}>
                  <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#EC5C23" d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 010-7.07l3.54-3.54a5.003 5.003 0 017.07 0 5.003 5.003 0 010 7.07l-1.49 1.49c-.01-.82-.12-1.64-.36-2.42l.43-.43a3.004 3.004 0 000-4.24 3.004 3.004 0 00-4.24 0L10.59 6.7a3.004 3.004 0 000 4.24zM5.34 15.34a5.003 5.003 0 000 7.07 5.003 5.003 0 007.07 0l3.54-3.54a5.003 5.003 0 000-7.07c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0a3.004 3.004 0 00-4.24 0L7.28 16.7a3.004 3.004 0 000 4.24 3.004 3.004 0 004.24 0l.43-.43c.24.78.35 1.6.36 2.42l-1.49 1.49a5.003 5.003 0 01-7.07 0z"/></svg>
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            )}
            <button type="button" className="fab fab-share" onClick={openShare} aria-label="Share this page">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Share
            </button>
          </>
        )}
        {showBackTop && (
          <button type="button" className="fab fab-top" onClick={scrollTop} aria-label="Back to top">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        )}
      </div>
    </>
  );
}
