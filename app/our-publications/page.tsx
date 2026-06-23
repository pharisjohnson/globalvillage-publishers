import Link from 'next/link';

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
            </div>
            <div className="pub-visual">
              <img src="/Best-of-kenya-cover-min.jpg" alt="Best of Kenya Coffee Table Book" style={{ width: '100%', borderRadius: '16px' }} />
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
            </div>
            <div className="pub-visual">
              <img src="/Diplomat-18.png" alt="Diplomat East Africa Magazine" style={{ width: '100%', borderRadius: '16px' }} />
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
            <article className="publication-card">
              <img src="/Best-of-kenya-cover-min.jpg" alt="Best of Kenya" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Best of Kenya</h3>
                <p className="publication-series">Volume 1-4 Series</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/Best of Kenya Volume 4 - Beyond 60.png" alt="Best of Kenya Vol 4" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Best of Kenya Vol. 4</h3>
                <p className="publication-series">Kenya Beyond 60</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/BOK COOPERATIVES  cover.jpg" alt="Best of Kenya Cooperatives" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Best of Kenya Cooperatives</h3>
                <p className="publication-series">2025 Special Edition</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/Diplomat-18.png" alt="Diplomat East Africa" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat East Africa</h3>
                <p className="publication-series">Volume 1-19 Series</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/Diplomat-Obama.jpg" alt="Diplomat East Africa Special Edition" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat Special Edition</h3>
                <p className="publication-series">Obama Edition</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/sokoni-min-1.jpg" alt="Sokoni Magazine" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Sokoni</h3>
                <p className="publication-series">Business Magazine</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/Diplomat-6-01.jpg" alt="Diplomat East Africa Vol 6" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat Vol. 6</h3>
                <p className="publication-series">East Africa Edition</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/Diploat19-2-01.jpg" alt="Diplomat East Africa Vol 19" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat Vol. 19</h3>
                <p className="publication-series">Latest Edition</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/tsc-image-vol35.jpg" alt="Teachers' Image Vol 35" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Teachers' Image</h3>
                <p className="publication-series">Volume 35 (Jan-Jun 2026)</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img src="/diplomatt-min.jpg" alt="Diplomat Magazine Collection" className="publication-img" />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat Collection</h3>
                <p className="publication-series">Multiple Editions</p>
              </div>
            </article>
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