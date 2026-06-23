import Link from 'next/link';

export default function OurServices() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">What We Do</div>
          <h1 className="section-title">Our Services</h1>
          <p className="section-desc">Kenya's premier commemorative book publishers — crafting premium coffee table books that preserve your legacy.</p>
        </div>
      </header>

      {/* Services Detail */}
      <section className="section">
        <div className="section-inner">
          {/* Commemorative Books */}
          <div className="service-detail">
            <div className="service-detail-content">
              <div style={{
                display: 'inline-block',
                background: '#EC5C23',
                color: 'white',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}>
                Main Service
              </div>
              <h3>Commemorative & Commissioned Coffee Table Books</h3>
              <p>Our flagship service — we design and produce premium, hardcover coffee table books for institutions, corporations, and individuals celebrating milestones. These beautifully crafted volumes become lasting legacies that preserve your story for generations.</p>
              <ul className="service-features">
                <li>Anniversary and centenary publications</li>
                <li>Corporate history and milestone books</li>
                <li>Product launch and special report editions</li>
                <li>School and university commemorative books</li>
                <li>Government and institutional publications</li>
                <li>Premium photography and layout design</li>
                <li>Hardcover, softcover, and specialty binding</li>
              </ul>
            </div>
            <div className="service-visual" style={{ padding: 0 }}>
              <img src="/Best-of-kenya-cover-min.jpg" alt="Best of Kenya Commemorative Book" />
            </div>
          </div>

          {/* Magazine Publishing */}
          <div className="service-detail reverse">
            <div className="service-detail-content">
              <h3>Magazine & Periodical Publishing</h3>
              <p>From concept to distribution, we produce high-quality magazines and periodicals that engage readers and deliver results. Our portfolio includes some of East Africa's most respected publications.</p>
              <ul className="service-features">
                <li>Magazine concept development</li>
                <li>Editorial planning and content creation</li>
                <li>Art direction and graphic design</li>
                <li>Print management and quality control</li>
                <li>Distribution and subscription management</li>
              </ul>
            </div>
            <div className="service-visual" style={{ padding: 0 }}>
              <img src="/Diplomat-18.png" alt="Diplomat East Africa Magazine" />
            </div>
          </div>

          {/* Content Creation */}
          <div className="service-detail">
            <div className="service-detail-content">
              <h3>Content Creation & Brand Marketing</h3>
              <p>Bring your brand story to life with our expert team of writers, editors, and designers. From compelling narratives to cohesive brand identities, we craft content that resonates with your audience.</p>
              <ul className="service-features">
                <li>Professional copywriting and editing</li>
                <li>Brand identity and logo design</li>
                <li>Marketing collateral design</li>
                <li>Social media content strategy</li>
                <li>Corporate communications</li>
              </ul>
            </div>
            <div className="service-visual" style={{ padding: 0 }}>
              <img src="/diplomatt-min.jpg" alt="Diplomat Magazine Content" />
            </div>
          </div>

          {/* SEO */}
          <div className="service-detail reverse">
            <div className="service-detail-content">
              <h3>SEO & Digital Marketing</h3>
              <p>Boost your online presence with our result-driven digital marketing services. We help your brand reach the right audience through strategic SEO, content marketing, and digital campaigns.</p>
              <ul className="service-features">
                <li>Technical SEO audits and optimization</li>
                <li>Content marketing strategy</li>
                <li>Social media management</li>
                <li>Email marketing campaigns</li>
                <li>Analytics and performance reporting</li>
              </ul>
            </div>
            <div className="service-visual" style={{ padding: 0 }}>
              <img src="/sokoni-min-1.jpg" alt="Sokoni Business Magazine" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Our Process</div>
            <h2 className="section-title">How We Work</h2>
            <p className="section-desc">A streamlined approach to bring your vision to life.</p>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h4 className="process-title">Consultation</h4>
              <p className="process-desc">We listen to your needs and understand your vision.</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">02</div>
              <h4 className="process-title">Planning</h4>
              <p className="process-desc">We create a detailed roadmap and timeline for your project.</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">03</div>
              <h4 className="process-title">Creation</h4>
              <p className="process-desc">Our team brings your project to life with expert craftsmanship.</p>
            </div>
            
            <div className="process-step">
              <div className="process-number">04</div>
              <h4 className="process-title">Delivery</h4>
              <p className="process-desc">We deliver the final product and ensure your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="section-inner cta-content">
          <h2 className="cta-title">Do You Want to Share Your Story?</h2>
          <p className="cta-desc">Let's guide you every step of the way and actualize your vision into reality.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}