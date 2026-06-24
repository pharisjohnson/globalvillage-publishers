import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getPosts() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
  
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(contentDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      category: data.category || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
    }
  })
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function Blog() {
  const posts = getPosts()

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
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="blog-card">
                  <div style={{
                    background: post.image ? `url(${post.image}) center/cover no-repeat` : 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
                    height: '200px',
                  }} />
                  <div className="blog-content">
                    <div className="blog-meta">{post.category}</div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <span className="blog-link">Read More &rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
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
  )
}
