import Link from 'next/link';

interface DownloadPublication {
  id: number;
  title: string;
  series: string;
  cover: string;
  pdf: string;
}

const downloadPubs: DownloadPublication[] = [
  {
    id: 1,
    title: 'Best of Kenya Vol. 4',
    series: 'Kenya Beyond 60',
    cover: '/Best of Kenya Volume 4 - Beyond 60.png',
    pdf: '/Best of Kenya Vol 4 - Beyond 60.pdf.pdf',
  },
  {
    id: 2,
    title: 'Best of Kenya Cooperatives',
    series: '2025 Special Edition',
    cover: '/BOK COOPERATIVES  cover.jpg',
    pdf: '/BOK COOPERATIVES - FINAL.pdf.pdf',
  },
  {
    id: 3,
    title: "Teachers' Image Vol 35",
    series: 'Jan-Jun 2026',
    cover: '/tsc-image-vol35.jpg',
    pdf: '/Teachers-Image-Vol35.pdf',
  },
];

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
          
          <div className="footer-publications-col">
            <h4 className="footer-heading">Publications</h4>
            <div className="footer-pub-list">
              {downloadPubs.map((pub) => (
                <div key={pub.id} className="footer-pub-card">
                  <div className="footer-pub-cover">
                    <img src={pub.cover} alt={pub.title} />
                  </div>
                  <div className="footer-pub-meta">
                    <p className="footer-pub-title" title={pub.title}>
                      {pub.title}
                    </p>
                    <p className="footer-pub-series">{pub.series}</p>
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-pub-dl"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15V3m0 12l-4-4m4 4l4-4M21 15v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
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
