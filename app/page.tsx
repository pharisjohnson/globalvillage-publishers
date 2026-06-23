import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, #EC5C23 0%, transparent 70%)',
          opacity: 0.15,
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ color: '#fff' }}>
            <div style={{
              display: 'inline-block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              color: '#EC5C23',
              background: 'rgba(236, 92, 35, 0.15)',
              padding: '8px 16px',
              borderRadius: '100px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '24px',
            }}>
              Since 2008
            </div>
            
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px',
            }}>
              Books Worth Keeping.<br />
              <span style={{ color: '#EC5C23' }}>Stories Worth Telling.</span>
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '500px',
              marginBottom: '32px',
              lineHeight: 1.7,
            }}>
              Kenya's premier commemorative book publishers. We research, write, design and publish premium books for institutions, companies and individuals marking the milestones that matter.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Commission a Book
              </Link>
              <Link href="/our-publications" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <img 
              src="/gvp hero image.jpg"
              alt="Global Village Publishers Published Books"
              style={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
              }}
            />
            
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              background: '#fff',
              padding: '24px 32px',
              borderRadius: '12px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              gap: '32px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#EC5C23',
                  lineHeight: 1,
                }}>16+</div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(65, 65, 66, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '4px',
                }}>Years</div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#EC5C23',
                  lineHeight: 1,
                }}>30+</div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(65, 65, 66, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '4px',
                }}>Books</div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#EC5C23',
                  lineHeight: 1,
                }}>100+</div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'rgba(65, 65, 66, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '4px',
                }}>Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best of the World Section */}
      <section className="section" style={{ background: '#fff', padding: '60px 0' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-tag">Our Reach</div>
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