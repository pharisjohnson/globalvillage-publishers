import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/GVP logo 2.png" 
                alt="Global Village Publishers" 
              />
              <span>Global Village Publishers</span>
            </div>
            <p className="footer-desc">
              Kenya's premier commemorative book publishers since 2008.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/our-services">What We Do</Link></li>
              <li><Link href="/our-publications">Our Work</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/our-services">Publishing Assistance</Link></li>
              <li><Link href="/our-services">Content Creation</Link></li>
              <li><Link href="/our-services">Brand Marketing</Link></li>
              <li><Link href="/our-services">SEO Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Publications</h4>
            <ul className="footer-links">
              <li><Link href="/our-publications">Best of Kenya</Link></li>
              <li><Link href="/our-publications">Diplomat East Africa</Link></li>
              <li><Link href="/our-publications">Teachers' Image</Link></li>
              <li><Link href="/tsc-image-magazine">TSC Image Magazine</Link></li>
              <li><Link href="/our-publications">Sokoni</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Download Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="/Best of Kenya Vol 4 - Beyond 60.pdf.pdf" target="_blank" rel="noopener noreferrer">
                  Best of Kenya Vol. 4
                </a>
              </li>
              <li>
                <a href="/BOK COOPERATIVES - FINAL.pdf.pdf" target="_blank" rel="noopener noreferrer">
                  Best of Kenya Cooperatives
                </a>
              </li>
              <li>
                <a href="/Teachers-Image-Vol35.pdf" target="_blank" rel="noopener noreferrer">
                  Teachers' Image Vol 35
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://globalvillagepublishers.co.ke">Global Village Publishers E.A Ltd</a>. All rights reserved.
          </p>
          <p className="footer-copyright">Books worth keeping. Stories worth telling.</p>
        </div>
      </div>
    </footer>
  );
}