import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Best of the World Section */}
      <section className="section" style={{ background: '#fff', padding: '120px 0 60px' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Best of the World</h2>
          <p className="section-desc">Our mission is to proudly showcase the Best of every Nation, their Cities and its People to the World</p>
          <img 
            src="/Best of the world image.jpg" 
            alt="Best of the World" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginTop: '32px',
            }}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow" />
        
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              Since 2008
            </div>
            
            <h1 className="hero-heading">
              Books Worth Keeping.<br />
              <span style={{ color: '#EC5C23' }}>Stories Worth Telling.</span>
            </h1>
            
            <p className="hero-text">
              Kenya's premier commemorative book publishers. We research, write, design and publish premium books for institutions, companies and individuals marking the milestones that matter.
            </p>
            
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Commission a Book
              </Link>
              <Link href="/our-publications" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src="/gvp hero image.jpg"
              alt="Global Village Publishers Published Books"
              className="hero-image"
            />
            
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">16+</div>
                <div className="hero-stat-label">Years</div>
              </div>
              
              <div className="hero-stat">
                <div className="hero-stat-number">30+</div>
                <div className="hero-stat-label">Books</div>
              </div>
              
              <div className="hero-stat">
                <div className="hero-stat-number">100+</div>
                <div className="hero-stat-label">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">Comprehensive publishing solutions tailored to your needs.</p>
          </div>
          
          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
              </div>
              <h3 className="service-title">Publishing Assistance</h3>
              <p className="service-desc">Transform your manuscript into a masterpiece with our publishing support from formatting to distribution.</p>
            </article>
            
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </div>
              <h3 className="service-title">Content Creation</h3>
              <p className="service-desc">Bring your ideas to life with our expert team of writers, editors, and designers crafting compelling content.</p>
            </article>
            
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h3 className="service-title">Brand Marketing</h3>
              <p className="service-desc">Craft a compelling brand story that resonates with your target audience and leaves a lasting impression.</p>
            </article>
            
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
              <h3 className="service-title">SEO Services</h3>
              <p className="service-desc">Boost your online presence with our result-driven SEO services and generate leads like never before.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section" style={{ background: '#FAFAFA' }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Our Work</div>
            <h2 className="section-title">Featured Publications</h2>
            <p className="section-desc">A selection of our premium commemorative books and magazines.</p>
          </div>
          
          <div className="publications-grid">
            <article className="publication-card">
              <img 
                src="/Best of Kenya Volume 4 - Beyond 60.png" 
                alt="Best of Kenya Vol 4" 
                className="publication-img"
              />
              <div className="publication-info">
                <h3 className="publication-title">Best of Kenya Vol. 4</h3>
                <p className="publication-series">Kenya Beyond 60</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img 
                src="/BOK COOPERATIVES  cover.jpg" 
                alt="Best of Kenya Cooperatives" 
                className="publication-img"
              />
              <div className="publication-info">
                <h3 className="publication-title">Best of Kenya Cooperatives</h3>
                <p className="publication-series">2025 Special Edition</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img 
                src="/Diplomat-18.png" 
                alt="Diplomat East Africa" 
                className="publication-img"
              />
              <div className="publication-info">
                <h3 className="publication-title">Diplomat East Africa</h3>
                <p className="publication-series">Volume 1-19 Series</p>
              </div>
            </article>
            
            <article className="publication-card">
              <img 
                src="/tsc-image-vol35.jpg" 
                alt="Teachers' Image Vol 35" 
                className="publication-img"
              />
              <div className="publication-info">
                <h3 className="publication-title">Teachers' Image</h3>
                <p className="publication-series">Volume 35 (Jan-Jun 2026)</p>
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
