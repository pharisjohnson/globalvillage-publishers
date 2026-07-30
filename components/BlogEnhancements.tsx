'use client'

// ─── Types ────────────────────────────────────────────────────────────

export interface Author {
  name: string
  role: string
  avatar?: string
  bio: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image?: string
}

// ─── Author Bio ───────────────────────────────────────────────────────

const DEFAULT_AUTHOR: Author = {
  name: "Matata",
  role: "Publisher & Content Strategist",
  bio: "Matata leads content development at Global Village Publishers, where he helps institutions across East Africa preserve their stories in print. With over a decade in publishing, he's worked on commemorative volumes for schools, corporations, and government bodies.",
}

interface AuthorBioProps {
  author?: Author
}

export function AuthorBio({ author = DEFAULT_AUTHOR }: AuthorBioProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div style={{
      marginTop: "3rem",
      padding: "2rem",
      background: "#f8f6f2",
      borderRadius: "12px",
      display: "flex",
      gap: "1.5rem",
      alignItems: "flex-start",
    }}>
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: "#EC5C23",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        fontWeight: "700",
        flexShrink: 0,
      }}>
        {initials}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "#414142", margin: "0 0 0.25rem" }}>
          {author.name}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#EC5C23", fontWeight: "600", margin: "0 0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {author.role}
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#555", margin: 0 }}>
          {author.bio}
        </p>
      </div>
    </div>
  )
}

// ─── Related Posts ────────────────────────────────────────────────────

interface RelatedPostsProps {
  currentSlug: string
  posts: BlogPost[]
  title?: string
}

export function RelatedPosts({
  currentSlug,
  posts,
  title = "You May Also Like",
}: RelatedPostsProps) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3)
  if (related.length === 0) return null

  return (
    <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #eee" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#414142", marginBottom: "1.5rem" }}>
        {title}
      </h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.5rem",
      }}>
        {related.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "12px",
              overflow: "hidden",
              textDecoration: "none",
              display: "block",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.transform = "none"
            }}
          >
            <div style={{
              height: "140px",
              backgroundImage: `url(${post.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <div style={{ padding: "1rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#EC5C23", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>
                {post.category}
              </div>
              <p style={{ fontSize: "0.95rem", fontWeight: "700", color: "#414142", margin: 0, lineHeight: "1.4" }}>
                {post.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Share Buttons ───────────────────────────────────────────────────

interface ShareButtonsProps {
  url?: string
  title?: string
  description?: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")
  const shareTitle = title || (typeof window !== "undefined" ? document.title : "")
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(shareTitle)

  const platforms = [
    { name: "Twitter / X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, color: "#000", label: "X" },
    { name: "LinkedIn", href: `https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, color: "#0A66C2", label: "in" },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: "#1877F2", label: "f" },
    { name: "WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, color: "#25D366", label: "WA" },
    { name: "Email", href: `mailto:?subject=${encodedTitle}&body=${description ? encodeURIComponent(description) + "%0A%0A" : ""}${encodedUrl}`, color: "#666", label: "@" },
  ]

  return (
    <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #eee" }}>
      <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#666", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Share this article
      </div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            title={p.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: p.color,
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: "700",
              cursor: "pointer",
              border: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {p.label}
          </a>
        ))}
      </div>
    </div>
  )
}
