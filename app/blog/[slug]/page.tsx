import Link from 'next/link'
import fs from 'fs'
import path from 'path'

function getAllPostSlugs() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
  return files.map(f => f.replace('.mdx', ''))
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  const mod = await import(`@/content/${slug}.mdx`)
  const metadata = mod.metadata || {}
  const Post = mod.default

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-content">
          <div className="section-tag">{metadata.category}</div>
          <h1 className="section-title">{metadata.title}</h1>
          <p className="section-desc">{metadata.excerpt}</p>
        </div>
      </header>

      {/* Blog Content */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {metadata.image && (
            <img 
              src={metadata.image} 
              alt={metadata.title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '2rem',
              }}
            />
          )}
          <div style={{ marginBottom: '2rem', color: '#666', fontSize: '0.9rem' }}>
            {metadata.date}
          </div>
          <article>
            <Post />
          </article>
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
            <Link href="/blog" style={{ color: '#EC5C23', textDecoration: 'none', fontWeight: 600 }}>
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
