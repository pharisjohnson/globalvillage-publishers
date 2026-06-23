import Link from 'next/link';

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">Blog</div>
          <h1 className="section-title">Latest Insights</h1>
          <p className="section-desc">Thoughts, trends, and stories from the world of publishing.</p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="section">
        <div className="section-inner">
          <div className="blog-grid">
            {/* Blog Post 1 */}
            <article className="blog-card">
              <div style={{
                background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
                height: '200px',
              }} />
              <div className="blog-content">
                <div className="blog-meta">Publishing Trends</div>
                <h2 className="blog-title">The Evolution of Print Media in Kenya</h2>
                <p className="blog-excerpt">From colonial-era publications to today's vibrant publishing landscape, Kenya's print media has undergone a remarkable transformation. We explore the milestones that shaped the industry and where it's headed next.</p>
                <span className="blog-link">Read More &rarr;</span>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="blog-card">
              <div style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
                height: '200px',
              }} />
              <div className="blog-content">
                <div className="blog-meta">Institutional Publishing</div>
                <h2 className="blog-title">Why Every Institution Needs a Commemorative Book</h2>
                <p className="blog-excerpt">A commemorative book is more than a publication — it's a legacy. Learn why schools, corporations, and government bodies across Kenya are investing in premium coffee table books to preserve their stories.</p>
                <span className="blog-link">Read More &rarr;</span>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="blog-card">
              <div style={{
                background: 'linear-gradient(135deg, #EC5C23 0%, #f97316 100%)',
                height: '200px',
              }} />
              <div className="blog-content">
                <div className="blog-meta">Industry Outlook</div>
                <h2 className="blog-title">The Future of Publishing in East Africa</h2>
                <p className="blog-excerpt">As digital media grows, traditional publishing in East Africa faces both challenges and opportunities. We examine the trends shaping the next decade of books and magazines in the region.</p>
                <span className="blog-link">Read More &rarr;</span>
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