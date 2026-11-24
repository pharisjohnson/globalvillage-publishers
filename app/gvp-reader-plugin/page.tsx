import Link from 'next/link';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
    ),
    title: 'Read-only by design',
    desc: 'Pages are drawn to a canvas — not a native PDF frame. There is no download button, and right-click and drag-to-save are disabled.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/></svg>
    ),
    title: 'Continuous scroll',
    desc: 'Portrait pages and landscape spreads flow together with no gaps, so the document reads as one long page instead of separate sections.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    ),
    title: 'Fast on long documents',
    desc: 'Pages render lazily as the reader scrolls, so even 100-page editions open quickly and stay responsive.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
    ),
    title: 'Select & share',
    desc: 'Readers can select a quote or share the current page straight to WhatsApp, Facebook or X with a deep link back to it.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
    ),
    title: 'Back to top',
    desc: 'A floating button returns readers to the start in one tap — handy for long magazines.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M8 18l-6-6 6-6 1.41 1.41L4.83 12l4.58 4.59L8 18zm8 0l-1.41-1.41L19.17 12l-4.58-4.59L16 6l6 6-6 6z"/></svg>
    ),
    title: 'One shortcode, zero setup',
    desc: 'No settings screens. Upload your PDF to the Media Library, paste a single shortcode, and it just works.',
  },
];

const steps = [
  {
    title: 'Download the plugin',
    desc: 'Grab the free .zip file below and save it to your computer.',
  },
  {
    title: 'Install in WordPress',
    desc: 'Go to Plugins → Add New → Upload Plugin, choose the .zip, then click Install Now and Activate.',
  },
  {
    title: 'Add a shortcode',
    desc: 'Upload your PDF to Media, then paste the shortcode into any page or post.',
  },
];

export default function GvpReaderPluginPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">Free WordPress Plugin</div>
          <h1 className="section-title">Read-Only PDF Reader</h1>
          <p className="section-desc">
            Turn any PDF into a magazine your readers can scroll through — with no
            download button, no right-click save, and no copy of the file.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="section-inner">
          <div className="plugin-hero">
            <div className="plugin-hero-content">
              <h2>Publish PDFs people can read, but not take.</h2>
              <p>
                The GVP Read-Only PDF Reader renders every page of your PDF onto a
                canvas inside the browser, so your document is shared as a
                scrollable online magazine rather than a downloadable file. It is
                the same viewer that powers the Teachers&apos; Image archive on this
                site.
              </p>
              <div className="pub-actions">
                <a href="/gvp-pdf-reader.zip" download className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Download the plugin
                </a>
                <Link href="/teachers-image" className="btn btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                  See a live demo
                </Link>
              </div>
              <div className="plugin-download-meta">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#4CAF50"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14.41-3.29-3.29 1.41-1.41L11 13.58V7h2v6.58l1.88-1.87 1.41 1.41L11 16.41z"/></svg>
                  Version 1.0.0 · ~11 KB
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#EC5C23"><path d="M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/></svg>
                  WordPress 5.8+ · PHP 7.4+
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1a1a"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93z"/></svg>
                  GPL-2.0 licensed
                </span>
              </div>
            </div>

            <div className="plugin-mockup">
              <div className="plugin-mockup-bar"><span></span><span></span><span></span></div>
              <div className="plugin-mockup-toolbar">
                Your Magazine <small>36 pages</small>
              </div>
              <div className="plugin-mockup-pages">
                <div className="plugin-page-sample"></div>
                <div className="plugin-page-sample landscape"></div>
                <div className="plugin-page-sample"></div>
              </div>
              <div className="plugin-mockup-fab share">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="plugin-mockup-fab top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: '#FAFAFA' }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Features</div>
            <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
            <p className="section-desc">
              A focused, fast reader built on Mozilla&apos;s PDF.js.
            </p>
          </div>
          <div className="services-grid">
            {features.map((f) => (
              <div className="service-card" key={f.title}>
                <div className="service-icon">{f.icon}</div>
                <h3 className="service-title">{f.title}</h3>
                <p className="service-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Get Started</div>
            <h2 className="section-title">Up and running in two minutes</h2>
            <p className="section-desc">No code required. Three short steps.</p>
          </div>

          <div className="plugin-steps">
            {steps.map((s, i) => (
              <div className="plugin-step" key={s.title}>
                <div className="plugin-step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="plugin-note" style={{ marginTop: '40px' }}>
            <strong>Your shortcode looks like this:</strong>
            <div className="plugin-code">
              <code>{'[gvp-reader id="123" title="Your Magazine"]'}</code>
            </div>
            Or, link straight to a PDF URL:
            <div className="plugin-code">
              <code>{'[gvp-reader src="https://example.com/file.pdf"]'}</code>
            </div>
            Attributes: <code>id</code> (Media Library attachment), <code>src</code> (PDF URL),{' '}
            <code>title</code>, <code>share=&quot;1|0&quot;</code>, <code>top=&quot;1|0&quot;</code>.
          </div>
        </div>
      </section>

      {/* Caveat */}
      <section className="section" style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <div className="plugin-note">
            <strong>Good to know.</strong> The reader is read-only by design — there is no
            download control, right-click and drag-to-save are disabled, and pages are drawn
            to a canvas. But on the open web this is best-effort: the PDF&apos;s own URL can
            still be fetched directly by a determined visitor. If you need hard protection,
            serve the file from a private origin with signed URLs or access controls. Your own
            WordPress Media Library always works; a PDF hosted on a different domain must allow
            cross-origin requests (CORS).
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section cta-section">
        <div className="section-inner cta-content">
          <h2 className="cta-title">Start publishing read-only PDFs today</h2>
          <p className="cta-desc">
            Free forever. Download the plugin, upload it to WordPress, and drop in a shortcode.
          </p>
          <a href="/gvp-pdf-reader.zip" download className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download the plugin — free
          </a>
        </div>
      </section>
    </>
  );
}
