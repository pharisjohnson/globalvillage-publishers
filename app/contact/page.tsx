import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">Get in Touch</div>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-desc">We'd love to hear from you. Reach out and let's start a conversation.</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <ul className="contact-details">
                <li>
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value"><a href="tel:+254722787345">+254 722 787 345</a></p>
                  </div>
                </li>
                
                <li>
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value"><a href="mailto:hello@globalvillagepublishers.co.ke">hello@globalvillagepublishers.co.ke</a></p>
                  </div>
                </li>
                
                <li>
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <p className="contact-label">Address</p>
                    <p className="contact-value">Devan Plaza, Suite 16<br />Chiromo Road, Westlands<br />Nairobi, Kenya</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="contact-form">
              <form action="#" method="POST">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input className="form-input" type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input className="form-input" type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input className="form-input" type="text" id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                </div>
                
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
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